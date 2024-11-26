import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "../constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Achievement = () => {
  return (
    <div className="border-b border-gray-300 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl my-20 text-center text-gray-800"
      >
        Achievements
      </motion.h2>
      <div>
        {ACHIEVEMENTS.map((achievement, index) => (
          <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl"
            >
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger>{achievement.title}</AccordionTrigger>
                  <AccordionContent>
                    <p>{achievement.description}</p>
                    <p className="mb-2 text-sm text-gray-600">
                      Year - {achievement.year}
                    </p>

                    {achievement.link && (
                      <span className="text-blue-500 underline hover:text-blue-700">
                        <a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Reference here
                        </a>
                      </span>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
