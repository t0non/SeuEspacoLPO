'use client';

import React from 'react';
import Link from 'next/link';

interface WhatsAppButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ href, children, className }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && window.gtag_report_conversion) {
      window.gtag_report_conversion(href);
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <Link 
      href={href} 
      onClick={handleClick}
      className={className}
    >
      {children}
    </Link>
  );
};

export default WhatsAppButton;
