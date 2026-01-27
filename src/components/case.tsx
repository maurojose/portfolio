import Image from "next/image";
import { Button } from "./button";
import { link } from "fs";

type CaseProps = {
    image: string;
    name: string;
    text: string;
    link: string;
    reverse: boolean;
};

const Case = (props: CaseProps) => {
    return (
        <div id='caseContainer' className={`flex ${props.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col items-center w-full min-h-[360px] justify-center gap-8`}>
            <div id='caseImage' className="w-full aspect-square relative">
                <Image
                    src={`/${props.image}`}
                    alt={props.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                />
            </div>
            <div id='caseInfo' className="flex flex-col justify-center gap-2 w-full md:w-auto">
                <h5 className="uppercase">{props.name}</h5>
                <div className="w-4 h-2 bg-[var(--primary)]"></div>
                <h4 className="pb-8">
                    {props.text}
                </h4>
                <Button ctaText="View case" ctaLink={props.link}/>

            </div>

        </div>
    )
}

export { Case };