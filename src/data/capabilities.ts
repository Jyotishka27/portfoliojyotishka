import { CapabilityArea } from '../types';

export const CAPABILITY_AREAS: CapabilityArea[] = [
  {
    id: 'enterprise-testing',
    title: 'Enterprise Testing',
    tagline: 'Deep domain validation across enterprise software giants',
    description:
      'Rigorous functional, manual, and integration testing across complex business processes in SAP, Salesforce, and Telecom environments.',
    technologies: [
      'SAP SuccessFactors',
      'SAP Ariba',
      'SAP HCM',
      'Salesforce',
      'Telecom (Prepaid & Postpaid)',
    ],
    highlights: [
      '25+ SAP business processes analyzed for automation suitability',
      'HRSP summer/winter release validation for core SAP HCM payroll & personnel',
      'Cross-system Salesforce CRM business workflow and data integrity validation',
      'Prepaid & postpaid telecom module testing with zero critical regression escapes',
    ],
  },
  {
    id: 'test-automation',
    title: 'Test Automation',
    tagline: 'Enterprise-scale Tosca and modern Playwright architectures',
    description:
      'Designing and executing reusable, high-reliability automation suites that scale regression coverage and collapse manual verification cycles.',
    technologies: [
      'Tricentis Tosca',
      'Tosca DI (Data Integrity)',
      'Playwright',
      'DEX Distributed Execution',
      'qTest',
    ],
    highlights: [
      '450+ automation scripts developed across 4 customer telecom applications',
      '200+ Tosca test scripts and sanity/regression packs maintained with DEX',
      'Modern Playwright TypeScript frameworks utilizing Page Object Model patterns',
      '100% successful end-to-end client handovers with zero script failure rates',
    ],
  },
  {
    id: 'api-backend-testing',
    title: 'API & Backend Testing',
    tagline: 'Validating service logic and data consistency at the core',
    description:
      'Testing beyond the visual layer by interrogating REST interfaces, database state, payload contracts, and transactional data flows.',
    technologies: [
      'REST APIs',
      'API Validation',
      'Backend Validation',
      'PostgreSQL',
      'Data Integrity (Tosca DI)',
    ],
    highlights: [
      'Direct API contract verification and HTTP status code assertion workflows',
      'Database reconciliation confirming state changes persist cleanly in tables',
      'Accelerating test cycles by bootstrapping test states via backend APIs',
      'Data integrity validation safeguarding cross-system ETL pipelines',
    ],
  },
  {
    id: 'ai-engineering',
    title: 'AI Engineering',
    tagline: 'Local LLMs, agentic pipelines & autonomous QA workflows',
    description:
      'Pioneering AI-driven engineering tools that transform screenshots into Playwright scripts and analyze code quality across 5+ languages using local LLMs.',
    technologies: [
      'LLM Implementation',
      'Ollama (Local LLM)',
      'AI Agents (Big & Smol)',
      'Prompt Engineering',
      'AI-Driven Test Generation',
      'Multi-Language Code Analysis',
    ],
    highlights: [
      'Architected AI Test Architect agentic pipeline converting UI to Playwright tests',
      'Built multi-language AI Code Analyzer evaluating quality across 5+ languages',
      'Currently developing AI Production Incident & RCA Agent for rapid diagnostics',
      '100% local, privacy-preserving deployments safeguarding enterprise source code',
    ],
  },
  {
    id: 'test-lifecycle',
    title: 'Test Lifecycle Management',
    tagline: 'End-to-end quality governance from SIT to Production release',
    description:
      'Orchestrating every phase of the Software Testing Lifecycle (STLC) with disciplined defect triage, release sign-offs, and stakeholder alignment.',
    technologies: [
      'SIT Ownership',
      'UAT Execution Leadership',
      'P1/P2/P3 Regression',
      'JIRA Defect Lifecycles',
      'Release Validation',
    ],
    highlights: [
      'Independently owned SIT and organized client’s first formal UAT Execution Event',
      'Tracked and retested 100+ defects, cutting resolution turnaround significantly',
      'Led P1/P2/P3 regression cycles supporting seamless production release go-lives',
      'Delivered 100% requirement traceability via qTest and detailed executive reporting',
    ],
  },
  {
    id: 'engineering-delivery',
    title: 'Engineering & Delivery',
    tagline: 'Agile leadership, strategic roadmaps & mentoring future talent',
    description:
      'Collaborating with business stakeholders during sprint planning, architecting ROI-driven automation strategies, and elevating team capabilities.',
    technologies: [
      'Git & GitHub Actions',
      'Agile (SAFe) Framework',
      'Strategic Automation Roadmaps',
      'Associate Mentoring',
      'Client Knowledge Transfer (KT)',
    ],
    highlights: [
      'Mentored 5 junior associates through structured workflows and documentation',
      'Single-handedly recovered a 4+ month delayed project to finish in 3 months',
      'Drove 2.5x increase in automation script assignments, boosting project revenue',
      'Conducted formal Knowledge Transfer ensuring client autonomy post-handover',
    ],
  },
];
