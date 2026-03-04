// Personal Information Constants
export const PERSONAL_INFO = {
  name: "Sumit Lokhande",
  email: "workwithsumit15@gmail.com",
  phone: "+91 9021181123",
  location: "Maharashtra, India",
  title: "Software Engineer",
  experience: 5,
  profileImage: "/20231120_210945_IMG_0457_1753609330229.JPG",
  bio: "Delivering high-impact, user-centric web applications. Let’s build something extraordinary together.",
} as const;

// Social Media Links (Client-safe constants)
export const SOCIAL_LINKS = {
  github: "https://github.com/Sumilokhande1502",
  linkedin: "https://www.linkedin.com/in/sumit-lokhande-0a2380148/",
  portfolio: "https://sumitlokhande.dev",
} as const;

// UI Constants
export const UI_CONSTANTS = {
  toastRemoveDelay: 5000,
  toastLimit: 1,
  gradientAnimationDuration: "15s",
  transitionDuration: "0.3s",
  hoverTransitionDuration: "0.2s",
} as const;

// Animation Constants
export const ANIMATION_CONSTANTS = {
  delays: {
    delay100: "0.1s",
    delay200: "0.2s",
    delay300: "0.3s",
    delay400: "0.4s",
    delay500: "0.5s",
  },
  durations: {
    fast: "0.2s",
    normal: "0.3s",
    slow: "0.5s",
    fadeIn: "0.6s",
    loader: "0.8s",
    spin: "1s",
  },
  easing: {
    default: "ease-out",
    bounce: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;

// Loader Colors
export const LOADER_COLORS = {
  rings: {
    outer: "border-t-blue-500 border-r-blue-500",
    middle: "border-r-purple-500 border-b-purple-500",
    inner: "border-b-teal-500 border-l-teal-500",
  },
  dots: {
    first: "text-blue-600 font-bold",
    second: "text-purple-600 font-bold",
    third: "text-teal-600 font-bold",
  },
  center: "bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500",
} as const;

// Scroll Animation Settings
export const SCROLL_ANIMATION = {
  threshold: 0.1,
  rootMargin: "50px 0px -100px 0px",
  staggerDelay: 0.2, // seconds between animations
} as const;

// Navigation Items
export const NAVIGATION_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

// API Endpoints
export const API_ENDPOINTS = {
  contacts: "/api/contacts",
} as const;

// Client Environment Variables (using import.meta.env for Vite)
export const CLIENT_ENV = {
  NODE_ENV:
    globalThis.window === undefined ? "development" : import.meta.env.MODE,
} as const;

// Skill categories (data-only, UI should map names -> icons locally)
export const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Angular",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Storybook",
      "Zustand",
      "Zod",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Webpack", "Jenkins", "Jest", "CI/CD"],
  },
] as const;

// Experience data (data-only). Logos/assets are UI concerns and should be mapped in the component.
export const EXPERIENCE_DATA = [
  {
    id: "experience-1",
    company: "Citi",
    position: "Senior Software Engineer",
    startDate: "2022-08",
    endDate: undefined,
    location: "India",
    description: [
      "Engineering high-performance React.js applications with Redux Toolkit, implementing scalable component architectures, and accelerating product delivery through modern development practices.",
    ],
    technologies: [
      "React",
      "Redux Toolkit",
      "Reflux",
      "Zustand",
      "Zod",
      "Vite",
      "TypeScript",
      "Java Microservices",
      "Storybook",
      "Jenkins",
      "GIT",
    ],
  },
  {
    id: "experience-2",
    company: "NeoSoft Technologies Pvt. Ltd.",
    position: "Software Engineer",
    startDate: "2021-04",
    endDate: "2022-08",
    location: "India",
    description: [
      "Built dynamic single-page applications with Angular and developed reusable UI components integrated with Java Microservices via RESTful APIs.",
    ],
    technologies: ["Angular", "RESTful APIs", "GIT", "Gulp", "TypeScript"],
  },
  {
    id: "experience-3",
    company: "LearningMate Solutions Pvt. Ltd.",
    position: "Front End Web Developer",
    startDate: "2019-10",
    endDate: "2020-12",
    location: "India",
    description: [
      "Developed responsive online course pages using HTML, CSS, and JavaScript while providing technical support and troubleshooting.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Frontend Development"],
  },
  {
    id: "experience-4",
    company: "A One Salasar Pvt. Ltd.",
    position: "Associate Business Developer",
    startDate: "2019-03",
    endDate: "2019-06",
    location: "India",
    description: [
      "Expanded business through strategic outreach and maintained strong client relationships while effectively communicating company services.",
    ],
    technologies: ["Business Development", "Client Relations", "Communication"],
  },
] as const;

// Shared UI text constants (centralize hardcoded content used across components)
export const TEXT = {
  hero: {
    ctaView: "View My Work",
    ctaContact: "Get In Touch",
    socialAria: {
      github: "GitHub Profile",
      linkedin: "LinkedIn Profile",
      email: "Email Contact",
    },
  },
  about: {
    heading: "About Me",
    subheading: "Passionate about creating exceptional digital experiences",
    paragraphs: [
      `I'm a ${PERSONAL_INFO.title} with ${PERSONAL_INFO.experience}+ years of experience developing responsive web applications using React, Redux Toolkit, Angular, JavaScript, and TypeScript. I have proven expertise in designing user-focused interfaces, integrating RESTful APIs with frontend components, and working in Agile environments.`,
      `I'm skilled in version control and DevOps practices using Jenkins and GIT to streamline deployment and maintain code integrity. I believe in creating optimized, user-centric applications that deliver exceptional performance and user experience.`,
    ],
    highlights: [
      { title: "Quality Code", subtitle: "Clean & maintainable" },
      { title: "Fast Delivery", subtitle: "Quality & efficiency" },
      { title: "Team Player", subtitle: "Collaborative approach" },
      { title: "User-Focused", subtitle: "Experience-driven" },
    ],
    downloadLabel: "Download Resume",
    updatedPrefix: "• Updated in ",
  },
  experience: {
    heading: "Work Experience",
    intro:
      "5+ years delivering scalable web solutions across diverse industries",
  },
  projects: {
    heading: "Featured Projects",
    intro: `Some of my recent work that I'm proud to share`,
    previewTitle: "Projects Coming Soon",
    previewDescription:
      "I'm currently working on showcasing my best projects. Check back soon to see detailed case studies of my work at Citi, NeoSoft Technologies, and other exciting projects.",
    previewCTA: "View GitHub Projects",
  },
  contact: {
    sectionHeading: "Get In Touch",
    intro: `Ready to start your next project? I'd love to hear from you. Send me a message and I'll respond via email or LinkedIn as soon as possible.`,
    formHeading: "Send Me a Message",
    nameLabel: "Full Name",
    emailLabel: "Email Address",
    messageLabel: "Message",
    submit: {
      send: "Send Message",
      sending: "Sending Message...",
    },
    quickResponseTitle: "Quick Response",
    quickResponseText:
      "I typically respond to messages within 24 hours. For urgent inquiries, feel free to reach out via phone or LinkedIn.",
  },
  footer: {
    connect: "Connect",
    rights: "© 2025 All rights reserved",
    crafted: "Crafted with passion using React & TypeScript ✨",
  },
} as const;

// Month names used for UI date formatting
export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

// Contact details (data-only). Icons are intentionally omitted so UI can map names -> icons.
export const CONTACT_DETAILS = [
  {
    id: "email",
    label: "Email",
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: SOCIAL_LINKS.linkedin,
  },
  {
    id: "location",
    label: "Location",
    value: PERSONAL_INFO.location,
  },
] as const;

export const SOCIAL_MEDIA = [
  {
    id: "github",
    label: "GitHub",
    url: SOCIAL_LINKS.github,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: SOCIAL_LINKS.linkedin,
  },
] as const;

// Form endpoints and third-party integrations (data-only)
export const FORM_ENDPOINTS = {
  FORMSPREE: "https://formspree.io/f/xyzpppnr", // Replace with your Formspree form ID in deployment
} as const;

// Project type and sample projects data
export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: "web" | "mobile" | "fullstack" | "other";
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  completedDate: string;
};

export const PROJECT_CATEGORIES: {
  id: string;
  label: string;
  count: number;
}[] = [
  { id: "all", label: "All Projects", count: 0 },
  { id: "web", label: "Web Apps", count: 0 },
  { id: "fullstack", label: "Full Stack", count: 0 },
  { id: "mobile", label: "Mobile", count: 0 },
  { id: "other", label: "Other", count: 0 },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "project-1",
    title: "Banking Application Frontend",
    description:
      "Enterprise banking web application with React and Redux Toolkit",
    longDescription:
      "Led front-end development for a comprehensive banking application at Citi using React and Redux Toolkit. Focused on state management, performance optimization, and user-centric design. Integrated with Java Microservices and Oracle databases for dynamic financial data.",
    technologies: [
      "React",
      "Redux Toolkit",
      "TypeScript",
      "JavaScript",
      "Jenkins",
      "GIT",
    ],
    category: "web",
    imageUrl: "/api/placeholder/600/400",
    githubUrl: SOCIAL_LINKS.github,
    featured: true,
    completedDate: "2024-01",
  },
  {
    id: "project-2",
    title: "Angular Single Page Applications",
    description: "Enterprise SPAs with seamless cross-device experience",
    longDescription:
      "Created dynamic, single-page applications using Angular at NeoSoft Technologies, providing seamless experience across devices. Developed reusable UI components and collaborated with backend teams to integrate Java Microservices and Oracle databases via RESTful APIs.",
    technologies: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "RESTful APIs",
      "Java Microservices",
      "Oracle",
    ],
    category: "web",
    imageUrl: "/api/placeholder/600/400",
    githubUrl: SOCIAL_LINKS.github,
    featured: true,
    completedDate: "2022-08",
  },
  {
    id: "project-3",
    title: "Online Course Platform",
    description: "Frontend development for educational content management",
    longDescription:
      "Developed Front End online course pages using HTML, CSS by migrating content from various sources at LearningMate Solutions. Managed technical issues and troubleshooting while working across multiple projects simultaneously.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Content Migration"],
    category: "web",
    imageUrl: "/api/placeholder/600/400",
    githubUrl: SOCIAL_LINKS.github,
    featured: false,
    completedDate: "2020-12",
  },
  {
    id: "project-4",
    title: "Portfolio Website",
    description: "Personal portfolio showcasing frontend development skills",
    longDescription:
      "A modern, responsive portfolio website built with React and TypeScript. Features include dark/light theme toggle, smooth animations, contact form with email integration, and optimized performance. Showcases professional experience and technical skills.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Nodemailer",
      "Express",
    ],
    category: "web",
    imageUrl: "/api/placeholder/600/400",
    liveUrl: "https://portfolio-sumit-lokhande.replit.app/",
    githubUrl: SOCIAL_LINKS.github,
    featured: true,
    completedDate: "2025-01",
  },
];
