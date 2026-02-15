import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS } from "../constants";
import type { Project } from "../types/project";
import { FeaturedProjects } from "./projects/FeaturedProjects";
import { CaseStudyModal } from "./projects/CaseStudyModal";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const sortedProjects = useMemo(
    () => [...PROJECTS].sort((a, b) => a.order - b.order),
    []
  );

  return (
    <div className="border-b border-gray-300 pb-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl font-bold text-gray-800"
      >
        Featured Projects
      </motion.h2>

      <FeaturedProjects
        projects={sortedProjects}
        onSelectProject={setSelectedProject}
      />

      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
