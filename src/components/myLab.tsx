"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionTitle } from "@/components/sectionTitle";
import { LabModal } from "@/components/labModal";
import { LAB_PROJECTS } from "@/lib/site";

const MyLab = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeProject = activeIndex !== null ? LAB_PROJECTS[activeIndex] : null;

  return (
    <section id="myLab" className="flex flex-col gap-[36px] items-start w-full">
      <SectionTitle>my lab</SectionTitle>
      <p className="heading font-bold text-[#d9d9d9] text-[20px] md:text-[24px]">
        Experiments, prototypes and ideas I build to explore new ways.
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-[24px] items-start w-full">
        {LAB_PROJECTS.map((project, index) => (
          <li key={project.slug} className="flex flex-col gap-[20px]">
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-haspopup="dialog"
              aria-label={`View ${project.title} project`}
              className="group relative bg-[var(--card)] border-[1.3px] border-[var(--card-border)] aspect-square w-full rounded-[8px] overflow-hidden cursor-pointer transition-colors hover:border-[var(--primary)]"
            >
              <Image
                src={`/${project.image}`}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
            <div className="flex flex-col">
              <h3 className="heading font-bold text-[var(--primary)] text-[20px]">{project.title}</h3>
              <p className="text-[16px] text-[#919ca8] leading-[150%]">{project.subtitle}</p>
            </div>
          </li>
        ))}
      </ul>

      {activeProject && (
        <LabModal
          image={activeProject.image}
          title={activeProject.title}
          subtitle={activeProject.subtitle}
          description={activeProject.description}
          ctaText={activeProject.ctaText}
          ctaLink={activeProject.ctaLink}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </section>
  );
};

export { MyLab };
