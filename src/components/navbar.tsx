import Image from "next/image";
import Link from "next/link";
import { PillButton } from "./pillButton";
import { SITE } from "@/lib/site";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[var(--background)]/60 ">
      <nav aria-label="Main" className="flex w-full items-center justify-between px-[24px] py-[16px]">
        <Link href="/" aria-label="Mauro José — home">
          <Image
            src="/LOGO_MJOTA.svg"
            alt="Mauro José"
            width={55}
            height={32}
            priority
          />
        </Link>
        <div className="flex gap-[8px] items-center">
          <div className="flex items-center gap-[4px] md:gap-[8px]">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mauro José on LinkedIn"
              className="heroIcon heroLinkedin w-[32px] h-[32px] md:w-[44px] md:h-[44px]"
            />
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Email Mauro José"
              className="heroIcon heroMail w-[32px] h-[32px] md:w-[44px] md:h-[44px]"
            />
          </div>
          <PillButton href={SITE.whatsapp} ariaLabel="Talk to Mauro José on WhatsApp">
            talk to me
          </PillButton>
        </div>
      </nav>
    </header>
  )
}

export { Navbar };
