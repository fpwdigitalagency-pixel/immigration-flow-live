# Design System Documentation

## 1. Overview & Creative North Star

### The Creative North Star: "The Sovereign Horizon"
This design system is built upon the concept of **The Sovereign Horizon**. For a high-ticket agency specializing in "Immigration Flow," the visual language must evoke a sense of inevitable progress, absolute security, and elite gatekeeping. We are not just building a landing page; we are crafting a digital consulate.

To break the "template" look, this system rejects rigid, boxed-in layouts in favor of **Intentional Asymmetry**. We utilize generous whitespace (using the `20` and `24` spacing tokens) to allow elements to breathe, creating an editorial feel found in luxury print magazines. Elements should feel like they are floating in a vacuum of deep space—perfectly placed, weighted by typography, and layered with translucent glass.

---

## 2. Colors & Surface Philosophy

The color palette is anchored in deep atmospheric tones and high-contrast accents. We use color not just for decoration, but to define the physical environment of the UI.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. Boundaries between content blocks must be defined exclusively through:
*   **Background Shifts:** Transitioning from `surface` (#0f141a) to `surface-container-low` (#181c23).
*   **Tonal Transitions:** Using the Spacing Scale to create distance, allowing the void to act as the separator.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. We use the Material Design surface tiers to create "nested" depth:
1.  **Base Layer:** `surface-dim` (#0f141a) – The infinite background.
2.  **Section Layer:** `surface-container` (#1c2027) – Large content blocks.
3.  **Component Layer:** `surface-container-highest` (#31353c) – Elevated cards or interactive modules.

### The "Glass & Gradient" Rule
To achieve a "Futuristic Luxury" feel, use **Glassmorphism** for floating navigation and secondary cards. 
*   **Recipe:** Use `surface-variant` (#31353c) at 40% opacity with a `backdrop-filter: blur(20px)`.
*   **Signature Textures:** Apply subtle radial gradients using `primary` (#e3f2ff) to `primary-container` (#a6daff) at 5% opacity to create a "digital aura" behind key headlines or CTAs.

---

## 3. Typography: The Editorial Voice

Our typography is a dialogue between the technical (`Inter`) and the authoritative (`Noto Serif` / `Instrument Serif`).

*   **Display & Headline (Noto Serif):** These are the "Sovereign" elements. Use `display-lg` (3.5rem) with tighter letter-spacing for hero sections. It conveys heritage, trust, and the high-ticket nature of the service.
*   **Title & Body (Inter / Satoshi):** These are the "Flow" elements. They provide the technical clarity. Use `body-lg` (1rem) for readability, ensuring a high line-height (1.6) to maintain the minimalist aesthetic.
*   **Labels (Inter):** All-caps labels using `label-sm` with increased letter-spacing (0.1em) should be used for overlines to categorize content with a "high-tech" metadata feel.

---

## 4. Elevation & Depth

We move away from traditional drop shadows, which can feel "muddy" or "cheap." Instead, we use **Tonal Layering**.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a soft "recessed" or "lifted" look based purely on luminosity.
*   **Ambient Shadows:** For floating CTAs, use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4)`. The shadow must never be pure black; it should feel like a dark tint of the background color.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` (#41484d) at **15% opacity**. This creates a "glimmer" edge rather than a structural line.
*   **3D-Like Depth:** For the "Immigration Flow" branding, utilize the `surface-tint` (#99cdf1) as a very subtle 1px top-inner-shadow on cards to simulate light hitting the top edge of a physical glass pane.

---

## 5. Components

### Buttons
*   **Primary:** `primary-container` (#a6daff) background with `on-primary-fixed` (#001e2e) text. Shape: `full` (9999px). On hover, add a subtle outer glow using `surface-tint`.
*   **Secondary (Glass):** `surface-variant` at 20% opacity, `backdrop-blur: 12px`, with a "Ghost Border."
*   **Tertiary:** Text-only using `primary-fixed-dim` (#99cdf1) with an animated underline that grows from the center on hover.

### Cards & Lists
*   **Constraint:** Forbid divider lines.
*   **Execution:** Use `spacing-8` (2.75rem) to separate list items. Use a subtle background shift (`surface-container-low`) on hover to indicate interactivity.

### Input Fields
*   **Style:** Minimalist. No bounding box. Use a `surface-variant` bottom-border (2px).
*   **State:** When focused, the bottom-border transitions to `primary` (#e3f2ff) with a soft glow reflecting beneath the field.

### Scroll-Triggered Animation Placeholders
*   **Entrance:** Elements should "float" up (20px) and fade in simultaneously.
*   **Stagger:** Use a 0.1s stagger for list items to mimic a "flowing" data stream.

---

## 6. Do’s and Don'ts

### Do
*   **Do** use asymmetrical margins. For example, a headline might be offset to the left while the body text is tucked 2 units further right.
*   **Do** prioritize the serif typeface for any text that relates to "Trust," "Legacy," or "Success."
*   **Do** use the `24` spacing token (8.5rem) between major sections to create a sense of luxury and "calm."

### Don't
*   **Don't** use 100% opaque borders. They break the futuristic glass illusion.
*   **Don't** use standard "Blue" (#0000FF). Only use the sophisticated Navy and Sky tones provided in the `primary` and `secondary` tokens.
*   **Don't** crowd the layout. If you feel a section needs a divider, it actually needs more whitespace.
*   **Don't** use "Drop Shadows" on text. If the text isn't legible against the background, adjust the surface tier or use a subtle gradient overlay.

---

**Director's Note:** Remember, we are designing for "Flow." Every transition, hover state, and scroll movement should feel frictionless. The user should feel like they are being guided through an elite, automated process where every detail has been meticulously considered.