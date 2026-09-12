import type { Metadata } from "next";
import "./globals.css";
import FloatingButtons from "./components/FloatingButtons";

export const metadata: Metadata = {
  title: "Agricultural Machinery Supplier | YTO",
  description: "YTO, a leading agricultural machinery supplier in China, provides a complete range of tractors, harvesting equipment and agricultural implements.",
  keywords: "Tractors, harvesting equipment, agricultural machine, agricultural implements",
  generator: "v0.app",
  icons: {
    icon: [{ url: "/logo2.png", type: "image/png" }],
    shortcut: "/logo2.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
