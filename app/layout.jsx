import "./globals.css";

export const metadata = {
  metadataBase: "https://brainwave-ai.vercel.app", // Base URL for the website
  title: "Brainwave AI", // Title of the website
  description: "Unleash the power of Ai with Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.", // Description of the website
  image: "https://brainwave-ai.vercel.app/embed.png", // Image for the website
  keywords: ["Brain", "Wave", "Brainwave"], // Keywords for the website
  openGraph: { // Open Graph data for the website
    images: [
      {
        url: "https://brainwave-ai.vercel.app/og-image.png", // Open Graph image for the website
      },
    ],
  },
  twitter: { // Twitter card data for the website
    images: [
      {
        url: "https://brainwave-ai.vercel.app/og-image.png", // Twitter card image for the website
      },
    ]
  },
}

export const viewport = {
  themeColor: '#AC6AFF', // Theme color for the website
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          {children}
        </div>  
      </body>
    </html>
  );
}
