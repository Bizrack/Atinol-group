# The Atinol Group – Website

Professional site for **The Atinol Group Corp (T.A.G. Corp)** built with Next.js 14 and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project structure

- **`src/app/`** – App Router pages (home, about, services, book, privacy)
- **`src/components/`** – Reusable UI and layout components
  - `ui/` – Button, Card, Section, Logo
  - `layout/` – Header, Footer
  - `home/` – Hero, ShortDescription, AboutSnapshot, ServicesOverview, WhyChooseUs, BookingSection, Testimonials
  - `forms/` – ContactForm
- **`src/lib/site-config.ts`** – Site copy, nav links, services, contact info, calendar URL

## Customization

- **Brand colors** – Edit `tailwind.config.ts` and `src/app/globals.css` (atinol blue/teal/green).
- **Content** – Update `src/lib/site-config.ts` and page content in `src/app/`.
- **Calendar** – Set `calendarUrl` in `site-config.ts` to your Calendly/Cal.com (or similar) link for the Book page.
- **Hero images** – Add `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg` in `public/` for the carousel. If missing, the hero uses a gradient.

## Contact form

The `/api/contact` route accepts POST JSON (`name`, `email`, `phone?`, `message`). Wire it to your email provider (e.g. Resend, SendGrid) in `src/app/api/contact/route.ts`.
