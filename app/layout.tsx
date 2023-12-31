import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/layouts/LeftSidebar/sidebar';
import RightBar from '@/components/layouts/RightSideBar/right-bar';
import MobileNavbar from '@/components/layouts/MobileNavbar';

const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <main className='min-h-[100dvh] bg-neutral-900'>
          <Sidebar />
          <RightBar />
          <MobileNavbar />
          {children}
        </main>
      </body>
    </html>
  );
}
