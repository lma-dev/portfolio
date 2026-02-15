import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import type { Project } from "../../types/project";
import { PROJECT_CATEGORIES } from "../../types/project";

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.98,
    transition: { duration: 0.2 },
  },
};

export const CaseStudyModal = ({ project, onClose }: CaseStudyModalProps) => {
  // Body scroll lock
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const { caseStudy } = project;

  return createPortal(
    <motion.div
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label={`Case study: ${project.title}`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-500 hover:text-gray-800 hover:bg-white transition-colors duration-200 shadow-sm cursor-pointer"
          aria-label="Close modal"
        >
          <FiX size={20} />
        </button>

        {/* Hero Image */}
        <div className="overflow-hidden rounded-t-2xl">
          <picture>
            <source srcSet={project.imageWebp} type="image/webp" />
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className="w-full aspect-video object-cover"
            />
          </picture>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-10">
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-medium uppercase tracking-wider text-purple-600">
              {PROJECT_CATEGORIES[project.category]}
            </span>
            <span className="text-xs text-gray-400">{project.year}</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-1">
            {project.title}
          </h2>
          {project.role && (
            <p className="text-sm text-gray-500 mb-4">{project.role}</p>
          )}

          {/* Full Description */}
          <p className="text-gray-600 leading-relaxed mb-8">
            {project.fullDescription || project.description}
          </p>

          {/* Case Study Sections */}
          {caseStudy && (
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  The Challenge
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {caseStudy.problem}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  The Solution
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Key Results
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {caseStudy.results}
                </p>
              </div>

              {/* Highlights */}
              {caseStudy.highlights && caseStudy.highlights.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Highlights
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {caseStudy.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full px-3 py-1 text-sm font-medium bg-purple-50 text-purple-700 border border-purple-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white font-medium py-2.5 px-5 rounded-lg text-sm hover:from-purple-600 hover:via-pink-600 hover:to-red-500 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <FaExternalLinkAlt size={12} />
                  Visit Live Site
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-800 font-medium py-2.5 px-5 rounded-lg text-sm transition-colors duration-200"
                >
                  <FaGithub size={14} />
                  View Source Code
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};
