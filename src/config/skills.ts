import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import {
  Code2,
  Database,
  GitBranch,
  Globe,
  HardDrive,
  Monitor,
  Server,
  Settings,
} from "lucide-react";
import { FaGit, FaGithub, } from "react-icons/fa";


export interface Skill {
  name: string;
  icon: LucideIcon | IconType;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: LucideIcon | IconType;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Building modern, responsive and user-focused interfaces.",
    icon: Monitor,
    skills: [
      {
        name: "React",
        icon: Code2,
      },
      {
        name: "TypeScript",
        icon: Code2,
      },
      {
        name: "JavaScript",
        icon: Code2,
      },
      {
        name: "Tailwind CSS",
        icon: Monitor,
      },
      {
        name: "HTML5",
        icon: Globe,
      },
      {
        name: "CSS3",
        icon: Monitor,
      },
    ],
  },
  {
    title: "Backend",
    description: "Developing scalable APIs and reliable server-side systems.",
    icon: Server,
    skills: [
      {
        name: "Node.js",
        icon: Server,
      },
      {
        name: "Express.js",
        icon: Server,
      },
      {
        name: "REST API",
        icon: Globe,
      },
      {
        name: "Axios",
        icon: Globe,
      },
      {
        name: "Authentication",
        icon: Settings,
      },
      {
        name: "Authorization",
        icon: Settings,
      },
    ],
  },
  {
    title: "Database",
    description: "Designing and managing structured application data.",
    icon: Database,
    skills: [
      {
        name: "MySQL",
        icon: Database,
      },
      {
        name: "Sequelize",
        icon: HardDrive,
      },
      {
        name: "Database Design",
        icon: Database,
      },
      {
        name: "Relationships",
        icon: GitBranch,
      },
    ],
  },
  {
    title: "Tools & Deployment",
    description: "Using modern tools to build, manage and deploy applications.",
    icon: Settings,
    skills: [
      {
        name: "Git",
        icon: FaGit,
      },
      {
        name: "GitHub",
        icon: FaGithub,
      },
      {
        name: "Vite",
        icon: Settings,
      },
      {
        name: "Railway",
        icon: Globe,
      },
      {
        name: "PWA",
        icon: Monitor,
      },
      {
        name: "Cloudinary",
        icon: HardDrive,
      },
    ],
  },
];
