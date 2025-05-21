import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="container max-w-6xl mx-auto p-4 flex flex-col md:flex-row items-center mt-10">
      <div className="md:w-1/2 mb-8 md:mb-0 pr-8">
        <h1 className="text-[40px] md:text-[48px] font-medium text-blue-900 mb-4 font-chillax">
          Le savoir-faire à portée de main
        </h1>
        <p className="text-gray-600 mb-6 font-poppins font-light text-base">
          Loomeria vous connecte directement avec des petits commerçants
          passionnés qui offrent des vêtements et accessoires uniques. Explorez
          une sélection variée, des pièces artisanales aux créations modernes,
          toutes accessibles en quelques clics.
        </p>
        <button className="bg-blue-800 text-white px-6 py-3 rounded-full font-poppins font-normal text-base">
          Je télécharge l&apos;application gratuitement
        </button>
      </div>
      <div className="md:w-1/2">
        <Image
          src="/iPhone-15-Pro.png"
          alt="Loomeria application"
          width={500}
          height={400}
          className="object-contain"
        />
      </div>
    </div>
  );
}
