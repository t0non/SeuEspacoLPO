'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const WhatsappFab = () => {
  const [step, setStep] = useState(0);

  // Configurações do WhatsApp
  const phoneNumber = '5511999999999'; // Coloque seu número aqui
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
          {/* SVG Oficial do WhatsApp */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="h-7 w-7 sm:h-8 sm:w-8 ml-0.5 mt-0.5"
          >
            <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.652.868 5.105 2.333 7.145L.302 24l4.986-1.954C7.265 23.366 9.559 24 12.031 24 18.677 24 24 18.615 24 11.969 24 5.323 18.677 0 12.031 0zm0 22.016c-2.227 0-4.32-.578-6.15-1.583l-.441-.24-3.125 1.224.846-3.05-.27-.432A9.917 9.917 0 012.016 12.03c0-5.514 4.486-10 10.015-10 5.514 0 10 4.486 10 10s-4.486 10-10 10zM17.51 14.51c-.302-.15-1.782-.878-2.058-.98-.276-.102-.478-.15-.678.15-.201.302-.779.98-1.005 1.18-.226.202-.452.227-.754.076-1.558-.779-2.738-1.482-3.844-3.366-.226-.376-.025-.578.126-.729.126-.126.302-.352.453-.527.15-.176.201-.302.301-.502.101-.201.05-.376-.025-.527-.075-.15-.678-1.633-.93-2.235-.251-.603-.502-.527-.678-.527h-.578c-.201 0-.527.075-.804.376-.276.302-1.055 1.03-1.055 2.512 0 1.482 1.08 2.914 1.23 3.115.15.201 2.135 3.265 5.174 4.57.728.326 1.28.502 1.708.653.728.226 1.381.201 1.908.126.578-.075 1.783-.728 2.034-1.431.251-.703.251-1.306.176-1.431-.075-.126-.276-.201-.578-.352z" />
          </svg>
        </Link>
      </div>

    </div>
  );
};

export default WhatsappFab;
