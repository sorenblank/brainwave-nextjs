Here's the updated README.md file for your Next.js application:

```markdown
# Brainwave | NextJS

This is a modern AI landing page made with [TailwindCSS](https://tailwindcss.com) and [Next.js](https://nextjs.org/).

![Brainwave](https://github.com/sorenblank/brainwave-nextjs/blob/main/public/og-image.png "Brainwave AI Landing Page")

## Table of Contents
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [TailwindCSS Configuration](#tailwindcss-configuration)
- [Scripts](#scripts)
- [Learn More](#learn-more)
- [Deploy on Vercel](#deploy-on-vercel)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get a local copy up and running follow these simple steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/sorenblank/brainwave-nextjs.git
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Folder Structure

The folder structure of the project is as follows:

- `app/`: Main application folder
  - `favicon.ico`: Favicon for the site
  - `globals.css`: Global CSS styles
  - `layout.jsx`: Layout component for consistent layout across pages
  - `page.jsx`: Main page component
  - `components/`: Reusable components
  - `lib/`: Utility functions and constants
    - `constants.jsx`: Constants used throughout the application
  - `pages/`: Next.js pages
    - `...`: Individual page components

- `public/`: Public assets
  - `og-image.png`: Open Graph image for social sharing

## TailwindCSS Configuration

The TailwindCSS configuration can be found in `tailwind.config.js`. It includes customizations such as:

- Extended color palette
- Custom font families
- Additional spacing utilities
- Custom gradients and background images
- Utility classes for typography and buttons

## Scripts

- `npm run dev`: Runs the development server
- `npm run build`: Builds the production-ready application
- `npm start`: Starts the production server
- `npm run lint`: Runs ESLint for linting

## Learn More

To learn more about Next.js and TailwindCSS, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [TailwindCSS Documentation](https://tailwindcss.com/docs) - explore TailwindCSS utility classes.

You can also check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) and [TailwindCSS GitHub repository](https://github.com/tailwindlabs/tailwindcss) for more details.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details on deploying your application.

## Contributing

Contributions are welcome and encouraged! If you want to contribute to this project, please follow these steps:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Added some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).