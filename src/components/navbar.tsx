import Image from "next/image";
import Link from "next/link";
import { PillButton } from "./pillButton";

const LINKEDIN = "https://linkedin.com/in/maurojose";
const EMAIL = "mailto:maurojsoares@gmail.com";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-[var(--background)]/60 ">
      <div className="flex w-full items-center justify-between px-[24px] py-[16px]">
        <Link href="/">
          <Image
            src="/LOGO_MJOTA.svg"
            alt=".MJ."
            width={55}
            height={32}
            priority
          />
        </Link>
        <div className="flex gap-[8px] items-center">
          <div className="flex items-center gap-[4px] md:gap-[8px]">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="heroIcon heroLinkedin w-[32px] h-[32px] md:w-[44px] md:h-[44px]"
            />
            <a
              href={EMAIL}
              aria-label="Email"
              className="heroIcon heroMail w-[32px] h-[32px] md:w-[44px] md:h-[44px]"
            />
          </div>
          <PillButton href="https://wa.me/5512988147485">talk to me</PillButton>
        </div>
      </div>
    </div>
  )
}

export { Navbar };
