import { ImageResponse, NextRequest } from "next/server";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function og({ params }: { params: { dynamic: string } }) {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 tw="text-2xl">
          OG Image for page: <span tw="text-red-500">{params.dynamic}</span>
        </h1>
      </div>
    ),
    size
  );
}
