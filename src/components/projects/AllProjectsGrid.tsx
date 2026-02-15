import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project, ProjectCategory } from "../../types/project";
import { CategoryFilter } from "./CategoryFilter";
import { CompactProjectCard } from "./CompactProjectCard";

interface AllProjectsGridProps {
  projects: Project[];
}

const INITIAL_VISIBLE = 6;
const LOAD_MORE_COUNT = 6;

export const AllProjectsGrid = ({ projects }: AllProjectsGridProps) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const categories = useMemo(() => {
    const cats = new Set<ProjectCategory>();
    projects.forEach((p) => cats.add(p.category));
    return Array.from(cats);
  }, [projects]);

  const filteredProjects = useMemo(
    () =>
      activeCategory === "all"
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [projects, activeCategory]
  );

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(INITIAL_VISIBLE);
  };

  return (
    <div className="mt-20">
      <motion.h3
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-gray-800 text-center mb-8"
      >
        All Projects
      </motion.h3>

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <CompactProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() =>
              setVisibleCount((prev) => prev + LOAD_MORE_COUNT)
            }
            className="border border-gray-300 text-gray-600 hover:border-purple-400 hover:text-purple-600 rounded-lg px-6 py-2.5 text-sm font-medium transition-colors duration-200 cursor-pointer"
          >
            Show More Projects ({visibleCount} of {filteredProjects.length})
          </button>
        </div>
      )}
    </div>
  );
};
