export interface Experience {
  id: string;
  role: string;
  organization: string;
  type: string;
  duration: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: "full-stack-developer-mess-management",
    role: "Full Stack Developer",
    organization: "Mess Management System",
    type: "Personal / SaaS Project",
    duration: "2026 — Present",
    description:
      "Designed and developed a production-oriented multi-tenant SaaS application for managing mess operations, members, meals, expenses and subscriptions.",
    responsibilities: [
      "Designed the overall frontend and backend application architecture.",
      "Built responsive interfaces using React, TypeScript and Tailwind CSS.",
      "Developed REST APIs using Node.js and Express.js.",
      "Designed relational database models using MySQL and Sequelize.",
      "Implemented authentication, authorization and role-based access control.",
      "Developed meal management, meal preferences and meal request workflows.",
      "Implemented expense management and party expense functionality.",
      "Built subscription and feature-based access control.",
      "Implemented scheduled background jobs for automated meal request generation.",
      "Added Progressive Web App capabilities and offline application support.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Node.js",
      "Express.js",
      "Sequelize",
      "MySQL",
      "REST API",
      "PWA",
    ],
    achievements: [
      "Built a multi-tenant architecture where multiple mess organizations can operate independently.",
      "Implemented reusable permission and feature-guard middleware for secure API access.",
      "Automated daily meal request generation using scheduled server-side jobs.",
      "Developed a scalable frontend and backend structure designed for future feature expansion.",
    ],
    current: true,
  },
  {
    id: "full-stack-development",
    role: "Full Stack Development",
    organization: "Independent Development",
    type: "Learning & Project Experience",
    duration: "2025 — Present",
    description:
      "Continuously building practical applications and improving full stack development skills through hands-on projects.",
    responsibilities: [
      "Developed modern web interfaces with React and TypeScript.",
      "Built backend services and REST APIs with Node.js and Express.js.",
      "Worked with relational databases and ORM-based application development.",
      "Implemented authentication, permissions and API request handling.",
      "Practiced Git and GitHub based development workflows.",
      "Worked with deployment and production-oriented application configuration.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "Git",
      "GitHub",
      "Railway",
    ],
    achievements: [
      "Developed practical full stack applications from frontend to backend.",
      "Gained hands-on experience with production-oriented application architecture.",
      "Built and deployed applications using modern development tools and workflows.",
    ],
  },
];
