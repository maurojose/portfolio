import { renderOgImage, size, contentType } from "@/lib/ogImage";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — ${SITE.jobTitle}`;
export { size, contentType };

export default function Image() {
  return renderOgImage({
    eyebrow: SITE.jobTitle,
    title: "From product thinking to working product.",
  });
}
