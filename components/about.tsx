"use client";

import React from "react";
import SectionHeading from "./section_heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading children={"About me"}></SectionHeading>
      <p className="mb-3">
        With over <span style={{ fontWeight: "bold" }}>1 year</span> of
        experience in Instancy software, I have a solid understanding of{" "}
        <span style={{ fontWeight: "bold" }}>Artificial Intelligence</span>,{" "}
        <span style={{ fontWeight: "bold" }}>Machine Learning</span>, and{" "}
        <span style={{ fontWeight: "bold" }}>Computer Vision</span>. Proficient
        in using <span style={{ fontWeight: "bold" }}>JavaScript</span>,{" "}
        <span style={{ fontWeight: "bold" }}>Node.js</span>, and{" "}
        <span style={{ fontWeight: "bold" }}>React.js</span> for frontend
        development. Built a website that uses{" "}
        <span style={{ fontStyle: "italic" }}>AI</span> to generate multimedia
        content. Designed a multimedia generation system that utilizes{" "}
        <span style={{ fontStyle: "italic" }}>OpenAI</span> and{" "}
        <span style={{ fontStyle: "italic" }}>Lang Chain</span>. Actively
        involved in the{" "}
        <span style={{ textDecoration: "underline" }}>
          machine learning community
        </span>
        , sharing insights and expertise. Have public repositories where I
        demonstrate detailed approaches to{" "}
        <span style={{ fontStyle: "italic" }}>AI development</span>. Possess{" "}
        <span style={{ fontWeight: "bold" }}>strong leadership skills</span> and
        the ability to motivate others. Excellent at communication, making
        decisions, and resolving conflicts.
      </p>
    </motion.section>
  );
}
