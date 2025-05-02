import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const vietnamPro = localFont({
  src: "./fonts/BeVietnamPro-Regular.ttf",
  variable: "--font-vietnam-pro",
  weight: "100 900",
})
export const metadata: Metadata = {
  title: "Manage UI | Challenge",
  description: "Frontend Challenge by Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vietnamPro.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
