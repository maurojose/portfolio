import { SITE, SAME_AS, LAB_PROJECTS, type CaseStudy } from "./site";

/** Lab copy carries <br/> for the modal; structured data needs plain text. */
const toPlainText = (html: string) =>
  html
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();

const PERSON_ID = `${SITE.url}/#person`;
const WEBSITE_ID = `${SITE.url}/#website`;

const personRef = { "@id": PERSON_ID };

const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: SITE.name,
  alternateName: SITE.fullName,
  url: SITE.url,
  image: `${SITE.url}/aboutMeNew.png`,
  jobTitle: SITE.jobTitle,
  description: SITE.description,
  email: `mailto:${SITE.email}`,
  sameAs: SAME_AS,
  knowsAbout: [
    "Product Design",
    "UX Design",
    "UI Design",
    "Design Systems",
    "Web3",
    "Rapid Prototyping",
    "AI-assisted development",
    "Art Direction",
  ],
  award: [
    "1st Place, Astrolescent Hackathon (Radix DLT), 2025",
    "5th Place, European Blockchain Hackathon (Radix DLT), 2024",
    "Graphic Project of the Year, National Catholic Music Award, 2017",
  ],
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE.url,
  name: `${SITE.name} — ${SITE.jobTitle}`,
  description: SITE.description,
  inLanguage: "en",
  publisher: personRef,
};

/** Side projects shown in "My Lab" — both are web apps built by the Person. */
const labProjects = LAB_PROJECTS.map((project) => ({
  "@type": "SoftwareApplication",
  "@id": `${SITE.url}/#lab-${project.slug}`,
  name: project.title,
  alternativeHeadline: project.subtitle,
  description: toPlainText(project.description),
  url: project.ctaLink,
  image: `${SITE.url}/${project.image}`,
  applicationCategory: "WebApplication",
  operatingSystem: "Web browser",
  inLanguage: "en",
  author: personRef,
  creator: personRef,
  isPartOf: { "@id": WEBSITE_ID },
}));

/** Home: ProfilePage whose main entity is the Person, plus the site node. */
function homeGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      website,
      {
        "@type": "ProfilePage",
        "@id": `${SITE.url}/#profilepage`,
        url: SITE.url,
        name: `${SITE.name} — ${SITE.jobTitle}`,
        isPartOf: { "@id": WEBSITE_ID },
        about: personRef,
        mainEntity: personRef,
        hasPart: labProjects.map((p) => ({ "@id": p["@id"] })),
        inLanguage: "en",
      },
      ...labProjects,
    ],
  };
}

/** Case study: CreativeWork authored by the Person, plus its breadcrumb trail. */
function caseStudyGraph(study: CaseStudy) {
  const url = `${SITE.url}/cases/${study.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      website,
      {
        "@type": "CreativeWork",
        "@id": `${url}/#case`,
        url,
        name: study.title,
        headline: study.title,
        description: study.description,
        image: `${SITE.url}${study.cover}`,
        about: study.eyebrow,
        keywords: study.keywords,
        inLanguage: "en",
        author: personRef,
        creator: personRef,
        isPartOf: { "@id": WEBSITE_ID },
        datePublished: study.publishedTime,
        dateModified: study.modifiedTime,
        mentions: [{ "@type": "WebSite", name: study.eyebrow, url: study.liveUrl }],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: study.title, item: url },
        ],
      },
    ],
  };
}

export { homeGraph, caseStudyGraph, PERSON_ID, WEBSITE_ID };
