# Design System: Editorial Sophistication

## 1. Overview & Creative North Star
**The Creative North Star: "The Curated Gallery"**

This design system moves away from the "service provider" template and toward a "luxury editorial" experience. In the context of a Conroe-based high-end hair salon, the UI must feel like a quiet, sun-drenched studio. We achieve this through **Intentional Asymmetry** and **Aggressive Negative Space**. 

Instead of centering every element, we use offset layouts—placing text in the "wrong" third of a container or allowing imagery to bleed off the edge of the screen. This creates a sense of bespoke craftsmanship. The goal is not to fill the screen, but to frame the content like a piece of fine art in a high-end gallery.

## 2. Colors & Surface Philosophy
The palette is a study in tonal restraint. We rely on the "vibe" of the neutrals to convey luxury, using matte black only as a decisive punctuation mark.

*   **The "No-Line" Rule:** Under no circumstances should 1px solid borders be used to separate sections. Structure is defined exclusively by background shifts. For example, a `surface` section transitions into a `surface-container-low` section to indicate a change in context.
*   **Surface Hierarchy & Nesting:** Treat the UI as physical layers of fine stationery. 
    *   **Level 0 (Base):** `background` (#faf9f7).
    *   **Level 1 (Sectioning):** `surface-container-low` (#f3f4f1) or `surface-container` (#edeeeb).
    *   **Level 2 (Interactive Elements):** `surface-container-lowest` (#ffffff) for cards or floating panels.
*   **The "Glass & Gradient" Rule:** To avoid a flat, "cheap" digital feel, use `surface-variant` with a 60% opacity and a 20px backdrop-blur for navigation bars and floating overlays. 
*   **Signature Textures:** For primary CTAs (Matte Black), use a nearly imperceptible radial gradient from `primary` (#5f5e5e) to `on_surface` (#2f3331). This adds a "matte silk" depth that a flat hex code cannot replicate.

## 3. Typography
Typography is the voice of this system. It balances the timeless authority of a serif with the modern efficiency of a sans-serif.

*   **Display & Headlines (Noto Serif):** These are the "Art Pieces." Use `display-lg` for hero statements with increased letter-spacing (-0.02em). Headlines should feel like titles in a fashion magazine—unhurried and confident.
*   **Body & Titles (Manrope):** These are the "Curator’s Notes." `manrope` provides a clean, geometric contrast to the serif. Use `title-md` for sub-headers to maintain a modern, architectural feel.
*   **Labeling:** Use `label-md` in all-caps with +0.1em letter-spacing for small metadata (e.g., "EST. 2024" or "CONROE, TX"). This mimics high-end apparel tagging.

## 4. Elevation & Depth
We reject the standard "drop shadow." Depth in this system is atmospheric, not structural.

*   **The Layering Principle:** Use `surface-container-lowest` (#ffffff) to make elements pop against the `surface-dim` (#d6dbd7) background. The contrast in tone provides the "lift."
*   **Ambient Shadows:** If a shadow is required for a floating "Book Now" menu, use a custom shadow: `0px 24px 48px rgba(47, 51, 49, 0.06)`. It should look like a soft glow of light, not a black smudge.
*   **The "Ghost Border" Fallback:** If accessibility requires a container boundary, use `outline-variant` (#afb3b0) at **15% opacity**. It should be felt, not seen.
*   **Sharp Geometry:** All corners are `0px`. Roundness suggests "app-like" utility; sharp corners suggest "architectural" luxury.

## 5. Components

### Buttons
*   **Primary (The Signature):** Background: `on_surface` (Matte Black); Text: `on_primary` (#faf7f6). Rectangular, no radius. Padding: `16px 32px`.
*   **Secondary (The Ghost):** No background. 1px "Ghost Border" (outline-variant at 20%). Text: `on_surface`.
*   **Tertiary (The Link):** `notoSerif`, italicized, with a 1px underline that is offset by 4px.

### Cards & Gallery Items
*   **Prohibition:** No dividers. Separate items using `32px` or `48px` of vertical white space.
*   **The Inset Look:** Place images within a `surface-container-high` (#e6e9e6) frame with `24px` of internal padding to create a "matted photograph" effect.

### Input Fields
*   **Style:** Minimalist underline only. Use `outline` (#777c79) for the bottom border. On focus, the border transitions to `on_surface` (Matte Black).
*   **Labels:** `label-md` always sits above the input, never as a placeholder.

### Salon-Specific Components
*   **Service Menu:** Do not use a table. Use a wide-spaced list where the service name is `headline-sm` (Serif) and the price is `body-md` (Sans-serif) aligned to the far right, with no dots or lines connecting them.
*   **Stylist Profiles:** Large-scale imagery (portrait) with name overlays using `glassmorphism` panels at the bottom of the frame.

## 6. Do's and Don'ts

### Do
*   **Do** use "Irregular Grids." If you have three images, make one twice as large as the others.
*   **Do** use `surface-bright` (#faf9f7) for the majority of the viewport to keep the "airy" Conroe-sunlight feel.
*   **Do** use `tertiary` (#625f57) for subtle "hints" like hover states or secondary icons.

### Don't
*   **Don't** use icons unless absolutely necessary. Rely on typography. If icons are used, they must be ultra-thin (0.5px or 1px stroke).
*   **Don't** use pure #000000. Use `on_surface` (#2f3331) for text and `inverse_surface` (#0d0e0e) for the "Matte Black" accents to maintain tonal softness.
*   **Don't** center-align long blocks of text. Stick to left-alignment for an editorial, organized feel.