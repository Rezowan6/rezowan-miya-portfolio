export interface ContactInfo {
  label: string;
  value: string;
  href?: string;
}

export const contactIntro = {
  title: "Let's build something useful together.",
  description:
    "Have a project idea, job opportunity or development requirement? Feel free to reach out. I am always interested in discussing meaningful software projects and opportunities.",
};

export const contactInfo: ContactInfo[] = [
  {
    label: "Email",
    value: "mdrezowanmiya6@gmail.com",
    href: "mailto:mdrezowanmiya6@gmail.com",
  },
  {
    label: "Phone",
    value: "+880 1728209262",
    href: "tel:+8801728209262",
  },
  {
    label: "Location",
    value: "Bangladesh",
  },
  {
    label: "GitHub",
    value: "github.com/Rezowan6",
    href: "https://github.com/Rezowan6",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    href: "https://www.linkedin.com/",
  },
];

export const contactSocialLinks = {
  github: "https://github.com/Rezowan6/",
  linkedin: "https://www.linkedin.com/",
};
