"use client";
// components/Header.tsx
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    // Fonction pour gérer le chargement initial avec hash dans l'URL
    const handleInitialLoad = () => {
      // Si l'URL contient un hash, il y a probablement eu un défilement automatique
      if (window.location.hash) {
        // Donner le temps au navigateur de défiler vers l'ancre
        setTimeout(() => {
          handleScroll();
        }, 300);
      } else {
        // Vérifier la position initiale même sans hash
        handleScroll();
      }
    };

    // Exécuter la vérification initiale
    handleInitialLoad();
    
    // Ajouter l'écouteur d'événement pour le défilement continu
    window.addEventListener("scroll", handleScroll);
    
    // Nettoyer l'écouteur d'événement à la désinscription du composant
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour gérer les clics sur les liens de navigation
  const handleNavClick = () => {
    // Après un court délai pour laisser la navigation se produire
    setTimeout(() => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 80);
    }, 100);
  };

  return (
    <header
      className={`container mx-auto p-4 flex justify-between items-center bg-white dark:bg-gray-800
        ${isScrolled ? "fixed top-4 left-0 right-0 z-50 shadow-lg rounded-full" : ""}
      `}
    >
      <Logo />
      <nav className="hidden md:flex space-x-6 text-sm text-gray-600">
        <Link href="#hero" onClick={handleNavClick}>Qui sommes nous?</Link>
        <Link href="#values" onClick={handleNavClick}>Aide vendeurs</Link>
        <Link href="#why-choose" onClick={handleNavClick}>Acheter sur Loomeria</Link>
        <Link href="#why-sell" onClick={handleNavClick}>Vendre sur Loomeria</Link>
        <Link href="#pricing" onClick={handleNavClick}>Pricing</Link>
        {/* <Link href="#app-promo" onClick={handleNavClick}>Nous écrire</Link> */}
      </nav>
      <Link
        href="#app-promo"
        className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
        onClick={handleNavClick}
      >
        Télécharger l&apos;application
      </Link>
    </header>
  );
}