import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex h-[64px] w-full px-[16px] md:px-[24px] py-[16px]">
      <div>

        <Image
          src="/LOGO_MJOTA.svg"
          alt="Next.js logo"
          width={56}
          height={24}
          priority
        />

      </div>
    </div>
  )
}

export {Navbar};