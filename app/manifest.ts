import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Lantern Literary Society",
    short_name: "The Lantern",
    description:
      "A book committee and reading community. Read, discuss, discover and connect.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF7EE",
    theme_color: "#082137",
    icons: [
      { src: "/icon-192-v3.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512-v3.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
