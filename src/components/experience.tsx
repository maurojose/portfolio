"use client";

import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "@/components/sectionTitle";

type Role = {
  company: string;
  title: string;
  period: string;
  bullets: string[];
};

const EXPERIENCE: Role[] = [
  {
    company: "Verge",
    title: "Art Director",
    period: "June 2017 – Present",
    bullets: [
      "Created visual assets for digital campaigns, social media, presentations, events, and print for clients including Ahlstrom-Munksjö, AkzoNobel, Johnson & Johnson, and NSG.",
      "Developed creative concepts and visual solutions for campaigns and projects.",
      "Ensured brand consistency and high visual standards across deliverables.",
    ],
  },
  {
    company: "Rakoon.fun",
    title: "UX/UI Designer",
    period: "October 2024 – July 2025",
    bullets: [
      "Co-built a Web3 platform designed to simplify token launches.",
      "Created the visual identity, UX/UI, prototypes, and Design System.",
      "Conducted research, usability testing, and collaborated closely with developers.",
      "Reached R$250K in transaction volume, 200+ tokens created, and ~500 users.",
    ],
  },
  {
    company: "Dexter Dapp",
    title: "UX/UI Designer",
    period: "January 2024 – January 2025",
    bullets: [
      "Redesigned the platform, including flows, wireframes, prototypes, responsive UI, and a new Design System.",
      "Structured user journeys and information architecture, validating decisions through interviews and usability tests.",
      "Reduced order creation and confirmation time by 35% and input errors by 50%.",
      "Increased perceived dashboard clarity by 90%, based on user feedback.",
    ],
  },
];

const RAIL_LINK_CLASSES =
  "flex items-baseline gap-[12px] py-[10px] px-[12px] rounded-[8px] transition-colors motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--primary)] focus-visible:outline-offset-2";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const panels = panelRefs.current.filter((el): el is HTMLLIElement => el !== null);
    if (panels.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = panels.indexOf(entry.target as HTMLLIElement);
          if (index !== -1) setActiveIndex(index);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    panels.forEach((panel) => observer.observe(panel));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="flex flex-col gap-[36px] items-start w-full">
      <SectionTitle>Work Experience</SectionTitle>
      <p className="heading font-bold text-[#d9d9d9] text-[20px] md:text-[24px] leading-[130%]">
        From creative direction to product design.
      </p>

      {/* One list of roles. Below 900px it reads as a plain vertical list; at
          900px+ it becomes the scroll-linked detail column beside a sticky rail. */}
      <div className="flex flex-col w-full min-[900px]:grid min-[900px]:grid-cols-[280px_1fr] min-[900px]:gap-[64px]">
        <nav
          aria-label="Experience roles"
          className="hidden min-[900px]:block sticky top-[96px] self-start"
        >
          <ol className="flex flex-col gap-[4px]">
            {EXPERIENCE.map((role, index) => {
              const isActive = index === activeIndex;
              return (
                <li key={role.company}>
                  <a
                    href={`#experience-role-${index}`}
                    aria-current={isActive ? "step" : undefined}
                    className={`${RAIL_LINK_CLASSES} ${isActive ? "text-[var(--primary)]" : "text-[#919ca8] hover:text-[#d9d9d9]"}`}
                  >
                    <span className="heading font-bold text-[16px] uppercase">{role.company}</span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

        <ol className="flex flex-col">
          {EXPERIENCE.map((role, index) => {
            const isActive = index === activeIndex;
            return (
              <li
                key={role.company}
                id={`experience-role-${index}`}
                ref={(el) => {
                  panelRefs.current[index] = el;
                }}
                aria-label={`Role ${index + 1} of ${EXPERIENCE.length}: ${role.company}`}
                className={`flex flex-col gap-[8px] py-[24px] first:pt-0 border-t-[1.3px] border-[var(--card-border)] first:border-t-0 transition-opacity duration-300 motion-reduce:transition-none min-[900px]:py-[56px] min-[900px]:first:pt-0 min-[900px]:justify-center min-[900px]:min-h-[30vh] ${isActive ? "opacity-100" : "opacity-100 min-[900px]:opacity-40"
                  }`}
              >
                <span className="heading font-black text-[var(--primary)] text-[32px] min-[900px]:text-[36px] leading-[90%]">
                  {role.company}
                </span>
                <h3 className="heading font-bold text-[#d9d9d9] text-[20px] min-[900px]:text-[22px] uppercase">
                  {role.title}
                </h3>
                <p className="heading text-[12px] text-[#919ca8] uppercase tracking-wide">
                  {role.period}
                </p>
                <ul className="flex flex-col gap-[4px] pt-[8px] max-w-none min-[900px]:max-w-[720px]">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="text-[16px] text-[#919ca8] leading-[150%] list-disc ml-[20px]">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export { Experience };
