"use client";

import { useEffect, useRef, useState } from "react";
import { Search, Lightbulb, ClipboardList, Code2, Eye, Rocket, RefreshCw, LucideIcon } from "lucide-react";
import { SectionTitle } from "@/components/sectionTitle";

type Step = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Discovery",
    description: "Understand the problem and its context: market, users, stakeholders, competitors.",
    icon: Search,
  },
  {
    number: "02",
    title: "Ideation",
    description: "Explore directions fast: concepts and lo-fi prototypes.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Specs",
    description: "Business and technical specs, criteria, constraints, edge cases. Written to align whoever’s building, human or AI.",
    icon: ClipboardList,
  },
  {
    number: "04",
    title: "Build",
    description: "From interface to working product: AI-assisted implementation, coded and tested.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Review & refine",
    description: "Design quality checked against the spec and the craft.",
    icon: Eye,
  },
  {
    number: "06",
    title: "Ship & validate",
    description: "Get it in front of real users and validate it.",
    icon: Rocket,
  },
  {
    number: "07",
    title: "Learn & iterate",
    description: "Watch how it performs, feed it back in. The process doesn’t end, it loops.",
    icon: RefreshCw,
  },
];

const RAIL_LINK_CLASSES =
  "flex items-baseline gap-[12px] py-[10px] px-[12px] rounded-[8px] transition-colors motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--primary)] focus-visible:outline-offset-2";

const HowIWork = () => {
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
    <section id="howIWork" className="flex flex-col gap-[36px] items-start w-full">
      <SectionTitle>How I work</SectionTitle>
      <p className="heading font-bold text-[#d9d9d9] text-[20px] md:text-[24px] leading-[130%]">
        Every project is unique, so I adapt the process on each one, but the structure is always the same.
      </p>

      {/* Desktop: sticky rail + scroll-linked detail */}
      <div className="hidden min-[900px]:grid grid-cols-[280px_1fr] gap-[64px] w-full">
        <nav aria-label="How I work steps" className="sticky top-[96px] self-start">
          <ol className="flex flex-col gap-[4px]">
            {STEPS.map((step, index) => {
              const isActive = index === activeIndex;
              return (
                <li key={step.number}>
                  <a
                    href={`#howIWork-step-${step.number}`}
                    aria-current={isActive ? "step" : undefined}
                    className={`${RAIL_LINK_CLASSES} ${isActive ? "text-[var(--primary)]" : "text-[#919ca8] hover:text-[#d9d9d9]"}`}
                  >
                    <span className="heading font-bold text-[16px] uppercase">{step.title}</span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

        <ol className="flex flex-col">
          {STEPS.map((step, index) => {
            const isActive = index === activeIndex;
            return (
              <li
                key={step.number}
                id={`howIWork-step-${step.number}`}
                ref={(el) => {
                  panelRefs.current[index] = el;
                }}
                aria-label={`Step ${index + 1} of ${STEPS.length}: ${step.title}`}
                className={`flex flex-col gap-[8px] justify-center min-h-[30vh] border-t-[1.3px] border-[var(--card-border)] first:border-t-0 transition-opacity duration-300 motion-reduce:transition-none ${isActive ? "opacity-100" : "opacity-40"
                  }`}
              >
                <span className="heading font-black text-[var(--primary)] text-[64px] leading-[90%] tabular-nums">
                  {step.number}
                </span>
                <div className="flex items-center gap-[8px]">
                  <step.icon size={20} className="shrink-0 text-[var(--primary)]" aria-hidden="true" />
                  <p className="heading font-bold text-[#d9d9d9] text-[22px] uppercase">{step.title}</p>
                </div>
                <p className="text-[16px] text-[#919ca8] leading-[150%] max-w-[480px]">{step.description}</p>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Mobile: plain vertical list, no sticky/scroll interaction */}
      <ol className="flex flex-col w-full min-[900px]:hidden">
        {STEPS.map((step, index) => (
          <li
            key={step.number}
            aria-label={`Step ${index + 1} of ${STEPS.length}: ${step.title}`}
            className="flex flex-col gap-[8px] py-[24px] border-t-[1.3px] border-[var(--card-border)] first:border-t-0 first:pt-0"
          >
            <span className="heading font-black text-[var(--primary)] text-[32px] leading-[90%] tabular-nums">{step.number}</span>
            <div className="flex items-center gap-[8px]">
              <step.icon size={18} className="shrink-0 text-[var(--primary)]" aria-hidden="true" />
              <p className="heading font-bold text-[#d9d9d9] text-[20px] uppercase">{step.title}</p>
            </div>
            <p className="text-[16px] text-[#919ca8] leading-[150%]">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export { HowIWork };
