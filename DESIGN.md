# Design System: ORR — Kviksilfur (Quicksilver)

Design read: single-brand goldsmith gallery/shop teaser for a design-conscious,
half-tourist audience, with a contemporary-sculptural language, leaning toward the
ERNA vanilla damped-scroll machine re-aimed at MOTION as the brand truth.
Dials: VARIANCE 8 · MOTION 7 · DENSITY 3.

## 1. Concept (derived from their material, not invented)

Orr's jewellery is silver in three states of motion, visible in their own catalogue:

- **Bráðið** (molten) — Hraun rings: lava-crust silver clutching a spinel;
  Deliquescent: ribbons of silver caught mid-melt.
- **Laust** (loose) — the Laus line: a faceted stone sitting FREE inside a polished
  bowl, captured but never fixed.
- **Kvikt** (alive) — Kinetic pearl pieces: pearls on sprung wires, "ever changing
  in its composition" (their own product copy).

One sentence to the owner: **"Skartið ykkar hreyfist — vefurinn ykkar á að gera það líka."**
(Your jewellery moves — your website should too.)

The site's damped physics engine IS the concept: every scroll-driven value settles
like the loose stone in the Laus bowl. Brand word: **kviksilfur** — quicksilver,
literally "living silver."

## 2. Tokens — every colour quantised out of an Orr product photograph

```
--sheet    #F4F4F2  (studio white, from their product grounds)
--sheet-dim #E3E3DF
--silfur   #C4C4C2  (their sterling mid-grey)
--silfur-dk #8E8E8C
--plate    #212432  (the Hraun ring's blue-black spinel — volcanic night)
--plate-2  #2B2E3D
--chrome   #F6F6F4  (ink on plate)
--gull     #A8965C  ← THE only warm value: their own 14k gold + citrine quartz
                      (sampled #aaa06c Laus / #d2c277 Organic, quantised between)
--gull-deep #8A7A48 (same hue, AA at small sizes on sheet)
--ink      #23252B  --ink-mute #565860
```

Two grounds (`--sheet` / `--plate`). `--gull` appears exactly twice: the Laus-bowl
loader/dividers, and focus/hover states. Nothing else is warm.

## 3. Type (all machine-verified full Icelandic against local binaries)

- **Display:** Apfel Grotezk (Satt for the wordmark/headlines, Mittel for d2/d3) —
  rounded, slightly molten grotesk; the letterforms rhyme with liquefied silver.
  NOT a serif: Orr is contemporary-sculptural, not heritage. This also separates it
  from ERNA (Sentient serif) and Gullsmiðja Óla (Erode serif).
- **Body:** General Sans Variable.
- **Register:** Commit Mono — prices, karat, years, dimensions, captions.

```
--fs-header clamp(3rem, 5.4vw, 7.5rem) · d2 clamp(1.6rem, 2.4vw, 2.2rem)
body clamp(1rem, 1.02vw, 1.0625rem) · --fs-reg .75rem/.14em uppercase
```

## 4. The five mechanisms, re-aimed

**A. Loader — the stone settles into the bowl.** Replaces ERNA's punch aperture.
A `--gull` circle (the Laus bowl, drawn as a ring) with a smaller stone-circle that
enters with a critically-damped oscillation and settles centred; the mask then
expands. The damping curve is the SAME function the scroll engine uses
(`cur += (tgt-cur)*(1-e^(-dt/tau))`) — the loader teaches the physics the whole
page obeys. `@media (scripting:none)` kill switch, removed from DOM after settle.

**B. Two-speed headline** — unchanged mechanism, Apfel Satt caps mask-slide +
General Sans italic fade. Accented caps `.2em` headroom (Í/Á).

**C. Hero pinch + wordmark flight** — ORR wordmark (3 letters, huge) flies to the
header; scale = font-size ratio, metrically identical renderings.

**D. The horizontal journey: BRÁÐIÐ → LAUST → KVIKT.** Three 100vw panels, each
one state of motion with its product photography, clip-assembled from the leading
edge. Panel copy counter-translated. Desktop ≥1024 only; vertical stack below.

**E. Scrubbed feathered reveal** — product photos resolve out of blur/desaturation
like silver being polished up. Oversize on both axes (105%).

Plus: velocity-weighted parallax on media ONLY (never on the wordmark), the
rolling label, scrollspy + hairline page-progress, price index follows scroll
under `(hover:none)`.

**Signature interaction (the one asymmetric-split earner): the LAUS TILT.**
On the Laus section, the product photo sits in a shallow dish; pointer movement
tilts the dish a few degrees and the stone-highlight follows with the damped lag —
the loose-stone behavior, felt. Touch: gyroscope-free fallback = slow autonomous
drift. Reduced motion: static.

## 5. Content spine (is + en, one content.mjs, facts verbatim from orr.is)

1. Hero — full-bleed product macro, ORR wordmark, one thesis line.
2. The three-states journey (Bráðið/Laust/Kvikt) with real line photography.
3. Fólkið — Kjartan Örn Kjartansson & Guðbjörg Bárðardóttir, workshop at
   Skólavörðustígur 17b (their own about text, nothing invented).
4. Verkstæðið/heritage strip — Njarðarskjöldurinn 2016 (sourced), shop+workshop
   in one room.
5. Price/collection index — real collections (Rings 262 · Necklaces 87 ·
   Earrings 107 · Men 39 · Engagement 19), real EUR/ISK prices from the shop,
   linking out to orr.is product pages. No fake cart.
6. Heimsókn — hours (Mon–Fri 13–18, Sat 13–16), address, map, orr@orr.is,
   (+354) 787 6262.

Copy rules: no em-dashes, no AI-tells, gender agreement checked, every fact
dated/sourced from orr.is or the cited award page. Prices shown in ISK+EUR only
if their shop states both; otherwise EUR (their store currency).

## 6. Honesty model

All photography theirs (product CDN, originals). No stock, nothing generated.
No fake checkout — every product card links to the live orr.is product page.
Preview ships noindex + Disallow + canonical at preview. The award claim links to
reykjavik.is. Their typo'd copy is corrected silently only for OUR summary lines,
never quoted as theirs.

## 7. QA gates (all three harnesses + the two tables)

- qa.mjs re-aimed: wordmark landing <1px on four edges, reveal REVERSIBILITY,
  journey panels advance, loader settles ≤2.5s and is skippable, fonts LOADED
  (`document.fonts.check`), no 4xx, tilt writes transform on pointer move.
- a11y.mjs: pixel contrast both grounds, AA at 12px for --gull-deep/--ink-mute.
- mobile-audit.mjs: six widths, no overflow at 390, burger per standing rule #29.
- Transplant gate: measure erna-preview vs orr with the same probe (scrub count,
  clip-path count, damped channels, journey travel) and paste the table.
- Motion gate: reference constants (tau ladder) vs live measured values, pasted.
