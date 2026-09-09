export interface Certificate {
  id: string;
  name: string;
  organization: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

export const certificates: Certificate[] = [
  {
    id: "certificate-1",
    name: "Full Stack Web Development",
    organization: "Your Issuing Organization",
    date: "2026",
    image: "/certificates/full-stack-web-development.png",
    credentialUrl: "#",
  },
  {
    id: "certificate-2",
    name: "React Development",
    organization: "Your Issuing Organization",
    date: "2026",
    image: "/certificates/react-development.png",
    credentialUrl: "#",
  },
  {
    id: "certificate-3",
    name: "Backend Development",
    organization: "Your Issuing Organization",
    date: "2026",
    image: "/certificates/backend-development.png",
    credentialUrl: "#",
  },
];
