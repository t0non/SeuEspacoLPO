'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const QuickQuoteWidget = () => {
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 2000); // 2-second delay before showing the message

    return () => clearTimeout(timer);
  }, []);
  
  const TypingIndicator = () => (
    <div className="flex items-center space-x-1.5 p-2">
      <div className="h-2.5 w-2.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.3s]" />
      <div className="h-2.5 w-2.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.15s]" />
      <div className="h-2.5 w-2.5 rounded-full bg-slate-400 animate-bounce" />
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-4 group">
      {/* Chat Bubble */}
      <Link href="#quote" className="cursor-pointer">
        <div className="relative flex items-center justify-center bg-white rounded-xl p-5 shadow-lg max-w-xs min-h-[88px] transition-transform transform group-hover:scale-105">
           {isTyping ? (
            <TypingIndicator />
          ) : (
            <p className="text-xl text-slate-700">
              Que tal receber um <strong className="font-bold text-slate-900">Orçamento Rápido</strong>?
            </p>
          )}
          {/* Bubble tail */}
          <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0
            border-t-8 border-t-transparent
            border-l-8 border-l-white
            border-b-8 border-b-transparent">
          </div>
        </div>
      </Link>

      {/* Avatar */}
      <div className="relative flex-shrink-0">
        <Image
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&h=150&fit=crop&crop=faces"
          alt="Atendente"
          data-ai-hint="friendly attendant"
          width={80}
          height={80}
          className="rounded-full object-cover border-4 border-white shadow-md"
        />
        <span className="absolute bottom-1 right-1 block h-5 w-5 rounded-full bg-emerald-500 ring-2 ring-white" />
      </div>
    </div>
  );
};

export default QuickQuoteWidget;
