import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <main className='min-h-[100dvh] h-full flex items-center justify-center bg-neutral-900'>{children}</main>
      </body>
    </html>
  );
};

export default AuthLayout;