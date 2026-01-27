import { Card } from "@/components/card";
import { Case } from "@/components/case";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[360px] w-full max-w-7xl self-center px-[16px] md:px-[24px]">
      <main className="flex flex-col md:flex-row gap-[24px] w-full h-[calc(100vh-64px)] items-center">
        <div id="heroItems" className="flex flex-col max-w-[360px] gap-[16px]">
          <div id="heroIcons" className="flex flex-row justify-center md:justify-start gap-[8px]">
            <a href="https://linkedin.com/in/maurojose" target="_blank" rel="noopener noreferrer" className="heroIcon heroLinkedin"></a>
            <a href="https://wa.me/5512988147485" target="_blank" rel="noopener noreferrer" className="heroIcon heroWpp"></a>
            <a href="/seu-resume.pdf" download className="heroIcon heroResume"></a>
          </div>
          <div id="heroText">
            <h1 className="pb-[6px] text-center md:text-start">HI, I'M MAURO</h1>
            <p className="text-center md:text-start text-[24px]">Product Designer and former Art Director, combining visual excellence, UX thinking, and hands-on execution</p>
          </div>
        </div>
        <div id="heroImage" className="w-full h-[224px] md:h-[416px]">
        </div>
      </main>
      <div id="cases" className="flex flex-col gap-[48px] w-full items-center pb-8">
        <h3 className="uppercase">What I've been working on:</h3>
        <div className="flex flex-col gap-[64px] w-full">
          <Case
            image='rakoonCover.png'
            name='rakoon.fun'
            text='Making Token launch as easy as possible'
            link='/cases/rakoon'
            reverse={false}
          />
          <Case
            image='dexterCover.png'
            name='DeXter'
            text='Enhancing the trading experience on Radix'
            link='bla'
            reverse={true}
          />
        </div>
      </div>
      <div id='aboutMe' className="flex flex-col gap-[48px] w-full max-w-[896px] items-center py-8 my-12">
        <span className="display">ABOUT ME</span>
        <div className="flex flex-col-reverse md:flex-row gap-[48px] w-full items-center">
          <p className="w-full">
            Product Designer with extensive visual expertise developed over 14 years of design experience and a strong foundation in web development.

            <br /><br />I began and built my professional path in communication agencies, working as an art director for brands across various sectors, including major names such as Ahlstrom-Munksjö, Akzonobel, Johnson & Johnson, and NSG. In addition, I worked independently on visual and web development projects, with recognized and award-winning work.

            <br /><br />I am currently focused on designing and developing products for the web, web3, and AI.
          </p>
          <div id='aboutMeImage' className="w-full max-w-[480px] aspect-square relative">
            <Image
              src="/aboutmeImage.png"
              alt="Mauro José, product designer"
              fill
              sizes="(max-width: 698px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

      </div>
      <div id="achievements" className="flex flex-col gap-[48px] w-full items-center py-8">
        <h3 className="uppercase">Achievements and awards:</h3>
        <div className="flex flex-col md:flex-row w-full gap-[32px]">
          <Card image={"astro.png"} sub={"1st Place"} name={"Astrolescent Hackathon (Radix DLT)"} text={`Built AI-powered crypto assistant using real DeFi data. It was recognized as best AI + DeFi solution.`} />
          <Card image={"spain.png"} sub={"5th Place"} name={"European Blockchain Hackathon (Radix DLT) "} text={"Developed launch platform with international multidisciplinary team."} />
          <Card image={"trofeu.png"} sub={"Graphic Project of the Year"} name={"National Catholic Music Award"} text={"Designed an award-winning album visual identity and complete graphic project for a catholic rock band."} />
        </div>
      </div>
      <div id='callMe' className="flex flex-col gap-[48px] w-full max-w-[896px] items-start h-[100vh] justify-center">
        <span className="display uppercase">i love developing ideas.</span>
        <h3>And would love to hear yours. <a href="https://wa.me/5512988147485" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] underline underline-offset-8">Let's talk</a></h3>
        <div id="heroIcons" className="flex flex-row justify-center md:justify-start gap-[8px]">
          <a href="https://linkedin.com/in/maurojose" target="_blank" rel="noopener noreferrer" className="heroIcon heroLinkedin"></a>
          <a href="https://wa.me/5512988147485" target="_blank" rel="noopener noreferrer" className="heroIcon heroWpp"></a>
          <a href="/seu-resume.pdf" download className="heroIcon heroResume"></a>
        </div>
      </div>
    </div>

  );
}
