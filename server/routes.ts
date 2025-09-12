import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { fetchRepositoryData } from "./github";

export async function registerRoutes(app: Express): Promise<Server> {
  // GitHub repositories endpoint
  app.get("/api/github/repositories", async (req, res) => {
    try {
      const repoUrls = [
        'asadbmirza/Thumbmarks',
        'asadbmirza/Planetze-Mobile-Application', 
        'RishiJain905/flashcard-project',
        'asadbmirza/tetris-assembly',
        'asadbmirza/Multiplayer-Online-Asynchronous-Battleship',
        'asadbmirza/Pokemon-Battle-Simulator'
      ];
      
      const repositories = await fetchRepositoryData(repoUrls);
      res.json(repositories);
    } catch (error) {
      console.error('Error fetching repositories:', error);
      res.status(500).json({ error: 'Failed to fetch repositories' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
