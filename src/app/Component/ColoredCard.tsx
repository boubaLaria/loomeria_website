// components/ColoredCard.tsx
import React from 'react';

interface ColoredCardProps {
  color: 'yellow' | 'blue' | 'indigo';
  title: string;
  description: string;
  wight?: string;
}

export default function ColoredCard({ color, title, description,wight }: ColoredCardProps) {
  const bgColor = {
    yellow: 'bg-[#FAF7F0]',
    indigo: 'bg-[#2A3F7E]',
    blue: 'bg-[#B1C6FF]'
  };

  return (
    <div className={`${bgColor[color]} ${wight}  rounded-xl rounded-r-full p-4 mb-4`}>
      <div className="flex items-center mb-2">
        <h3 className={`font-medium text-[20px] md:text-[24px] ${color==="indigo"?"text-white":" text-blue-900"} font-poppins`}>{title}</h3>
      </div>
      <p className={`${color==="indigo"?"text-white":" text-gray-600"}   font-poppins font-light text-base`}>{description}</p>
    </div>
  );
}
