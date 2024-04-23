import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body
      // style={{
      //   marginLeft: 0,
      //   marginRight: 0,
      //   marginTop: 0,
      //   marginBottom: 0,
      // }}
      // className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
