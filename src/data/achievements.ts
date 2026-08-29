import { KeyAchievement } from '../types';

export const KEY_ACHIEVEMENTS: KeyAchievement[] = [
  {
    id: 'turnaround-efficiency',
    title: 'Critical Project Turnaround',
    metric: '4+ Mo Delay → 3 Mo Done',
    transformation: 'Rescued a project delayed by 4+ months and delivered it to completion in just 3 months',
    context:
      'Single-handedly took ownership of a stalled multi-module enterprise testing engagement facing critical schedule bottlenecks.',
    impact:
      'Resolved all critical blocking delays, established reliable automation execution, and contributed directly to on-time milestone delivery.',
    category: 'Efficiency',
  },
  {
    id: 'client-handover',
    title: '100% Successful Client Handover',
    metric: '100% Success Rate',
    transformation: 'Flawless end-to-end script execution during formal client acceptance',
    context:
      'Engineered and validated full-suite TOSCA automation scripts for enterprise SAP modules prior to client handover sign-off.',
    impact:
      'Achieved a 100% success rate during live client runs, followed by structured Knowledge Transfer (KT) sessions on script compilation and modification.',
    category: 'Quality',
  },
  {
    id: 'script-assignments-growth',
    title: '2.5x Increase in Script Assignments',
    metric: '2.5x Assignment Growth',
    transformation: 'Scaled automation delivery scope and drove project revenue expansion',
    context:
      'Effectively managed end-to-end script development and execution processes across business process teams.',
    impact:
      'Drove a 2.5x surge in script assignments, contributed to project revenue growth, and organized the client’s 1st formal UAT Execution Event with JIRA defect resolution.',
    category: 'Revenue Growth',
  },
  {
    id: 'telecom-scale',
    title: '450+ Automation Scripts Delivered',
    metric: '450+ Scripts / 4 Apps',
    transformation: 'Expanded regression safety net across 4 customer applications',
    context:
      'Evaluated Service Request (SR) functionality across prepaid and postpaid telecom architectures.',
    impact:
      'Built 450+ scripts spanning DSV, Progressive, and SR test types, drastically curtailing repetitive manual testing effort across releases.',
    category: 'Scale',
  },
  {
    id: 'tosca-dex-delivery',
    title: '200+ TOSCA Scripts with DEX & qTest',
    metric: '200+ Test Scripts',
    transformation: '100% execution traceability and distributed execution monitoring',
    context:
      'Designed and maintained enterprise-wide regression and sanity packs using Tricentis DEX and qTest.',
    impact:
      'Delivered rigorous failure investigation, rapid triage, and 100% requirement traceability into production releases.',
    category: 'Scale',
  },
  {
    id: 'defect-reduction',
    title: '100+ Defects Managed & Retested',
    metric: '100+ Defects Resolved',
    transformation: 'Zero high-priority regression escapes into production',
    context:
      'Coordinated continuous testing across daily DSV and P1/P2/P3 regression cycles.',
    impact:
      'Raised, tracked, and verified 100+ defects across iterative releases, cutting turnaround time and safeguarding production stability.',
    category: 'Quality',
  },
];
