interface InfoItemProps {
  label: string;
  value: string | string[];
}

function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div className="flex flex-col gap-3">
      <h6 className="text-lg text-[#e33413] uppercase tracking-wide">
        {label}
      </h6>
      {Array.isArray(value) ? (
        <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-[#d9d9d9] capitalize">
          {value.map((item, index) => (
            <div key={index} className="min-w-[80px]">
              {item.split('\n').map((line, i) => (
                <p key={i} className="mb-0">{line}</p>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-[#d9d9d9] capitalize">{value}</p>
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
    <section className="w-full border-y border-[#555] py-8 sm:py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center justify-between">
          <div className="flex flex-col sm:flex-row flex-wrap gap-8 lg:gap-12">
            {role && <InfoItem label="My Role" value={role} />}
            {timeline && <InfoItem label="Timeline" value={timeline} />}
            {contributions && contributions.length > 0 && (
              <InfoItem label="My Contribution" value={contributions} />
            )}
          </div>
          {ctaText && (
            <a
              href={ctaLink || "#"}
              className="bg-[#e33413] text-[#fff] px-10 py-3 rounded capitalize text-sm text-center hover:bg-[#c42e11] transition-colors w-full md:w-auto"
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
