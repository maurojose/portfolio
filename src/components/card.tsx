import Image from "next/image";

type CardProps = {
    image: string;
    sub: string;
    name: string;
    text: string;
    link?: string;
};

const Card = (props: CardProps) => {

    return (

        <div className="flex flex-row md:flex-col w-full md:max-w-[480px] gap-6 ">
            <div className="aspect-square w-full relative min-w-[130px]">

                <Image
                    src={`/${props.image}`}
                    alt={props.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-md"
                    priority
                />

            </div>
            <div className="flex flex-col gap-1">
                <h5>{props.sub}</h5>
                <h6>{props.name}</h6>
                <p className="text-[14px]">{props.text}</p>
            </div>

        </div>
    )

}

export { Card };