# Testimonial Card

A small, responsive testimonial card built with Next.js, React, TypeScript, and Tailwind CSS. The card presents a profile image, name, handle, and testimonial quote in a centered layout that adapts to narrow screens.

## Getting Started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev       # Start the development server
npm run lint      # Run ESLint
npm run build     # Create a production build
npm run start     # Serve the production build
```

## Project Structure

```text
app/
├── components/
│   └── testimonial-card.tsx  # Reusable testimonial card
├── globals.css               # Global styles and Tailwind setup
├── layout.tsx                # Root layout and font configuration
└── page.tsx                  # Example testimonial
public/
└── testimonial-thumbnail.png # Default profile image
```

## Component API

`TestimonialCard` accepts these props:

| Prop | Type | Description |
| --- | --- | --- |
| `name` | `string` | Person's display name |
| `handle` | `string` | Person's username or handle |
| `quote` | `string` | Testimonial text |
| `imageSrc` | `string` | Optional profile image path |
| `imageAlt` | `string` | Optional accessible image description |

Example:

```tsx
<TestimonialCard
	name="Sarah Dole"
	handle="@sarahdole"
	quote="The variety and depth of creativity are astounding!"
/>
```
