---
name: Sulaimon Mayowa
colors:
  surface: '#fef7ff'
  surface-dim: '#dfd7e6'
  surface-bright: '#fef7ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f1ff'
  surface-container: '#f3ebfa'
  surface-container-high: '#ede5f4'
  surface-container-highest: '#e8dfee'
  on-surface: '#1d1a24'
  on-surface-variant: '#4a4455'
  inverse-surface: '#332f39'
  inverse-on-surface: '#f6eefc'
  surface-inverse-deep: '#0d0b12'
  surface-tint: '#732ee4'
  primary: '#630ed4'
  on-primary: '#ffffff'
  primary-container: '#7c3aed'
  on-primary-container: '#ede0ff'
  inverse-primary: '#d2bbff'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#7d3d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#a15100'
  on-tertiary-container: '#ffe0cd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#eaddff'
  primary-fixed-dim: '#d2bbff'
  on-primary-fixed: '#25005a'
  on-primary-fixed-variant: '#5a00c6'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb784'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#713700'
  background: '#fef7ff'
  on-background: '#1d1a24'
  surface-variant: '#e8dfee'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 160px
  section-gap-compact: 96px
---

# Architecture & Design Document ("Auralis")

This file serves as the unified source of **intent** and implementation values. Changes made to design layouts or tokens here must be mirrored directly into the codebase's styling configurations.

## Role
Act as a World-Class Senior Creative Technologist and Leading Frontend Engineer. You build high-fidelity, cinematic "1:1 Pixel Perfect" portfolio sites for freelancers and digital service businesses. Every site you produce should feel like a digital instrument — every scroll intentional, every animation weighted and professional. Eradicate all generic AI patterns.

---

## 1. Brand Philosophy & Style
The brand personality is authoritative yet approachable, positioning the entity as a high-tier "Technology Partner" for enterprise and luxury startups. The aesthetic is rooted in **Minimalism** with a heavy emphasis on editorial whitespace, but integrates **Glassmorphism** and subtle **Proximity Glows** to signal technical sophistication and AI-driven innovation.

The UI should feel expansive and premium, evoking a sense of calm, precision, and architectural balance. Every interaction must feel intentional, avoiding clutter in favor of high-impact visual statements.

---

## 2. Token Breakdown & Color Semantics
The palette is centered on a warm, off-white foundation that feels more organic and premium than pure sterile white.

* **Primary (Vivid Violet - `#630ed4`):** Used sparingly for key calls to action, active states, and as a "glow" source for interactive elements.
* **Surface (Pure White - `#ffffff`):** Reserved for elevated cards and glass containers to create a subtle lift against the off-white background.
* **Tertiary (Warm Amber - `#7d3d00`):** Reserved *exclusively* for warning states and secondary highlight callouts (e.g., inline MDX `<CalloutBox tone="tertiary">`, "limited availability" banners). It must not appear in primary navigation, buttons, or default card styling—its rarity gives it meaning.
* **Typography:** The `on-surface` Deep Violet-Black (`#1d1a24`) provides maximum contrast for high readability, while `on-surface-variant` (`#4a4455`) handles secondary metadata and descriptions to maintain a clear hierarchy.

---

## 3. Layout & Typography Rules
The system utilizes **Inter** for its systematic precision and modern neutrality.

* **Headings:** Set with tight letter-spacing and a semi-bold weight to create a "locked-in" architectural feel.
* **Body:** Features generous line-height ($1.6$ to $1.7$) to ensure long-form case studies are legible and feel luxurious.
* **Labels:** Small, all-caps labels with increased tracking are used for categorization and technical metadata to differentiate from prose.
* **Whitespace:** Use `section-gap` ($160\text{px}$) between major narrative beats—hero → problem statement → services → case studies—to communicate confidence. Use `section-gap-compact` ($96\text{px}$) only for tightly-related sub-sections that share one narrative beat (e.g., a stats strip directly under a hero). Compact gaps should never appear between two distinct sections back-to-back.
* **Alignment:** All content is strictly aligned to a 12-column fixed grid on desktop, with media often spanning 8 columns and text occupying the remaining 4 to create asymmetrical, editorial interest.
* **Safe Zones:** High-end layout presentations require large internal margins within components to prevent content from feeling crowded.

---

## 4. Elevation, Depth & Shapes
Depth is created through a combination of Glassmorphism and Tonal Layers.

* **Surfaces:** Use `surface-container-lowest` (`#ffffff`) with a 1px border of `on-surface` (`#1d1a24`) at 5% opacity.
* **Dark / Inverse Sections:** Full-bleed dark sections (e.g., process timelines, system showcases) use `surface-inverse-deep` (`#0d0b12`)—a near-black with a faint violet undertone—rather than the lighter `inverse-surface` (`#332f39`), which is reserved for smaller inverse elements like dark buttons or chips sitting on a light background.
* **Glass Effects:** Navigation bars and floating panels use a background blur ($20\text{px}$) with 80% opacity.
* **Proximity Glows:** Hovering over cards or interactive elements triggers a subtle, radial gradient glow of the Primary Violet (`#7c3aed`) at 10% opacity, following the cursor.
* **Shadows:** Avoid heavy black shadows. Use soft, long ambient shadows with a slight violet tint in the darkest areas to maintain the technical "AI" aesthetic.
* **Shape Language:** Soft but structured. Buttons and small containers use a `0.25rem` ($4\text{px}$) radius to maintain a professional, sharp-edged corporate feel. Larger containers and featured cards use `0.75rem` ($12\text{px}$) to provide a modern, "app-like" finish.

---

## 5. UI Component Specifications
* **Buttons:** Primary buttons are solid Deep Black with white text, featuring a subtle violet glow on hover. Secondary buttons are outlined with a 1px border and use the Primary Violet for text.
* **Input Fields:** Minimalist design with only a bottom border that transitions from Muted Grey to Primary Violet upon focus. Labels remain small and uppercase.
* **Cards:** White surfaces with extremely generous internal padding ($48\text{px}+$); headings within use `headline-md`.
* **Featured Cards:** A solid-violet variant (`primary-container`) of the standard card, used to highlight exactly one option among a set (e.g., a recommended strategy or active project). Uses `on-primary` white text throughout; reserved for a single card per group so emphasis doesn't dilute. Uses corner radius `xl` (`0.75rem`).
* **Chips/Badges:** Small, pill-shaped tags with a subtle violet background (5-10% opacity) and Primary Violet text, used for tech stacks or service categories. Radius is `full`.
* **Progress Indicators:** Ultra-thin ($2\text{px}$) lines used for scroll progress or carousel indicators, utilizing the Primary Violet color.
* **Glass Panel:** A dedicated component for overlays or navigation with a `backdrop-filter: blur(20px)` and a whisper-thin white highlight on the top edge.

---

## 6. Implementation Layer & Directory Blueprint

Below is the directory mapping for the Next.js App Router workspace, ensuring separation of concerns between raw content data, structural components, and token layers.

```text
/
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.js       # Dynamic route handler for individual blog posts
│   │   └── page.js           # Main blog archive/index page
│   ├── projects/
│   │   ├── [slug]/
│   │   │   └── page.js       # Dynamic route handler for individual case studies
│   │   └── page.js           # Case studies index
│   ├── about/
│   │   └── page.js           # About page
│   ├── contact/
│   │   └── page.js           # Contact page
│   ├── globals.css           # Contains the compiled Tailwind v4 @theme layer
│   ├── layout.js             # Root layout injecting global configuration & Inter typography
│   └── page.js               # Landing Home Page
├── components/
│   ├── ui/                   # Atomic primitives: Button, Chip, Card, FeaturedCard, GlassPanel
│   ├── sections/             # Layout sections: Hero, Stats, ProblemGrid, ServicesGrid, Nav, Footer
│   └── animation/            # Isolated GSAP wrapper client components (e.g., ScrollReveal.js)
├── content/
│   ├── blog/
│   │   └── *.mdx             # Markdown blog entry source files
│   └── projects/
│   │   └── *.mdx             # Markdown case-study source files
├── lib/
│   └── mdx.js                # Local filesystem CMS utility to query MDX frontmatter
├── public/
│   ├── images/
│   │   ├── logos/            # High-end partner/client vector branding
│   │   └── projects/         # Case study visual assets & dynamic highlights
│   ├── favicon.ico
│   └── profile.png
├── design.md                 # This system reference manual (kept at repository root)
└── tailwind.config.js        # Legacy resolution file if parsing fallback workflows