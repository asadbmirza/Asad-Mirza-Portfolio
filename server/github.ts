import { Octokit } from '@octokit/rest'

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

// WARNING: Never cache this client.
// Access tokens expire, so a new client must be created each time.
// Always call this function again to get a fresh client.
export async function getUncachableGitHubClient() {
  const accessToken = await getAccessToken();
  return new Octokit({ auth: accessToken });
}

export async function fetchRepositoryData(repoUrls: string[]) {
  try {
    const octokit = await getUncachableGitHubClient();
    const repoData: any[] = [];

    for (const repoUrl of repoUrls) {
      const [owner, repo] = repoUrl.split('/');
      
      try {
        const { data } = await octokit.repos.get({
          owner,
          repo
        });
        
        repoData.push({
          id: data.id.toString(),
          name: data.name,
          description: data.description || 'No description available',
          html_url: data.html_url,
          homepage: data.homepage,
          stargazers_count: data.stargazers_count,
          forks_count: data.forks_count,
          language: data.language,
          topics: data.topics || [],
          updated_at: data.updated_at,
          owner: data.owner.login,
          repo: data.name
        });
      } catch (error) {
        console.error(`Error fetching repo ${repoUrl}:`, error);
        // Return placeholder data for failed requests
        repoData.push({
          id: repoUrl.replace('/', '-'),
          name: repo,
          description: 'Repository data temporarily unavailable',
          html_url: `https://github.com/${repoUrl}`,
          homepage: null,
          stargazers_count: 0,
          forks_count: 0,
          language: 'Unknown',
          topics: [],
          updated_at: new Date().toISOString(),
          owner,
          repo
        });
      }
    }

    return repoData;
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    throw error;
  }
}