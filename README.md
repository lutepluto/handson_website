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
- **Internationalization**: Custom i18n system with browser detection and localStorage persistence

## 📋 Features

### Multi-language Support (i18n) 🌐

- **Languages**: Chinese (default) and English
- **Browser Detection**: Automatically detects user's preferred language
- **Persistence**: Language choice saved in localStorage
- **Language Switcher**: Toggle between languages via header button
- **Full Coverage**: All pages, components, and content translated

### Pages

- **Home** (`/`) - Mission statement with interactive sections
  - Hero banner with statistics
  - "What We Do" section with video modal
  - "How We Do It" - 4-step process with hover effects
  - Promise section with call-to-action
- **About** (`/about`) - Organization details
  - Mission statement with highlighted values
  - Interactive horizontal timeline roadmap (2015-2018, 9 events)
  - Comprehensive FAQ (9 Q&A pairs)
- **Apply** (`/apply`) - Application form for prosthetic assistance
- **Help** (`/help`) - Volunteer registration and support options

### Reusable Components

- **Banner** - Hero sections with background images and centered content
- **Roadmap** - Horizontal timeline with alternating top/bottom layout (hidden on mobile)
- **FAQ** - Question & Answer component with collapsible sections
- **VideoModal** - Integrated Youku video player
- **Header** - Responsive navigation with language switcher
- **Footer** - Contact information and social links

### Design Highlights

- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Component-Based Architecture**: Reusable, prop-driven components
- **Brand-Consistent Colors**: CSS variables for theming
- **Smooth Animations**: Hover effects and transitions
- **Accessibility**: Semantic HTML and ARIA labels
- **Form Integration**: Embedded Jinshuju forms

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
├── locales/              # Translation files
│   ├── en/              # English translations
│   │   ├── common.json  # Navigation, footer
│   │   ├── home.json
│   │   ├── about.json
│   │   ├── application.json
│   │   └── join.json
│   └── zh/              # Chinese translations
│       └── (same structure)
├── public/
│   └── images/          # Static images and assets
│       ├── img/         # Page-specific images
│       ├── handson-logo.png
│       └── qr.webp
├── src/
│   ├── app/
│   │   ├── components/  # React components
│   │   │   ├── Banner.tsx       # Reusable hero banner
│   │   │   ├── Roadmap.tsx      # Timeline component
│   │   │   ├── Faq.tsx          # FAQ component
│   │   │   ├── Header.tsx       # Navigation + i18n switcher
│   │   │   ├── Footer.tsx       # Contact footer
│   │   │   ├── VideoModal.tsx   # Video player modal
│   │   │   └── ui/              # UI library components
│   │   ├── contexts/    # React contexts
│   │   │   └── I18nContext.tsx  # i18n provider
│   │   ├── lib/         # Utility functions
│   │   ├── about/       # About page
│   │   ├── apply/       # Application page
│   │   ├── help/        # Help page
│   │   ├── layout.tsx   # Root layout with i18n provider
│   │   ├── page.tsx     # Home page
│   │   └── global.css   # Global styles + CSS variables
│   └── styles/          # Legacy styles (reference)
├── components.json      # shadcn/ui config
├── tailwind.config.ts   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## 🌐 Internationalization (i18n)

### Usage in Components

```typescript
import { useI18n } from '../contexts/I18nContext';

function MyComponent() {
  const { t, language, setLanguage } = useI18n();

  return (
    <div>
      <h1>{t('common', 'nav.home')}</h1>
      <button onClick={() => setLanguage('en')}>English</button>
    </div>
  );
}
```

### Translation Files

- Located in `locales/{lang}/{namespace}.json`
- Supports nested keys with dot notation
- Automatic browser language detection
- localStorage persistence across sessions

## 🎨 Styling

The project uses Tailwind CSS with custom brand colors defined in `global.css`:

- **Primary Blue**: `#4a90e2`
- **Orange**: `#ff8c00` / `#f26739`
- **Green**: `#8cc63f` / `#9bcb3c`
- **Purple**: `#a56eae`
- **Light Grey**: `#eeeeee`
- **Text Grey**: `#5a5a5a`

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

- **WeChat**: wow3dhand (QR code available on website)
- **Email**: techforgood.china@gmail.com

---

Built with ❤️ for children in need across China
