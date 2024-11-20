import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/kevinRushProfile.jpg";
import { motion } from "framer-motion";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
    },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-gray-300 pb-8 lg:mb-20">
      <div className="flex flex-wrap">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-4xl font-light tracking-tight lg:mt-12 lg:text-6xl text-gray-800"
            >
              Lwin Moe Aung
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-purple-500 via-gray-600 to-blue-500 bg-clip-text text-transparent tracking-tight text-2xl lg:text-3xl"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-xl font-light tracking-tight text-gray-600"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1.2 }}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                src={profilePic}
                alt="Profile"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="mt-8 flex justify-center lg:justify-start">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:from-purple-600 hover:via-pink-600 hover:to-red-500 focus:ring-4 focus:ring-pink-300"
        >
          Download CV
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
