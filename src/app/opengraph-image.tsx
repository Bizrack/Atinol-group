import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Atinol Group Corp (T.A.G. Corp) – Safeguarding Your Assets in a Cyber World";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e3a5f 0%, #0d9488 50%, #059669 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "white",
            letterSpacing: "0.05em",
            marginBottom: 16,
          }}
        >
          TAG
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.95)",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.3,
          }}
        >
          Safeguarding Your Assets in a Cyber World
        </div>
        <div
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.8)",
            marginTop: 24,
          }}
        >
          The Atinol Group Corp · IT & Cybersecurity Consulting
        </div>
      </div>
    ),
    { ...size }
  );
}
