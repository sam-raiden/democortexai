# Design System & UI Principles

## 1. Typography
We utilize a curated set of modern Google Fonts and Fontshare fonts to establish a strong, readable, and premium brand voice:
- **Base/Body text**: `Manrope` (Sans-serif) - Used for primary interface reading.
- **Headings/Display**: `Anton` & `Clash Display` - Used for punchy, heavy wordmarks and hero titles.
- **Monospace/Eyebrows**: `DM Mono` - Used for technical metadata, small labels, and "eyebrow" text to give an analytical feel.
- **Support Fonts**: `Inter`, `Montserrat`, `Archivo Black` - Integrated as fallback or auxiliary weights.

## 2. Dynamic Color Palette & Theming
The application uses a bipartite theme structure (Light and Dark). Instead of CSS media queries for dark mode, the theme transitions seamlessly via scroll interactions dynamically altering the root CSS variables along the page canvas.

### Dark Theme (Analytical / Premium feel)
- **Page Background**: `#1a1d26` (slate-like dark blue)
- **Primary Ink (Text)**: `#ffffff`
- **Muted Ink**: `#a7adba`
- **Accent Color**: `#d3fb52` (Vibrant Lime)
- **Panel / Surface**: `#242832`
- **Panel Hover**: `#2c313d`
- **Hairlines / Outlines**: Translucent whites `rgba(255,255,255,0.11)`

### Light Theme (Clean / Document feel)
- **Page Background**: `#ffffff`
- **Primary Ink (Text)**: `#14151c`
- **Muted Ink**: `#5c5f6b` or `#6b6d76`
- **Accent Color**: `#4d7c0f` (Dark Olive)
- **Panel / Surface**: `#f5f5f2` (Off-white)
- **Panel Hover**: `#ecece7`
- **Hairlines / Outlines**: Translucent blacks `rgba(20,21,30,0.1)`

## 3. Core Design Principles

### A. Atmosphere and Depth (Aurora Effect)
Avoid flat backgrounds. The dark theme leverages a multi-layer radial gradient "aurora" effect intersecting different shades of teal/green (`rgba(42, 156, 122, .82)`) and charcoal to create an ambient, glowing backdrop that dissipates softly into the page.

### B. Glassmorphism and Floating Surfaces
Floating elements (like search bars, docked navigation) use intense physical traits:
- **Backdrop Blurs**: `backdrop-filter: blur(12px)` for semi-transparent overlay cards.
- **Complex Shadows**: Elements use layered shadows (directional and ambient). For instance, an input hovering casts down physical-looking shadows combined with a white inset:
  `box-shadow: 0 2px 4px rgba(211, 251, 82, .04), 0 8px 20px rgba(25, 18, 18, .07), 0 20px 48px rgba(25, 18, 18, .055), 0 0 0 1px rgba(255, 255, 255, .9) inset;`

### C. Organic Micro-Interactions & Motion
- Hover effects and focusing input fields should organically transition properties (`translateY`, `scale`, `box-shadow`, `border-color`).
- Standardize transitions to feel deliberate and springy, e.g., `transition: max-width .58s cubic-bezier(.32, .72, 0, 1)`.
- Apply slight scaling (`scale(1.012)`) on focus to make elements 'pop' forward rather than just changing a border.

### D. Ambient Motion (Irregular Roaming Loops)
Decorative shapes (Orbs, background blobs) don't undergo simple back-and-forth animations. They have intricately plotted `@keyframes` (like `heroRoamA`) with multiple irregular positional and scaling stops to feel floating and alive rather than robotic.
