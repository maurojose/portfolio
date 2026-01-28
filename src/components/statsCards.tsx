import { ReactNode } from "react";
import Image from "next/image";

interface StatsCardProps {
    icon: string;
    value: string;
    label: string;
}

export function StatsCard({ icon, value, label }: StatsCardProps) {
    return (
        <div className="bg-[#222] border border-[#555] rounded-lg p-5 flex items-center gap-4 min-w-[200px] flex-1">
            <div className="flex items-center justify-center w-10 h-10 shrink-0">
                <Image
                    src={`/${icon}`}
                    alt={`/${label}`}
                    width={48}
                    height={48}
                />
            </div>
            <div className="flex flex-col gap-1 flex-1 min-w-0">
                <p className="text-2xl text-[#e33413] capitalize truncate">
                    {value}
                </p>
                <p className="text-sm text-[#d9d9d9] break-words">
                    {label}
                </p>
            </div>
        </div>
    );
}

interface StatsGridProps {
    children: ReactNode;
}

export function StatsGrid({ children }: StatsGridProps) {
    return (
        <section className="w-full">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    {children}
                </div>
            </div>
        </section>
    );
}
