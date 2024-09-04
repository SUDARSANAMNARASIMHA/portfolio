"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
      {skillsData.filter((skill): skill is { name: "HTML" | "CSS" | "JavaScript" | "PHP"; icon: IconType } => skill !== undefined && skill.name !== undefined && skill.icon !== undefined).map(({ name, icon: Icon }, index) => (
          <motion.li
            className="bg-white border border-black rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 flex items-center gap-2"
            key={name}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <span>{name}</span>
            {Icon && <Icon className="text-xl" aria-label={`${name} icon`} />}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
