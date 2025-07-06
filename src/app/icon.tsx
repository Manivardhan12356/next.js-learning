// app/icon/route.tsx (for App Router in Next.js 13+)

import { ImageResponse } from "next/og";

// Tell Next.js to run this on the Edge runtime
export const runtime = "edge";

// Set icon size and content type
export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

// Export your default function for image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000",
          color: "#fff",
          fontSize: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        🚀
      </div>
    ),
    {
      width: 32,
      height: 32,
    }
  );
}
