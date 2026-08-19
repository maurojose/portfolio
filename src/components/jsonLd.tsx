type JsonLdProps = {
  data: object;
};

/**
 * Renders a structured-data block into the server HTML so crawlers and
 * generative engines see it without executing JavaScript.
 */
const JsonLd = ({ data }: JsonLdProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
  />
);

export { JsonLd };
