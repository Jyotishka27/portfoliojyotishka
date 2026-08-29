import { ProjectCaseStudy } from '../types';

export const FEATURED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'ai-testing-assistant',
    title: 'AI Testing Assistant',
    subtitle: 'AI Test Architect (Agentic Workflow)',
    status: 'COMPLETED',
    statusLabel: 'Completed Prototype',
    category: 'AI Engineering',
    timeline: 'Dec 2024 – Present',
    problem:
      'In traditional Enterprise QA, translating visual screen layouts and business requirement descriptions into structured test artifacts (Requirements, Scenarios, Requirement Traceability Matrices, and automated Playwright scripts) requires days of repetitive, manual documentation and boilerplate script coding.',
    solution:
      'Architected an autonomous, local-first AI testing pipeline utilizing Python, Ollama, and specialized AI Agents. The system ingests functional descriptions and UI screenshots, runs contextual multi-agent analysis, synthesizes explicit functional requirements, generates edge-case test scenarios with an RTM, and generates executable Playwright automation scripts.',
    architectureWorkflow: [
      'Screenshots + Functional Descriptions',
      'Context Ingestion & Multimodal Tokenization',
      'AI Analysis (Local Ollama LLM)',
      'Structured Requirements Extraction',
      'Test Scenario Matrix Generation',
      'Requirement Traceability Matrix (RTM)',
      'Automated Playwright (TypeScript/Python) Scripts',
    ],
    technologies: [
      'Python',
      'Ollama (Local LLM)',
      'AI Agents',
      'LLM Implementation',
      'Playwright',
      'Prompt Engineering',
      'TypeScript',
      'RTM Automation',
    ],
    keyCapabilities: [
      'Multimodal ingestion of UI screenshots and natural language business descriptions',
      'Autonomous generation of structured functional requirement specifications',
      'Comprehensive test scenario synthesis covering positive, negative, and edge paths',
      'Automated Requirement Traceability Matrix (RTM) cross-referencing',
      'Direct generation of maintainable Playwright automation test code',
      'Local-first privacy: no client corporate data egresses the internal perimeter',
    ],
    engineeringDecisions: [
      'Decoupled agentic prompt pipeline into distinct specialized stages (Requirements Agent -> Scenario Agent -> Script Synthesizer) to eliminate single-prompt hallucinations.',
      'Adopted Ollama for local execution to satisfy enterprise data privacy constraints where proprietary enterprise screenshots cannot be transmitted to external cloud APIs.',
      'Enforced Page Object Model design patterns in generated Playwright scripts rather than fragile raw locator calls.',
    ],
    challenges: [
      'Extracting precise business validation logic from unstructured screenshots without ambiguous assertions.',
      'Ensuring generated Playwright scripts adhered to company locator resilience standards.',
    ],
    lessonsLearned: [
      'Prompt chaining with structured JSON schemas outperforms broad generative prompts for strict QA artifacts.',
      'Local LLMs (e.g. via Ollama) provide sufficient precision for code and scenario generation when constrained with few-shot domain examples.',
    ],
    futureRoadmap: [
      'Integration with live DOM inspection to cross-validate generated locators.',
      'Direct export connector to JIRA and Tricentis qTest test management suites.',
    ],
    impact:
      'Architected and developed independently as an agentic prototype and presented to management for potential enterprise client adoption, creating an AI-assisted bridge between business analysis and test automation.',
    githubUrl: '[ADD URL]',
    liveUrl: undefined,
  },
  {
    id: 'ai-code-reviewer',
    title: 'AI Code Reviewer',
    subtitle: 'Multi-Language AI Code Analyzer',
    status: 'COMPLETED',
    statusLabel: 'Completed Prototype',
    category: 'AI Engineering',
    timeline: 'Dec 2024 – Present',
    problem:
      'Code reviews in cross-functional automation and application teams are frequently delayed by peer bandwidth bottlenecks. Reviewers often miss subtle anti-patterns, test code smells, fragile locator bindings, and maintainability concerns across multiple programming languages.',
    solution:
      'Built a local web application powered by Ollama and open-source LLMs to perform automated, multi-language code analysis across 5+ programming languages. The system inspects source code for code quality, structural code smells, testing anti-patterns, and architectural improvement opportunities without relying on external cloud APIs.',
    architectureWorkflow: [
      'Source Code Ingestion',
      'Language Detection & Token Boundary Framing',
      'LLM Analysis (Local Ollama Model)',
      'Code Quality Scoring & Metric Evaluation',
      'Detection of Code Smells & Fragile Patterns',
      'Architectural & Refactoring Suggestions',
      'Structured Review Report Output',
    ],
    technologies: [
      'Ollama (Local LLM)',
      'LLMs',
      'Python',
      'Multi-Language Code Analysis (5+ Languages)',
      'Prompt Engineering',
      'Web Application Architecture',
      'Static Analysis Correlation',
    ],
    keyCapabilities: [
      'Multi-language analysis capability evaluating code quality across 5+ programming languages',
      'Detection of code smells, architectural vulnerabilities, and unhandled boundary states',
      'Zero external data transmission: 100% privacy-focused local processing using Ollama',
      'Actionable refactoring recommendations with syntax-highlighted improvement diffs',
      'Targeted evaluation of automation test scripts (e.g. locator fragility, hardcoded waits, assertions)',
    ],
    engineeringDecisions: [
      'Prioritized local LLM inference over hosted public models to allow analysis of sensitive internal codebases.',
      'Engineered structured output formats (Quality Score, Code Smells, Security/Fragility, Refactor Proposal) for immediate developer readability.',
    ],
    challenges: [
      'Handling large code files within local context windows while maintaining low inference latency on standard workstation GPUs/CPUs.',
    ],
    lessonsLearned: [
      'Context chunking by function/class boundaries produces significantly higher quality review feedback than raw line splitting.',
    ],
    futureRoadmap: [
      'Direct integration with Git pre-commit hooks and CI/CD pull request workflows.',
      '[ADD INFORMATION]',
    ],
    impact:
      'Built prototype with privacy-focused local processing and presented to management for potential client application, showcasing automated code governance.',
    githubUrl: '[ADD URL]',
    liveUrl: undefined,
  },
  {
    id: 'ai-production-rca-agent',
    title: 'AI Production Incident & RCA Agent',
    subtitle: 'Autonomous Production Incident Investigation & Root Cause Analysis Platform',
    status: 'IN DEVELOPMENT',
    statusLabel: '🚧 Currently Building',
    isFlagshipActive: true,
    category: 'AI Engineering',
    timeline: 'Active Development (2025–2026)',
    problem:
      'When high-severity production incidents (P1/P2) strike enterprise systems, on-call engineers spend hours manually sifting through disjointed application logs, error traces, metric spikes, and recent deployment commits to reconstruct what broke and why.',
    solution:
      'Developing an AI-powered production incident investigation and Root Cause Analysis (RCA) platform designed to ingest multi-source production signals, correlate anomalous logs with metric deviations, apply LLM reasoning to isolate the probable root cause, and generate comprehensive, structured RCA reports with remediation recommendations.',
    architectureWorkflow: [
      'Production Incident Trigger (Alert / P1 Notification)',
      'Multi-Source Signal Collection (Logs, Metrics, Traces)',
      'Time-Window Correlation & Anomaly Filtering',
      'LLM Reasoning & Probable Root Cause Hypothesis',
      'Context Validation & Confidence Scoring',
      'Structured RCA Report Generation',
      'Recommended Corrective Actions & Prevention Roadmap',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'LLMs & Ollama',
      'Observability Systems',
      'Application Logs Processing',
      'System Metrics & Trace Correlation',
      'Agentic Incident Diagnostics',
    ],
    keyCapabilities: [
      'Signal correlation between raw error stack traces and metric spikes',
      'Autonomous hypothesis generation for root cause diagnosis',
      'Standardized RCA report output with timeline, blast radius, and trigger event breakdown',
      'Tailored preventative engineering suggestions for QA regression prevention',
      'Designed to operate on local/enterprise-hosted LLM endpoints for operational telemetry privacy',
    ],
    engineeringDecisions: [
      'Employed a multi-stage reasoning pipeline: separate signal filtering from causal deduction to avoid hallucinated causes.',
      'Engineered structured markdown and JSON reporting standards aligned with enterprise post-mortem frameworks.',
    ],
    challenges: [
      'Noise filtering: distinguishing causal log anomalies from benign secondary cascading noise during severe system degradation.',
    ],
    lessonsLearned: [
      'Accurate time-series alignment is 80% of effective RCA before applying generative models.',
    ],
    futureRoadmap: [
      'Phase 1 (Current State): Signal ingestion and prototype LLM reasoning on synthetic & sanitized enterprise log sets.',
      'Phase 2 (Planned Architecture): Real-time log aggregator connectors and FastAPI async ingestion pipeline.',
      'Phase 3 (Future Capabilities): Automated Playwright regression test synthesis for verified root cause prevention.',
    ],
    impact:
      'Actively in development as an engineering platform to demonstrate how AI evolves from test automation into production resilience and operational diagnostics.',
    githubUrl: '[ADD URL]',
    liveUrl: undefined,
  },
  {
    id: 'playwright-automation',
    title: 'Playwright Modern Automation Framework',
    subtitle: 'Scalable UI & API Test Automation Architecture',
    status: 'COMPLETED',
    statusLabel: 'Completed Implementation',
    category: 'Modern Automation',
    timeline: '2024 – Present',
    problem:
      'Legacy enterprise UI automation frequently suffers from flaky test runs, rigid locators, slow synchronous execution, and inadequate integration with backend verification layers.',
    solution:
      'Engineered modern test automation architectures using Playwright and TypeScript, emphasizing strict Page Object Models, reusable fixture layers, resilient user-facing locators, and combined UI + API validation for high-speed, dependable test suites.',
    architectureWorkflow: [
      'Feature Specification & Scenario Mapping',
      'Page Object Component Modeling',
      'Reusable Fixtures & State Setup via API',
      'Parallel Browser Execution (Chromium/WebKit/Firefox)',
      'Trace Viewer & Video Artifact Capture on Failure',
      'Automated Quality & Coverage Reporting',
    ],
    technologies: [
      'Playwright',
      'TypeScript',
      'Page Object Model (POM)',
      'API Integration Testing',
      'CI/CD Pipeline Integration',
      'Automated Test Data Management',
      'Trace & Video Artifact Analysis',
    ],
    keyCapabilities: [
      'Robust Page Object Model architecture separating test logic from DOM mechanics',
      'Fast state setup via REST API endpoints to bypass repetitive UI prerequisite clicks',
      'Multi-browser parallel execution with auto-waiting and resilient locators',
      'Deterministic test data seeding and post-run teardown routines',
      'Automated failure diagnostics utilizing Playwright trace viewers and video artifacts',
    ],
    engineeringDecisions: [
      'Standardized on TypeScript for type-safe assertions and IDE autocomplete across enterprise test suites.',
      'Preferred data-testid and role-based accessibility locators over brittle XPath queries.',
    ],
    challenges: [
      'Balancing execution speed with realistic end-to-end user timing across complex enterprise flows.',
    ],
    lessonsLearned: [
      'Seeding test state via API calls speeds up test runs by up to 5x compared to manual UI onboarding navigations.',
    ],
    futureRoadmap: [
      'Automated visual regression snapshot validation across international responsive layouts.',
      '[ADD INFORMATION]',
    ],
    impact:
      'Established modern automation practices bridging UI testing with backend service validation, driving fast and deterministic regression suites.',
    githubUrl: '[ADD URL]',
    liveUrl: undefined,
  },
  {
    id: 'we-are-eleven',
    title: 'We Are Eleven',
    subtitle: 'Interactive Football & Tournament Web Platform',
    status: 'COMPLETED',
    statusLabel: 'Completed Web Project',
    category: 'Web Engineering',
    timeline: 'Completed',
    problem:
      'Tournament organizers and sports enthusiasts often struggle with scattered tournament schedules, non-interactive static tables, and fragmented player/fixture statistics.',
    solution:
      'Designed and developed an interactive football and tournament web platform that presents tournament information, team rosters, player statistics, match fixtures, live results, and award distributions through a responsive web interface.',
    architectureWorkflow: [
      'Tournament & Match Data Modeling (JSON)',
      'Interactive Web Client (HTML/CSS/JavaScript)',
      'Fixture & Scorecard State Rendering',
      'Dynamic Award & Standings Calculations',
      'Responsive Mobile & Desktop Optimization',
      'Deployment via GitHub Pages',
    ],
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'JSON Data Architecture',
      'GitHub Pages',
      'Responsive UI Design',
    ],
    keyCapabilities: [
      'Comprehensive tournament overview with fixture listings and historical match archives',
      'Interactive team and player profile views with award breakdowns',
      'Dynamic standings calculation based on match outcome inputs',
      'Responsive layout optimized for mobile match viewing on the field or desktop',
      'Clean deployment and version control on GitHub Pages',
    ],
    engineeringDecisions: [
      'Kept data modeling lightweight in JSON to ensure lightning-fast client-side querying without heavy database overhead.',
      'Focused on clean visual contrast and readable typography for fast match score consumption.',
    ],
    challenges: [
      'Rendering dynamic knockout bracket stages cleanly on small mobile viewports.',
    ],
    lessonsLearned: [
      'Building complete user-facing web applications builds deep empathy for frontend engineers and directly informs better UI test automation.',
    ],
    futureRoadmap: [
      'Real-time live score updates via WebSockets.',
      '[ADD INFORMATION]',
    ],
    impact:
      'Demonstrates full-lifecycle frontend web design and application deployment capabilities beyond pure testing tools.',
    githubUrl: '[ADD GITHUB REPO]',
    liveUrl: '[ADD URL]',
  },
];
