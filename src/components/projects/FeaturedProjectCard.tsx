import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import type { Project } from "../../types/project";
import { PROJECT_CATEGORIES } from "../../types/project";

interface FeaturedProjectCardProps {
  project: Project;
  onClick: () => void;
}

const cardVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const FeaturedProjectCard = ({
  project,
  onClick,
}: FeaturedProjectCardProps) => {
  const highlights = project.caseStudy?.highlights ?? [];

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group w-[300px] sm:w-[340px] flex-shrink-0 rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 hover:from-purple-500/50 hover:via-pink-500/50 hover:to-blue-500/50 transition-all duration-300 snap-start cursor-pointer"
    >
      <div className="h-full rounded-2xl bg-white overflow-hidden shadow-lg shadow-purple-500/5 group-hover:shadow-2xl group-hover:shadow-purple-500/15 transition-all duration-300 flex flex-col">
        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          {/* Category & Year */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium uppercase tracking-wider text-purple-600">
              {PROJECT_CATEGORIES[project.category]}
            </span>
            <span className="text-xs text-gray-400">{project.year}</span>
          </div>

          <h3 className="text-lg font-bold text-gray-800 mb-1">
            {project.title}
          </h3>

          {project.role && (
            <p className="text-xs text-gray-400 mb-3">{project.role}</p>
          )}

          <p className="text-sm text-gray-500 line-clamp-2 mb-4">
            {project.description}
          </p>

          {/* Highlights */}
          {highlights.length > 0 && (
            <ul className="space-y-1.5 mb-4">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-xs text-gray-600"
                >
                  <span className="w-1 h-1 rounded-full bg-purple-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          )}

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full px-2 py-0.5 text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* View Details link */}
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-600 group-hover:text-purple-800 transition-colors duration-200">
            View Details
            <FiArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </motion.div>
  );
};
