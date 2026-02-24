import { HERO_CONTENT } from "../constants/index";
import profilePicWebp from "../assets/profileOne.jpg?w=1200&format=webp&quality=90&imagetools";
import profilePicFallback from "../assets/profileOne.jpg?w=1200&quality=90&imagetools";
import { motion } from "framer-motion";
import { BsChatDotsFill } from "react-icons/bs";

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
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <picture>
                  <source srcSet={profilePicWebp} type="image/webp" />
                  <img
                    src={profilePicFallback}
                    alt="Lwin Moe Aung - Full Stack Developer"
                    width={800}
                    height={533}
                    fetchPriority="high"
                    className="rounded-lg shadow-lg"
                  />
                </picture>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Assistant hint */}
      <motion.div
        variants={container(1.5)}
        initial="hidden"
        animate="visible"
        className="mt-8 flex justify-center lg:justify-start"
      >
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(168,85,247,0.25)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.dispatchEvent(new Event("open-chatbot"))}
          className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 px-6 py-3 cursor-pointer shadow-md hover:shadow-lg transition-shadow"
        >
          <BsChatDotsFill className="text-white" size={16} />
          <span className="text-sm font-semibold text-white tracking-wide">Let's Chat</span>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
