import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import TalkTo from "./components/talkTo";
const inter = Inter({ subsets: ["latin"] });
import { GoogleTagManager } from '@next/third-parties/google'
export const metadata: Metadata = {
  title: "Aun Digital",
  description: "Aun Digital description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleTagManager gtmId="GTM-NC2Z4F2D" />
        <Header />
        {children}
        <TalkTo />
        <Footer />
      </body>
    </html>
  );
}
