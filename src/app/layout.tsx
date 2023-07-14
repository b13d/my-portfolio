import "./globals.css";
import { Lato } from "next/font/google";
import Head from "next/head";

const lato = Lato({ weight: "700", subsets: ["latin"] });

export const metadata = {
  title: "Danila Boltach | Web Developer",
  description: "Portfolio web developer Danila Boltach",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
