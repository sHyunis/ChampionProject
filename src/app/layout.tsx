import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import Providers from "./provider";

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

export const metadata = {
  title: "롤 챔피언 소개 페이지",
  description: "리그 오브 레전드의 챔피언에 대한 정보",
  keywords: "리그 오브 레전드, 롤, 챔피언",
  openGraph: {
    title: "롤 챔피언 페이지",
    description: "리그 오브 레전드의 모든 챔피언 정보를 제공합니다.",
    url: "https://champion-project-8wbj.vercel.app/",
    images: [
      {
        url: "https://champion-project-8wbj.vercel.app/champion-thumbnail.png",
        width: 800,
        height: 600,
        alt: "리그 오브 레전드",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          <Suspense fallback={<Loading type={"default"} />}>
            {children}
          </Suspense>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
