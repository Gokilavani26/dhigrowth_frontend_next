# DhiGrowth

> **Dhi Growth: Turning Your Business Potential into Lasting Success.**

A modern, high-performance web application built with **Next.js (App Router)** to deliver a fast, responsive, and interactive experience for DhiGrowth users. 

## ✨ Key Features

- **Next.js App Router**: Optimized routing and server-side rendering.
- **Dynamic UI**: Beautiful micro-interactions and smooth animations using Framer Motion.
- **Responsive Design**: Mobile-first architecture styled with Tailwind CSS.
- **State Management**: Lightweight and fast global state management with Zustand.
- **Type Safety**: Fully built with TypeScript for robust and maintainable code.
- **API Integration**: Seamless data fetching utilizing Axios.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **HTTP Client**: [Axios](https://axios-http.com/)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following installed on your machine:
- Node.js (v20 or higher recommended)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the project directory:
```bash
cd dhigrowth_frontend_next
```

3. Install the dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Running the Development Server

Start the development server with hot-reloading:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

The project follows the standard Next.js App Router structure:

```
├── app/                  # Next.js App Router pages and layouts
│   ├── layout.tsx        # Root layout wrapper
│   ├── page.tsx          # Main entry page
│   └── globals.css       # Global styles and Tailwind directives
├── components/           # Reusable React components (UI, Layout, etc.)
├── public/               # Static assets (images, fonts, icons)
├── package.json          # Project dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```
