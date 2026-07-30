export interface SkillCategory {
  label: string;
  skills: { name: string; context?: string }[];
  accent?: boolean;
}

export const skillCategories: SkillCategory[] = [
  {
    label: "LANGUAGES — daily",
    skills: [
      { name: "Python", context: "used daily for ETL at Celebal" },
      { name: "SQL", context: "query optimization, stored procedures" },
      { name: "JavaScript", context: "full-stack projects" },
    ],
  },
  {
    label: "LANGUAGES — comfortable",
    skills: [
      { name: "TypeScript" },
      { name: "Java" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    label: "DATA",
    skills: [
      { name: "MySQL" },
      { name: "RDBMS" },
      { name: "ETL" },
      { name: "Azure" },
    ],
  },
  {
    label: "TOOLING",
    skills: [
      { name: "Git" },
      { name: "VS Code" },
      { name: "Excel" },
      { name: "PowerPoint" },
    ],
  },
  {
    label: "BUSINESS",
    skills: [
      { name: "Workflow optimization" },
      { name: "Technical writing" },
    ],
  },
  {
    label: "CURRENTLY SHARPENING",
    skills: [
      { name: "Generative AI" },
      { name: "Django" },
      { name: "Cybersecurity" },
    ],
    accent: true,
  },
];
