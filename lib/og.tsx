import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { ImageResponse } from "next/og";

const coverDims = new Map<string, number[]>();
export const OG_SIZE = { width: 1200, height: 630 };

/** Read a /public image, resize it, and return a data URI (satori can't read WebP, so we re-encode). */
async function img(src: string | undefined, w: number, h: number, jpeg = false, inside = false) {
  if (!src) return null;
  try {
    const buf = await fs.readFile(path.join(process.cwd(), "public", src.replace(/^\//, "")));
    const s = sharp(buf).resize(w, h, { fit: inside ? "inside" : "cover" });
    const { data, info } = await (jpeg ? s.jpeg({ quality: 80 }) : s.png()).toBuffer({ resolveWithObject: true });
    coverDims.set(`data:${src}`, [info.width, info.height]);
    return `data:image/${jpeg ? "jpeg" : "png"};base64,${data.toString("base64")}`;
  } catch {
    return null;
  }
}

interface Card {
  kicker: string;
  name: string;
  title: string;
  photo?: string;
  cover?: string;
  banner?: string;
}

export async function renderShareImage(c: Card) {
  const [banner, photo, cover, logo] = await Promise.all([
    img(c.banner, 1200, 630, true),
    img(c.photo, 200, 200),
    img(c.cover, 290, 420, false, true),
    img("/lantern-logo.png", 96, 96),
  ]);
  const [coverW, coverH] = (c.cover && coverDims.get(`data:${c.cover}`)) || [270, 400];
  const navy = "#082137", gold = "#CB9222", cream = "#FBF7EE";
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: navy, color: cream }}>
        {banner && <img src={banner} width={1200} height={630} style={{ position: "absolute", left: 0, top: 0, width: 1200, height: 630, objectFit: "cover" }} />}
        <div style={{ position: "absolute", left: 0, top: 0, width: 1200, height: 630, display: "flex", background: banner ? "linear-gradient(90deg, rgba(8,33,55,0.97) 0%, rgba(8,33,55,0.95) 60%, rgba(8,33,55,0.92) 100%)" : "linear-gradient(135deg, #082137 0%, #0d2f4f 100%)" }} />
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 10, display: "flex", background: gold }} />
        <div style={{ display: "flex", flex: 1, padding: "56px 64px 48px 72px", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: cover ? 700 : 1000 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", color: gold, fontSize: 24, letterSpacing: 5, textTransform: "uppercase", fontWeight: 700 }}>{c.kicker}</div>
              <div style={{ display: "flex", alignItems: "center", marginTop: 32 }}>
                {photo && <img src={photo} width={104} height={104} style={{ borderRadius: 52, border: `4px solid ${gold}`, marginRight: 24, objectFit: "cover" }} />}
                <div style={{ display: "flex", fontSize: c.name.length > 22 ? 48 : 60, fontWeight: 800, lineHeight: 1.1, lineClamp: 2 }}>{c.name}</div>
              </div>
              <div style={{ display: "flex", marginTop: 28, fontSize: 36, lineHeight: 1.25, color: "#E8D9B0", lineClamp: 3 }}>{c.title}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {logo && <img src={logo} width={56} height={56} style={{ borderRadius: 28, marginRight: 16 }} />}
              <div style={{ display: "flex", fontSize: 24, letterSpacing: 3, textTransform: "uppercase", color: "rgba(251,247,238,0.8)" }}>The Lantern Literary Society</div>
            </div>
          </div>
          {cover && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 330 }}>
              <img src={cover} width={coverW} height={coverH} style={{ objectFit: "cover", border: "3px solid rgba(251,247,238,0.9)", boxShadow: "0 24px 60px rgba(0,0,0,0.55)" }} />
            </div>
          )}
        </div>
      </div>
    ),
    OG_SIZE
  );
}
