import { CertificationItem, EducationItem } from '../types';

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'Tricentis Data Integrity Fundamentals',
    issuer: 'Tricentis',
    type: 'Enterprise Data Verification',
  },
  {
    name: 'Tricentis qTest Fundamentals',
    issuer: 'Tricentis',
    type: 'Test Management & Traceability',
  },
  {
    name: 'Tricentis Tosca Fundamentals (AS2)',
    issuer: 'Tricentis',
    type: 'Advanced Automation Specialist',
  },
  {
    name: 'Tricentis Tosca Fundamentals (AS1)',
    issuer: 'Tricentis',
    type: 'Automation Specialist',
  },
  {
    name: 'Tricentis Tosca Fundamentals',
    issuer: 'Tricentis',
    type: 'Core Automation Engineering',
  },
  {
    name: 'Tricentis NeoLoad Fundamentals',
    issuer: 'Tricentis',
    type: 'Performance Testing & Load Execution',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Technology (BTech)',
    field: 'Computer Science',
    institution: 'Future Institute of Technology',
    university: 'Maulana Abul Kalam Azad University of Technology',
    period: 'Jun 2015 – May 2019',
  },
];

export const INDUSTRIAL_TRAINING = [
  {
    title: 'Android Application Development',
    organization: 'ARDENT',
    year: '2018',
    focus: 'Mobile Architecture, Java/Android SDK & UI Lifecycle',
  },
];

export const SPOKEN_LANGUAGES = [
  { language: 'English', proficiency: 'Bilingual Proficiency' },
  { language: 'Hindi', proficiency: 'Professional Proficiency' },
  { language: 'Bengali', proficiency: 'Native Proficiency' },
];
