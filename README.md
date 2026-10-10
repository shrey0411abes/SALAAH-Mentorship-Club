# Salaah – The Mentor Community 🛡️
> Official Student Mentorship Collective of **ABES Engineering College** (Estd. 2000, Ghaziabad)

[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite 8](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Design System](https://img.shields.io/badge/Design_System-Heritage_%26_Calligraphy-8B1A1A)](https://abes.ac.in)
[![License](https://img.shields.io/badge/License-MIT-E8A317)](LICENSE)

---

## 🌟 Overview

**Salaah (सलाह)** is the flagship peer mentorship community at ABES Engineering College. Grounded in the Sanskrit/Hindi tradition of authentic counsel, wisdom, and guidance, Salaah bridges the gap between academic theory and industry engineering standards.

Driven seniors mentor incoming juniors across software engineering, open source, AI/ML, product design, technical writing, public relations, and community leadership.

---

## 🎨 Brand & Design System

The visual identity is derived directly from the pure inline-SVG logo:
- **Heater Shield Mark**: Symbolizing academic guardianship, filled with deep heritage maroon (`#8B1A1A`) and thin gold (`#E8A317`) filigree.
- **Lotus & Greek-Key Medallion**: 7 layered lotus petals ringed by a classical meander motif.
- **Brush Calligraphy Wordmark**: The Devanagari word **"सलाह"** rendered in bold brush calligraphy with an exaggerated shirorekha and subtle SVG turbulence texture.
- **Tagline**: *"The Mentor Community"* in geometric sans-serif (Poppins 600).
- **Calligraphic Swoosh**: Fluid pen flourish running beneath the wordmark and tagline, also repurposed as organic section dividers throughout the page.

### Color Tokens
| Token | Value | Role |
| :--- | :--- | :--- |
| `--maroon` | `#8B1A1A` | Primary heritage brand color |
| `--maroon-dark` | `#5E1010` | Dark sections & footer |
| `--gold` | `#E8A317` | Accent highlights & borders |
| `--gold-soft` | `#F6D58A` | Sub-accents & dark mode text |
| `--paper` | `#FBF7F0` | Warm editorial background |
| `--surface` | `#FFFFFF` | Card surface |
| `--ink` | `#111111` | Primary typography |
| `--muted` | `#5A5048` | Secondary body text |

---

## 🚀 Key Features

1. **Pure SVG Brand Assets**: Fully scalable `<Logo variant="full" | "mark" tone="light" | "dark" />` component with zero raster dependencies, plus generated `favicon.svg`.
2. **Sticky Glassmorphic Navigation**: Blur-on-scroll navbar with responsive auto-switching between full wordmark (desktop) and shield mark (mobile) plus animated drawer.
3. **Hero Section**: Editorial headline with "सलाह" calligraphic accent, floating shield mark, ambient blurred blobs, and quick metric pills.
4. **Interactive Count-Up Stats**: About section metrics (850+ Members, 35+ Events, 60+ Mentors, 6 Wings) triggered on scroll into view with cubic ease-out animation and `prefers-reduced-motion` support.
5. **6 Departmental Wings**: Card grid for *Technical Operations, Design & Creative, Content & Editorial, PR & Outreach, Management & Logistics, and Social Media*.
6. **Flagship Programs & Testimonials**: Showcase of *Margdarshan 1-on-1, Salaah CodeCon 2026, Aarambh Orientation, and Tech Bootcamps*.
7. **Connect & Join Hub**: Interactive mentor request form, institutional campus strip (ABES EC AKTU Code 032), and direct social channels (Instagram, LinkedIn, WhatsApp, Email).
8. **Calligraphic Swoosh Dividers**: Custom SVG wave transitions bridging each section organically.
9. **Accessibility & Performance**: Semantic HTML5, visible focus rings, WCAG AA compliant contrast ratios, and zero horizontal scroll.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Styling**: Vanilla CSS with comprehensive CSS custom properties (`:root` tokens)
- **Icons**: [react-icons (fa6)](https://react-icons.github.io/react-icons/)
- **Typography**: Google Fonts (*Yatra One, Tiro Devanagari Hindi, Cinzel, Poppins, Inter*)

---

## 📦 Project Structure

```
salaah-home/
├── public/
│   └── favicon.svg             # Generated shield mark favicon
├── src/
│   ├── components/
│   │   ├── About.css
│   │   ├── About.jsx           # Mission, Vision & 4 Count-Up Stats
│   │   ├── Connect.css
│   │   ├── Connect.jsx         # Socials, Join Form & Campus Info
│   │   ├── Departments.css
│   │   ├── Departments.jsx     # 6-Card Departmental Grid
│   │   ├── Footer.css
│   │   ├── Footer.jsx          # Dark-Tone Footer with ABES EC Legacy
│   │   ├── Hero.css
│   │   ├── Hero.jsx            # Hero with Calligraphic Accent & Float Shield
│   │   ├── Logo.jsx            # Scalable Inline-SVG Logo & LogoMark
│   │   ├── Navbar.css
│   │   ├── Navbar.jsx          # Glassmorphism Sticky Nav + Mobile Drawer
│   │   ├── Programs.css
│   │   ├── Programs.jsx        # Events, Milestones & Mentee Testimonials
│   │   └── SwooshDivider.jsx   # Calligraphic SVG Section Divider
│   ├── data/
│   │   └── content.js          # Single source of truth for all editable content
│   ├── App.css
│   ├── App.jsx                 # Main layout & section orchestration
│   ├── index.css               # Design system tokens, typography & reset
│   └── main.jsx
├── index.html                  # SEO metadata, Open Graph & Google Fonts
├── package.json
└── vite.config.js
```

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js (v18.0 or newer)
- npm or yarn or pnpm

### Installation & Run Steps

1. **Clone or Navigate to the project:**
   ```bash
   cd salaah-home
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Run Linter:**
   ```bash
   npm run lint
   ```

5. **Build for Production:**
   ```bash
   npm run build
   ```

6. **Preview Production Build:**
   ```bash
   npm run preview
   ```

---

## 🌐 Live Deployment
- **Live Demo**: *[Coming Soon / https://salaah.abes.ac.in]*
- **Institution**: ABES Engineering College, NH-09, Ghaziabad, UP 201009

---

## 📄 License & Attribution
© 2026 Salaah – The Mentor Community, ABES Engineering College. All rights reserved.
