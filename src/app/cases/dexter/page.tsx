import Image from "next/image";
import { StatsGrid, StatsCard } from "@/components/statsCards";
import { ProjectInfo } from "@/components/projectInfo";
import { Paragraph } from "@/components/paragraph";


export default function Case() {

    const contributions = [
        "UX/UI redesign\nCommunity-driven design iteration",
        "Design system\nVisual Design"
    ];

    return (
        <div className="flex flex-col items-center justify-start min-h-[360px] w-full max-w-7xl self-center px-[16px] md:px-[24px] py-[48px] gap-[48px]">
            <h4>
                Enhancing the trading experience on Radix
            </h4>
            <div className="flex relative w-full aspect-video">
                <Image
                    src={"/dexter_intro.jpg"}
                    alt={'Dexter UI'}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-xl"
                    priority
                />
            </div>
            <StatsGrid>
                <StatsCard
                    icon="transaction.svg"
                    value="35%"
                    label="Faster order flow completion"
                />
                <StatsCard
                    icon="down.svg"
                    value="50%"
                    label="Fewer input errors"
                />
                <StatsCard
                    icon="dashboard.svg"
                    value="90%"
                    label="Clearer trading dashboards"
                />
            </StatsGrid>
            <ProjectInfo
                role="UX/UI designer"
                timeline="4 months"
                contributions={contributions}
                ctaText="Visit dapp"
                ctaLink="http://dexteronradix.com"
            />
            <Paragraph title="Overview" text={`Dexter is a collaborative order book exchange built on the Radix Network. I was responsible for improving the platform’s UX/UI, leading interface redesigns, building a scalable design system, and collaborating closely with the community and developers to shape product decisions.`} />
            <Paragraph
                title="The Problem"
                highlight="How can we improve Dexter’s trading interface to reduce friction, increase clarity, and build user confidence in order execution?"
            />
            <Paragraph title="Goals" text={`- **Improve trading speed and flow efficiency**
            Success metric: reduction in the time required to create and confirm an order.
- **Reduce user errors during trading**
            Success metric: reduction in input errors and manual corrections in the trading flow.
- **Increase clarity and confidence in the interface**
            Success metric: increase in perceived dashboard clarity, based on user feedback.
- **Provide clear and immediate feedback for user actions**
            Success metric: Lower friction and fewer abandoned or repeated actions during order execution.
- **Build a consistent and scalable design systemSuccess metric:**
            Reusable components adopted across core trading features and new product areas.`}

            />
            <Paragraph title="Process" text={`**1. Discover**
    Usability audit, community conversations, and user surveys to identify friction points and usability gaps in the trading experience.
**2. Define**
   Insight clustering with developers and community members to prioritize high-impact problems and opportunities.
**3. Explore**
    Wireframing and solution exploration focused on clarity, consistency, and error prevention across core trading flows.
**4. Design & Systemize**
    High-fidelity redesign of key trading components and creation of a scalable design system.
**5. Validate & Iterate**
    Continuous prototyping, community feedback, developer collaboration, and iterative improvements as new features were introduced.
                `} />

            <div className="flex relative w-full justify-center">
                <Image
                    src={"/dexter_discover.png"}
                    alt={'DeXter discovery'}
                    width={1061}
                    height={549}
                    className="w-full max-w-[1060px] h-auto"
                    quality={100}
                />
            </div>

            <h6>INITIAL DESIGN</h6>

            <div className="flex relative w-full justify-center">
                <Image
                    src={"/dexter_initial.png"}
                    alt={'Rakoon.fun design'}
                    width={1060}
                    height={1988}
                    className="w-full max-w-[1060px] h-auto rounded-lg"
                    quality={100}
                />
            </div>

            <div className="my-12">
                <Paragraph title="The outcome" text={`- 35% faster order creation and confirmation, reducing friction in the trading flow.
- 50% reduction in input errors and manual corrections, improving accuracy and user confidence.
- 90% increase in perceived dashboard clarity, based on community user feedback.
- More consistent and predictable trading experience, supported by a unified design system.
- Improved collaboration between design and development, enabling faster iteration and feature delivery.
- Stronger community trust and engagement, driven by transparent feedback loops and co-creation.
`} />
            </div>

            <div className="flex relative w-full justify-center">
                <Image
                    src={"/dexter_mobile.jpg"}
                    alt={'dexter mobile version'}
                    width={1060}
                    height={1988}
                    className="w-full max-w-[1060px] h-auto rounded-lg"
                    quality={100}
                />
            </div>


            <div className="flex relative w-full justify-center">
                <Image
                    src={"/dexter_tab.jpg"}
                    alt={'dexter desktop version'}
                    width={1060}
                    height={1060}
                    className="w-full max-w-[1060px] h-auto rounded-lg"
                    quality={100}
                />
            </div>

            <div className="flex relative w-full justify-center">
                <Image
                    src={"/dexter_desk.jpg"}
                    alt={'dexter landing page'}
                    width={1060}
                    height={1988}
                    className="w-full max-w-[1060px] h-auto rounded-lg"
                    quality={100}
                />
            </div>
        </div>
    )
}