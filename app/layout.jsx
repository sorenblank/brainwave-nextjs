import "./globals.css";

export const metadata = {
  title: "Brainwave AI",
  description: "Unleash the power of Ai with Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.",
};

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
