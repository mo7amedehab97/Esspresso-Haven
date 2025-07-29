# ☕ Espresso Haven - Specialty Coffee Shop Website

A modern, multilingual coffee shop website built with Next.js 15, featuring a beautiful UI, internationalization support, and a complete coffee shop experience.

## 🌟 Features

### ☕ Coffee Shop Experience
- **Specialty Coffee Menu**: Espresso classics, lattes, cappuccinos, cold brews, and more
- **Fresh Pastries**: Daily baked treats and desserts
- **Tea Selection**: Premium loose-leaf teas and alternatives
- **Online Ordering**: Contact form for coffee orders and inquiries

### 🌍 Internationalization
- **Bilingual Support**: English and Arabic languages
- **RTL Layout**: Full right-to-left support for Arabic
- **Locale Switching**: Seamless language switching
- **Localized Content**: All text, metadata, and SEO optimized for both languages

### 🎨 Modern Design
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Beautiful UI**: Modern, clean interface with coffee-themed aesthetics
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Performance**: Optimized with Next.js 15 and Turbopack

### 📱 User Experience
- **Contact Form**: Functional contact form with email integration
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Fast Loading**: Optimized images and assets
- **Cross-browser**: Compatible with all modern browsers

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **UI Components**: [Base UI Components](https://base-ui-components.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

- **Font**: [Baloo Bhaijaan 2](https://fonts.google.com/specimen/Baloo+Bhaijaan+2) (supports Arabic)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended), npm, yarn, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Esspresso-Haven
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── layout.tsx     # Locale-specific layout
│   │   └── page.tsx       # Home page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ContactForm.tsx    # Contact form component
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── LocaleSwitcher.tsx # Language switcher
│   └── home/              # Home page components
├── i18n/                  # Internationalization config
├── translations/          # Translation files
│   ├── en.json           # English translations
│   └── ar.json           # Arabic translations
├── utils/                 # Utility functions
│   ├── metadata.ts       # SEO metadata builder
│   └── types.ts          # TypeScript types
└── hooks/                # Custom React hooks
```

## 🌍 Internationalization

The website supports English and Arabic with the following features:

- **Route-based locales**: `/en/` and `/ar/` prefixes
- **RTL support**: Automatic right-to-left layout for Arabic
- **Font optimization**: Baloo Bhaijaan 2 font with Arabic support
- **Localized metadata**: SEO optimized for each language

### Adding New Languages

1. Add locale to `src/i18n/routing.ts`
2. Create translation file in `src/translations/`
3. Update locale switcher component

## 📧 Contact Form

The contact form includes:
- **Form validation**: Client and server-side validation
- **Demo functionality**: Simulates email sending (no actual emails sent)
- **Success/error handling**: User feedback
- **Form logging**: Console logging for demo purposes

## 🎨 Customization

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Custom colors**: Coffee-themed color palette
- **Responsive design**: Mobile-first approach

### Content
- **Translation files**: Easy content updates
- **Images**: Optimized coffee shop images
- **SEO**: Meta tags and structured data

## 📱 Responsive Design

The website is fully responsive with:
- **Mobile-first**: Optimized for mobile devices
- **Tablet support**: Medium screen layouts
- **Desktop experience**: Full desktop features
- **Touch-friendly**: Optimized for touch interactions

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## ☕ About Espresso Haven

Espresso Haven is a specialty coffee shop that offers:
- **Premium coffee**: Ethically sourced, freshly roasted beans
- **Expert baristas**: Certified coffee professionals
- **Cozy atmosphere**: Welcoming space for coffee lovers
- **Community focus**: Gathering place for coffee enthusiasts

## 📞 Contact

- **Website**: [espressohaven.com](https://espressohaven.com)
- **Email**: mohamed.helles.dev@gmail.com
- **Phone**: +970595514207
- **Address**: 123 Coffee Lane, Downtown, Your City

---

**Brewed with ❤️ and ☕ by the Espresso Haven team**
