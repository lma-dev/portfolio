import { motion } from "framer-motion";
import type { ProjectCategory } from "../../types/project";
import { PROJECT_CATEGORIES } from "../../types/project";

interface CategoryFilterProps {
  categories: ProjectCategory[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  const options: { key: string; label: string }[] = [
    { key: "all", label: "All" },
    ...categories.map((cat) => ({ key: cat, label: PROJECT_CATEGORIES[cat] })),
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {options.map((option) => (
        <button
          key={option.key}
          onClick={() => onCategoryChange(option.key)}
          className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
        >
          {activeCategory === option.key && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-400"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <span
            className={`relative z-10 ${
              activeCategory === option.key
                ? "text-white"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            {option.label}
          </span>
        </button>
      ))}
    </div>
  );
};
