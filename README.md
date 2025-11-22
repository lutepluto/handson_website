# Handson Website - 展翼计划

Official website for Handson (展翼计划), a nonprofit initiative providing 3D-printed prosthetic limbs to children and young adults in need across China.

## 🚀 Tech Stack

- **Framework**: [Next.js 15.4](https://nextjs.org/) with App Router
- **React**: 19.1.0
- **Styling**: [Tailwind CSS 4.1](https://tailwindcss.com/)
- **UI Components**:
  - [Radix UI](https://www.radix-ui.com/) (Navigation Menu)
  - [Lucide React](https://lucide.dev/) (Icons)
- **Language**: TypeScript 5.8
- **Package Manager**: pnpm
- **Code Quality**: ESLint, Prettier, Husky, lint-staged

## 📋 Features

### Pages

- **Home** (`/`) - Mission statement with interactive "What We Do" and "How We Do It" sections
- **About** (`/about`) - Mission, horizontal timeline roadmap (2015-2018), and FAQ
- **Apply** (`/apply`) - Application form for prosthetic assistance
- **Help** (`/help`) - Volunteer registration and support options

### Key Components

- **Responsive Header** - Full-width navigation with brand logo
- **Interactive Timeline** - Horizontal roadmap with alternating content and themed colors
- **Video Modal** - Integrated Youku video player for storytelling
- **Contact Footer** - Social media links, contact info, and QR code
- **Hover Effects** - Interactive overlays on process cards
- **Form Integration** - Embedded Jinshuju forms for applications

### Design Highlights

- Full-width backgrounds with centered content layout
- Brand-consistent color scheme with CSS variables
- Multi-paragraph support in timeline content
- Responsive design for all screen sizes
- Smooth transitions and micro-animations

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/lutepluto/handson_website.git
cd handson_website

# Install dependencies
pnpm install
```

### Development

```bash
# Run development server
pnpm dev

# Open http://localhost:3000
```

### Build

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

### Linting

```bash
# Run ESLint
pnpm lint
```

## 📁 Project Structure

```
handson_website/
├── public/
│   └── images/          # Static images and assets
│       ├── img/         # Page-specific images (banners, icons)
│       ├── handson-logo.png
│       └── qr.webp
├── src/
│   ├── app/
│   │   ├── components/  # React components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── VideoModal.tsx
│   │   │   └── ui/      # UI library components
│   │   ├── lib/         # Utility functions
│   │   ├── about/       # About page
│   │   ├── apply/       # Application page
│   │   ├── help/        # Help page
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Home page
│   │   └── global.css   # Global styles
│   └── styles/          # Legacy styles (reference)
├── components.json      # shadcn/ui config
├── tailwind.config.ts   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## 🎨 Styling

The project uses Tailwind CSS with custom brand colors defined in `global.css`:

- **Primary Blue**: `#4a90e2`
- **Orange**: `#ff8c00`
- **Green**: `#8cc63f`
- **Purple**: `#a56eae`
- **Light Grey**: `#eeeeee`

## 🌐 Deployment

The application can be deployed to any platform supporting Next.js:

- [Vercel](https://vercel.com/) (recommended)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [Netlify](https://www.netlify.com/)

## 📝 License

This project is private and maintained by the Handson team.

## 🤝 Contributing

For bug reports and feature requests, please open an issue at:
https://github.com/lutepluto/handson_website/issues

## 📧 Contact

- **WeChat**: Follow our QR code on the website
- **Email**: Available in the footer section

---

Built with ❤️ for children in need across China
