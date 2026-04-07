import type {Metadata} from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL || 'https://a1awatercraft.com'),
  title: 'A1A Watercraft Repairs | Same-Day Jet Ski Repair Pompano Beach',
  description: 'Same-Day Jet Ski Repair in Pompano Beach. Engine tuning, sluggish performance, and dockside mobile service. 145+ 5-Star Reviews.',
  openGraph: {
    title: 'A1A Watercraft Repairs | Same-Day Jet Ski Repair',
    description: 'Fastest Jet Ski Repair in Pompano Beach. Wes comes to your dock.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552066344-2464c1135c32?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'A1A Watercraft Repair Jet Ski',
      },
    ],
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22%23cc3333%22/><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Oswald, sans-serif%22 font-weight=%22bold%22 font-size=%2240%22 fill=%22white%22>A1A</text></svg>',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} scroll-smooth`}>
      <body className="font-sans bg-fuel-slate text-safety-white antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
