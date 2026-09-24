import { useEffect } from "react";
import content from "../data/portfolio-content.json";
import Footer from "../components/Footer";
import landingScreenshot from "../assets/ProblemForge/Screenshot 2026-09-23 215258.png";
import generationScreenshot from "../assets/ProblemForge/Screenshot 2026-09-23 214338.png";
import aboutScreenshot from "../assets/ProblemForge/Screenshot 2026-09-23 215328.png";
import workspaceScreenshot from "../assets/ProblemForge/Screenshot 2026-09-23 220158.png";
import generationDemo from "../assets/ProblemForge/ProblemForge1.mp4";
import executionDemo from "../assets/ProblemForge/ProblemForge2.mp4";

const { profile } = content;

export default function ProblemForgeCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = "ProblemForge Case Study | Asad Mirza";
    if (description) {
      description.content =
        "ProblemForge is an AI-powered coding practice platform with runnable workspaces, staged challenges, and sandboxed code execution.";
    }
    window.scrollTo({ top: 0, behavior: "auto" });

    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.content = previousDescription;
    };
  }, []);

  return (
    <div className="site-shell case-study-shell">
      <a className="skip-link" href="#main-content">
        Skip to Main Content
      </a>

      <header className="site-header">
        <nav className="site-nav case-study-nav" aria-label="Case study navigation">
          <a className="brand-link" href="/">
            {profile.name}
          </a>
          <a className="nav-resume" href="/#projects">
            Back to Projects
          </a>
        </nav>
      </header>

      <main id="main-content" className="case-study-main">
        <article>
          <header className="case-study-hero">
            <div className="page-frame case-study-hero-copy">
              <p className="eyebrow">Selected Project</p>
              <h1>ProblemForge</h1>
              <p className="case-study-deck">
                Turn interview questions into interactive coding practice.
              </p>
            </div>
          </header>

          <figure className="page-frame case-study-lead-media">
            <img
              src={landingScreenshot}
              alt="ProblemForge landing page with an interactive Two Sum practice preview"
              width="1393"
              height="727"
              fetchPriority="high"
              decoding="async"
            />
          </figure>

          <section className="case-study-section" aria-labelledby="problemforge-overview">
            <div className="page-frame case-study-prose">
              <h2 id="problemforge-overview">From Question to Workspace</h2>
              <p>
                ProblemForge is an AI-powered coding practice platform that turns ideas, existing interview questions,
                and screenshots into runnable programming workspaces. Instead of stopping at a generated explanation or
                solution, it creates an environment where users can write code, run tests, debug their implementation,
                and work through progressively harder requirements.
              </p>
            </div>
          </section>

          <section className="case-study-section" aria-labelledby="problemforge-origin">
            <div className="page-frame case-study-prose">
              <h2 id="problemforge-origin">Why I Built It</h2>
              <p>
                I built it while preparing for technical interviews and finding that many real-world questions did not
                fit the traditional single-function format. Some required building a class across several stages;
                others involved fetching data from APIs or extending an existing implementation. ProblemForge supports
                those formats alongside conventional algorithm problems.
              </p>
            </div>
          </section>

          <section className="case-study-section" aria-labelledby="problemforge-formats">
            <div className="page-frame">
              <div className="case-study-prose">
                <h2 id="problemforge-formats">Three Practice Formats</h2>
              </div>
              <dl className="format-list">
                <div>
                  <dt>Algorithm Problems</dt>
                  <dd>Focused, function-based challenges with examples and visible and hidden test cases.</dd>
                </div>
                <div>
                  <dt>Multi-Step Problems</dt>
                  <dd>
                    Cumulative, class-based exercises where new requirements unlock as users complete earlier stages.
                  </dd>
                </div>
                <div>
                  <dt>API Problems</dt>
                  <dd>
                    Exercises that involve calling deterministic mock HTTP endpoints, processing responses, and
                    handling scenarios such as pagination and failures.
                  </dd>
                </div>
              </dl>
              <div className="case-study-prose case-study-followup">
                <p>
                  Users can describe a new problem, paste an existing question, upload a screenshot, or import a
                  structured problem generated using their own AI tools. The workspace supports both Python and
                  JavaScript.
                </p>
              </div>
            </div>
          </section>

          <section className="case-study-section" aria-labelledby="problemforge-generation">
            <div className="page-frame">
              <div className="case-study-prose">
                <h2 id="problemforge-generation">Project Generation</h2>
              </div>

              <figure className="case-study-media case-study-media-wide">
                <img
                  src={generationScreenshot}
                  alt="ProblemForge project generation screen with algorithm, multi-step, and API practice formats"
                  width="1900"
                  height="901"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Choose a practice format and turn a prompt or screenshot into a coding problem.</figcaption>
              </figure>

              <figure className="case-study-media case-study-demo">
                <div className="case-study-demo-heading">
                  <span>Demo</span>
                  <h3>Generate a Practice Project</h3>
                </div>
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={generationScreenshot}
                  width="1900"
                  height="901"
                  aria-label="ProblemForge project generation demo"
                >
                  <source src={generationDemo} type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
                <figcaption>Demo: generating a complete practice project.</figcaption>
              </figure>
            </div>
          </section>

          <section className="case-study-section" aria-labelledby="problemforge-workflow">
            <div className="page-frame">
              <div className="case-study-prose">
                <h2 id="problemforge-workflow">An Interactive Development Workflow</h2>
                <p>
                  Each problem includes requirements, starter code, test cases, and a reference solution. Users can run
                  the entire test suite or individual cases, inspect per-test output, and add custom inputs. When an
                  expected result is omitted, the platform can derive it by executing the saved reference solution.
                </p>
                <p>
                  For multi-step exercises, the platform prepares later stages in the background rather than making
                  users wait for the entire problem upfront. Future requirements stay hidden until their corresponding
                  step is unlocked, preserving the experience of an interview that introduces additional constraints
                  over time.
                </p>
                <p>
                  Code drafts and progress persist across sessions and devices, so users can return to an unfinished
                  problem without losing their work.
                </p>
              </div>

              <figure className="case-study-media case-study-media-wide">
                <img
                  src={workspaceScreenshot}
                  alt="ProblemForge coding workspace showing staged requirements, a Python editor, and passing tests"
                  width="1910"
                  height="895"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>A multi-step problem combines requirements, code, and test results in one workspace.</figcaption>
              </figure>

              <figure className="case-study-media case-study-demo">
                <div className="case-study-demo-heading">
                  <span>Demo</span>
                  <h3>Run Code and Inspect Tests</h3>
                </div>
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={workspaceScreenshot}
                  width="1910"
                  height="895"
                  aria-label="ProblemForge running code demo"
                >
                  <source src={executionDemo} type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
                <figcaption>Demo: writing code, running tests, and inspecting the result.</figcaption>
              </figure>
            </div>
          </section>

          <section className="case-study-section" aria-labelledby="problemforge-sandbox">
            <div className="page-frame case-study-split">
              <div className="case-study-prose">
                <h2 id="problemforge-sandbox">Safe Execution of Untrusted Code</h2>
                <p>
                  A central engineering challenge was letting users execute arbitrary code without exposing the
                  application's infrastructure. ProblemForge separates its Next.js frontend from an Express backend
                  that owns the execution pipeline. The browser never accesses the container runtime or LLM provider
                  directly.
                </p>
                <p>
                  Python and JavaScript submissions run in disposable Docker or Podman containers with a non-root user,
                  restricted filesystem access, no external networking, and limits on memory, CPU, processes, execution
                  time, and output size. API exercises run their mock HTTP service inside the isolated environment,
                  allowing realistic request-based workflows without accessing external services.
                </p>
              </div>
              <figure className="case-study-media case-study-about-media">
                <img
                  src={aboutScreenshot}
                  alt="ProblemForge about page explaining its sandbox and generation model"
                  width="890"
                  height="600"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </section>

          <section className="case-study-section" aria-labelledby="problemforge-reliability">
            <div className="page-frame case-study-prose">
              <h2 id="problemforge-reliability">Making AI-Generated Problems More Reliable</h2>
              <p>
                Generating a plausible question is easier than generating a consistent, executable one. ProblemForge
                validates the structure of model responses and executes generated reference solutions against their
                test cases. When verification fails, bounded repair attempts can correct inconsistencies before the
                problem is presented as verified.
              </p>
              <p>
                This does not guarantee that every generated requirement or expected answer is correct: a reference
                solution and its tests can share the same mistake. The platform makes that limitation explicit and lets
                users inspect and edit tests rather than treating generated content as unquestionable.
              </p>
              <p>
                A repeatable model-evaluation harness also exercises generation and repair workflows across problem
                formats, including screenshot-based inputs, recording completion, latency, model calls, and
                provider-reported costs.
              </p>
            </div>
          </section>

          <section className="case-study-section case-study-final" aria-labelledby="problemforge-architecture">
            <div className="page-frame case-study-prose">
              <h2 id="problemforge-architecture">Architecture and Product Considerations</h2>
              <p>
                The application combines a Next.js and React frontend, a TypeScript and Express backend, Supabase
                authentication and persistence, OpenRouter model integration, and container-based code execution. User
                data is protected through authenticated requests and owner-scoped database policies.
              </p>
              <p>
                Beyond generation, the project includes usage credits, rate limits, concurrency controls, background
                step preparation, and contextual error logging. These mechanisms address the practical challenge of
                making an AI application responsive and cost-conscious while handling unreliable model output and
                potentially abusive requests.
              </p>
            </div>

            <div className="page-frame case-study-summary">
              <div>
                <h3>Tech Stack</h3>
                <p>
                  TypeScript, React, Next.js, Node.js, Express, Supabase, PostgreSQL, OpenRouter, Docker/Podman, Python,
                  and JavaScript.
                </p>
              </div>
              <div>
                <h3>Project Status</h3>
                <p>
                  Actively developed and used for personal interview preparation, with ongoing work on generation
                  reliability and the practice experience.
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
