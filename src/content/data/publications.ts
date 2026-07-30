export interface Publication {
  title: string;
  venue: string;
  year: string;
  role: string;
  description: string;
  link?: string;
  linkLabel?: string;
}

export const publications: Publication[] = [
  {
    title: "Real-Time Anomaly Detection in Fintech Transactions",
    venue: "IEEE IAS / ICSSCNA",
    year: "2026",
    role: "Presenter",
    description:
      "Presented at the International Conference on Signal, Systems, and Computing for Next-Gen Automation (ICSSCNA-2026). The paper focuses on identifying transactional anomalies in real-time fintech environments.",
    link: "#",
    linkLabel: "↳ Pending publication",
  },
  {
    title: "Adaptive DDSS for Clinical Workflow Integration",
    venue: "IEEE",
    year: "2025",
    role: "Co-author",
    description:
      "A decision-support system that adapts to a clinical team's workflow, improving response times and reducing manual overhead.",
    link: "#",
    linkLabel: "IEEE Xplore (when added)",
  },
  {
    title: "Virtual Classroom Comparative Study",
    venue: "ICICC",
    year: "2024",
    role: "Co-author",
    description:
      "A comparative analysis of virtual classroom platforms evaluating engagement, accessibility, and learning outcomes.",
    link: "#",
    linkLabel: "View paper (when added)",
  },
];
