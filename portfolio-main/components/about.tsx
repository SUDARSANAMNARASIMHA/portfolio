"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I'm a passionate <span className="font-semibold">Computer Science and Design</span> student at <span className="font-semibold">Sagi Ramakrishnam Raju Engineering College</span> with a strong academic grade (<span className="font-semibold">CGPA 8.79</span>). Through my internship at <span className="font-semibold">Bizcraft Advisors</span> and personal projects, I've gained hands-on experience in <span className="font-semibold">full-stack web development, app development, cloud computing</span>, and leveraging cutting-edge technologies like <span className="font-semibold">AI/ML models and workflow automation tools</span>.
      </p>

      <p className="mb-3">
        I thrive on tackling complex challenges and delivering innovative solutions. At <span className="font-semibold">Bizcraft Advisors</span>, I played a pivotal role in automating manual processes using generative AI models, resulting in a <span className="font-semibold">90% reduction in workload</span>. My expertise in back-end development with <span className="font-semibold">Python's FastAPI and Docker</span>, coupled with proficiency in front-end frameworks like <span className="font-semibold">Next.js</span>, allowed me to build <span className="font-semibold">high-performance applications with responsive user experiences</span>.
      </p>

      <p>
        Beyond technical skills, I'm a lifelong learner committed to continuous self-improvement. I'm excited to embark on new challenges and contribute my expertise to drive innovation and success.
      </p>
    </motion.section>
  );
}