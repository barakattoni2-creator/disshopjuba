import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DIS Shop Juba | Destiny Investment & Supplies',
  description: 'South Sudan online shopping for tools, AC, solar, plumbing, household, mattresses, decoration, cleaning and gym equipment.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
