'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {
  MessageCircle,
  Users,
  Shield,
  Clock,
} from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const InstantQuoteSection = dynamic(() => import('@/components/instant-quote-section'), { ssr: false });
const TestimonialsMarquee = dynamic(() => import('@/components/testimonials-marquee'), { ssr: false });
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from '@/components/scroll-reveal';
import WhatsAppButton from '@/components/whatsapp-button';
import Image from 'next/image';

const teamStats = [
  {
    icon: <Users className="size-8 text-accent" />,
    title: "Equipe Própria (CLT)",
    text: "Profissionais registrados e treinados para o rigor técnico que o seu novo imóvel exige."
  },
  {
    icon: <Shield className="size-8 text-accent" />,
    title: "Segurança Jurídica",
    text: "Equipe uniformizada, segurada e com EPIs. Proteção total para sua residência ou empresa."
  },
  {
    icon: <Clock className="size-8 text-accent" />,
    title: "Logística Ágil",
    text: "Respeitamos seu prazo. Planejamento técnico focado na entrega em 24h para sua mudança ou inauguração."
  }
];

const serviceCards = [
  {
    title: "Vãos e Vidros",
    description: "Técnica especializada para remoção de respingos em janelas, esquadrias e fachadas comerciais.",
    image: "/limpeza-vidros.jpg"
  },
  {
    title: "Poeira Fina",
    description: "Eliminação total do pó pós-construção em forros, luminárias e áreas de difícil acesso.",
    image: "/limpeza-poeiras.jpg"
  },
  {
    title: "Recuperação de Piso",
    description: "Higienização profunda e recuperação de brilho em porcelanatos e revestimentos técnicos corporativos.",
    image: "/limpeza-piso.jpg"
  },
  {
    title: "Estofados e Carpetes",
    description: "Limpeza profunda de sofás, poltronas e cadeiras de escritório, removendo resíduos e ácaros.",
    image: "/limpeza-estofados.jpg"
  },
  {
    title: "Detalhamento Técnico",
    description: "Acabamento minucioso em metais, interruptores e luminárias para uma entrega impecável.",
    image: "/limpeza-detalhes.jpg"
  },
  {
    title: "Limpeza Geral 360",
    description: "Checklist completo para residências, lojas e escritórios. Seu imóvel pronto para inaugurar.",
    image: "/limpeza-geral.jpg"
  }
];


const faqs = [
  {
    question: "Qual a diferença entre a limpeza pós-obra e uma faxina comum?",
    answer: "A limpeza pós-obra é um serviço técnico que exige maquinário industrial e químicos específicos para remover resíduos de construção sem riscar superfícies novas. Uma faxina comum pode manchar seu porcelanato ou riscar vidros ao tentar remover gesso e cimento."
  },
  {
    question: "O valor é fixo ou depende da metragem?",
    answer: "Trabalhamos com orçamento justo baseado no m² e no nível de resíduos. Isso garante que você pague o preço correto pela complexidade real do serviço. Orçamentos são rápidos via WhatsApp."
  },
  {
    question: "Escritórios e lojas: vocês emitem Nota Fiscal?",
    answer: "Sim! Atendemos tanto clientes residenciais quanto corporativos com emissão de nota fiscal, conformidade trabalhista (CLT) e toda a documentação necessária para entrada em prédios comerciais."
  },
  {
    question: "Existe risco para móveis planejados ou maquinário?",
    answer: "Pelo contrário. Nossa limpeza interna e externa de armários e superfícies usa produtos que hidratam e protegem o MDF e metais, removendo o pó de obra sem deixar manchas ou umidade excessiva."
  }
];

export default function Home() {
  const phoneNumber = '5511988259447'; 
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent('Olá! Preciso de um orçamento de limpeza pós-obra para meu imóvel.')}`;

  return (
    <>
      {/* Hero Centralizado */}
      <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            src="/sessao1.mp4"
            preload="metadata"
          />
          <div className="absolute inset-0 bg-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
        </div>
        
        <div className="container-wide relative z-10 py-20 flex flex-col items-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-7xl lg:text-8xl text-white font-headline font-black leading-[0.95] md:leading-[0.85] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              Limpeza Pós-Obras<br />
              <span className="text-accent">em São Paulo</span>.
            </h1>
            
            <p className="text-lg md:text-2xl text-white/80 font-light max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 text-center px-4">
              Limpeza técnica especializada para projetos residenciais e corporativos com entrega em 24h e total segurança.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Button
                asChild
                size="lg"
                className="rounded-full text-lg sm:text-xl md:text-2xl py-7 md:py-10 px-8 md:px-16 w-full sm:w-auto bg-accent text-white hover:bg-accent/90 hover:scale-105 transition-all shadow-[0_20px_50px_-12px_rgba(34,197,94,0.4)] flex items-center justify-center gap-4 font-bold uppercase tracking-widest"
              >
                <WhatsAppButton href={whatsappUrl}>
                  <Image src="/whatsapp-icon.png" alt="WhatsApp" width={32} height={32} className="size-8 object-contain brightness-0 invert shrink-0" />
                  Solicitar Orçamento Grátis
                </WhatsAppButton>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe - New Section */}
      <section id="team" className="section-padding bg-white overflow-hidden">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-headline font-bold text-primary">Nossa Equipe</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative group flex items-start max-w-[700px] mx-auto lg:mx-0 overflow-hidden rounded-[2.5rem]">
                <Image 
                  src="/equipe.png"
                  alt="Nossa Equipe LPO"
                  width={700}
                  height={500}
                  className="relative z-10 object-cover w-full h-auto shadow-xl"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent z-20" />
              </div>
              
              <div className="space-y-6">
                {teamStats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 rounded-3xl border border-slate-100 hover:border-accent/30 hover:bg-slate-50 transition-all group text-center sm:text-left">
                    <div className="bg-slate-50 rounded-2xl p-4 group-hover:bg-accent group-hover:text-white transition-colors shrink-0">
                      {stat.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-1">{stat.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{stat.text}</p>
                    </div>
                  </div>
                ))}
                
                <div className="pt-6">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full text-lg sm:text-xl md:text-2xl py-7 md:py-9 px-8 md:px-14 w-full sm:w-auto bg-primary text-white hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_20px_50px_-12px_rgba(15,23,42,0.3)] flex items-center justify-center gap-4 font-bold uppercase tracking-widest"
                  >
                    <WhatsAppButton href={whatsappUrl}>
                      <Image src="/whatsapp-icon.png" alt="WhatsApp" width={28} height={28} className="size-7 object-contain brightness-0 invert shrink-0" />
                      Falar com Especialista
                    </WhatsAppButton>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Nossos Serviços - 6 Cards Grid (3x2) */}
      <section id="scope" className="section-padding bg-white overflow-hidden relative">
        <div className="container-wide relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Especialidade LPO</span>
              <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8 text-primary">
                Nossos Serviços
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {serviceCards.map((card, idx) => (
                <div 
                  key={idx}
                  className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-2xl bg-slate-200"
                >
                  {/* Background Image */}
                  <Image 
                    src={card.image} 
                    alt={card.title} 
                    fill
                    className="absolute inset-0 object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay Gradient - Darker for permanent text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* Content Overlay - Always visible */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{card.title}</h3>
                    <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-xs mx-auto">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-col items-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full text-lg sm:text-xl md:text-2xl py-7 md:py-9 px-8 md:px-14 w-full sm:w-auto bg-primary text-white hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_20px_50px_-12px_rgba(15,23,42,0.3)] flex items-center justify-center gap-4 font-bold uppercase tracking-widest"
              >
                <WhatsAppButton href={whatsappUrl}>
                  <Image src="/whatsapp-icon.png" alt="WhatsApp" width={32} height={32} className="size-8 object-contain brightness-0 invert shrink-0" />
                  Agendar Minha Limpeza
                </WhatsAppButton>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="bg-slate-50 py-16">
        <TestimonialsMarquee />
      </div>
      
      {/* Orçamento e CTA Final */}
      <section id="process" className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container-wide text-center">
          <ScrollReveal>
            <div className="mt-8">
              <InstantQuoteSection />
            </div>

            {/* Mega CTA Button */}
            <div className="flex justify-center mt-12">
              <div className="relative group">
                {/* Glow layer */}
                <div className="absolute -inset-1 bg-accent rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow" />
                
                <Button
                  asChild
                  size="lg"
                  className="relative rounded-full px-8 md:px-20 py-8 md:py-12 w-full sm:w-auto bg-accent text-white hover:bg-black transition-all duration-500 text-lg sm:text-2xl md:text-4xl font-black shadow-[0_25px_60px_-15px_rgba(34,197,94,0.5)] flex items-center justify-center gap-4 group-hover:scale-105 uppercase tracking-tighter"
                >
                  <WhatsAppButton href={whatsappUrl}>
                    <Image src="/whatsapp-icon.png" alt="WhatsApp" width={56} height={56} className="size-10 md:size-14 object-contain brightness-0 invert shrink-0" />
                    VAMOS RESOLVER AGORA!
                  </WhatsAppButton>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Centralizado */}
      <section id="faq" className="section-padding bg-white overflow-hidden relative">
        <div className="container-wide max-w-4xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Suas dúvidas resolvidas</span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Tudo o que você precisa saber</h2>
            </div>
            
            <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200 last:border-0">
                    <AccordionTrigger className="text-left text-lg font-bold text-slate-800 hover:text-primary hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-16 flex flex-col items-center px-4 w-full">
              <Button
                asChild
                size="lg"
                className="rounded-full text-lg sm:text-xl md:text-2xl py-7 md:py-9 px-8 md:px-14 w-full sm:w-auto bg-primary text-white hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_20px_50px_-12px_rgba(15,23,42,0.3)] flex items-center justify-center gap-4 font-bold uppercase tracking-widest"
              >
                <WhatsAppButton href={whatsappUrl}>
                  Tirar dúvidas por WhatsApp
                </WhatsAppButton>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </>
  );
}
