import { motion } from "framer-motion";
import { EDUCATION } from "../constants";

export const Education = () => {
  return (
    <div className="border-b border-gray-300 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl my-20 text-center text-gray-800"
      >
        Education
      </motion.h2>
      <div>
        {EDUCATION.map((edu, index) => (
          <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-gray-600">{edu.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-gray-800">
                {edu.institution}
              </h6>
              <p className="text-gray-600">{edu.degree}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
