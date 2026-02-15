import type { Project } from "../types/project";

import project1 from "../assets/projects/project-alpha.png?w=800&format=webp&quality=80&imagetools";
import project1Fallback from "../assets/projects/project-alpha.png?w=800&quality=80&imagetools";
import project2 from "../assets/projects/project-beta.png?w=800&format=webp&quality=80&imagetools";
import project2Fallback from "../assets/projects/project-beta.png?w=800&quality=80&imagetools";
import project3 from "../assets/projects/project-1.png?w=800&format=webp&quality=80&imagetools";
import project3Fallback from "../assets/projects/project-1.png?w=800&quality=80&imagetools";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in backend-end technologies like PHP(Laravel), as well as front-end technologies like Next js, MySQL, Oracle, and Firebase. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 6 years of professional experience, I have worked with a variety of technologies, including PHP, Next.js, Node.js, MySQL, tailwind CSS, and Bootstrap. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2018 - 2019",
    role: "RPA Developer",
    company: "Funward Myanmar Co.Ltd",
    description: `Developed automation bot using UiPath to automate repetitive tasks and streamline business processes. Collaborated with business analysts to identify automation opportunities and design efficient solutions. Conducted user training and provided ongoing support for automation projects.`,
    technologies: ["UiPath"],
  },
  {
    year: " 2019 - 2022",
    role: "Full Stack Developer",
    company: " ID Myanmar Co.Ltd",
    description: `Developed especially Learning Management System, Employee Management System and Inventory Management System. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: [
      "Java EE",
      "Oracle",
      "HTML",
      "CSS",
      "Bootstrap",
      "Laravel",
      "mySQL",
    ],
  },

  {
    year: "2022",
    role: "Freelance Web Developer",
    company: "Domalog",
    description: `worked at Domalog project as a FreeLance Web Developer.`,
    technologies: ["Angular Js", "tailwind", "Laravel", "MySql"],
  },
  {
    year: "2024",
    role: "Foreign Assistant",
    company: " One Terrace",
    description: `Assistant in Global-Mindset Training Program of One Terrace .`,
    technologies: ["Japanese", "English"],
  },
  {
    year: "2022 - current",
    role: "Full Stack Developer",
    company: " One Terrace",
    description: `Developed Policy Checking System Using Ai , Learning ManagementSystem, School Exam System and so on. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: [
      "Next Js",
      "tailwind",
      "Bootstrap",
      "Laravel",
      "mySQL",
      "firebase",
    ],
  },
  {
    year: "2025",
    role: "Freelance Developer",
    company: "FreeLance",
    description: `Food E-commerce System`,
    technologies: ["Java Spring", "tailwind", "React", "mySQL"],
  },
];

export const ACHIEVEMENTS = [
  {
    year: "2017",
    title: "School Web Creation Competition",
    description: `Won the SECOND prize.`,
    link: "",
  },
  {
    year: "2017",
    title: "ITPEC Quiz Competition (Myanmar)",
    description: `Passed 16 teams stage`,
    link: "",
  },
  {
    year: "2018",
    title: "Graduated from Metro",
    description: `Graduated with GOLDEN badge.`,
    link: "",
  },
  {
    year: "2022",
    title: "CodeWar challenge",
    description: `Rank:8 kyu`,
    link: "https://www.codewars.com/users/lwinmoeaung",
  },
  {
    year: "2022",
    title: "HackerRank challenge",
    description: `Gold level badge.`,
    link: "https://www.hackerrank.com/profile/lmadev",
  },
  {
    year: "2023",
    title: "Lara Camp Competition (Myanmar)",
    description: `Winner Prize and led the winning team as team leader.`,
    link: "https://github.com/lara-camp",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "compliance-wizard",
    title: "Compliance Wizard",
    imageWebp: project1,
    image: project1Fallback,
    description:
      "An AI-powered web application that checks company policies for compliance with legal requirements.",
    fullDescription:
      "An enterprise-grade compliance checking system that leverages AI to analyze company policies against legal frameworks, providing actionable insights and recommendations for policy improvements.",
    technologies: ["Next.js", "Tailwind", "Laravel", "MySQL"],
    category: "ai",
    featured: true,
    order: 1,
    year: "2024",
    role: "Full Stack Developer",
    caseStudy: {
      problem:
        "Companies needed a fast, reliable way to verify policy compliance without expensive legal consultations. Manual reviews were time-consuming and error-prone.",
      solution:
        "Built an AI-powered analysis engine with a Next.js frontend and Laravel API backend, integrating natural language processing to compare company policies against legal frameworks automatically.",
      results:
        "Reduced policy review time by 70% and enabled non-legal staff to perform preliminary compliance checks with high accuracy.",
      highlights: [
        "AI-powered document analysis",
        "Real-time compliance scoring",
        "Automated report generation",
        "Role-based access control",
      ],
    },
  },
  {
    id: "education-support",
    title: "Education Support System",
    imageWebp: project2,
    image: project2Fallback,
    description:
      "A comprehensive web application that helps students access and organize learning materials efficiently.",
    fullDescription:
      "A full-featured learning management platform that provides students with structured access to learning materials, assignments, and progress tracking tools to enhance their educational experience.",
    technologies: ["Bootstrap", "Laravel", "MySQL"],
    category: "fullstack",
    featured: true,
    order: 2,
    year: "2023",
    role: "Full Stack Developer",
    caseStudy: {
      problem:
        "Students struggled with fragmented learning resources spread across multiple platforms, making it difficult to track progress and access materials consistently.",
      solution:
        "Developed a centralized learning platform with Laravel backend and Bootstrap frontend, featuring organized course materials, assignment management, and student progress dashboards.",
      results:
        "Streamlined the learning experience for students with a single platform for all educational resources, improving engagement and material accessibility.",
      highlights: [
        "Centralized learning materials",
        "Student progress tracking",
        "Assignment management system",
        "Responsive mobile-friendly design",
      ],
    },
  },
  {
    id: "domalog",
    title: "Domalog",
    imageWebp: project3,
    image: project3Fallback,
    description:
      "A gaming information sharing website where users can share their gaming experiences and tips.",
    fullDescription:
      "A community-driven gaming platform where players share experiences, strategies, and tips. Features real-time content feeds, user profiles, and social interaction capabilities.",
    technologies: ["Tailwind", "Angular", "Laravel", "MySQL"],
    category: "freelance",
    featured: true,
    order: 3,
    year: "2022",
    role: "Freelance Developer",
    caseStudy: {
      problem:
        "Gamers lacked a dedicated platform to share in-depth gaming experiences and tips with a community of like-minded players.",
      solution:
        "Built a social content platform using Angular for a dynamic SPA experience and Laravel for a robust API, with Tailwind CSS for a modern, responsive interface.",
      results:
        "Delivered a fully functional community platform with real-time content sharing, user engagement features, and a clean modern UI.",
      highlights: [
        "Real-time content feeds",
        "User profiles and social features",
        "Rich text content editor",
        "Responsive SPA architecture",
      ],
    },
  },
];

export const CONTACT = {
  address: "Live in Tokyo , Japan",
  phone: "+81 070-122-65089",
  email: "lwinmoeaung.it@gmail.com",
};
