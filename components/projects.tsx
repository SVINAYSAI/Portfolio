import React from "react";
import SectionHeading from "./section_heading";
import { projectsData } from "../lib/data";

export default function Projects() {
  return (
    <section>
      <SectionHeading children={"my Projects"}></SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
        /
      </div>
    </section>
  );
}

type ProjectsProps = (typeof projectsData)[number];

function Project({ title, description, tags }: ProjectsProps) {
  return (
    <section>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </section>
  );
}
