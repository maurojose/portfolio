import Image from "next/image";
import { PillButton } from "./pillButton";

type WorkCardProps = {
  eyebrow: string;
  title: string;
  image?: string;
  ctaText?: string;
  ctaLink?: string;
  status?: string;
  reverse?: boolean;
};

const WorkCard = ({ eyebrow, title, image, ctaText, ctaLink, status, reverse }: WorkCardProps) => {
  return (
    <div className={`flex ${reverse ? "md:flex-row-reverse" : "md:flex-row"} flex-col items-center gap-[24px] w-full`}>
      <div className="flex-1 min-w-[280px] w-full aspect-square relative rounded-[16px] overflow-hidden bg-[rgba(168,168,168,0.2)]">
        {image && (
          <Image
            src={`/${image}`}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        )}
      </div>
      <div className="flex-1 min-w-[280px] flex flex-col gap-[24px] items-start justify-center w-full p-[8px] md:p-[48px]">
        <div className="flex flex-col gap-[7px] items-start w-full">
          <p className="heading font-black text-[var(--primary)] text-[20px] md:text-[24px] uppercase">{eyebrow}</p>
          <div className="bg-[var(--primary)] h-[11px] w-[15.5px]" />
          <h3 className="heading font-light text-[#d9d9d9] text-[32px] md:text-[48px] leading-[105%]">{title}</h3>
        </div>
        {ctaText && ctaLink && (
          <PillButton href={ctaLink} external={false} ariaLabel={`${ctaText}: ${eyebrow} — ${title}`}>
            {ctaText}
          </PillButton>
        )}
        {status && (
          <div className="bg-[#232e3b] flex h-[40px] items-center justify-center px-[16px] py-[8px] rounded-[8px]">
            <p className="heading font-bold text-[#919ca8] text-[14px] uppercase">{status}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export { WorkCard };
