# MONOLITH — Architecture Studio Portfolio

<div align="center">
  <img src="static/favicon.png" alt="MONOLITH Logo" width="200" />
</div>

<div align="center">
  <strong>A Digital Brutalism Portfolio Website</strong>
</div>

---

## 🏗️ Design Philosophy

**Digital Brutalism:**
- Raw, structural, bold, high-contrast design
- Visible grid lines and borders (blueprint aesthetic)
- Oversized uppercase typography
- Asymmetrical layouts with intentional misalignment
- Stark color palette: Black (#000), White (#fff), Concrete Gray (#808080)
- Sharp, mechanical animations with Expo easing
- Grainy noise texture overlay for concrete/paper feel

## 🛠️ Tech Stack

- **Framework:** SvelteKit with **Svelte 5 Runes** syntax
- **Styling:** Tailwind CSS v3
- **Animation:** GSAP (Core, ScrollTrigger, Flip Plugin)
- **Smooth Scroll:** Lenis
- **Font:** Oswald (Google Fonts)

## ✨ Features

### Core Features
- ✅ **Custom Cursor** - White circle with `mix-blend-mode: difference` for color inversion
- ✅ **Background Grid Pattern** - Blueprint-style grid covering entire page
- ✅ **Noise Overlay** - Animated grain texture for raw concrete aesthetic
- ✅ **Page Transitions** - "Concrete Shutter" effect with GSAP animations
- ✅ **Smooth Scrolling** - Lenis integration with GSAP ScrollTrigger

### Navigation
- ✅ **Sticky Navigation** - Fixed header with MONOLITH logo
- ✅ **Mega Menu** - Garage door slide-down effect (black panel)
- ✅ **Menu Animation** - GSAP-powered smooth transitions

### Home Page
- ✅ **Hero Section** - Massive "WE BUILD VOIDS." text
- ✅ **Asymmetric Gallery** - 10 projects in brutalist grid layout
- ✅ **GSAP Flip Transitions** - Thumbnail to full-screen modal animations
- ✅ **Grayscale to Color** - Images transition on hover
- ✅ **Project Overlays** - Large titles with text-stroke

### Project Pages
- ✅ **Projects List** - Archive view with floating image reveal on hover
- ✅ **Project Detail** - Split-screen layout with sticky info panel
- ✅ **Parallax Gallery** - ScrollTrigger-powered image effects
- ✅ **Next Project Navigation** - Seamless project browsing

### Additional Pages
- ✅ **Studio Page** - Manifesto with split-screen design
- ✅ **Contact Page** - Massive email link with infinite marquee
- ✅ **Signature Component** - Developer credit with blend mode

## 📁 Project Structure

```
monolith/
├── src/
│   ├── lib/
│   │   └── components/
│   │       ├── Cursor.svelte          # Custom cursor
│   │       ├── Navigation.svelte      # Header & mega menu
│   │       ├── Noise.svelte           # Grain texture overlay
│   │       ├── PageTransition.svelte  # Page transition effects
│   │       ├── ProjectCard.svelte     # Project card component
│   │       └── Signature.svelte       # Developer signature
│   ├── routes/
│   │   ├── +layout.svelte             # Root layout
│   │   ├── +page.svelte               # Home page
│   │   ├── projects/
│   │   │   ├── +page.svelte           # Projects list
│   │   │   └── [id]/
│   │   │       ├── +page.ts           # Project data loader
│   │   │       └── +page.svelte        # Project detail
│   │   ├── studio/
│   │   │   └── +page.svelte           # Studio manifesto
│   │   └── contact/
│   │       └── +page.svelte           # Contact page
│   └── app.css                         # Global styles
├── static/
│   ├── favicon.png                     # MONOLITH logo
│   └── robots.txt
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd monolith

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:5173`

## 🎨 Key Components

### Cursor Component
Custom white circle cursor that follows mouse movement and inverts colors using `mix-blend-mode: difference`.

### Navigation Component
- Sticky header with MONOLITH logo (links to home)
- Menu button that triggers garage door slide-down animation
- Full-screen black overlay with navigation links
- GSAP-powered smooth transitions

### Noise Component
Animated grain texture overlay that adds raw, concrete-like texture to the entire site. Uses SVG noise pattern with CSS animation.

### PageTransition Component
"Concrete Shutter" effect that slides a black panel down when navigating between pages, creating a heavy, mechanical transition.

### Project Gallery
Asymmetric grid layout with:
- 10 architectural projects
- Grayscale images that transition to color on hover
- Large project titles with black text-stroke
- GSAP Flip animations for modal transitions

## 🎬 Animation Details

- **GSAP Flip:** Seamless transitions between thumbnail and full-screen modal
- **ScrollTrigger:** Scroll-based animations for images and content
- **Lenis:** Smooth scrolling with GSAP integration
- **Easing:** Expo/Power2/Power3 for sharp, brutalist movements
- **Parallax:** Image parallax effects on project detail pages

## 🎨 Design System

### Color Palette
- **Black:** `#000000`
- **White:** `#FFFFFF`
- **Concrete Gray:** `#808080`

### Typography
- **Font:** Oswald (Google Fonts)
- **Style:** Uppercase, bold (700-900), tight tracking
- **Hero Text:** 8rem - 18rem font size
- **Headings:** 4xl - 9xl with uppercase

### Grid System
- 12-column grid layout
- Asymmetric spans for intentional misalignment
- Heavy borders (2px - 4px) in black

## 📱 Pages

### Home (`/`)
- Hero section with "WE BUILD VOIDS." text
- Asymmetric project gallery (10 projects)
- GSAP Flip modal transitions

### Projects (`/projects`)
- Archive-style list view
- Floating image reveal on hover
- Year | Project Name | Type layout

### Project Detail (`/projects/[id]`)
- Split-screen layout
- Sticky info panel (left)
- Scrollable gallery with parallax (right)
- Next project navigation

### Studio (`/studio`)
- Split-screen manifesto layout
- Sticky "WE REJECT ORNAMENT." title
- Team table with names and roles

### Contact (`/contact`)
- Massive email link
- Infinite marquee at bottom
- "AVAILABLE FOR COMMISSIONS — WORLDWIDE — MONOLITH —"

## 🔧 Configuration

### Tailwind CSS
Configuration file: `tailwind.config.ts`
- Custom font family (Oswald)
- Extended theme for brutalist design

### GSAP
- ScrollTrigger registered globally
- Flip plugin for transitions
- Expo easing for mechanical feel

### Lenis
- Smooth scroll with custom easing
- Integrated with GSAP ScrollTrigger
- Touch multiplier for mobile

## 🎯 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires CSS Grid and Flexbox support
- JavaScript required for animations

## 📝 License

This project is private and proprietary.

## 👨‍💻 Developer

**Designed & Coded by:** Tahsin Mert Mutlu

---

<div align="center">
  <strong>MONOLITH Architecture Studio</strong><br/>
  <em>We Build Voids.</em>
</div>
