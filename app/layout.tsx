import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./(styles)/globals.css";
import Header from "./(components)/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rebecca Shoptaw | Software Engineer",
  description: "NYC-based full-stack software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
