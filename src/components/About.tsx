import aboutImg from "../assets/profileTwo.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
        className="flex flex-wrap"
      >
        {/* Image Section */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8, x: -50 },
            visible: { opacity: 1, scale: 1, x: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95, rotate: 0 }}
            className="flex items-center justify-center"
          >
            <img
              className="rounded-lg shadow-lg transition-all"
              src={aboutImg}
              alt="About"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-4 max-w-xl font-light tracking-tight text-gray-600">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
