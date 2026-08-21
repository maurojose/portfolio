import Image from "next/image";
import { PillButton } from "@/components/pillButton";
import { WhatsappIcon } from "@/components/whatsappIcon";
import { SectionTitle } from "@/components/sectionTitle";
import { WorkCard } from "@/components/workCard";
import { HowIWork } from "@/components/howIWork";
import { Experience } from "@/components/experience";
import { MyLab } from "@/components/myLab";
import { AchievementCard } from "@/components/achievementCard";
import { DotField } from "@/components/dotField";
import { JsonLd } from "@/components/jsonLd";
import { homeGraph } from "@/lib/jsonLd";
import { SITE, CASE_STUDIES } from "@/lib/site";

const WHATSAPP = SITE.whatsapp;

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <JsonLd data={homeGraph()} />
      <section className="relative flex flex-col justify-center w-full min-h-screen overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <DotField
            dotRadius={1.5}
            dotSpacing={18}
            bulgeStrength={10}
            glowRadius={180}
            sparkle
            gradientFrom="rgba(226, 52, 19, 0.3)"
            gradientTo="#E33413"
            glowColor="color-mix(in srgb, var(--background) 10%, transparent)"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-64 md:h-80 bg-gradient-to-b from-transparent to-[var(--background)] pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center gap-6 w-full md:max-w-[1200px] mx-auto px-[24px] md:px-[48px] lg:px-[96px]">
          <div className="flex flex-col gap-[48px] w-full items-center">
            <h1 className="heading font-black text-[28px] sm:text-[38px] md:text-[44px] lg:text-[52px] text-center md:text-left uppercase leading-[95%] max-w-[560px] w-full">
              <span className="text-[var(--primary)]">From product thinking</span><span className="text-[var(--neutral-2)]"> to working product.</span>
            </h1>
            <div className="flex flex-col gap-5 md:gap-12 items-center md:items-start w-full max-w-[560px]">
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-center w-full">
                <div className="relative w-[80px] h-[80px] sm:w-[96px] sm:h-[96px] rounded-full overflow-hidden shrink-0 ring-2 ring-[var(--card-border)]">
                  <Image
                    src="/aboutMeNew.png"
                    alt="Mauro José, product designer"
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <p className="heading  text-[#d9d9d9] text-[15px] sm:text-[16px] md:text-[18px] flex-1 text-center md:text-left">
                  <span className="text-[var(--primary)] font-bold">Hi, I’m Mauro José,</span> a multidisciplinary designer with 14+ years of experience across visual, UX, and product design. I work across the full design process, from early direction and flows to implementation and delivery.
                </p>
              </div>
              <div className="flex flex-wrap gap-[12px] w-full items-center justify-center md:justify-start">
                <PillButton href="#selectedWork" variant="outline" external={false}>
                  Explore my work
                </PillButton>
                <PillButton href={WHATSAPP} icon={<WhatsappIcon />}>talk to me</PillButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center w-full max-w-[1400px] gap-[72px] md:gap-[96px] px-[24px] md:px-[48px] lg:px-[96px] pb-[96px]">
        <section id="selectedWork" className="flex flex-col gap-[36px] items-center w-full">
          <SectionTitle>Selected work</SectionTitle>
          <div className="flex flex-col gap-[24px] w-full">
            {CASE_STUDIES.map((study, index) => (
              <WorkCard
                key={study.slug}
                eyebrow={study.eyebrow}
                title={study.title}
                image={study.cover.replace("/", "")}
                ctaText="View case"
                ctaLink={`/cases/${study.slug}`}
                reverse={index % 2 === 1}
              />
            ))}
            <WorkCard
              eyebrow="Ciera genomics"
              title="Designing the Patient Journey"
              image="ciera_genomics.png"
              status="Available soon"
            />
          </div>
        </section>

        <HowIWork />

        <Experience />

        <MyLab />

        <section id="achievements" className="flex flex-col gap-[36px] items-start w-full">
          <SectionTitle>Achievements</SectionTitle>
          <div className="flex flex-col md:flex-row gap-[24px] items-start w-full">
            <AchievementCard
              image="astro.png"
              place="1st Place (2025)"
              title="Astrolescent Hackathon (Radix DLT)"
              bullets={["Built AI-powered crypto assistant using real DeFi data.", "Recognized as best AI + DeFi solution."]}
            />
            <AchievementCard
              image="spain.png"
              place="5th Place (2024)"
              title="European Blockchain Hackathon (Radix DLT)"
              bullets={["Developed launch platform with international multidisciplinary team."]}
            />
            <AchievementCard
              image="trofeu.png"
              place="Graphic Project of the Year (2017)"
              title="National Catholic Music Award"
              bullets={["Graphic Project for a Catholic Rock band.", "Designed album visual identity and complete graphic project."]}
            />
          </div>
        </section>

        <section id="aboutMe" className="flex flex-col gap-[36px] items-start w-full">
          <SectionTitle>about me</SectionTitle>
          <div className="flex flex-col md:flex-row gap-[24px] items-start lg:items-center w-full">
            <p className="flex-1 min-w-[280px] text-[16px] md:text-[20px] leading-[150%]">
              I’m a designer with 14 years of experience spanning visual design, digital products, and web development.
              <br /><br />I began my career in advertising and art direction, where I built a strong foundation in visual craft, communication, and brand thinking while working with global companies such as Johnson & Johnson, AkzoNobel, and NSG.
              <br /><br />Over time, my growing interest in technology and problem-solving led me from designing for brands to designing and building for the web.
              <br /><br />Today, I work across the full product lifecycle — from discovery and interaction design to rapid prototyping and implementation — with a particular interest in AI, emerging interfaces, and the intersection of design and engineering.</p>
            <div className="flex-1 min-w-[280px] aspect-square w-full relative rounded-[16px] overflow-hidden">
              <Image
                src="/aboutMeNew.png"
                alt="Mauro José, product designer"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden bg-[var(--card)] border-[1.3px] border-[var(--card-border)] flex flex-col gap-[24px] items-center justify-center min-h-[280px] md:min-h-[348px] p-[16px] md:p-[48px] rounded-[16px] w-full"
        >
          <div className="absolute inset-0">
            <DotField
              dotRadius={1.5}
              dotSpacing={18}
              bulgeStrength={10}
              glowRadius={180}
              gradientFrom="rgba(226, 52, 19, 0.3)"
              gradientTo="#E33413"
              glowColor="color-mix(in srgb, var(--card) 10%, transparent)"
            />
          </div>
          <div className="relative z-10 flex flex-col gap-[12px] items-center text-center">
            <h2 className="heading font-black text-[var(--primary)] text-[24px] md:text-[32px] uppercase">
              Let’s turn the next idea into a working product.
            </h2>
            <p className="heading font-bold text-[#d9d9d9] text-[20px] md:text-[24px]">Let&apos;s explore it.</p>
          </div>
          <PillButton href={WHATSAPP} size="lg" className="relative z-10" icon={<WhatsappIcon className="w-[20px] h-[20px]" />}>
            talk to me
          </PillButton>
        </section>

        <footer className="relative h-[66px] w-[113px] md:h-[113px] md:w-[193px]">
          <Image src="/LOGO_MJOTA.svg" alt="Mauro José" fill />
        </footer>
      </div>
    </div>
  );
}
