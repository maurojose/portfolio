import { ReactNode } from "react";

type PillButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "filled" | "outline";
  size?: "sm" | "lg";
  icon?: ReactNode;
  className?: string;
  external?: boolean;
};

const PillButton = ({
  href,
  children,
  variant = "filled",
  size = "sm",
  icon,
  className = "",
  external = true,
}: PillButtonProps) => {
  const variantClasses =
    variant === "filled"
      ? "bg-[var(--primary)] text-[#d9d9d9] hover:bg-[#c42e11]"
      : "bg-[var(--card)] border-[1.3px] border-[var(--card-border)] text-[#d9d9d9] hover:border-[var(--primary)]";

  const sizeClasses =
    size === "lg"
      ? "h-[48px] px-[16px] py-[12px] text-[20px] font-black"
      : "h-[40px] px-[16px] py-[8px] text-[14px] font-bold";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-[10px] rounded-[8px] uppercase text-center whitespace-nowrap transition-colors ${variantClasses} ${sizeClasses} ${className}`}
    >
      {children}
      {icon}
    </a>
  );
};

export { PillButton };
