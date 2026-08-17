"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionTitle } from "@/components/sectionTitle";
import { LabModal } from "@/components/labModal";

type LabProject = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
};

const LAB_PROJECTS: LabProject[] = [
  {
    title: "JunteSelinhos",
    subtitle: "The simplest way to keep your customers coming back",
    description: "JunteSelinhos is a frictionless digital loyalty card for small businesses: merchants can create a card in minutes, add stamps for customers using their email, phone number, or a QR code at the counter, and customers can track their accumulated stamps and redeem rewards with a code.<br/><br/>MVP built with Claude Code.",
    image: "junte.png",
    ctaText: "Live version",
    ctaLink: "https://junteselinhos.com.br",
  },
  {
    title: "TraitWiz",
    subtitle: "Create NFTS collections like magic.",
    description: `Solo-built tool that turns layered trait artwork into complete, mintable NFT collections.<br/><br/>- Rarity-weighted trait randomization with uniqueness guarantees<br/>- Cloud-based image compositing pipeline + IPFS storage for final assets<br/>- Wallet-based auth via Radix DLT<br/>- Stack: Next.js, Firebase, Google Cloud Storage, custom microservice<br/><br/>Built end-to-end solo — architecture, backend logic, and integrations — with AI assistance on cloud setup and one particularly hard sampling algorithm. <br/><br/>Launched as MVP but never continued commercially, but proof of shipping a working multi-system product alone.`,
    image: "traitWiz.png",
    ctaText: "GitHub version",
    ctaLink: "https://github.com/maurojose/TraitWiz",
  },
];

const MyLab = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeProject = activeIndex !== null ? LAB_PROJECTS[activeIndex] : null;

  return (
    <section id="myLab" className="flex flex-col gap-[36px] items-start w-full">
      <SectionTitle>my lab</SectionTitle>
      <p className="heading font-bold text-[#d9d9d9] text-[20px] md:text-[24px]">
        Experiments, prototypes and ideas I build to explore new ways.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] items-start w-full">
        {LAB_PROJECTS.map((project, index) => (
          <button
            key={project.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-haspopup="dialog"
            aria-label={`View ${project.title} project`}
            className="group relative bg-[var(--card)] border-[1.3px] border-[var(--card-border)] aspect-square w-full rounded-[8px] overflow-hidden cursor-pointer transition-colors hover:border-[var(--primary)]"
          >
            <Image
              src={`/${project.image}`}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

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
