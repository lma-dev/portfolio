import { CONTACT } from "../constants";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div className="pb-16">
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-bold text-gray-800"
      >
        Get In Touch
      </motion.h2>

      {/* Contact Info */}
      <div className="text-center tracking-tight">
        {/* Address */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 text-gray-600"
        >
          {CONTACT.address}
        </motion.p>

        {/* Phone */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 text-gray-600"
        >
          {CONTACT.phone}
        </motion.p>

        {/* Email */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`mailto:${CONTACT.email}`}
          className="my-4 inline-block text-purple-600 font-medium border-b-2 border-purple-600 hover:text-purple-700 hover:border-purple-700"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};
