import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo App",
  description: "Organize your life with the best todo app from the universe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-custom-bg antialiased`}>
        <StoreProvider>
          <main className="mb-16 w-[398px] pt-16">{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
