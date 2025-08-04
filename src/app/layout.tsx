import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Scheda Allenamento - Palestra",
  description:
    "Scheda personalizzata di allenamento per Bilal Messaoudi. Programma completo di 8-10 settimane con 3 giorni settimanali di allenamento.",
  keywords: [
    "palestra",
    "allenamento",
    "fitness",
    "scheda",
    "workout",
    "esercizi",
    "timer",
  ],
  authors: [{ name: "BM" }],
  creator: "BM",
  publisher: "BM",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://scheda-palestra-ui.vercel.app"),
  openGraph: {
    title: "Scheda Allenamento - Palestra",
    description: "Scheda personalizzata di allenamento per Bilal Messaoudi",
    type: "website",
    locale: "it_IT",
    siteName: "Scheda Allenamento",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scheda Allenamento - Palestra",
    description: "Scheda personalizzata di allenamento per Bilal Messaoudi",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f172a" },
    { media: "(prefers-color-scheme: dark)", color: "#f8fafc" },
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
