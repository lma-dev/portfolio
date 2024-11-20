import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <div className="border-b border-gray-300 pb-8">
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl font-bold text-gray-800"
      >
        Some Projects
      </motion.h2>

      {/* Projects List */}
      {PROJECTS.map((project, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          {/* Project Image */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              src={project.image}
              alt="project"
              className="mb-6 rounded-lg shadow-md"
              width={150}
              height={150}
            />
          </motion.div>

          {/* Project Details */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 text-lg font-semibold text-gray-800">
              {project.title}
            </h6>
            <p className="mb-4 text-gray-600">{project.description}</p>
            {/* Technologies */}
            {project.technologies.map((technology, techIndex) => (
              <span
                key={techIndex}
                className="rounded px-2 py-1 font-medium bg-gray-200 text-purple-600 text-sm mr-2 mt-2 inline-block"
              >
                {technology}
              </span>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};
