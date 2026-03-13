import type { Project } from "../types/project";

import project1 from "../assets/projects/project-alpha.png?w=800&format=webp&quality=80&imagetools";
import project1Fallback from "../assets/projects/project-alpha.png?w=800&quality=80&imagetools";
import project2 from "../assets/projects/project-beta.png?w=800&format=webp&quality=80&imagetools";
import project2Fallback from "../assets/projects/project-beta.png?w=800&quality=80&imagetools";
import project3 from "../assets/projects/project-1.png?w=800&format=webp&quality=80&imagetools";
import project3Fallback from "../assets/projects/project-1.png?w=800&quality=80&imagetools";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With over 7 years of hands-on experience, I have honed my skills in backend technologies like PHP (Laravel) and Java, as well as frontend technologies like Next.js and TypeScript. I also work with MySQL, Oracle, REST APIs, and AI integrations (OpenAI, Azure AI). My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With over 7 years of professional experience, I have worked with a variety of technologies, including PHP (Laravel), Next.js, TypeScript, Java, MySQL, Oracle, Tailwind CSS, and Bootstrap. I hold a BS in Information Technology and Data Science, as well as certifications including AWS Certified Cloud Practitioner and Fundamental Information Technology Engineer (FE). My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.`;

export const EXPERIENCES = [
  {
    year: "2018 - 2019",
    role: "RPA Developer",
    company: "Funward Myanmar Co., Ltd.",
    description: `Developed chatbot and automation bots using UiPath to process emails, Excel data, and web information. Built robots that check messages, send emails, store data in relevant locations, and retrieve necessary information automatically.`,
    technologies: ["UiPath"],
  },
  {
    year: "2019 - 2022",
    role: "Full Stack Developer",
    company: "IDM Myanmar Co., Ltd.",
    description: `Developed multiple enterprise systems including Inventory Management System, SOP Tool Guide System, Learning Management System (Moodle), Attendance Management System, and Employee Information Management System. Handled full development lifecycle from design to testing and maintenance.`,
    technologies: [
      "Java EE",
      "Java Spring",
      "Oracle",
      "PHP",
      "Laravel",
      "MySQL",
      "HTML",
      "CSS",
      "Tailwind",
    ],
  },
  {
    year: "2022",
    role: "Freelance Web Developer",
    company: "Domalog",
    description: `Built a gaming information sharing website where users can share their gaming experiences and tips.`,
    technologies: ["Angular", "Tailwind", "Laravel", "MySQL"],
  },
  {
    year: "2022 - current",
    role: "Full Stack Developer",
    company: "One Terrace",
    description: `Developed AI-powered policy compliance evaluation system using OpenAI and Azure AI APIs, Student Information Management System, and Exam Result Management System. Built features including Sanctum API authentication, Job Batch/Queue processing, Two-Factor Authentication, and AI calculation functions.`,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Laravel",
      "MySQL",
      "REST API",
      "OpenAI API",
      "Azure AI API",
    ],
  },
  {
    year: "2024",
    role: "Foreign Assistant",
    company: "One Terrace",
    description: `Assistant in Global-Mindset Training Program of One Terrace.`,
    technologies: ["Japanese", "English"],
  },
  {
    year: "2025",
    role: "Freelance Developer",
    company: "Freelance",
    description: `Food E-commerce System`,
    technologies: ["Java Spring", "Tailwind", "React", "MySQL"],
  },
];

export const ACHIEVEMENTS = [
  {
    year: "2017",
    title: "Information Technology Passport Examination (IP)",
    description: `Passed the ITPEC IP Examination.`,
    link: "",
  },
  {
    year: "2017",
    title: "School Web Creation Competition",
    description: `Won the SECOND prize.`,
    link: "",
  },
  {
    year: "2017",
    title: "ITPEC Quiz Competition (Myanmar)",
    description: `Passed 16 teams stage.`,
    link: "",
  },
  {
    year: "2018",
    title: "Fundamental Information Technology Engineer Examination (FE)",
    description: `Passed the ITPEC FE Examination.`,
    link: "",
  },
  {
    year: "2018",
    title: "Graduated from Metro IT & Japanese School",
    description: `Graduated with GOLDEN badge.`,
    link: "",
  },
  {
    year: "2022",
    title: "Japanese Language Proficiency Test (JLPT N3)",
    description: `Certified Japanese Language Proficiency Test N3 level.`,
    link: "",
  },
  {
    year: "2022",
    title: "CodeWars Challenge",
    description: `Rank: 8 kyu`,
    link: "https://www.codewars.com/users/lwinmoeaung",
  },
  {
    year: "2022",
    title: "HackerRank Challenge",
    description: `Gold level badge.`,
    link: "https://www.hackerrank.com/profile/lmadev",
  },
  {
    year: "2023",
    title: "Lara Camp Competition (Myanmar)",
    description: `Winner Prize and led the winning team as team leader.`,
    link: "https://github.com/lara-camp",
  },
  {
    year: "2024",
    title: "AWS Certified Cloud Practitioner",
    description: `Earned AWS Certified Cloud Practitioner certification.`,
    link: "",
  },
  {
    year: "2026",
    title: "BS in Information Technology and Data Science",
    description: `Graduated from European International University - Paris with a Bachelor of Science in IT and Data Science.`,
    link: "",
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
    id: "lucky-draw",
    title: "Lucky Draw",
    description:
      "A full-stack lucky draw management platform for organizing prize draws with seat reservations and payment tracking.",
    fullDescription:
      "A comprehensive lucky draw management system built for organizing and managing prize draw events. Features include prize creation with configurable seat pools, seat reservation and payment tracking, participant management, ticket generation, bulk operations, activity logging, and an admin dashboard with real-time statistics.",
    technologies: ["Next.js", "Tailwind", "Prisma", "MySQL", "NextAuth", "AWS S3"],
    category: "freelance",
    featured: true,
    order: 4,
    year: "2025",
    role: "Freelance Developer",
    caseStudy: {
      problem:
        "The client needed a reliable system to manage lucky draw events with hundreds of seats, track reservations and payments, and generate tickets — replacing error-prone manual spreadsheet workflows.",
      solution:
        "Built a full-stack Next.js application with Prisma ORM and MySQL, featuring a real-time admin dashboard, seat reservation system with payment verification, bulk operations for efficient management, and AWS S3 integration for file storage.",
      results:
        "Delivered a production-ready platform that streamlined the entire lucky draw workflow, from prize setup to ticket generation, enabling the client to manage events efficiently with full audit logging.",
      highlights: [
        "Real-time admin dashboard with statistics",
        "Seat reservation and payment tracking",
        "Bulk operations for efficient management",
        "Activity logging and audit trail",
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

export const EDUCATION = [
  {
    year: "2025 - 2026",
    institution: "European International University - Paris",
    degree: "Bachelor of Science (BS) in Information Technology and Data Science",
  },
  {
    year: "2016 - 2018",
    institution: "Metro IT & Japanese School",
    degree: "IT Diploma",
  },
  {
    year: "2016 - 2019",
    institution: "Dagon University",
    degree: "English (On Leave)",
  },
];

export const CONTACT = {
  address: "Live in Tokyo, Japan",
  phone: "+81 070-1226-5089",
  email: "lwinmoeaung.it@gmail.com",
};
