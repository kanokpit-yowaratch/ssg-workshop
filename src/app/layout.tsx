import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SSG - NextShop',
  description: 'ตัวอย่าง Next.js 15 SSG Workshop กับ TypeScript และข้อมูล JSON',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className={inter.className}>
        <Navigation />
        {children}
        <footer className="bg-gray-800 text-white p-6 mt-12">
          <div className="container mx-auto">
            <p className="text-center">&copy; {new Date().getFullYear()} NextShop - Next.js 15 SSG Workshop</p>
          </div>
        </footer>
      </body>
    </html>
  );
}