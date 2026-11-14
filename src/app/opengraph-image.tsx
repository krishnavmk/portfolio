import { ImageResponse } from "next/og";

export const alt = "Krishna Vittal Malik, React Native & Full-Stack Developer in Bengaluru";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: 84,
          background: "linear-gradient(135deg, #0f172a 55%, #312e81)",
          color: "#f8fafc",
        }}
      >
        <div style={{ display: "flex", color: "#a78bfa", fontSize: 32, marginBottom: 24 }}>
          Bengaluru, India
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, marginBottom: 16 }}>
          Krishna Vittal Malik
        </div>
        <div style={{ display: "flex", color: "#e2e8f0", fontSize: 40 }}>
          React Native &amp; Full-Stack Developer
        </div>
      </div>
    ),
    size,
  );
}
