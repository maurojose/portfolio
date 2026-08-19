import { PillButton } from "./pillButton";

interface InfoItemProps {
  label: string;
  value: string | string[];
}

function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div className="flex flex-col gap-3">
      <dt className="heading text-lg text-[var(--primary)] uppercase tracking-wide">
        {label}
      </dt>
      {Array.isArray(value) ? (
        <dd className="flex flex-wrap gap-4 sm:gap-6 text-sm text-[#d9d9d9] capitalize">
          {value.map((item, index) => (
            <div key={index} className="min-w-[80px]">
              {item.split('\n').map((line, i) => (
                <p key={i} className="mb-0">{line}</p>
              ))}
            </div>
          ))}
        </dd>
      ) : (
        <dd className="text-sm text-[#d9d9d9] capitalize">{value}</dd>
      )}
    </div>
  );
}

interface ProjectInfoProps {
  role?: string;
  timeline?: string;
  contributions?: string[];
  ctaText?: string;
  ctaLink?: string;
}

export function ProjectInfo({ 
  role, 
  timeline, 
  contributions, 
  ctaText,
  ctaLink 
}: ProjectInfoProps) {
  return (
    <section aria-label="Project details" className="w-full border-y-[1.3px] border-[var(--card-border)] py-8 sm:py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center justify-between">
          <dl className="flex flex-col sm:flex-row flex-wrap gap-8 lg:gap-12">
            {role && <InfoItem label="My Role" value={role} />}
            {timeline && <InfoItem label="Timeline" value={timeline} />}
            {contributions && contributions.length > 0 && (
              <InfoItem label="My Contribution" value={contributions} />
            )}
          </dl>
          {ctaText && (
            <PillButton href={ctaLink || "#"} className="w-full md:w-auto">
              {ctaText}
            </PillButton>
          )}
        </div>
      </div>
    </section>
  );
}
