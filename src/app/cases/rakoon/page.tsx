import Image from "next/image";
import { StatsGrid, StatsCard } from "@/components/statsCards";
import { ProjectInfo } from "@/components/projectInfo";
import { Paragraph } from "@/components/paragraph";


export default function Case() {

    const contributions = [
        "Brand Design\nDesign Direction",
        "Interaction Design\nVisual Design",
        "Prototyping\nGamification & engagement"
    ];

    return (
        <div className="flex flex-col items-center justify-start min-h-[360px] w-full max-w-7xl self-center px-[16px] md:px-[24px] py-[48px] gap-[48px]">
            <h4>
                Making Token launch as easy as possible
            </h4>
            <div className="flex relative w-full aspect-video">
                <Image
                    src={"/rakoon_intro.jpg"}
                    alt={'Rakoon.fun UI'}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                />
            </div>
            <StatsGrid>
                <StatsCard
                    icon="linkedin-w.svg"
                    value="$ 50.000"
                    label="Total transaction volume"
                />
                <StatsCard
                    icon="linkedin-w.svg"
                    value="200+"
                    label="Launched tokens"
                />
                <StatsCard
                    icon="linkedin-w.svg"
                    value="~600"
                    label="Unique active wallets"
                />
                <StatsCard
                    icon="linkedin-w.svg"
                    value="400"
                    label="Members on community"
                />
            </StatsGrid>
            <ProjectInfo
                role="UX/UI designer"
                timeline="4 months"
                contributions={contributions}
                ctaText="Visit dapp"
                ctaLink="#"
            />
            <Paragraph title="Overview" text={`Rakoon.fun is a launchpad designed to empower Web3 communities by providing accessible, and engaging memecoin launches. I'm responsable for shaping the platform’s branding, designing the user interface and contribute to product strategy and community engagement.`} />
            <Paragraph
                title="The Problem"
                highlight="How can anyone launch a token instantly without technical knowledge or upfront liquidity?"
                text={`\n**Making a memecoin usually would require:**
\n- Creating a token
\n- Setting up a liquidity pool on a Dex
\n- Providing upfront capital for liquidity
\n- Keep liquidity on pool

\n**As a result, the process becomes slower, more complex, time-consuming, and costly.**

`}
            />
            <Paragraph title="Goals" highlight={`- Make token creation intuitive for users across different levels of Web3 knowledge.
- Provide liquidity for the newly launched tokens.`} />
            <Paragraph title="Process" text={`1. Rakoon.fun was designed and built over a single weekend for a hackathon. We shipped a simple MVP and decided to continue developing the product after the event.

2. We focused on solving a clear problem: Radix is a small network with low/no liquidity for newly launched tokens, making launches difficult on its DEXs.

3. To move fast, we defined a tight scope:
    - Fast token creation
    - Bonding curve trading
    - A graduation mechanism to add liquidity to a DEX
    - Community profit distribution

I worked on flows, sketches, wireframes, a quick Figma prototype, and a simple but solid MVP UI.

After the hackathon, we opened a Telegram community and kept building based on user feedback and real usage of the dApp.`} />

            <div className="flex relative w-full justify-center">
                <Image
                    src={"/rakoon_process.png"}
                    alt={'Rakoon.fun process'}
                    width={1061}
                    height={549}
                    className="w-full max-w-[1060px] h-auto"
                    quality={100}
                />
            </div>
            <div className="my-12">
                <Paragraph title="Branding Choices & Design" text={`We initially focused on memecoins because they dominate crypto culture. With a market size of over US$43 billion, they are fun, highly social, and an effective way to onboard new users.

The name “Rakoon” was chosen by the community. Since the project started within the DeXter community, we asked members for name suggestions. As the raccoon was already their mascot, they voted for “Rakoon” for its playful and meme-friendly tone, which fit perfectly with the idea of a meme launchpad.

As the visual should be all fun and playful as the meme universe requires, I created a mascot to make the brand more friendly and make the communication easier.`} />
            </div>
            <div className="flex relative w-full justify-center">
                <Image
                    src={"/rakoon_design.png"}
                    alt={'Rakoon.fun design'}
                    width={1060}
                    height={596}
                    className="w-full max-w-[1060px] h-auto"
                    quality={100}
                />
            </div>
            <div className="my-12">
                <Paragraph title="The outcome" text={`**We created a successful platform that:**\n
- Completely abstracts token creation
- Eliminates the need for initial liquidity
- Uses a bonding curve to enable immediate trading
- Reduces launch time, and complexity
- Before you had cost, now if you token is a success you are rewarded with part of fees

**As a team we:**
- Won the 5th place on hackathon, among 20 other teams
- Won 8k from Radix team as grants for launching projects on network
- Helped many communities to start

Radix is a small network with low activity, which resulted in a very small user base, especially during an aggressive bear market. We decided to pause further development because the network was not growing fast enough. However, the project remains live and fully functional.

`} />
            </div>

            <div className="flex relative w-full justify-center">
                <Image
                    src={"/rakoon_ui.jpg"}
                    alt={'Rakoon.fun design'}
                    width={1060}
                    height={1988}
                    className="w-full max-w-[1060px] h-auto"
                    quality={100}
                />
            </div>


            <div className="flex relative w-full justify-center">
                <Image
                    src={"/rakoon_posts.png"}
                    alt={'Rakoon.fun Communication'}
                    width={1060}
                    height={1060}
                    className="w-full max-w-[1060px] h-auto"
                    quality={100}
                />
            </div>
<div className="my-12">
            <Paragraph title="Learnings" text={`- I contributed across the entire product lifecycle, from wireframes, user flows, and prototypes to branding, illustrations, UI, motion, chatbots, and community building. This experience pushed me to learn fast and operate across multiple disciplines.

- In Web3, community engagement is as critical as product quality. Without an active community, even good products tend to fail.

- Building on a small network also meant depending on its growth. This highlighted the risks of ecosystem dependency and the importance of timing.

- The project allowed me to travel, collaborate with a diverse, international team, and learn from different cultures, both professionally and personally.

- I should have documented better everything. I lost a lot of content and sketches.
`} />
</div>
        </div>
    )
}