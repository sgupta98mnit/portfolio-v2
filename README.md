# Sumit Gupta - Portfolio V2

A premium, high-performance portfolio website built with **Next.js 15**, **Tailwind CSS v4**, and **Framer Motion**. Designed to showcase expertise in **Full Stack Development** and **Identity & Access Management (IAM)**.

![Portfolio Preview](./public/preview.png)

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## Getting Started

First, install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker Support

The application is containerized and ready for deployment.

### Build the Image

```bash
docker build -t portfolio .
```

### Run the Container

```bash
docker run -p 3000:3000 portfolio
```

Visit `http://localhost:3000` to view the app running in Docker.

## Customization

All portfolio content is managed in a single data file for easy updates.

- **Modify Content**: Edit `data/portfolio.ts` to update your bio, experience, projects, and skills.
- **Update Resume**: Replace `public/resume.pdf` with your latest resume (keep the filename the same or update the link in `data/portfolio.ts`).

## Project Structure

```bash
├── app/                  # Next.js App Router
│   ├── globals.css       # Global styles (Tailwind theme)
│   ├── layout.tsx        # Root layout (Navbar, Footer)
│   └── page.tsx          # Main landing page
├── components/           # React Components
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, About, Experience, Projects, etc.
│   └── ui/               # Reusable UI primitives (Button, Badge)
├── data/                 # Content Source of Truth
│   └── portfolio.ts      # Edit this to change text!
├── public/               # Static Assets
│   └── resume.pdf        # Downloadable resume
└── lib/                  # Utilities
    └── utils.ts          # Tailwind class merger
```

## Deployment

The easiest way to deploy is via [Vercel](https://vercel.com).

1. Push code to GitHub.
2. Import project in Vercel.
3. Deploy!
