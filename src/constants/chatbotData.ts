import { ABOUT_TEXT, EXPERIENCES, PROJECTS, CONTACT } from "./index";

export interface ChatQA {
  id: string;
  question: string;
  answer: string;
}

export const BOT_GREETING =
  "Hi! I'm Lwin Moe Aung's portfolio assistant. How can I help you? Pick a topic below.";

function buildCurrentRoleAnswer(): string {
  const current = EXPERIENCES.find((e) => e.year.includes("current"));
  if (!current) return "I'm currently looking for new opportunities.";
  return `I'm currently working as a ${current.role} at${current.company}. ${current.description} Technologies: ${current.technologies.join(", ")}.`;
}

function buildProjectsAnswer(): string {
  const featured = PROJECTS.filter((p) => p.featured)
    .map((p) => `- ${p.title}: ${p.description}`)
    .join("\n");
  return `Here are my key projects:\n\n${featured}\n\nScroll down to the Projects section for more details!`;
}

export const CHAT_QA: ChatQA[] = [
  {
    id: "about-intro",
    question: "Who is Lwin Moe Aung?",
    answer: ABOUT_TEXT,
  },
  {
    id: "about-location",
    question: "Where are you based?",
    answer: `I'm currently based in Tokyo, Japan.`,
  },
  {
    id: "skills-tech",
    question: "What technologies do you use?",
    answer:
      "I work primarily with PHP (Laravel), Next.js, React, MySQL, Firebase, Tailwind CSS, and Bootstrap. I'm experienced in both frontend and backend development.",
  },
  {
    id: "exp-current",
    question: "What is your current role?",
    answer: buildCurrentRoleAnswer(),
  },
  {
    id: "exp-years",
    question: "How many years of experience?",
    answer:
      "I have over 6 years of professional experience in full stack web development, starting from 2018.",
  },
  {
    id: "proj-featured",
    question: "What are your key projects?",
    answer: buildProjectsAnswer(),
  },
  {
    id: "contact-info",
    question: "How can I contact you?",
    answer: `You can reach me at:\n\n- Email: ${CONTACT.email}\n- Phone: ${CONTACT.phone}\n- Location: ${CONTACT.address}\n\nFeel free to send me an email anytime!`,
  },
  {
    id: "contact-hire",
    question: "Are you available for hire?",
    answer: `I'm always open to discussing new opportunities! Feel free to reach out at ${CONTACT.email}.`,
  },
  {
    id: "contact-social",
    question: "Where can I find you online?",
    answer: "You can find me on:\n\n- GitHub: github.com/lma-dev\n- LinkedIn: linkedin.com/in/lwin-moe-aung-564a58222\n- Email: lwinmoeaung.it@gmail.com",
  },
];
