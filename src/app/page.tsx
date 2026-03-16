import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import BeforeAfter from '@/components/before-after';
import {
  Sparkles,
  FlaskConical,
  Hourglass,
  CheckCircle,
  ShieldCheck,
  Star,
  Key,
  Calculator,
} from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const InstantQuoteSection = dynamic(() => import('@/components/instant-quote-section'));
const TestimonialsMarquee = dynamic(() => import('@/components/testimonials-marquee'));
import ScrollReveal from '@/components/scroll-reveal';
import LimpezaBefore from '@/imagens/LIMPEZA (3).png';
import LimpezaAfter from '@/imagens/LIMPEZA.png';

const benefits = [
  {
    icon: <Sparkles className="size-10 text-accent" />,
    title: 'Limpeza Técnica',
    text: 'Removemos respingos de tinta, rejunte e poeira fina que a faxina comum não tira.',
  },
  {
    icon: <FlaskConical className="size-10 text-accent" />,
    title: 'Produtos Específicos',
    text: 'Utilizamos equipamentos e produtos profissionais que não danificam seus revestimentos novos.',
  },
  {
    icon: <Hourglass className="size-10 text-accent" />,
    title: 'Economia de Tempo',
    text: 'O que levaria dias para você limpar, nós resolvemos em horas.',
  },
  {
    icon: <Key className="size-10 text-accent" />,
    title: 'Pronta para Morar',
    text: 'Entregamos o imóvel higienizado e cheiroso para sua mudança imediata.',
  },
];

const scopeItems = [
  'Limpeza de vidros e esquadrias',
  'Remoção de pó de gesso de tetos e paredes',
  'Limpeza profunda de pisos e rodapés',
  'Higienização de banheiros e cozinhas (armários por dentro e fora)',
  'Limpeza de luminárias e interruptores',
];

const processSteps = [
    { number: "01", title: "Contato", description: "Você solicita um orçamento pelo WhatsApp." },
    { number: "02", title: "Avaliação", description: "Analisamos sua necessidade (por vídeo ou metragem)." },
    { number: "03", title: "Execução", description: "Nossa equipe vai até você com tudo necessário." },
    { number: "04", title: "Entrega", description: "Você recebe seu imóvel novo em folha." },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-lpo');
  const phoneNumber = '5511999999999'; // Placeholder
  const otherServicesMessage = 'Olá! Gostaria de consultar sobre outros serviços de limpeza que não encontrei no site.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(otherServicesMessage)}`;


  return (
    <>
      <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              sizes="100vw"
              className="object-cover scale-105 animate-in zoom-in-110 duration-1000 ease-out"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent md:hidden" />
          </div>
        )}
        
        <div className="container-wide relative z-10 pt-20">
          <div className="max-w-3xl">
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-headline font-black leading-[0.9] md:leading-[0.85] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              Sua obra acabou.<br />
              <span className="text-accent">A perfeição</span> começa agora.
            </h1>
            
            <p className="text-lg md:text-2xl text-white/80 font-light max-w-xl mb-10 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
              Limpeza técnica pós-obra com detalhamento minucioso. Entregamos seu imóvel pronto para morar em até 24h.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Button
                asChild
                size="lg"
                className="rounded-full text-lg py-7 px-10 bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all shadow-xl shadow-accent/20"
              >
                <Link href="#quote">Solicitar Orçamento</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full text-lg py-7 px-10 border-white/30 text-white bg-transparent hover:bg-white/12 hover:text-white backdrop-blur-sm"
              >
                <Link href="#benefits">Conhecer Diferenciais</Link>
              </Button>
            </div>
            
            <div className="mt-6 -translate-y-1 md:-translate-y-2 flex items-center gap-8 animate-in fade-in duration-1000 delay-500">
               <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white font-headline">+500</span>
                  <span className="text-xs text-white/60 uppercase tracking-widest">Entregas Realizadas</span>
               </div>
               <div className="h-10 w-px bg-white/20" />
               <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white font-headline">24h</span>
                  <span className="text-xs text-white/60 uppercase tracking-widest">Prazo de Entrega</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="section-padding bg-slate-50">
        <ScrollReveal>
          <div className="container-wide">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Nossos Diferenciais</span>
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">
                  Por que a limpeza comum não é o suficiente?
                </h2>
              </div>
              <p className="text-muted-foreground text-lg max-w-sm">
                A sujeira de obra exige técnicas e produtos específicos para não danificar o seu investimento.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div
                  key={benefit.title}
                  className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/10 transition-all duration-500"
                >
                  <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    {React.cloneElement(benefit.icon as React.ReactElement, { className: "size-8" })}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-14 flex justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-6 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20"
              >
                <Link href="#quote">Solicitar Orçamento</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
      
      {/* Scope Section */}
      <section id="scope" className="section-padding bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 blur-[120px] -rotate-12 translate-x-1/2" />
        <ScrollReveal>
          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-white font-bold tracking-widest text-xs uppercase mb-4 block">O que entregamos</span>
                <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8">
                  Checklist de <br />limpeza completa
                </h2>
                <p className="text-white/70 text-lg mb-12 max-w-md">
                  Cuidamos de cada detalhe para que você só precise se preocupar em trazer as malas.
                </p>
                <div className="grid sm:grid-cols-1 gap-4">
                  {scopeItems.map((item) => (
                    <div key={item} className="flex items-center gap-4">
                      <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center">
                        <CheckCircle className="size-4 text-white" />
                      </div>
                      <span className="text-lg text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full px-8 py-6 bg-white text-primary hover:bg-white/90"
                  >
                    <Link href="#quote">Solicitar Orçamento</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full px-8 py-6 border-white/30 text-white bg-transparent hover:bg-white/12 backdrop-blur-sm"
                  >
                    <Link 
                    href={whatsappUrl} 
                    onClick={(e) => {
                      e.preventDefault();
                      if (typeof window !== 'undefined' && window.gtag_report_conversion) {
                        window.gtag_report_conversion(whatsappUrl);
                      } else {
                        window.open(whatsappUrl, '_blank');
                      }
                    }}
                  >Falar no WhatsApp</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                 <BeforeAfter
                   before={LimpezaBefore}
                   after={LimpezaAfter}
                   altBefore="Antes da limpeza"
                   altAfter="Depois da limpeza"
                   className="aspect-[4/3] md:aspect-square rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl"
                 />
                 <div className="hidden md:flex absolute -bottom-10 -left-10 bg-accent p-8 rounded-[2rem] shadow-2xl animate-bounce-slow">
                   <Star className="size-10 text-white fill-white mb-2" />
                   <p className="text-white font-bold text-xl">Padrão<br />Premium</p>
                </div>
              </div>
            </div>
             <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
               <Button
                 asChild
                 size="lg"
                 className="rounded-full px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
               >
                 <Link href="#quote">Agendar Limpeza</Link>
               </Button>
               <Button
                 asChild
                 variant="outline"
                 size="lg"
                 className="rounded-full px-8 py-6 border-slate-300 text-slate-700 hover:bg-slate-100"
               >
                 <Link href="#scope">Ver Serviços</Link>
               </Button>
             </div>
          </div>
        </ScrollReveal>
      </section>
      
      <ScrollReveal>
        <InstantQuoteSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <TestimonialsMarquee />
      </ScrollReveal>


      {/* How it Works Section */}
      <section id="process" className="section-padding bg-white">
        <ScrollReveal>
          <div className="container-wide text-center">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Simples e Eficiente</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-16">
              Como funciona o nosso processo?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {/* Connection Line (Desktop, animated on reveal) */}
              <div className="connecting-line" />
              
              {processSteps.map((step, idx) => (
                <div
                  key={step.number}
                  className="relative z-10 flex flex-col items-center group"
                >
                  <div className="w-24 h-24 bg-white border-4 border-slate-50 text-primary rounded-full flex items-center justify-center text-3xl font-black mb-6 shadow-xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary/80">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed px-4">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-20 flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-full border border-slate-100">
                  <Hourglass className="size-5 text-accent" />
                  <span className="text-sm font-medium text-slate-600">Orçamento em 30 min</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-full border border-slate-100">
                  <div className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-sm font-medium text-slate-600">Disponibilidade Imediata</span>
                </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
      
      {/* Guarantee Section */}
       <section id="guarantee" className="section-padding bg-slate-50">
        <div className="container-wide">
          <ScrollReveal>
            <div className="relative overflow-hidden bg-primary rounded-[3rem] p-12 md:p-20 text-white shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10">
                   <ShieldCheck className="size-20 md:size-24 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6">
                    Sua satisfação é <br className="hidden md:block" />nossa única métrica.
                  </h2>
                  <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
                    Utilizamos os melhores equipamentos do mercado e uma equipe rigorosamente treinada. Se algo não estiver perfeito, corrigimos imediatamente.
                  </p>
                </div>
              </div>
              <div className="mt-12 text-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 py-6 bg-white text-primary hover:bg-white/90"
                >
                  <Link href="#quote">Solicitar Orçamento</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Catch-all Section */}
      <section id="catch-all" className="section-padding bg-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
        <ScrollReveal>
          <div className="container-wide relative z-10 text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary max-w-3xl mb-6">
              Precisa de um serviço <br />sob medida?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mb-12">
              Limpeza Pré-Mudança, Higienização Profunda ou Manutenção Pós-Reforma. Personalizamos nosso atendimento para sua necessidade real.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full text-lg py-7 px-10 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary/20"
            >
              <Link 
              href={whatsappUrl} 
              onClick={(e) => {
                e.preventDefault();
                if (typeof window !== 'undefined' && window.gtag_report_conversion) {
                  window.gtag_report_conversion(whatsappUrl);
                } else {
                  window.open(whatsappUrl, '_blank');
                }
              }}
            >Consultar Outros Serviços</Link>
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
