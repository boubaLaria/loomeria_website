import "./globals.css";
import Header from './Component/Header';
import Footer from './Component/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loomeria - Le savoir-faire à portée de main',
  description: 'Plateforme de vente pour artisans et commerçants locaux',
  icons: {
    icon: '/logo-loomeria.ico?v=1',
    apple: '/logo-loomeria.ico?v=5',
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