import { useRef } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { Project } from "../../types/project";
import { FeaturedProjectCard } from "./FeaturedProjectCard";

interface FeaturedProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const FeaturedProjects = ({
  projects,
  onSelectProject,
}: FeaturedProjectsProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 360;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group/scroll">
      {/* Scroll Buttons — fade in on section hover */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-white/95 shadow-lg text-gray-500 hover:text-gray-800 hover:bg-white transition-all duration-200 cursor-pointer hidden md:flex items-center justify-center -ml-4 opacity-0 group-hover/scroll:opacity-100"
        aria-label="Scroll left"
      >
        <FiChevronLeft size={20} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-white/95 shadow-lg text-gray-500 hover:text-gray-800 hover:bg-white transition-all duration-200 cursor-pointer hidden md:flex items-center justify-center -mr-4 opacity-0 group-hover/scroll:opacity-100"
        aria-label="Scroll right"
      >
        <FiChevronRight size={20} />
      </button>

      {/* Scrollable Container */}
      <motion.div
        ref={scrollRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project) => (
          <FeaturedProjectCard
            key={project.id}
            project={project}
            onClick={() => onSelectProject(project)}
          />
        ))}
      </motion.div>
    </div>
  );
};
