"""
Build the social-preview (OG / Twitter) banner for The Lantern Literary Society.

The user provided a reference PNG that did not arrive as a file in our sandbox.
This script recreates a brand-accurate version using on-disk resources:
  - public/lantern-logo.png (with white bg removed)
  - tailwind brand tokens (cream/ivory bg, forest/navy text, bronze/gold accent)

Output: public/og-banner.png  (1200x630, OG spec)

If the user later drops the original file at this path, it will overwrite this
output -- no code changes needed.

Run: python3 scripts/build-og-banner.py
"""

from __future__ import annotations

import os
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

# Brand tokens (mirrored from tailwind.config.ts)
IVORY        = (251, 247, 238)   # #FBF7EE
IVORY_SHADE  = (243, 237, 224)   # #F3EDE0
MIST         = (232, 226, 211)   # #E8E2D3
NAVY         = (8, 33, 55)       # #082137  (forest/500)
NAVY_DEEP    = (3, 13, 22)       # #030D16  (forest/800)
GOLD         = (203, 146, 34)    # #CB9222  (bronze/500)
GOLD_DEEP    = (162, 117, 27)    #    (bronze/600)

W, H = 1200, 630
HERE = Path(__file__).resolve().parent
PUBLIC = HERE.parent / "public"
LOGO_SRC = PUBLIC / "lantern-logo.png"
OUT = PUBLIC / "og-banner.png"

# DejaVu Serif is the closest serif we have sans-serif to Playfair Display;
# DejaVu Sans approximates Inter.
SERIF_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"
SERIF_REG  = "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"
SANS       = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size)


def text_width(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.ImageFont) -> int:
    return draw.textbbox((0, 0), text, font=fnt)[2]


# ---------------------------------------------------------------------------
# Logo: remove its white card background so it sits cleanly on the cream bg.
# ---------------------------------------------------------------------------
def load_logo() -> Image.Image:
    im = Image.open(LOGO_SRC).convert("RGB")
    pixels = im.load()
    w, h = im.size
    corners = [pixels[x, y] for x in (0, w - 1) for y in (0, h - 1)]
    bg = tuple(sum(c[i] for c in corners) // len(corners) for i in range(3))
    r, g, b = bg
    rgba = Image.new("RGBA", im.size, (0, 0, 0, 0))
    rp = rgba.load()
    sp = pixels
    for y in range(h):
        for x in range(w):
            pr, pg, pb = sp[x, y]
            d = abs(pr - r) + abs(pg - g) + abs(pb - b)
            a = 0 if d < 36 else 255
            rp[x, y] = (pr, pg, pb, a)
    return rgba


def paste_logo(canvas: Image.Image) -> int:
    logo = load_logo()
    target_h = 380
    ratio = target_h / logo.height
    logo = logo.resize(
        (int(logo.width * ratio), target_h), Image.LANCZOS
    )
    x = 90
    y = (H - target_h) // 2 - 10
    canvas.paste(logo, (x, y), logo)
    return x + logo.width


# ---------------------------------------------------------------------------
# Background
# ---------------------------------------------------------------------------
def build_background() -> Image.Image:
    bg = Image.new("RGB", (W, H), IVORY)
    px = bg.load()
    for y in range(H):
        t = y / (H - 1)
        rr = int(IVORY[0] * (1 - t) + IVORY_SHADE[0] * t)
        gg = int(IVORY[1] * (1 - t) + IVORY_SHADE[1] * t)
        bb = int(IVORY[2] * (1 - t) + IVORY_SHADE[2] * t)
        for x in range(W):
            px[x, y] = (rr, gg, bb)

    # Subtle radial vignette so the corners don't look dead
    vignette = Image.new("L", (W, H), 0)
    vd = ImageDraw.Draw(vignette)
    for r, a in [(560, 8), (440, 14), (320, 20)]:
        vd.ellipse(
            [(W // 2 - r, H // 2 - r), (W // 2 + r, H // 2 + r)],
            fill=a,
        )
    vignette = vignette.filter(ImageFilter.GaussianBlur(140))
    dark = Image.new("RGB", (W, H), NAVY_DEEP)
    return Image.composite(dark, bg, vignette)


# ---------------------------------------------------------------------------
# Typography
# ---------------------------------------------------------------------------
def draw_letterspaced(draw, text, fnt, x, y, fill, gap):
    for ch in text:
        draw.text((x, y), ch, font=fnt, fill=fill)
        bbox = draw.textbbox((x, y), ch, font=fnt)
        x = bbox[2] + gap
    return x


def draw_text_block(canvas: Image.Image, left: int) -> None:
    draw = ImageDraw.Draw(canvas)
    text_left = left + 36

    # Reserve right margin so text never touches the edge
    max_right = W - 60

    # "THE" -- small navy caps with wide letter-spacing
    f_the = font(SERIF_BOLD, 32)
    y_the = 110
    draw_letterspaced(draw, "THE", f_the, text_left, y_the, NAVY, 16)

    # Find the largest font size for "LANTERN" that fits between text_left
    # and max_right.
    target = "LANTERN"
    max_h = 130
    chosen_size = 130
    while chosen_size > 60:
        f = font(SERIF_BOLD, chosen_size)
        if text_width(draw, target, f) <= max_right - text_left:
            break
        chosen_size -= 4
    f_lantern = font(SERIF_BOLD, chosen_size)
    y_lantern = y_the + 50
    draw.text((text_left, y_lantern), target, font=f_lantern, fill=NAVY)

    # "LITERARY SOCIETY"
    target2 = "LITERARY SOCIETY"
    chosen2 = 64
    while chosen2 > 32:
        f = font(SERIF_BOLD, chosen2)
        if text_width(draw, target2, f) <= max_right - text_left:
            break
        chosen2 -= 2
    f_lit = font(SERIF_BOLD, chosen2)
    y_lit = y_lantern + chosen_size + 14
    draw.text((text_left, y_lit), target2, font=f_lit, fill=NAVY)
    lit_w = text_width(draw, target2, f_lit)

    # Gold underline
    underline_w = 340
    underline_h = 3
    underline_x = text_left
    underline_y = y_lit + chosen2 + 12
    draw.rectangle(
        [(underline_x, underline_y), (underline_x + underline_w, underline_y + underline_h)],
        fill=GOLD,
    )

    # "Book Committee & Reading Community"
    target3 = "Book Committee & Reading Community"
    chosen3 = 36
    while chosen3 > 20:
        f = font(SERIF_BOLD, chosen3)
        if text_width(draw, target3, f) <= max_right - text_left:
            break
        chosen3 -= 2
    f_tag = font(SERIF_BOLD, chosen3)
    y_tag = underline_y + 22
    draw.text((text_left, y_tag), target3, font=f_tag, fill=NAVY)

    # "Read  ·  Discuss  ·  Discover  ·  Connect"
    f_dots = font(SANS, 22)
    words = ["Read", "Discuss", "Discover", "Connect"]
    dot_r = 6
    gap = 24
    word_widths = [text_width(draw, w, f_dots) for w in words]
    total = sum(word_widths) + (len(words) - 1) * (gap * 2 + dot_r * 2)
    if total > max_right - text_left:
        # tighten by reducing gap
        gap = 14
        total = sum(word_widths) + (len(words) - 1) * (gap * 2 + dot_r * 2)
    y_dots = y_tag + chosen3 + 28
    x = text_left
    for i, w in enumerate(words):
        if i > 0:
            cy = y_dots + 11 - dot_r
            draw.ellipse(
                [(x, cy), (x + dot_r * 2, cy + dot_r * 2)],
                fill=GOLD,
            )
            x += dot_r * 2 + gap * 2
        draw.text((x, y_dots), w, font=f_dots, fill=NAVY)
        x += word_widths[i] + gap


def main() -> None:
    canvas = build_background()
    logo_right = paste_logo(canvas)
    draw_text_block(canvas, logo_right)
    canvas.save(OUT, "PNG", optimize=True)
    size_kb = os.path.getsize(OUT) // 1024
    print(f"Wrote {OUT} ({W}x{H}, {size_kb} KB)")


if __name__ == "__main__":
    main()