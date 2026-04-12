'use client';

import React from 'react';
import Link from 'next/link';
import { gtag_report_conversion } from '@/lib/gtm-conversions';

interface WhatsAppButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ href, children, className }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    gtag_report_conversion(href);
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
