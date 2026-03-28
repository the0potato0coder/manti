import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "Manticore Studio - Digital Marketing and Creative Agency";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 56,
          background:
            "radial-gradient(circle at 20% 20%, rgba(224,226,32,0.22) 0%, rgba(10,10,15,1) 45%), linear-gradient(135deg, #030305 0%, #0a0a0f 100%)",
          color: "#cececd",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              border: "2px solid #e0e220",
              background: "rgba(224,226,32,0.12)",
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 700 }}>Manticore Studio</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 960 }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05 }}>
            Digital Marketing and Creative Agency
          </div>
          <div style={{ fontSize: 30, opacity: 0.9, lineHeight: 1.3 }}>
            CGI, motion design, branding, and ad campaigns that help brands grow.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            opacity: 0.9,
          }}
        >
          <div>www.manticorestudio.com</div>
          <div style={{ color: "#e0e220", fontWeight: 700 }}>Creative Visual Storytelling</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
