"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section_heading";
import { projectsData } from "../lib/data";
import Project from "./project";
import { UseActiveSectionContext } from "@/context/active_section_context";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView();
  const { setActiveSection } = UseActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      className="mb-28 text-center leading-8 sm:mb-40m scroll-m-28"
      id="projects"
    >
      <SectionHeading children={"my Projects"}></SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
