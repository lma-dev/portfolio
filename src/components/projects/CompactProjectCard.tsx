import { motion } from "framer-motion";
import type { Project } from "../../types/project";

interface CompactProjectCardProps {
  project: Project;
}

export const CompactProjectCard = ({ project }: CompactProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      {/* Image */}
      <div className="overflow-hidden aspect-video">
        <picture>
          <source srcSet={project.imageWebp} type="image/webp" />
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </picture>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-base font-semibold text-gray-800 truncate">
            {project.title}
          </h4>
          <span className="text-xs text-gray-400 shrink-0 ml-2">
            {project.year}
          </span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-1 mb-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded px-2 py-0.5 text-xs bg-gray-100 text-gray-600"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-gray-400">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
