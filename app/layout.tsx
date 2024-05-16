import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Octavio Fuentes - Software Engineer",
  description: "Software Engineer Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
