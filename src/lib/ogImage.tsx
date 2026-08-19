import { ImageResponse } from "next/og";
import { SITE } from "./site";

const size = { width: 1200, height: 630 };
const contentType = "image/png";

const BACKGROUND = "#030e1a";
const PRIMARY = "#E33413";
const FOREGROUND = "#d9d9d9";
const MUTED = "#919ca8";

type OgImageProps = {
  eyebrow: string;
  title: string;
  footnote?: string;
};

/**
 * Shared 1200x630 social card. Generated from the same strings as the page
 * metadata so previews never drift from the actual titles.
 */
function renderOgImage({ eyebrow, title, footnote }: OgImageProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BACKGROUND,
          padding: "72px 80px",
        }}
      >
        {/* Brand rule */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 44, height: 32, background: PRIMARY }} />
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: FOREGROUND,
              letterSpacing: "-0.01em",
            }}
          >
            {SITE.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 34,
              fontWeight: 700,
              color: PRIMARY,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: FOREGROUND,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 960,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 26, color: MUTED }}>{footnote ?? SITE.jobTitle}</div>
          <div style={{ fontSize: 26, color: MUTED }}>maurojota.com</div>
        </div>
      </div>
    ),
    size
  );
}

export { renderOgImage, size, contentType };
