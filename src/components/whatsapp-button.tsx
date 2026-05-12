'use client';

import React from 'react';
import Link from 'next/link';
import { gtag_report_conversion } from '@/lib/gtm-conversions';

interface WhatsAppButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ href, children, className, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    gtag_report_conversion(href);
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <Link 
      href={href} 
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};

export default WhatsAppButton;
