import { PyramidLayer } from '../types';

export const TESTING_PYRAMID_LAYERS: PyramidLayer[] = [
  {
    level: 6,
    name: 'AI-Assisted Engineering',
    subtitle: 'High-leverage synthesis, intelligent review & autonomous diagnostics',
    description:
      'Applying local LLMs and agentic pipelines to automate the generation of requirements, test scenarios, RTM matrices, Playwright code, multi-language code smell reviews, and future root cause analysis.',
    validationTarget:
      'Generative STLC leverage, static code heuristics, incident pattern correlation, and automated test artifact synthesis.',
    tools: ['Ollama', 'Python LLM Agents', 'Playwright Synthesizers', 'FastAPI'],
    jyotishkaPerspective:
      'AI does not replace engineering rigor; it removes mechanical toil from requirements synthesis, scenario expansion, and defect triage so engineers can focus on architecture.',
    color: '#06b6d4', // cyan-500
  },
  {
    level: 5,
    name: 'UI Automation',
    subtitle: 'High-value, deterministic end-to-end regression',
    description:
      'Automating stable, high-value user journeys across web portals and enterprise UIs (SAP FIORI, Salesforce, Telecom self-service) using Playwright and Tricentis Tosca with resilient locators and Page Objects.',
    validationTarget:
      'Critical user journeys, cross-browser rendering, client-side validation logic, and regression workflows.',
    tools: ['Playwright', 'TypeScript', 'Tricentis Tosca', 'DEX'],
    jyotishkaPerspective:
      'Never automate fluctuating prototypes. Keep UI suites focused strictly on high-impact, revenue-critical end-to-end paths, relying on POM patterns and auto-waits.',
    color: '#38bdf8', // sky-400
  },
  {
    level: 4,
    name: 'API / Services Testing',
    subtitle: 'Service behavior, schema integrity & business rules',
    description:
      'Validating RESTful APIs, payload schemas, authorization contracts, status codes, response headers, and core business transactions before they reach the user interface.',
    validationTarget:
      'Microservice endpoints, REST interfaces, payload schemas, error handling codes, and business rule algorithms.',
    tools: ['REST APIs', 'Postman / Newman', 'Playwright API Client', 'JSON Schema'],
    jyotishkaPerspective:
      'APIs execute up to 20x faster than browser clicks. Whenever business logic can be proven at the network layer, test it via API before touching the DOM.',
    color: '#34d399', // emerald-400
  },
  {
    level: 3,
    name: 'Backend & Data Validation',
    subtitle: 'Database consistency, batch transactions & state reconciliation',
    description:
      'Direct validation of relational database records, ETL pipelines, transactional persistence, field length limits, and data migration consistency.',
    validationTarget:
      'PostgreSQL, SQL databases, Tosca DI (Data Integrity), transactional audit logs, and data integrity constraints.',
    tools: ['Tosca DI', 'PostgreSQL', 'SQL Scripts', 'Data Reconciliation'],
    jyotishkaPerspective:
      'A UI may render green while silently corrupting rows in the database. Validating state directly against the persistent store ensures complete data trust.',
    color: '#fbbf24', // amber-400
  },
  {
    level: 2,
    name: 'Integration Testing',
    subtitle: 'Cross-system handshakes, third-party sync & interfaces',
    description:
      'Validating interconnected boundaries where enterprise systems communicate (e.g. SAP SuccessFactors sync to SAP HCM payroll, Salesforce CRM to Telecom billing backends).',
    validationTarget:
      'Inter-service protocols, event brokers, asynchronous queues, third-party ERP interfaces, and contract consistency.',
    tools: ['Cross-System Gateways', 'Middleware Queues', 'SIT Suites', 'qTest'],
    jyotishkaPerspective:
      'Systems rarely break within their own core logic; they break at the seams where data formats, schemas, and network latencies collide.',
    color: '#f97316', // orange-500
  },
  {
    level: 1,
    name: 'Functional & Manual Testing',
    subtitle: 'Requirements exploration, edge discovery & business alignment',
    description:
      'Human-driven exploratory testing, user acceptance (UAT), scenario modeling, edge-case discovery, and assessing usability nuances that automated scripts cannot sense.',
    validationTarget:
      'Business requirements, end-user workflows, edge conditions, visual ergonomics, and domain compliance.',
    tools: ['Contextual Inquiry', 'Scenario Matrices', 'JIRA', 'UAT Sessions'],
    jyotishkaPerspective:
      'Manual testing is the mother of automation. You cannot automate what you do not deeply comprehend. Human exploration discovers the tests worth automating.',
    color: '#ec4899', // pink-500
  },
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    number: '01',
    title: 'Test at the Right Layer',
    statement: 'Prefer API and backend validation whenever UI automation is unnecessary.',
    explanation:
      'UI tests are costly to maintain, susceptible to layout shifts, and comparatively slow. If a business calculation or data transformation can be proven through a REST endpoint or database assertion, validate it there first.',
  },
  {
    number: '02',
    title: 'Automate for Repeatability',
    statement: 'Automate stable, high-value regression scenarios—not ephemeral features.',
    explanation:
      'Automation should be a reliable safety harness, not a fragile chore. Focus automation investment on the 20% of enterprise processes that drive 80% of business value, ensuring 100% deterministic test passes.',
  },
  {
    number: '03',
    title: 'Design for Maintainability',
    statement: 'Build reusable automation architectures rather than isolated, brittle scripts.',
    explanation:
      'Whether using Tricentis Tosca modules or Playwright Page Object Models, test code is production code. Clean abstraction, modular test data fixtures, and zero hardcoded delays ensure suites outlive code refactors.',
  },
  {
    number: '04',
    title: 'Use AI Where It Creates Leverage',
    statement: 'Use LLMs to eliminate repetitive STLC overhead and augment technical velocity.',
    explanation:
      'Generative models excel at synthesizing test scenario variations, drafting boilerplate Playwright locators, analyzing code smells, and correlating noisy incident logs. Deploy AI to supercharge human throughput.',
  },
  {
    number: '05',
    title: 'Keep Humans in the Loop',
    statement: 'AI should assist engineers, never blindly replace critical engineering judgment.',
    explanation:
      'Enterprise safety requires human accountability. AI generates recommendations, drafted scripts, and initial root-cause hypotheses, but human domain architects make final release decisions.',
  },
];
