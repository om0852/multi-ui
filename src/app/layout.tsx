import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from '../lib/registry';
// import { ToastProvider } from "./toast/_components/Toast";
// import Toast_1 from "./toast/_components/Toast_1";
// import Toast_2 from "./toast/_components/Toast_2";
// import Toast_3 from "./toast/_components/Toast_3";
// import Toast_5 from "./toast/_components/Toast_5";
// import Toast_6 from "./toast/_components/Toast_6";
// import Toast_7 from "./toast/_components/Toast_7";
// import Toast_8 from "./toast/_components/Toast_8";
// import Toast_4 from "./toast/_components/Toast_4";
// import Toast_9 from "./toast/_components/Toast_9";
// import Toast_10 from "./toast/_components/Toast_10";
// import Toast_11 from "./toast/_components/Toast_11";
// import Toast_12 from "./toast/_components/Toast_12";
// import Toast_13 from "./toast/_components/Toast_13";
// import Toast_15 from "./toast/_components/Toast_15";
// import Toast_17 from "./toast/_components/Toast_17";
// import Toast_18 from "./toast/_components/Toast_18";
// import Toast_19 from "./toast/_components/Toast_19";
// import Toast_20 from "./toast/_components/Toast_20";
// import Toast_21 from "./toast/_components/Toast_21";
// import Toast_22 from "./toast/_components/Toast_22";

const inter = Inter({ subsets: ['latin'] });

 const metadata= {
  title: 'Modern UI Components',
  description: 'A collection of modern UI components with beautiful animations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {/* <ToastProvider Toast={Toast_22} stack={false}> */}
            <>{children}</>
          {/* </ToastProvider> */}
      </body>
    </html>
  );
}
