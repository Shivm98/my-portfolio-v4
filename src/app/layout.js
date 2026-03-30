import "./globals.css";
import portfolio from "@/content/portfolio.json";

export const metadata = {
  title: portfolio.meta.title,
  description: portfolio.meta.description,
};

export const viewport = {
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="dark overflow-x-hidden"
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="selection:bg-primary selection:text-on-primary engineer-grid overflow-x-hidden bg-background text-on-surface"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
