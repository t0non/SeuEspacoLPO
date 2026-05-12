'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { gtag_report_conversion } from '@/lib/gtm-conversions';

const WhatsappFab = () => {
  const [step, setStep] = useState(0);

  // Configurações do WhatsApp
  const phoneNumber = '5511988259447'; // (11) 98825-9447
  const message = 'Olá! Preciso de ajuda com a limpeza, gostaria de um orçamento.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Controle de tempo para a animação
  useEffect(() => {
    const typingTimer = setTimeout(() => setStep(1), 800);
    const firstMessageTimer = setTimeout(() => setStep(2), 2600);
    const secondMessageTimer = setTimeout(() => setStep(3), 5200);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(firstMessageTimer);
      clearTimeout(secondMessageTimer);
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    gtag_report_conversion(whatsappUrl);
  };

  return (
    // z-[99999] com um número bem alto para furar qualquer bloqueio do site
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[99999] flex items-end justify-end gap-3 w-full max-w-[calc(100vw-2rem)] pointer-events-none">
      
      {/* Container das Mensagens */}
      <div className="flex flex-col items-end gap-1 mb-1 pointer-events-auto">
        
        {/* Animação de Digitando */}
        {step === 1 && (
          <div className="flex w-max items-center gap-1.5 rounded-2xl rounded-br-sm bg-white px-2.5 py-1.5 shadow-xl border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.3s]"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.15s]"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce"></span>
          </div>
        )}

        {step >= 2 && (
          <Link 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block"
            onClick={(e) => {
              e.preventDefault();
              if (typeof window !== 'undefined' && window.gtag_report_conversion) {
                window.gtag_report_conversion(whatsappUrl);
              } else {
                window.open(whatsappUrl, '_blank');
              }
            }}
          >
            <div className="flex w-max max-w-[170px] sm:max-w-[210px] flex-col rounded-2xl rounded-br-sm bg-white px-2.5 py-2 shadow-xl border border-gray-100 animate-in fade-in slide-in-from-bottom-2 duration-300 hover:bg-gray-50 active:scale-95 transition-all">
              <span className="text-[11px] sm:text-[12px] font-bold text-slate-800">Seu Espaço LPO</span>
              <span className="text-[11px] sm:text-[12px] text-slate-600 mt-0.5 leading-snug whitespace-normal break-words">
                Olá! Precisa de ajuda com a limpeza?
              </span>
            </div>
          </Link>
        )}

        {step >= 3 && (
          <Link 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block"
            onClick={(e) => {
              e.preventDefault();
              if (typeof window !== 'undefined' && window.gtag_report_conversion) {
                window.gtag_report_conversion(whatsappUrl);
              } else {
                window.open(whatsappUrl, '_blank');
              }
            }}
          >
            <div className="flex w-max max-w-[170px] sm:max-w-[210px] flex-col rounded-2xl rounded-br-sm bg-white px-2.5 py-2 shadow-xl border border-gray-100 animate-in fade-in slide-in-from-bottom-2 duration-300 hover:bg-gray-50 active:scale-95 transition-all">
              <span className="text-[11px] sm:text-[12px] font-bold text-slate-800">Seu Espaço LPO</span>
              <span className="text-[11px] sm:text-[12px] text-slate-600 mt-0.5 leading-snug whitespace-normal break-words">
                Clique aqui para um orçamento rápido!
              </span>
            </div>
          </Link>
        )}
      </div>

      {/* A BOLINHA INFALÍVEL (Ícone SVG do WhatsApp) */}
      <div className="relative shrink-0 pointer-events-auto">
        <Link 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all"
          onClick={(e) => {
            e.preventDefault();
            if (typeof window !== 'undefined' && window.gtag_report_conversion) {
              window.gtag_report_conversion(whatsappUrl);
            } else {
              window.open(whatsappUrl, '_blank');
            }
          }}
        >
          {/* SVG WhatsApp de Alta Qualidade e Perfeitamente Centralizado */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512" 
            fill="currentColor" 
            className="h-7 w-7 sm:h-8 sm:w-8"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </Link>
      </div>

    </div>
  );
};

export default WhatsappFab;
