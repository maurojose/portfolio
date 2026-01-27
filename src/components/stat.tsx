import Image from "next/image";

type StatProps = {
    icon: string;
    alt: string;
    data: string;
    label: string;
};

const Stat = (props:StatProps) =>{
    return(
<div className="flex flex-row p-[20px] w-full md:max-w-[328px] min-w-[156px] bg-[#222222] border-solid border-[1px] border-[#555555] h-[96px] rounded-md gap-[16px]">
    <Image
        src={`/${props.icon}`}
        alt={`/${props.alt}`}
        width={48}
        height={48}
    />
    <div className="flex flex-col w-full justify-center">
        <h5>{props.data}</h5>
        <p>{props.label}</p>
    </div>
</div>
    )
};

export {Stat};