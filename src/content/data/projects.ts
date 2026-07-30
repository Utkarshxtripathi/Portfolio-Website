export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  language: string;
  techStack: string[];
  highlights: string[];
  date: string;
  license: string;
  githubUrl: string;
  featured?: boolean;
  caseStudy?: {
    problem: string;
    approach: string;
    outcome: string;
  };
}

export const projects: Project[] = [
  {
    id: "gh-timeline",
    title: "GH-Timeline",
    description:
      "A timeline view of your GitHub contributions, built as a TypeScript library.",
    longDescription:
      "I wanted to see my contribution patterns across repos without leaving my workflow. So I built a TypeScript library that pulls from the GitHub Events API and renders an interactive timeline. Lightweight canvas under the hood, no heavy dependencies. Early users say it helps with standup prep and quarterly reviews.",
    language: "TypeScript",
    techStack: ["TypeScript", "GitHub API", "Canvas API", "Vite"],
    highlights: ["Shipped as open-source", "Used by ~20 devs in early access", "MIT licensed"],
    date: "May 2026",
    license: "MIT",
    githubUrl: "https://github.com/Utkarshxtripathi",
    featured: true,
    caseStudy: {
      problem:
        "Developers needed a visual way to understand their contribution patterns across repos without leaving their workflow.",
      approach:
        "Built a TypeScript library that fetches GitHub Events API data and renders an interactive timeline using a lightweight canvas approach.",
      outcome:
        "Shipped as an open-source library. Early users report it helps with standup prep and quarterly review conversations.",
    },
  },
  {
    id: "automated-web-testing",
    title: "Automated Web Testing Framework",
    description:
      "A Python-based framework for automated browser testing and regression suites.",
    longDescription:
      "Manual regression testing was eating 6+ hours per release cycle and coverage was spotty. I built a modular test framework with Selenium at its core — page-object pattern, parallel execution, CI integration. Cut regression time by 80% and pushed coverage from 40% to 92%. The kind of project that pays for itself in a week.",
    language: "Python",
    techStack: ["Python", "Selenium", "Pytest", "GitHub Actions", "Allure"],
    highlights: ["80% faster regression cycles", "92% test coverage", "CI-integrated"],
    date: "Apr 2026",
    license: "MIT",
    githubUrl: "https://github.com/Utkarshxtripathi",
    featured: true,
    caseStudy: {
      problem:
        "Manual regression testing was consuming 6+ hours per release cycle with inconsistent coverage.",
      approach:
        "Designed a modular test framework using Selenium with page-object pattern, parallel execution, and CI integration.",
      outcome:
        "Cut regression time by 80% and improved test coverage from 40% to 92% across core workflows.",
    },
  },
  {
    id: "team-task-manager",
    title: "Team Task Manager",
    description:
      "A collaborative task management app with real-time updates and team workspaces.",
    longDescription:
      "Built this because I wanted a task tool that didn't feel like enterprise bloat. Real-time updates via WebSocket, role-based workspaces, drag-and-drop kanban. It's not another Trello clone — the API-first design means you can script your own automations on top of it.",
    language: "JavaScript",
    techStack: ["JavaScript", "Node.js", "WebSocket", "MongoDB", "React"],
    highlights: ["Real-time collaboration", "API-first design", "Custom kanban engine"],
    date: "Mar 2026",
    license: "MIT",
    githubUrl: "https://github.com/Utkarshxtripathi",
  },
  {
    id: "sweet-shop-management",
    title: "Sweet Shop Management",
    description:
      "Full-stack inventory and billing system for a local sweet shop.",
    longDescription:
      "A local sweet shop near my hometown was still using paper ledgers. Built them a full-stack system — inventory tracking, billing with GST calculation, daily sales reports. The owner said it saved them about 2 hours of closing-time math every evening. My favorite kind of project: simple, needed, used daily.",
    language: "JavaScript",
    techStack: ["JavaScript", "Express", "MySQL", "EJS", "Bootstrap"],
    highlights: ["Used daily by a real business", "GST-compliant billing", "Inventory alerts"],
    date: "Feb 2026",
    license: "MIT",
    githubUrl: "https://github.com/Utkarshxtripathi",
  },
  {
    id: "customer-transaction-analysis",
    title: "Customer Transaction Analysis",
    description:
      "Jupyter-based analysis of customer transaction patterns with visual dashboards.",
    longDescription:
      "Stakeholders needed to understand spending patterns across 50k+ transactions but didn't have SQL access. Built a Jupyter pipeline — pandas for cleaning, scikit-learn for customer segmentation, Streamlit dashboard for exploration. Found 3 high-value segments and a churn pattern the business hadn't spotted.",
    language: "Python",
    techStack: ["Python", "Pandas", "scikit-learn", "Streamlit", "Jupyter"],
    highlights: ["50k+ transactions analyzed", "3 customer segments identified", "15% churn risk flagged"],
    date: "Jan 2026",
    license: "MIT",
    githubUrl: "https://github.com/Utkarshxtripathi",
    featured: true,
    caseStudy: {
      problem:
        "Business stakeholders needed to identify spending patterns across 50k+ transactions but had no SQL access.",
      approach:
        "Built a Jupyter pipeline with pandas for cleaning, scikit-learn for segmentation, and a Streamlit dashboard for exploration.",
      outcome:
        "Identified 3 high-value customer segments and a 15% churn-risk pattern that led to a targeted retention campaign.",
    },
  },
  {
    id: "banking-system",
    title: "Banking System",
    description:
      "Database-driven banking system with TSQL stored procedures and audit logging.",
    longDescription:
      "Chose stored procedures over an ORM here because the team needed to audit every line. TSQL-heavy, with transaction logs, user roles, and account management. Clean schema design that makes you think twice before picking an ORM for everything.",
    language: "TSQL",
    techStack: ["T-SQL", "SQL Server", "Stored Procedures", "ERD Design"],
    highlights: ["Audit-logged transactions", "Pure stored procedure architecture", "Role-based access"],
    date: "Dec 2025",
    license: "MIT",
    githubUrl: "https://github.com/Utkarshxtripathi",
  },
  {
    id: "shopping-cart",
    title: "Shopping Cart",
    description:
      "Java-based OOP implementation of a shopping cart with discount rules and persistence.",
    longDescription:
      "The project where I actually learned OOP for real. Interface-driven design, strategy pattern for discount rules, file-based persistence. Not groundbreaking, but it's the repo that made me understand why interfaces matter. Sometimes the simplest projects teach the most.",
    language: "Java",
    techStack: ["Java", "OOP", "Design Patterns", "File I/O"],
    highlights: ["Strategy pattern for discounts", "Interface-first design", "Persistence layer"],
    date: "Nov 2025",
    license: "MIT",
    githubUrl: "https://github.com/Utkarshxtripathi",
  },
  {
    id: "sales-performance-dashboard",
    title: "Sales Performance Dashboard",
    description:
      "Interactive data visualization dashboard for sales performance metrics.",
    longDescription:
      "Built this to scratch my own itch — I wanted to see sales trends without logging into a heavy BI tool. Interactive charts, filterable by region and product line. It's the kind of dashboard I'd want to use daily: fast, focused, no loading spinners.",
    language: "Python",
    techStack: ["Python", "Plotly", "Dash", "Pandas", "SQLite"],
    highlights: ["Interactive filtering", "Multi-region support", "Sub-second rendering"],
    date: "Oct 2025",
    license: "MIT",
    githubUrl: "https://github.com/Utkarshxtripathi",
  },
];
