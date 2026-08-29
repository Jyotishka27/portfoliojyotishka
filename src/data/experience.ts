import { WorkExperienceItem } from '../types';

export const WORK_EXPERIENCE: WorkExperienceItem[] = [
  {
    id: 'wipro-sr-associate-2024',
    company: 'Wipro',
    role: 'Senior Associate Automation Consultant',
    period: 'Dec 2024 – Present',
    location: 'Kolkata, West Bengal (Hybrid)',
    type: 'Full-time',
    summary:
      'Spearheading AI-driven test modernization, autonomous agent pipelines, and high-reliability enterprise automation suites across distributed application ecosystems.',
    highlights: [
      {
        category: 'AI & Modernization',
        points: [
          'Architected an AI-driven autonomous testing pipeline using Python and LLM technologies to automate Playwright script and RTM generation, significantly reducing manual effort.',
        ],
      },
      {
        category: 'AI Code Quality',
        points: [
          'Built an AI-powered code review solution supporting 5+ programming languages, leveraging LLM-based analysis for code quality, code smell detection, and architectural improvements.',
        ],
      },
      {
        category: 'Automation Delivery',
        points: [
          'Designed and maintained 200+ TOSCA test scripts and regression/sanity packs using DEX and qTest, ensuring execution monitoring, failure investigation, and 100% traceability.',
        ],
      },
      {
        category: 'Strategic Consulting',
        points: [
          'Partnered with business stakeholders during sprint planning to define automation roadmaps, analyze critical business flows, and present ROI-driven automation strategies.',
        ],
      },
      {
        category: 'Test Lifecycle Management',
        points: [
          'Led UAT and P1/P2/P3 regression cycles, managing end-to-end defect lifecycles and delivering quality reports to support production releases.',
        ],
      },
    ],
    technologies: [
      'Python',
      'LLM Implementation',
      'Ollama',
      'Playwright',
      'Tricentis Tosca',
      'DEX',
      'qTest',
      'JIRA',
      'UAT & Regression Leadership',
    ],
  },
  {
    id: 'wipro-sr-associate-2022',
    company: 'Wipro',
    role: 'Senior Associate Automation Consultant',
    period: 'Jun 2022 – Dec 2024',
    location: 'Kolkata, West Bengal (Hybrid)',
    type: 'Full-time',
    summary:
      'Scaled telecom automation suites across multiple customer applications, leading regression strategies and mentoring junior QA engineers.',
    highlights: [
      {
        category: 'High-Volume Automation',
        points: [
          'Evaluated Service Request (SR) functionality and developed 450+ automation scripts across DSV, Progressive, and SR test types, expanding regression coverage across 4 customer applications and reducing manual testing effort.',
        ],
      },
      {
        category: 'Regression & Strategy',
        points: [
          'Collaborated with cross-functional teams to devise testing strategies and conducted daily DSV and P1/P2/P3 regression testing across iterative releases.',
        ],
      },
      {
        category: 'Defect Management',
        points: [
          'Raised, tracked, and retested 100+ defects across release cycles, reducing resolution turnaround and regression escapes into production.',
        ],
      },
      {
        category: 'Domain Leadership',
        points: [
          'Led testing and issue resolution for prepaid and postpaid modules, building deep functional expertise for effective problem-solving.',
        ],
      },
      {
        category: 'Team Mentorship',
        points: [
          'Mentored 5 junior associates through structured knowledge-sharing and documentation, accelerating their ramp-up on module workflows and testing practices.',
        ],
      },
    ],
    technologies: [
      'Telecom Systems',
      'Prepaid & Postpaid Modules',
      'Service Request (SR) Testing',
      'DSV Automation',
      'P1/P2/P3 Defect Lifecycles',
      'Associate Mentoring',
    ],
  },
  {
    id: 'wipro-associate-2020',
    company: 'Wipro',
    role: 'Associate Automation Consultant',
    period: 'Jun 2020 – Apr 2022',
    location: 'Kolkata, West Bengal',
    type: 'Full-time',
    summary:
      'Led SAP SuccessFactors and Ariba enterprise automation expansions, owning SIT and UAT cycles while driving rapid script assignment growth.',
    highlights: [
      {
        category: 'Business Process Automation',
        points: [
          'Analyzed SAP SuccessFactors and Ariba functionality to identify automation opportunities, expanding coverage across 25+ business processes and translating requirements into reusable TOSCA automation designs.',
        ],
      },
      {
        category: 'Client Handover & Execution',
        points: [
          'Designed and executed reusable TOSCA scripts for SAP modules, proactively identifying defects and delivering 100% successful end-to-end script runs during client handover, supported by KT and detailed reporting.',
        ],
      },
      {
        category: 'SIT & UAT Ownership',
        points: [
          'Independently owned SIT and UAT, designing scenario-based functional and non-functional test cases, securing client sign-off with minimal feedback, and organizing the client’s first UAT execution event.',
        ],
      },
      {
        category: 'Growth & Defect Tracking',
        points: [
          'Drove a 2.5x increase in script assignments through effective lifecycle management, contributing to project revenue growth, while coordinating JIRA-based defect tracking through UAT resolution.',
        ],
      },
    ],
    technologies: [
      'SAP SuccessFactors',
      'SAP Ariba',
      'Tricentis Tosca',
      'SIT & UAT Ownership',
      'Client KT',
      'JIRA Defect Tracking',
    ],
  },
  {
    id: 'wipro-associate-2019',
    company: 'Wipro',
    role: 'Associate Automation Consultant',
    period: 'Jun 2019 – Mar 2020',
    location: 'Kolkata, West Bengal',
    type: 'Full-time',
    summary:
      'Established foundational enterprise automation for SAP HCM core workflows, verifying critical HRSP releases and new FIORI user experiences.',
    highlights: [
      {
        category: 'SAP HCM Automation',
        points: [
          'Designed, developed, and executed TOSCA automation scripts for SAP HCM, covering core HR processes and validating HRSP summer/winter releases ahead of deployment.',
        ],
      },
      {
        category: 'SAP FIORI UI Testing',
        points: [
          'Tested new FIORI features, identifying functional and usability issues and raising defects with clear reproduction steps and supporting evidence.',
        ],
      },
      {
        category: 'Defect Lifecycle Management',
        points: [
          'Managed the end-to-end defect lifecycle, coordinating priorities with developers, tracking fixes through resolution, and retesting to prevent regressions.',
        ],
      },
    ],
    technologies: [
      'SAP HCM',
      'SAP FIORI',
      'HRSP Summer/Winter Releases',
      'Tricentis Tosca',
      'Defect Lifecycle Coordination',
    ],
  },
];
