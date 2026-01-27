interface buttonProps {
  ctaText?: string;
  ctaLink?: string;
}
export function Button({ 
  ctaText,
  ctaLink 
}: buttonProps) {
  return (
<a
    href={ctaLink || "#"}
    className="bg-[#e33413] text-[#fff] px-10 py-3 rounded capitalize text-sm text-center hover:bg-[#c42e11] transition-colors w-auto"
>
    {ctaText}
</a>
  )
}