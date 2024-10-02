import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

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
    url: "https://your-domain.com",
    images: [
      {
        url: "https://your-domain.com/champion-thumbnail.png",
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
        <header className="w-full">
          <nav>
            <ul className="grid grid-cols-4 w-full bg-slate-800 h-10">
              <li className="flex justify-center items-center border border-solid border-gray-500 border-r-0 hover:bg-gray-200 hover:text-black ">
                <Link
                  href="/"
                  className="w-full h-full flex justify-center items-center font-bold"
                >
                  홈
                </Link>
              </li>
              <li className="flex justify-center items-center border border-solid border-gray-500 border-r-0 hover:bg-gray-200 hover:text-black ">
                <Link
                  href="/champions"
                  className="w-full h-full flex justify-center items-center font-bold"
                >
                  챔피언 목록
                </Link>
              </li>
              <li className="flex justify-center items-center border border-solid border-gray-500 border-r-0 hover:bg-gray-200 hover:text-black ">
                <Link
                  href="/items"
                  className="w-full h-full flex justify-center items-center font-bold"
                >
                  아이템 목록
                </Link>
              </li>
              <li className="flex justify-center items-center border border-solid border-gray-500 hover:bg-gray-200 hover:text-black ">
                <Link
                  href="/rotation"
                  className="w-full h-full flex justify-center items-center font-bold"
                >
                  챔피언 로테이션
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {children}
        <footer className="text-center mt-8 mb-8">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} sHyunis. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">Designed by sHyunis</p>
        </footer>
      </body>
    </html>
  );
}
