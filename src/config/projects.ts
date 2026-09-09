export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "mess-management-system",
    title: "Mess Management System",
    description:
      "A production-oriented multi-tenant SaaS platform designed to simplify mess management, meal planning, member management, expenses, subscriptions and daily operations from a centralized system.",
    image: "/projects/mess-management.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Sequelize",
      "MySQL",
      "REST API",
      "PWA",
    ],
    features: [
      "Multi-tenant SaaS architecture",
      "Authentication and authorization",
      "Role-based permissions",
      "Meal management and preferences",
      "Expense management",
      "Subscription and feature management",
      "Scheduled meal request generation",
      "REST API architecture",
      "MySQL database with Sequelize",
      "Progressive Web App support",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },

  {
    id: "portfolio-website",
    title: "Developer Portfolio",
    description:
      "A modern responsive developer portfolio built to showcase my technical skills, projects, experience and professional services.",
    image: "/projects/portfolio.png",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    features: [
      "Dark and Light mode",
      "Responsive design",
      "Reusable components",
      "Modern UI architecture",
      "SEO friendly structure",
    ],
    liveUrl: "https://mess-1-qbui.onrender.com",
    githubUrl: "https://github.com/Rezowan6/Mess",
  },
];
