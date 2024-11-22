"use client"
// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ToastProvider } from "./toast/_components/Toast";
// import Toast_1 from "./toast/_components/Toast_1";
// import Toast_2 from "./toast/_components/Toast_2";
// import Toast_3 from "./toast/_components/Toast_3";
// import Toast_5 from "./toast/_components/Toast_5";
// import Toast_6 from "./toast/_components/Toast_6";
// import Toast_7 from "./toast/_components/Toast_7";
// import Toast_8 from "./toast/_components/Toast_8";
// import Toast_4 from "./toast/_components/Toast_4";
// import Toast_9 from "./toast/_components/Toast_9";
import Toast_10 from "./toast/_components/Toast_10";
import Toast_11 from "./toast/_components/Toast_11";
import Toast_12 from "./toast/_components/Toast_12";
import Toast_13 from "./toast/_components/Toast_13";

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

//  const metadata: Metadata = {
//   title: "Multi UI",
//   description: "Under construction.....",
// };

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
        <ToastProvider Toast={Toast_13} stack={false}>
          <>{children}</>
        </ToastProvider>
      </body>
    </html>
  );
}
