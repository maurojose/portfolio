import { Search, Palette, Code2, Rocket, LucideIcon } from "lucide-react";
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
    description: "Understand the problem and define what success looks like.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description: "Explore, iterate, and shape the right solution.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Build",
    description: "Bring it to life, test, and refine.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Delivery",
    description: "Launch, document, and set up what comes next.",
    icon: Rocket,
  },
];

const HowIWork = () => {
  return (
    <section id="howIWork" className="flex flex-col gap-[36px] items-start w-full">
      <SectionTitle>How I work</SectionTitle>
      <p className="heading font-bold text-[#d9d9d9] text-[20px] md:text-[24px] leading-[130%]">
        Every project is unique, so I adapt the process on each one, but the structure is always the same.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] w-full">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="flex flex-col gap-[12px] bg-[var(--card)] border-[1.3px] border-[var(--card-border)] rounded-[16px] p-[24px]"
          >
            <span className="heading font-black text-[var(--primary)] text-[16px] tabular-nums">
              {step.number}
            </span>
            <div className="flex items-center gap-[8px]">
              <step.icon size={20} aria-hidden="true" className="shrink-0 text-[var(--primary)]" />
              <h3 className="heading font-bold text-[#d9d9d9] text-[18px] uppercase">{step.title}</h3>
            </div>
            <p className="text-[15px] text-[#919ca8] leading-[150%]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { HowIWork };
