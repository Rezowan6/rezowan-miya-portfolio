import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Database,
  Layers3,
  Server,
  Settings2,
  Workflow,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
}

export const services: Service[] = [
  {
    id: "full-stack-development",
    title: "Full Stack Web Development",
    description:
      "Building complete web applications with modern frontend, backend and database technologies.",
    icon: Code2,
    highlights: [
      "Responsive web applications",
      "Frontend and backend integration",
      "REST API integration",
      "Production-oriented architecture",
    ],
  },
  {
    id: "react-frontend-development",
    title: "React Frontend Development",
    description:
      "Creating modern, responsive and user-friendly interfaces using React and TypeScript.",
    icon: Layers3,
    highlights: [
      "React and TypeScript",
      "Reusable components",
      "Responsive UI",
      "Modern state and API integration",
    ],
  },
  {
    id: "node-backend-development",
    title: "Node.js Backend Development",
    description:
      "Developing reliable server-side applications and backend systems using Node.js and Express.js.",
    icon: Server,
    highlights: [
      "Node.js and Express.js",
      "Authentication and authorization",
      "Business logic implementation",
      "Scalable API architecture",
    ],
  },
  {
    id: "rest-api-development",
    title: "REST API Development",
    description:
      "Designing clean and maintainable REST APIs for web and mobile application backends.",
    icon: Workflow,
    highlights: [
      "RESTful API architecture",
      "Request validation",
      "Authentication and permissions",
      "Error handling",
    ],
  },
  {
    id: "database-design",
    title: "Database Design",
    description:
      "Designing structured and reliable relational databases for application data and business workflows.",
    icon: Database,
    highlights: [
      "MySQL database design",
      "Relational data modeling",
      "Sequelize ORM",
      "Relationships and constraints",
    ],
  },
  {
    id: "saas-development",
    title: "SaaS Application Development",
    description:
      "Building multi-tenant SaaS applications with authentication, permissions, subscriptions and feature-based access.",
    icon: Settings2,
    highlights: [
      "Multi-tenant architecture",
      "Role-based access control",
      "Subscription systems",
      "Feature-based access control",
    ],
  },
];
