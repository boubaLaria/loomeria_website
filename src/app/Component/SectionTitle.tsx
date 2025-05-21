// components/SectionTitle.tsx
import React, { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  withStar?: boolean;
}

export default function SectionTitle({ children, withStar = false }: SectionTitleProps) {
  return (
    <h2 className="text-[32px] md:text-[40px] font-medium text-blue-900 text-center mb-4 font-chillax">
      {children} {withStar && '⭐'}
    </h2>
  );
}
