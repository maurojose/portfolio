import Image from "next/image";

type SectionTitleProps = {
  children: string;
};

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <div className="flex gap-[9px] items-center w-full">
      <div className="relative shrink-0 size-[22px]">
        <Image src="/section-icon.svg" alt="" fill />
      </div>
      <h3 className="uppercase text-[24px] md:text-[32px]">{children}</h3>
    </div>
  );
};

export { SectionTitle };
