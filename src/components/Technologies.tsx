import { useRef, useMemo } from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { FaLaravel, FaPhp } from "react-icons/fa6";
import { SiMysql, SiTailwindcss } from "react-icons/si";
import { FaGithub, FaAws } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

const createIconVariants = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: 0,
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
  paused: { y: -10 },
});

const ICON_CONFIGS: { Icon: React.ComponentType<{ className?: string }>; duration: number; className: string }[] = [
  { Icon: FaLaravel, duration: 2.5, className: "text-7xl text-red-400" },
  { Icon: FaPhp, duration: 3, className: "text-7xl text-blue-400" },
  { Icon: SiMysql, duration: 5, className: "text-7xl text-cyan-600" },
  { Icon: TbBrandNextjs, duration: 2, className: "text-7xl text-black-400" },
  { Icon: FaGithub, duration: 6, className: "text-7xl text-black-400" },
  { Icon: FaAws, duration: 4, className: "text-7xl text-white-400" },
  { Icon: SiTailwindcss, duration: 3, className: "text-7xl text-black-400" },
  { Icon: BsBootstrap, duration: 2.5, className: "text-7xl text-black-400" },
];

export const Technologies = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { margin: "100px" });

  const variants = useMemo(
    () => ICON_CONFIGS.map((config) => createIconVariants(config.duration)),
    []
  );

  return (
    <div ref={sectionRef} className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-4xl my-20 text-center"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {ICON_CONFIGS.map(({ Icon, className }, index) => (
          <motion.div
            key={index}
            variants={variants[index]}
            initial="initial"
            animate={isInView ? "animate" : "paused"}
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <Icon className={className} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
