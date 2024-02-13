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
    <section className="bg-gray-100 max-w-[42rem] border border-black/[5] owerflow-hidden sm:pr-8">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
      <ul className="flex flex-wrap mt-4 gap-2">
        {tags.map((tag, index) => (
          <li
            className="bg-black/[0.7] px-3 py-1 text-[0.7] uppercase tracking-wider text-white rounded-full"
            key={index}
          >
            {tag}
          </li>
        ))}
      </ul>
    </section>
  );
}
