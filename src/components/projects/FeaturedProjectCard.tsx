import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import type { Project } from "../../types/project";

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
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group w-[300px] sm:w-[340px] flex-shrink-0 rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 hover:from-purple-500/50 hover:via-pink-500/50 hover:to-blue-500/50 transition-all duration-300 snap-start cursor-pointer"
    >
      <div className="h-full rounded-2xl bg-white overflow-hidden shadow-lg shadow-purple-500/5 group-hover:shadow-2xl group-hover:shadow-purple-500/15 transition-all duration-300 flex flex-col">
        {/* Image with hover overlay */}
        <div className="overflow-hidden relative">
          <picture>
            <source srcSet={project.imageWebp} type="image/webp" />
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className="w-full aspect-video object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              loading="lazy"
            />
          </picture>
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-center pb-4">
            <span className="text-white text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
              View Case Study
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-base font-bold text-gray-800 mb-1">
            {project.title}
          </h3>

          <p className="text-sm text-gray-500 line-clamp-2 mb-3 flex-1">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
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
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-600 group-hover:text-purple-800 transition-colors duration-200 mt-auto">
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
