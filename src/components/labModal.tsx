"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect } from "react";
import { PillButton } from "./pillButton";

type LabModalProps = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  onClose: () => void;
};

const LabModal = ({ image, title, subtitle, description, ctaText, ctaLink, onClose }: LabModalProps) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="presentation"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-[16px] md:p-[24px]"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="labModalTitle"
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col md:flex-row gap-[24px] md:gap-[40px] items-start w-full max-w-[860px] max-h-[90vh] overflow-y-auto bg-[var(--card)] border-[1.3px] border-[var(--card-border)] p-[24px] md:p-[40px] rounded-[16px] md:rounded-[24px]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute z-10 right-[16px] top-[16px] md:right-[24px] md:top-[24px] flex items-center justify-center size-[36px] shrink-0 rounded-full bg-[#d9d9d9] text-[#030e1a] hover:bg-white transition-colors"
        >
          <X size={18} />
        </button>

        <div className="relative shrink-0 w-full md:w-[300px] aspect-square rounded-[8px] overflow-hidden bg-[rgba(217,217,217,0.1)]">
          <Image
            src={`/${image}`}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-[12px] items-start w-full flex-1 pt-[8px] md:pt-[4px]">
          <p id="labModalTitle" className="heading font-black text-[var(--primary)] text-[24px] md:text-[32px] uppercase">
            {title}
          </p>
          <p className="heading font-bold text-[#d9d9d9] text-[18px] md:text-[20px]">{subtitle}</p>
          <p
            className="text-[#919ca8] text-[14px] md:text-[16px] leading-[150%]"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <PillButton href={ctaLink} external={false} size="lg" className="w-full mt-[12px] md:mt-auto">
            {ctaText}
          </PillButton>
        </div>
      </div>
    </div>
  );
};

export { LabModal };
