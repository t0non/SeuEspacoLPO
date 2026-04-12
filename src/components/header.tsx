'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Disable body scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const phoneNumber = '5511988259447'; // (11) 98825-9447
  const message = 'Olá! Gostaria de um orçamento gratuito para limpeza pós-obra.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 z-50 w-full transition-all duration-500',
          isScrolled 
            ? 'bg-white/80 border-b border-white/20 shadow-lg backdrop-blur-xl py-3' 
            : 'bg-transparent py-5'
        )}
      >
        <div className="container-wide flex items-center justify-between">
          <Link href="/" className="relative z-50 group" onClick={() => setIsMenuOpen(false)}>
            <div className="relative h-10 md:h-12 w-auto aspect-[4/1]">
              <Image
                src="https://files.catbox.moe/gfptca.png"
                alt="Seu Espaço LPO"
                fill
                className={cn(
                  'object-contain transition-all duration-500 group-hover:scale-105'
                )}
                priority
              />
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="#benefits" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled ? "text-muted-foreground" : "text-white/80"
              )}
            >
              Benefícios
            </Link>
            <Link 
              href="#scope" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled ? "text-muted-foreground" : "text-white/80"
              )}
            >
              Serviços
            </Link>
            <Link 
              href="#process" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled ? "text-muted-foreground" : "text-white/80"
              )}
            >
              Como Funciona
            </Link>
            <Button 
              asChild 
              className={cn(
                "rounded-full px-6 font-semibold transition-all duration-300 hover:shadow-lg active:scale-95",
                isScrolled 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md" 
                  : "bg-white text-primary hover:bg-white/90"
              )}
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Orçamento Grátis
              </a>
            </Button>
          </nav>

          <div className="md:hidden relative z-50">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={cn(
                'p-2 rounded-full transition-colors',
                isScrolled || isMenuOpen ? 'text-primary bg-secondary/50' : 'text-white bg-white/10 backdrop-blur-md'
              )}
            >
              {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-white transition-all duration-500 ease-in-out",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className='flex flex-col items-center justify-center h-full px-8 gap-8'>
          <div className="space-y-6 text-center">
            <Link 
              href="#benefits" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-2xl font-bold text-primary"
            >
              Benefícios
            </Link>
            <Link 
              href="#scope" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-2xl font-bold text-primary"
            >
              Serviços
            </Link>
            <Link 
              href="#process" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-2xl font-bold text-primary"
            >
              Como Funciona
            </Link>
          </div>
          
          <div className="w-full h-px bg-border" />
          
          <div className="text-center space-y-4">
            <h2 className="font-headline text-2xl font-bold text-primary">Pronto para a mudança?</h2>
            <p className="text-muted-foreground">Receba seu orçamento personalizado agora mesmo.</p>
            <Button asChild size="lg" className="w-full rounded-full bg-primary text-primary-foreground text-lg py-7">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                Falar com Consultor
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
