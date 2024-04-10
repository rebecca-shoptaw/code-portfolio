import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./(styles)/globals.css";
import Nav from "./(components)/Nav";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
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
      <body className={lato.className}>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
