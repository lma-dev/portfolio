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
    description: `Passed the ITPEC Information Technology Passport Examination — an internationally recognized certification covering IT fundamentals, management strategy, and system development. Administered by ITPEC (Information Technology Professionals Examination Council) across Asian countries.`,
    link: "https://itpec.org/about/itpec-common-examination.html",
  },
  {
    year: "2017",
    title: "ITPEC Quiz Competition (Myanmar)",
    description: `Represented Myanmar in the ITPEC Quiz Competition and advanced through 16 teams in the elimination stage. The competition tests IT knowledge, problem-solving skills, and teamwork across participating ITPEC member countries.`,
    link: "https://itpec.org/",
  },
  {
    year: "2018",
    title: "Fundamental Information Technology Engineer Examination (FE)",
    description: `Passed the ITPEC Fundamental Information Technology Engineer Examination — a professional-level certification that validates comprehensive knowledge in software development, algorithms, database design, network architecture, and project management. Equivalent to Japan's FE exam under IPA.`,
    link: "https://itpec.org/about/itpec-common-examination.html",
  },
  {
    year: "2022",
    title: "CodeWars Challenge",
    description: `Active participant on CodeWars, solving algorithmic challenges across multiple programming languages. Continuously improving problem-solving skills through kata training in JavaScript, PHP, and TypeScript.`,
    link: "https://www.codewars.com/users/lwinmoeaung",
  },
  {
    year: "2022",
    title: "HackerRank Challenge",
    description: `Achieved Gold level badge on HackerRank, demonstrating strong proficiency in problem-solving and algorithm challenges. Completed challenges in areas including data structures, algorithms, and SQL.`,
    link: "https://www.hackerrank.com/profile/lmadev",
  },
  {
    year: "2023",
    title: "Lara Camp Competition (Myanmar)",
    description: `Won first place and led the winning team as team leader in the Lara Camp Competition — a Laravel-focused hackathon in Myanmar. Directed team strategy, architecture decisions, and task delegation to deliver a complete working application within the competition timeframe.`,
    link: "https://github.com/lara-camp",
  },
  {
    year: "2024",
    title: "AWS Certified Cloud Practitioner",
    description: `Earned AWS Certified Cloud Practitioner certification, validating foundational knowledge of AWS Cloud services, architecture, security, pricing, and support. Demonstrates understanding of cloud concepts and AWS core services used in production deployments.`,
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "donation-management",
    title: "Donation Management System",
    description:
      "A comprehensive donation management platform for nonprofits with multi-currency support, fund distribution tracking, and financial reporting.",
    fullDescription:
      "A full-featured donation management system designed for charitable organizations. Enables tracking of incoming donations with multi-currency handling (JPY, MMK) and automatic exchange rate conversion, fund distribution management, monthly/yearly financial reports with KPI metrics, role-based access control, complete audit trail with CSV export, and multi-language support (English, Japanese, Myanmar).",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
      "Tailwind",
      "TanStack Query",
      "Zod",
    ],
    tags: ["Personal Project", "Full Stack", "Multi-Language"],
    category: "fullstack",
    featured: true,
    order: 1,
    liveUrl: "https://spring-liberation-rose.vercel.app",
    githubUrl: "https://github.com/lma-dev/Donation_Management_Web_APP",
    year: "2025",
    role: "Full Stack Developer",
    caseStudy: {
      problem:
        "Nonprofit organizations needed a reliable system to track donations across multiple currencies, manage fund distributions, and generate financial reports — replacing manual spreadsheet-based workflows.",
      solution:
        "Built a full-stack Next.js application with PostgreSQL and Prisma ORM, featuring multi-currency donation tracking with automatic exchange rate conversion, role-based access control (System Admin, Admin, User), and comprehensive financial reporting with export capabilities.",
      results:
        "Delivered a production-ready platform supporting three languages, dark/light themes, and complete audit logging — enabling organizations to manage their donation workflows with full transparency.",
      highlights: [
        "Multi-currency donation tracking (JPY, MMK)",
        "Role-based access control with 3 tiers",
        "Financial reports with KPI dashboards",
        "Multi-language support (EN, JP, MM)",
        "Export to Excel, PDF, CSV, and JSON",
      ],
    },
  },
  {
    id: "htain-thein",
    title: "Htain Thein Backend API",
    description:
      "A professional-grade Laravel REST API with 100% test coverage, Firebase real-time messaging, OAuth integration, and OpenAPI documentation.",
    fullDescription:
      "A backend API project built with Laravel demonstrating professional development standards. Features include complete CRUD operations, Firebase real-time messaging, two-factor authentication with OAuth, automated monthly record cleanup, Excel export, email notifications, model observers, role-based authorization, and queue job processing. Enforces 100% API feature test coverage and OpenAPI/Swagger documentation for all endpoints.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Firebase",
      "Docker",
      "PHPUnit",
      "PHPStan",
      "Swagger",
    ],
    tags: ["Company Project", "Backend", "TDD"],
    category: "backend",
    featured: true,
    order: 2,
    githubUrl: "https://github.com/SpringArts/htain-thein-be",
    year: "2024",
    role: "Backend Developer",
    caseStudy: {
      problem:
        "The team needed a robust, well-tested backend API following strict development standards with comprehensive documentation and quality enforcement.",
      solution:
        "Built a Laravel REST API with enforced 100% feature test coverage, OpenAPI/Swagger documentation for all endpoints, static analysis via PHPStan and PHPCS, and a test-driven development workflow (documentation → tests → implementation).",
      results:
        "Delivered a production-quality API with 120+ commits, zero technical debt, and complete documentation — serving as a reference architecture for future backend projects.",
      highlights: [
        "100% API feature test coverage",
        "OpenAPI/Swagger documentation",
        "Firebase real-time messaging",
        "Two-factor authentication with OAuth",
        "Static analysis with PHPStan & PHPCS",
      ],
    },
  },
  {
    id: "compliance-wizard",
    title: "Compliance Wizard",
    imageWebp: project1,
    image: project1Fallback,
    description:
      "An AI-powered web application that checks company policies for compliance with legal requirements using OpenAI and Azure AI.",
    fullDescription:
      "An enterprise-grade compliance checking system that leverages OpenAI and Azure AI APIs to analyze company policies against legal frameworks. Features include Sanctum API authentication, Job Batch/Queue processing for large document analysis, Two-Factor Authentication, and AI-powered calculation functions for compliance scoring.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Laravel",
      "MySQL",
      "OpenAI API",
      "Azure AI API",
    ],
    tags: ["Company Project", "AI / ML", "Enterprise"],
    category: "ai",
    featured: true,
    order: 3,
    year: "2024",
    role: "Full Stack Developer",
    caseStudy: {
      problem:
        "Companies needed a fast, reliable way to verify policy compliance without expensive legal consultations. Manual reviews were time-consuming and error-prone.",
      solution:
        "Built an AI-powered analysis engine with a Next.js frontend and Laravel API backend, integrating OpenAI and Azure AI for natural language processing to compare company policies against legal frameworks automatically. Implemented Job Batch/Queue processing for handling large documents efficiently.",
      results:
        "Reduced policy review time by 70% and enabled non-legal staff to perform preliminary compliance checks with high accuracy.",
      highlights: [
        "AI-powered document analysis (OpenAI & Azure AI)",
        "Real-time compliance scoring",
        "Job Batch/Queue for large document processing",
        "Sanctum API authentication with 2FA",
        "Automated report generation",
      ],
    },
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A monorepo full-stack e-commerce application with real-time WebSocket support, dual authentication, and Docker-based infrastructure.",
    fullDescription:
      "A full-stack e-commerce platform built as a monorepo combining a Laravel 12 backend API with a Next.js frontend, orchestrated via Docker Compose. Features include dual authentication (admin and customer), real-time WebSocket communication via Laravel Reverb, background job processing, database migrations with seeders, and Storybook for UI component documentation.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Laravel",
      "MySQL",
      "Docker",
      "WebSocket",
      "Storybook",
      "Nginx",
    ],
    tags: ["Personal Project", "Full Stack", "Real-Time"],
    category: "fullstack",
    featured: true,
    order: 4,
    githubUrl: "https://github.com/lma-dev/Ecommerce-with-next-js-and-laravel",
    year: "2025",
    role: "Full Stack Developer",
    caseStudy: {
      problem:
        "Needed a modern, scalable e-commerce architecture that supports real-time features, dual user roles, and a containerized development workflow for rapid iteration.",
      solution:
        "Designed a monorepo architecture with Laravel 12 API and Next.js frontend, using Docker Compose for orchestration, Laravel Reverb for WebSocket communication, and Sanctum for SPA authentication with separate admin and customer login flows.",
      results:
        "Created a fully containerized e-commerce platform with real-time capabilities, background job processing, and a documented component library via Storybook.",
      highlights: [
        "Monorepo architecture with Docker Compose",
        "Real-time WebSocket via Laravel Reverb",
        "Dual authentication (Admin & Customer)",
        "Storybook UI component documentation",
        "Queue worker for background jobs",
      ],
    },
  },
  {
    id: "education-support",
    title: "Education Support System",
    imageWebp: project2,
    image: project2Fallback,
    description:
      "A comprehensive learning management platform for students to access organized learning materials, track progress, and manage assignments.",
    fullDescription:
      "A full-featured learning management platform that provides students with structured access to learning materials, assignments, and progress tracking tools. Built for an educational institution to centralize all learning resources into a single platform with student dashboards and administrative controls.",
    technologies: ["Bootstrap", "Laravel", "MySQL"],
    tags: ["Company Project", "Full Stack", "Education"],
    category: "fullstack",
    featured: true,
    order: 5,

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
    technologies: [
      "Next.js",
      "Tailwind",
      "Prisma",
      "MySQL",
      "NextAuth",
      "AWS S3",
    ],
    tags: ["Freelance Project", "Full Stack", "Event Management"],
    category: "freelance",
    featured: true,
    order: 6,
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
      "A gaming community platform where users can share their gaming experiences, strategies, and tips with other players.",
    fullDescription:
      "A community-driven gaming platform where players share experiences, strategies, and tips. Features real-time content feeds, user profiles, social interaction capabilities, and a rich text content editor for detailed gaming guides.",
    technologies: ["Angular", "Tailwind", "Laravel", "MySQL"],
    tags: ["Freelance Project", "Full Stack", "Social Platform"],
    category: "freelance",
    featured: true,
    order: 7,
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
    degree:
      "Bachelor of Science (BS) in Information Technology and Data Science",
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
