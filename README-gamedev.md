# Unity Developer Portfolio

Professional portfolio website showcasing Unity game development projects, systems design work, and technical expertise. Built with Next.js and Tailwind CSS.

## 🎮 Live Demo

[View Live Site](https://gamedev.richarddaskas.com/)

## ✨ Features

- **Project Showcase** - Highlighting shipped commercial titles, prototypes, and game jam entries
- **Responsive Design** - Optimized for desktop, tablet, and mobile viewing
- **Interactive Navigation** - Smooth scrolling with active section tracking
- **Clean UI/UX** - Professional presentation focused on game development work
- **Performance Optimized** - Fast loading times with Next.js static generation

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Language:** JavaScript (JSX)

## 🎯 Featured Projects

### Resonant Blade
Commercial 2D action-adventure game released on Steam. Features custom character controller, enemy AI with behavior trees, physics-based combat, and comprehensive save system.

**Technologies:** Unity, C#, 2D Physics, State Machines

### HAUL (Prototype)
Delivery roguelike combining vehicle physics with roguelike gameplay. Implements cargo physics with stacking, procedural terrain generation, enemy AI, and auto-targeting systems.

**Technologies:** Unity, C#, 3D Physics, Procedural Generation

### Dream Gazer
2D platformer created for game jam. Demonstrates rapid prototyping skills and polished platforming mechanics.

**Technologies:** Unity, C#, 2D Platformer

## 💼 Experience Highlighted

- **Independent Game Developer** (2017—Present)
  - Shipped commercial titles
  - Full ownership of game development pipeline
  - Custom systems implementation

- **IBM Research** (2015—2017)
  - Watson Beat AI music generation platform
  - Technical systems development
  - Collaboration with research scientists

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/richarddaskas/gamedev-portfolio.git
cd gamedev-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

### Building for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Updating Content

Edit `app/page.js` to update:
- Personal information and bio
- Project descriptions and links
- Experience details
- Social media links

### Adding Project Screenshots

Add images to `/public` folder with these filenames:
- `ss_resonantBlade.png`
- `ss_haul.png`
- `ss_dreamGazer.png`

### Color Theme

The site uses a custom theme with CSS variables defined in `app/globals.css`. Modify the `:root` variables to change colors:

```css
:root {
  --color-accent: 251 146 60;        /* orange-400 */
  --color-bg-primary: 10 10 10;      /* neutral-950 */
  /* ... */
}
```

## 📱 Responsive Design

Optimized for:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🔗 External Links

- [Resonant Blade Website](https://www.resonantblade.com/)
- [HAUL Prototype Video](https://youtu.be/TDnMjj2c2SE)
- [Dream Gazer on Itch.io](https://richard-daskas.itch.io/dream-gazer)

## 📄 License

This project is open source and available for personal and commercial use.

## 📧 Contact

Richard Daskas - [LinkedIn](https://www.linkedin.com/in/richard-d-03128838b/) - [Twitter](https://x.com/WiseWombatGames)

---

Built with Next.js and Tailwind CSS
