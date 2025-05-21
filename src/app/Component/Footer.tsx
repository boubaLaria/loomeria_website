// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from './Logo';
import SocialIcon from './SocialIcon';

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Logo withText={true} />
            </div>
            <p className="text-gray-600 mb-4 font-poppins font-light text-base">contact@loomeria.com</p>
            <div className="flex space-x-2">
              <SocialIcon Icon={FaTwitter} />
              <SocialIcon Icon={FaFacebook} />
              <SocialIcon Icon={FaInstagram} />
              <SocialIcon Icon={FaLinkedin} />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium text-[16px] md:text-[20px] text-blue-900 mb-4 font-poppins">À propos de nous</h4>
              <ul className="text-gray-600 space-y-2 font-poppins font-light text-base">
                <li><Link href="/">Qui sommes nous?</Link></li>
                <li><Link href="/">Nos valeurs</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-[16px] md:text-[20px] text-blue-900 mb-4 font-poppins">Pour vous</h4>
              <ul className="text-gray-600 space-y-2 font-poppins font-light text-base">
                <li><Link href="/">Acheter sur Loomeria</Link></li>
                <li><Link href="/">Vendre sur Loomeria</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between font-poppins font-light">
          <p>© { new Date().getFullYear() } Loomeria, tous droits réservés</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="/">Politique de confidentialité</Link>
            <Link href="/">Conditions générales d&apos;utilisation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

