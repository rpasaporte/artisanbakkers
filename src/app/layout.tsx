'use client';

import { usePathname } from 'next/navigation';
import NavigationBar from '../components/Navigation';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showNavbar = pathname !== '/proofing';

  return (
    <html lang="en">
      <body>
        <div className="w-full">
          {showNavbar && <NavigationBar />}
          <main className={showNavbar ? 'mt-[90px]' : 'mt-0'}>{children}</main>
        </div>
      </body>
    </html>
  );
}
