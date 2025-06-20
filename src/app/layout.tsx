// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import TransitionWrapper from "@/components/TransitionWrapper";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexLuSense - Innovation Studio",
  description: "A professor-student-led innovation studio pushing the boundaries of photonic sensing and autonomous systems.",
  openGraph: {
    title: "NexLuSense",
    description: "Cutting-edge photonic sensors and autonomous systems.",
    url: "https://nexlusense.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <TransitionWrapper transitionType="fade">
          <main className="flex-grow">{children}</main>
        </TransitionWrapper>

        <footer className="py-8 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">NexLuSense</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pushing the boundaries of photonic sensing and autonomous systems.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><Link href="/products/methane-detection" className="hover:text-gray-900 dark:hover:text-white">Methane Detection</Link></li>
                  <li><Link href="/products/xhale-health" className="hover:text-gray-900 dark:hover:text-white">XHale-Health</Link></li>
                  <li><Link href="/products/oke-ride" className="hover:text-gray-900 dark:hover:text-white">OKE-Ride</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>Email: asku@nexlusense.com</li>
                  <li>Phone: (405) 981-8456</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} NexLuSense, Inc. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
