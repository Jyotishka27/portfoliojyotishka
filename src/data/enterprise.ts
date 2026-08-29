import { EnterpriseDomain } from '../types';

export const ENTERPRISE_DOMAINS: EnterpriseDomain[] = [
  {
    id: 'sap-successfactors',
    title: 'SAP SuccessFactors',
    category: 'Enterprise Human Capital Management & Talent Cloud',
    badge: '25+ Business Processes Analyzed',
    description:
      'Deep functional and automation experience across core employee profiles, onboarding, talent management, and performance workflows within SAP SuccessFactors enterprise environments.',
    keyResponsibilities: [
      'Analyzed SAP SuccessFactors functionality and identified automation opportunities across 25+ critical business processes.',
      'Translated complex business workflows into modular, reusable Tricentis Tosca automation test designs.',
      'Executed scenario-based functional, SIT, and UAT test cycles to validate end-to-end employee lifecycle events.',
      'Ensured seamless client handovers with 100% successful script runs and thorough knowledge transfer sessions.',
    ],
    technologies: [
      'SAP SuccessFactors',
      'Tricentis Tosca',
      'SIT & UAT Testing',
      'Functional Validation',
      'Business Process Modeling',
    ],
    metricHighlight: '25+ Business Processes Automated & Verified',
  },
  {
    id: 'sap-ariba',
    title: 'SAP Ariba',
    category: 'Enterprise Procurement & Supply Chain Management',
    badge: 'Procurement Workflow Validation',
    description:
      'Evaluated enterprise procurement processes, supplier onboarding, purchase requisitions, and contract compliance workflows to establish structured automation coverage.',
    keyResponsibilities: [
      'Analyzed SAP Ariba functionality and identified strategic automation opportunities within procurement lifecycles.',
      'Validated end-to-end purchase requisition approval chains, catalog ordering, and invoice generation flows.',
      'Designed reusable test assets to ensure compliance with enterprise purchasing policies.',
      'Conducted rigorous functional testing across multi-tier supplier interaction scenarios.',
    ],
    technologies: [
      'SAP Ariba',
      'Enterprise Procurement',
      'Tricentis Tosca',
      'End-to-End Functional Testing',
      'Workflow Automation',
    ],
    metricHighlight: 'End-to-End Enterprise Procurement Coverage',
  },
  {
    id: 'sap-hcm',
    title: 'SAP HCM & FIORI',
    category: 'Core Human Capital Management & Modern UI',
    badge: 'HRSP Summer & Winter Releases',
    description:
      'Designed, developed, and executed comprehensive TOSCA automation scripts for SAP HCM covering core HR payroll and personnel administration, with specialized focus on HRSP release validation and modern FIORI features.',
    keyResponsibilities: [
      'Automated core HR processes and validated high-impact HRSP summer/winter releases ahead of production deployment.',
      'Tested new SAP FIORI UI features, isolating subtle functional anomalies and usability defects across responsive screens.',
      'Raised defects with clear step-by-step reproduction instructions and comprehensive supporting evidence.',
      'Managed the end-to-end defect lifecycle in close coordination with developers through verification and regression retesting.',
    ],
    technologies: [
      'SAP HCM',
      'SAP FIORI',
      'HRSP Release Validation',
      'Tricentis Tosca',
      'Defect Lifecycle Management',
    ],
    metricHighlight: 'HRSP Summer/Winter Release Sign-Off',
  },
  {
    id: 'salesforce',
    title: 'Salesforce Enterprise',
    category: 'CRM & Enterprise Business Workflows',
    badge: 'Functional & Integration Validation',
    description:
      'Delivered rigorous manual and functional Salesforce testing to guarantee business workflow continuity, data integrity, and cross-system integrations across enterprise CRM operations.',
    keyResponsibilities: [
      'Conducted manual and functional Salesforce testing across complex customer management and sales operations.',
      'Validated enterprise integration touchpoints connecting Salesforce CRM with external transactional backends.',
      'Designed and executed regression suites verifying custom business workflows, field validations, and automated triggers.',
      'Performed detailed backend data validation to confirm bidirectional sync fidelity across integrated enterprise systems.',
    ],
    technologies: [
      'Salesforce',
      'Functional Testing',
      'Manual Testing',
      'Integration Validation',
      'Data Integrity',
      'Regression Suites',
    ],
    metricHighlight: 'Cross-System CRM Integration Testing',
  },
  {
    id: 'telecom',
    title: 'Telecom Applications',
    category: 'Prepaid, Postpaid & Service Request Systems',
    badge: '450+ Scripts Across 4 Customer Apps',
    description:
      'Evaluated Service Request (SR) functionality and spearheaded high-volume automation testing across prepaid and postpaid telecom systems, ensuring zero regression escapes in fast-paced releases.',
    keyResponsibilities: [
      'Evaluated Service Request (SR) functionality and developed 450+ automation scripts across DSV, Progressive, and SR test types.',
      'Expanded regression test coverage across 4 major customer applications, drastically curtailing manual QA overhead.',
      'Led testing and issue resolution for prepaid and postpaid telecom modules, building authoritative functional domain mastery.',
      'Raised, tracked, and retested 100+ defects across iterative release cycles, systematically preventing regression escapes into production.',
      'Conducted daily DSV and P1/P2/P3 regression testing, ensuring operational release stability.',
    ],
    technologies: [
      'Telecom Systems',
      'Prepaid & Postpaid Modules',
      'Service Request (SR) Automation',
      'DSV Testing',
      'P1/P2/P3 Regression',
      'JIRA Defect Management',
    ],
    metricHighlight: '450+ Scripts across 4 Customer Applications',
  },
];
