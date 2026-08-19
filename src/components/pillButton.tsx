import { ReactNode } from "react";
import Link from "next/link";

type PillButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "filled" | "outline";
  size?: "sm" | "lg";
  icon?: ReactNode;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

const PillButton = ({
  href,
  children,
  variant = "filled",
  size = "sm",
  icon,
  className = "",
  external = true,
  ariaLabel,
}: PillButtonProps) => {
  const variantClasses =
    variant === "filled"
      ? "bg-[var(--primary)] text-[#d9d9d9] hover:bg-[#c42e11]"
      : "bg-[var(--card)] border-[1.3px] border-[var(--card-border)] text-[#d9d9d9] hover:border-[var(--primary)]";

  const sizeClasses =
    size === "lg"
      ? "h-[48px] px-[16px] py-[12px] text-[20px] font-black"
      : "h-[40px] px-[16px] py-[8px] text-[14px] font-bold";

  const classes = `inline-flex items-center justify-center gap-[10px] rounded-[8px] uppercase text-center whitespace-nowrap transition-colors ${variantClasses} ${sizeClasses} ${className}`;

  // Route links get next/link for prefetch and client-side navigation.
  // Hash anchors and absolute URLs stay plain anchors.
  const isRoute = !external && href.startsWith("/");

  if (isRoute) {
    return (
      <Link href={href} aria-label={ariaLabel} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
      {icon}
    </a>
  );
};

export { PillButton };
