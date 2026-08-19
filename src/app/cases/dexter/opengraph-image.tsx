import { renderOgImage, size, contentType } from "@/lib/ogImage";
import { caseStudyBySlug } from "@/lib/site";

const study = caseStudyBySlug("dexter")!;

export const alt = study.title;
export { size, contentType };

export default function Image() {
  return renderOgImage({
    eyebrow: study.eyebrow,
    title: study.title,
    footnote: "Case study",
  });
}
