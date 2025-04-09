import "./globals.css";
import Footer from './Component/Footer';
import { Metadata } from 'next';
import Header from "./Component/Header";

export const metadata: Metadata = {
  title: 'Loomeria - Le savoir-faire à portée de main',
  description: 'Plateforme de vente pour artisans et commerçants locaux',
  icons: {
    icon: '/logo-loomeria.ico?v=1',
    apple: '/logo-loomeria.ico?v=5',
  },
  verification: {
    other: {
      'p:domain_verify': 'de4a2150b02d9911e5dc5249e9c9769d',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="font-sans mx-auto bg-white">
        <Header />
          <main className="pt-6">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}