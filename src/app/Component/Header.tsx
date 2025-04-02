// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="container mx-auto p-4 flex justify-between items-center rounded-full shadow-lg fixed top-4 left-0 right-0 z-50 bg-white dark:bg-gray-800">
      <Logo />
      <nav className="hidden md:flex space-x-6 text-sm text-gray-600">
        <Link href="#hero">Qui sommes nous?</Link>
        <Link href="#values">Aide vendeurs</Link>
        <Link href="#why-choose">Acheter sur Loomeria</Link>
        <Link href="#why-sell">Vendre sur Loomeria</Link>
        <Link href="#pricing">Pricing</Link>
        <Link href="#app-promo">Nous écrire</Link>
      </nav>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">Télécharger l&apos;application</button>
    </header>
  );
}