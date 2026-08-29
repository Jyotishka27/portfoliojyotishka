import { ArticleItem } from '../types';

export const ENGINEERING_ARTICLES: ArticleItem[] = [
  {
    id: 'playwright-maintainable-framework',
    title: 'Designing a Maintainable Playwright Framework in TypeScript',
    slug: 'designing-maintainable-playwright-framework',
    category: 'Test Automation',
    readTime: '6 min read',
    date: 'Jan 2025',
    summary:
      'How to structure enterprise-grade Playwright suites using type-safe Page Object Models, API setup fixtures, and deterministic data seeding.',
    coreTakeaways: [
      'Bypass UI login screens using API context storage to accelerate suites by up to 5x.',
      'Enforce resilient user-facing locators (getByRole, getByLabel) over brittle DOM selectors.',
      'Treat test code with the same linting, modularity, and review standards as production code.',
    ],
    contentMarkdown: `
### The Enterprise Dilemma in UI Automation

Most automation suites do not fail because the automation tool was incapable—they collapse under the weight of test maintenance. When a minor frontend redesign alters DOM hierarchies, brittle XPath queries break across hundreds of test files.

### 1. API-Driven State Hydration

Instead of navigating through multiple setup pages to create a test user or order, use Playwright’s \`request\` fixture:

\`\`\`typescript
test.beforeEach(async ({ request, page }) => {
  // Directly seed test state via REST API in ~150ms
  const response = await request.post('/api/v1/test-user/seed', {
    data: { role: 'APPROVER_TIER_2' }
  });
  const { sessionToken } = await response.json();
  
  // Inject session cookie directly into browser context
  await page.context().addCookies([{
    name: 'auth_session',
    value: sessionToken,
    domain: 'localhost',
    path: '/'
  }]);
});
\`\`\`

### 2. Strict Page Object Boundaries

A Page Object should expose *business intentions* rather than individual DOM interactions:

\`\`\`typescript
// Good: High-level intention
await approvalInboxPage.approveRequisition('REQ-8821');

// Anti-pattern: Leaking locators into test assertions
await page.locator('table > tbody > tr:nth-child(2) button').click();
\`\`\`

### 3. Fail-Fast Artifacts

Always capture trace viewer artifacts and DOM snapshots strictly on failure in CI:
\`\`\`typescript
use: {
  trace: 'retain-on-failure',
  video: 'retain-on-failure',
  screenshot: 'only-on-failure',
}
\`\`\`
    `,
  },
  {
    id: 'ai-code-reviewer-ollama',
    title: 'Building a Privacy-Focused AI Code Reviewer with Ollama',
    slug: 'building-ai-code-reviewer-ollama',
    category: 'AI Engineering',
    readTime: '8 min read',
    date: 'Dec 2024',
    summary:
      'Architecting local LLM pipelines for multi-language code quality and anti-pattern analysis without exposing sensitive client code to cloud APIs.',
    coreTakeaways: [
      'Enterprise security strictly forbids transmitting proprietary code to public cloud AI endpoints.',
      'Local model orchestration via Ollama allows offline, cost-effective inference on workstation hardware.',
      'Structured JSON schemas prevent conversational drift and produce consistent review reports.',
    ],
    contentMarkdown: `
### The Enterprise Data Sovereignity Problem

In enterprise client engagements, proprietary source code cannot leave the corporate VPN. Cloud LLM APIs, while powerful, trigger significant compliance and security roadblocks.

### Orchestrating Local LLMs with Ollama

By leveraging Ollama, we deploy quantized code models locally. Using Python to bridge code parsers and the inference endpoint, we enforce rigorous token management:

\`\`\`python
import json
import httpx

def analyze_code_chunk(source_code: str, language: str) -> dict:
    prompt = f"""
    Analyze the following {language} code for:
    1. Code smells & anti-patterns
    2. Missing edge cases or exception boundaries
    3. Suggested architectural improvements
    
    Output strictly in JSON schema:
    {{
      "qualityScore": float (0-10),
      "detectedSmells": [string],
      "improvements": [string],
      "refactoredSnippet": string
    }}
    Code:
    {source_code}
    """
    response = httpx.post("http://localhost:11434/api/generate", json={
        "model": "codellama:13b",
        "prompt": prompt,
        "format": "json",
        "stream": False
    })
    return json.loads(response.json()["response"])
\`\`\`

### Multi-Language Heuristics

Different languages require different evaluation criteria:
- **TypeScript**: Missing type boundaries, unhandled Promise rejections, DOM locator brittleness.
- **Python**: Unhandled exceptions in I/O operations, inefficient list comprehensions, global state leaks.
    `,
  },
  {
    id: 'testing-pyramid-perspective',
    title: "Why UI Automation Shouldn't Be Your First Testing Layer",
    slug: 'why-ui-automation-shouldnt-be-first-layer',
    category: 'Engineering Philosophy',
    readTime: '5 min read',
    date: 'Nov 2024',
    summary:
      'Understanding why teams that invert the testing pyramid suffer from flaky test suites, slow CI runs, and inflated maintenance costs.',
    coreTakeaways: [
      'The Testing Ice Cream Cone anti-pattern results from over-indexing on browser automation.',
      'Validating business calculations at the API and database layers yields faster feedback with zero rendering jitter.',
      'Reserve UI automation for high-impact end-to-end user journeys that prove integration across layers.',
    ],
    contentMarkdown: `
### The Inverted Pyramid Trap

When enterprise teams begin automation initiatives, the instinct is often to replicate manual testers' browser clicks with automated browser scripts. The result is the dreaded "Ice Cream Cone": hundreds of fragile UI tests and virtually no API or unit checks.

### The Cost Comparison

| Attribute | UI Automation (Playwright/Tosca) | API Testing (REST/JSON) |
|---|---|---|
| **Execution Speed** | 3 - 10 seconds per test | 20 - 100 milliseconds per test |
| **Flakiness Risk** | Moderate to High (Layout shifts, DOM renders) | Very Low (Deterministic HTTP contracts) |
| **Failure Isolation** | High triage effort (Did UI fail or did backend crash?) | Immediate clarity (400 Bad Request, 500 Server Error) |
| **Maintenance Burden** | High (frequent UI updates) | Low (stable API contracts) |

### The Pragmatic Rule

> **"If you can prove the rule in an API payload or a database row assertion, never test it by clicking a button."**

Reserve browser tests for validating that components render cohesively, error banners show properly to the human, and critical conversion funnels execute from start to finish.
    `,
  },
  {
    id: 'ai-production-incident-rca',
    title: 'Building an AI Production Incident RCA Agent',
    slug: 'building-ai-production-incident-rca-agent',
    category: 'Currently Building',
    readTime: '7 min read',
    date: 'Feb 2025',
    summary:
      'Designing an autonomous signal correlation and post-mortem generation agent for high-severity enterprise production incidents.',
    coreTakeaways: [
      'During P1 incidents, alert fatigue and disjointed logs are the primary cause of prolonged Mean Time to Resolution (MTTR).',
      'Correlating metric anomalies with error trace timestamps filters out 90% of incidental background noise.',
      'LLM reasoning can evaluate hypotheses against system architecture to propose probable root causes.',
    ],
    contentMarkdown: `
### High-Severity Incident Bottlenecks

In enterprise architectures spanning microservices, legacy backends, and cloud databases, a single database connection pool exhaustion can trigger hundreds of secondary cascade errors across downstream services.

### Agent Workflow

1. **Incident Trigger**: PagerDuty or monitoring alert sends incident timestamp and service ID.
2. **Signal Ingestion**: Ingests logs, APM traces, and CPU/memory metrics across a 30-minute window preceding the incident.
3. **Correlation Engine**: Isolates the *first anomaly* in time rather than the loudest anomaly in volume.
4. **Hypothesis Evaluation**: Compares logs against past post-mortems and infrastructure patterns.
5. **RCA Generation**: Drafts structured timeline, root cause hypothesis, blast radius, and preventative regression tests.
    `,
  },
  {
    id: 'sap-successfactors-scale',
    title: 'Testing Enterprise Applications: SAP SuccessFactors & Ariba',
    slug: 'testing-enterprise-sap-successfactors-ariba',
    category: 'Enterprise Testing',
    readTime: '6 min read',
    date: 'Oct 2024',
    summary:
      'Strategies for translating 25+ business processes into reusable Tosca automation architectures without getting bogged down by quarterly ERP updates.',
    coreTakeaways: [
      'Enterprise ERP systems (SAP HCM, SuccessFactors, Ariba) follow rigid quarterly and seasonal release cadences (e.g., HRSP summer/winter releases).',
      'Decouple test data from automation modules to ensure test reusability across staging environments.',
      'Engage in contextual inquiry with business process owners prior to script drafting.',
    ],
    contentMarkdown: `
### Enterprise ERP Realities

Testing enterprise cloud suites like SAP SuccessFactors and Ariba is fundamentally different from greenfield web testing. The workflows are deeply bound to human organizational hierarchies, approval matrices, and multi-tenant data structures.

### Achieving 100% Client Handover

When delivering automation to enterprise clients:
1. **Module Reusability**: Build modular Tosca execution blocks that can be parameterized.
2. **UAT Synchronization**: Bridge the gap between technical testers and non-technical business analysts by organizing dedicated UAT events with live tracking.
3. **Knowledge Transfer**: Accompany delivered scripts with detailed compilation guides and failure triage runbooks.
    `,
  },
];
