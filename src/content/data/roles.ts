export interface Role {
  id: string;
  title: string;
  company: string;
  period: string;
  duration: string;
  description: string[];
  stack: string[];
  caseStudyId?: string;
}

export const roles: Role[] = [
  {
    id: "1m1b-ibm",
    title: "Virtual Intern",
    company: "1M1B x IBM SkillsBuild",
    period: "Present",
    duration: "Ongoing",
    description: [
      "Participating in AI & Cloud technologies virtual internship program supported by IBM SkillsBuild.",
      "Building practical projects and gaining hands-on exposure to modern enterprise software development.",
    ],
    stack: ["Cloud Computing", "AI Fundamentals", "IBM SkillsBuild", "Software Development"],
  },
  {
    id: "celebal",
    title: "SQL & Data Engineering Intern",
    company: "Celebal Technologies",
    period: "Jun – Jul 2025",
    duration: "2 months",
    description: [
      "Worked with SQL query optimization and database design for data workflows.",
      "Designed and shipped ETL pipelines using Python and SQL under Azure cloud environment.",
    ],
    stack: ["SQL", "Python", "Azure", "ETL"],
    caseStudyId: "customer-transaction-analysis",
  },
  {
    id: "codesoft",
    title: "Web Developer Intern",
    company: "Codesoft",
    period: "Jun 2024",
    duration: "1 month",
    description: [
      "Built and maintained responsive web applications using HTML/CSS and JavaScript.",
      "Collaborated on frontend interface design and interactive component logic.",
    ],
    stack: ["JavaScript", "HTML/CSS", "React", "Web APIs"],
  },
];
