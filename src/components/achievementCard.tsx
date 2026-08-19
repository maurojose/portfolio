import Image from "next/image";

type AchievementCardProps = {
  image: string;
  place: string;
  title: string;
  bullets: string[];
};

const AchievementCard = ({ image, place, title, bullets }: AchievementCardProps) => {
  return (
    <div className="flex flex-col gap-[20px] flex-1 min-w-[200px] w-full">
      <div className="h-[299px] w-full relative rounded-[8px] overflow-hidden">
        <Image
          src={`/${image}`}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col">
        <p className="heading font-bold text-[var(--primary)] text-[20px]">{place}</p>
        <h3 className="font-[family-name:var(--font-inter)] text-[20px] text-[#d9d9d9]">{title}</h3>
        <ul className="pt-[8px] text-[10px] text-[#d9d9d9] font-light">
          {bullets.map((b) => (
            <li key={b}>· {b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { AchievementCard };
