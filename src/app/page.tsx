'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Users, Shield, Clock, CheckCircle, Star, ChevronRight, Zap, Award, Phone } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const TestimonialsMarquee = dynamic(() => import('@/components/testimonials-marquee'), { ssr: false });
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from '@/components/scroll-reveal';
import WhatsAppButton from '@/components/whatsapp-button';
import Image from 'next/image';

const phoneNumber = '5511988259447';
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent('Olá! Preciso de um orçamento de limpeza pós-obra para meu imóvel.')}`;

const socialProofStats = [
  { value: '+500', label: 'Obras Entregues' },
  { value: '+120k', label: 'm² Limpos' },
  { value: '5,0★', label: 'Nota Máxima Google' },
  { value: '24h', label: 'Suporte & Plantão' },
];

const segments = [
  {
    tag: 'Residencial',
    title: 'Acabou a reforma da sua casa ou apartamento em SP?',
    points: [
      'Remoção de pó fino em armários planejados',
      'Limpeza de vidros sem risco de arranhões',
      'Recuperação do brilho do porcelanato',
      'Higienização de estofados afetados pela obra',
      'Entrega pronta para sua mudança',
    ],
    cta: 'Quero Orçamento Residencial',
  },
  {
    tag: 'Comercial / Corporativo',
    title: 'Inaugurando loja, escritório ou consultório em São Paulo?',
    points: [
      'Emissão de Nota Fiscal para CNPJ',
      'Documentação para acesso em condomínios comerciais',
      'Equipe com crachá e EPI para prédios corporativos',
      'Limpeza de fachadas e áreas comuns',
      'Prazo cumprido para inauguração no dia certo',
    ],
    cta: 'Quero Orçamento Comercial',
  },
];

const benefits = [
  {
    icon: <Users className="size-7 text-accent" />,
    title: "Equipe CLT Própria",
    text: "Profissionais registrados, uniformizados e com EPIs. Segurança jurídica total para seu imóvel.",
  },
  {
    icon: <Shield className="size-7 text-accent" />,
    title: "Seguro Contra Danos",
    text: "Trabalhamos segurados. Qualquer incidente é coberto. Seu patrimônio protegido do início ao fim.",
  },
  {
    icon: <Clock className="size-7 text-accent" />,
    title: "Entrega em 24h",
    text: "Planejamento técnico focado no seu prazo. Mudança ou inauguração sem atrasos.",
  },
  {
    icon: <Award className="size-7 text-accent" />,
    title: "Nota Fiscal Garantida",
    text: "Atendemos residencial e corporativo com NF e documentação completa para prédios comerciais.",
  },
];

const serviceCards = [
  { title: "Vãos e Vidros", description: "Remoção de respingos de tinta e cimento em janelas, esquadrias e fachadas.", image: "/limpeza-vidros.jpg", altText: "Serviço profissional de limpeza de vidros pós-obra em São Paulo" },
  { title: "Poeira Fina", description: "Eliminação total do pó pós-construção com aspiradores industriais.", image: "/limpeza-poeiras.jpg", altText: "Remoção técnica de poeira fina pós-construção em São Paulo" },
  { title: "Recuperação de Piso", description: "Higienização profunda e brilho em porcelanatos e revestimentos.", image: "/limpeza-piso.jpg", altText: "Limpeza profunda de pisos e porcelanatos pós-obra" },
  { title: "Estofados e Carpetes", description: "Higienização de sofás, poltronas e cadeiras removendo resíduos e ácaros.", image: "/limpeza-estofados.jpg", altText: "Higienização de estofados afetados pela poeira da reforma" },
  { title: "Detalhamento Técnico", description: "Acabamento minucioso em metais, interruptores e luminárias.", image: "/limpeza-detalhes.jpg", altText: "Limpeza de detalhes e acabamentos finos pós-reforma" },
  { title: "Limpeza Geral 360°", description: "Checklist completo para residências, lojas e escritórios.", image: "/limpeza-geral.jpg", altText: "Faxina completa pós-obra para mudança ou inauguração comercial" },
];

const processSteps = [
  { step: "01", icon: <Phone className="size-6 text-white" />, title: "Orçamento em 30 min", text: "Mande fotos pelo WhatsApp. Retornamos com valor e disponibilidade em até 30 minutos." },
  { step: "02", icon: <CheckCircle className="size-6 text-white" />, title: "Agendamos o Serviço", text: "Definimos data e horário conforme sua agenda. Confirmamos por escrito." },
  { step: "03", icon: <Zap className="size-6 text-white" />, title: "Entregamos Impecável", text: "Nossa equipe chega equipada. Você recebe o espaço limpo, pronto para morar ou inaugurar." },
];

const faqs = [
  { question: "Qual a diferença entre a limpeza pós-obra e uma faxina comum?", answer: "A limpeza pós-obra é um serviço técnico especializado que exige maquinário industrial (como aspiradores de alta vazão e enceradeiras profissionais) e produtos químicos homologados para remover resíduos de construção (como cimento, gesso e rejunte) sem causar riscos a superfícies novas ou manchar porcelanatos. Uma faxina convencional não possui essa tecnologia e pode danificar permanentemente o seu patrimônio." },
  { question: "O valor é fixo ou depende da metragem?", answer: "Trabalhamos com propostas sob medida com base no metro quadrado (m²) e na complexidade real do nível de resíduos da obra ou reforma. Isso garante que você pague o valor correto e justo pelo serviço. Para sua comodidade, orçamos rapidamente através de fotos e vídeos via WhatsApp em até 30 minutos." },
  { question: "Vocês levam todos os produtos e equipamentos?", answer: "Sim, absolutamente! Nossa equipe vai até seu imóvel em São Paulo munida de um arsenal completo: aspiradores industriais de alta potência, lavadoras pressurizadas, escadas, produtos químicos específicos certificados e todos os EPIs de segurança exigidos pela lei. Você não precisa se preocupar com nada." },
  { question: "Quanto tempo dura o serviço?", answer: "Varia conforme a metragem e o nível de sujidade acumulada pós-reforma. Apartamentos padrão de 50m² a 110m² costumam ser entregues perfeitamente limpos e prontos para morar em apenas 1 dia de trabalho. Imóveis maiores, casas ou galpões comerciais podem necessitar de 2 dias. O prazo exato é informado na proposta." },
  { question: "Atendem toda a Grande SP? Cobram taxa de deslocamento?", answer: "Atendemos toda a cidade de São Paulo, com foco especial nos bairros de Moema, Brooklin, Pinheiros, Santo Amaro, Vila Mariana, Campo Belo, Itaim Bibi, Vila Olímpia e demais regiões da Zona Sul e Zona Oeste. Também estendemos nossa cobertura para a Grande São Paulo, atendendo Diadema, São Bernardo do Campo, Santo André e São Caetano do Sul. Qualquer custo de deslocamento é calculado de forma transparente no seu orçamento." },
  { question: "Escritórios e lojas: vocês emitem Nota Fiscal?", answer: "Sim! Emitimos Nota Fiscal Eletrônica de Serviços (NFS-e) para todas as limpezas residenciais e comerciais/corporativas. Fornecemos também toda a documentação trabalhista necessária da nossa equipe própria (CLT) para liberação de entrada imediata em condomínios comerciais exigentes." },
  { question: "Existe risco para móveis planejados ou pedras nobres?", answer: "Nenhum. Nossa metodologia técnica pós-obra protege e trata armários planejados, MDFs, metais sanitários e pedras nobres como mármores e granitos. Utilizamos produtos de pH neutro e técnicas de aspiração seca e úmida que retiram a poeira fina sem deixar riscos ou manchas." },
];

const WaButton = ({ label, size = 'lg', className = '' }: { label: string; size?: 'lg' | 'xl'; className?: string }) => (
  <WhatsAppButton
    href={whatsappUrl}
    aria-label={`${label} via WhatsApp`}
    className={`inline-flex items-center justify-center gap-3 rounded-full font-black uppercase tracking-widest text-white bg-[#22c55e] hover:bg-[#16a34a] hover:scale-105 active:scale-95 transition-all shadow-[0_8px_30px_rgba(34,197,94,0.45)] ${size === 'xl' ? 'text-xl md:text-2xl py-6 md:py-8 px-10 md:px-16' : 'text-base md:text-lg py-4 md:py-5 px-8 md:px-12'} ${className}`}
  >
    <Image src="/whatsapp-icon.png" alt="WhatsApp" width={26} height={26} className="size-6 md:size-7 object-contain brightness-0 invert shrink-0" />
    {label}
  </WhatsAppButton>
);

export default function Home() {
  return (
    <article itemScope itemType="https://schema.org/WebPage">

      {/* ─── HERO ─── */}
      <section id="home" aria-label="Limpeza pós-obra em São Paulo" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay muted loop playsInline
            className="h-full w-full object-cover"
            src="/sessao1.mp4"
            preload="none"
            poster="/limpeza-geral.jpg"
            title="Limpeza pós-obra profissional em São Paulo"
            aria-label="Vídeo demonstrativo de limpeza pós-obra profissional"
          />
          <div className="absolute inset-0 bg-primary/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
        </div>

        <div className="container-wide relative z-10 py-24 flex flex-col items-center">

          {/* Trust Badge Strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="size-3.5 text-yellow-400 fill-yellow-400" />)}
              </div>
              <span className="text-white text-sm font-semibold">5,0 · Nota Máxima no Google</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <span className="text-white text-sm font-semibold">✓ Equipe CLT Própria</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <span className="text-white text-sm font-semibold">✓ Plantão & Suporte 24h</span>
            </div>
          </div>

          <div className="max-w-5xl">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl text-white font-headline font-black leading-[0.92] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              Sua reforma acabou.<br />
              <span className="text-accent">Agora é a nossa vez.</span>
            </h1>

            <p className="text-lg md:text-2xl text-white/85 font-light max-w-4xl mx-auto mb-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 px-4 leading-relaxed">
              A melhor empresa de limpeza pós-obra em São Paulo. Especialistas em remoção técnica de poeira fina, respingos e resíduos em <strong className="text-white font-semibold text-accent">casas, apartamentos e comércios na Zona Sul, Moema, Brooklin, Santo Amaro, Vila Mariana e Pinheiros</strong> — sem riscar suas superfícies novas.
            </p>
            <p className="text-sm md:text-base text-accent font-semibold mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-250">
              ⚡ Orçamento Grátis via WhatsApp em até 30 minutos · Entrega em 24h
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <WaButton label="Quero Meu Orçamento Grátis" size="xl" />
            </div>
            <p className="text-white/50 text-xs mt-4 animate-in fade-in duration-700 delay-500">
              Sem compromisso. Resposta rápida via WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <div className="bg-primary border-b border-white/10">
        <div className="container-wide py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 divide-y-2 md:divide-y-0 md:divide-x divide-white/10">
            {socialProofStats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center py-4 md:py-2">
                <span className="text-3xl md:text-4xl font-black text-accent">{stat.value}</span>
                <span className="text-white/60 text-xs uppercase tracking-widest mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── BENEFÍCIOS ─── */}
      <section id="benefits" aria-labelledby="benefits-heading" className="section-padding bg-white overflow-hidden">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-accent font-bold tracking-widest text-xs uppercase mb-3 block">Excelência em Limpeza Pós-Obra</span>
              <h2 id="benefits-heading" className="text-4xl md:text-6xl font-headline font-bold text-primary">
                Por que escolher a<br />Seu Espaço em SP?
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed text-base">
                Não somos faxineiros comuns. Somos técnicos altamente qualificados e especializados em limpeza pós-obra de médio e alto padrão em São Paulo. Contamos com protocolos rigorosos de segurança e maquinários avançados.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {benefits.map((b, i) => (
                <div key={i} className="flex flex-col items-center text-center p-8 rounded-3xl border border-slate-100 hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 transition-all group">
                  <div className="bg-slate-50 rounded-2xl p-4 mb-4 group-hover:bg-accent/10 transition-colors">{b.icon}</div>
                  <h3 className="text-lg font-bold text-primary mb-2">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-center">
              <WaButton label="Falar com Especialista" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SERVIÇOS ─── */}
      <section id="scope" aria-labelledby="services-heading" className="section-padding bg-slate-50 overflow-hidden">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-accent font-bold tracking-widest text-xs uppercase mb-4 block">Soluções Completas</span>
              <h2 id="services-heading" className="text-4xl md:text-6xl font-headline font-bold mb-4 text-primary">
                Serviços de Limpeza<br />Pós-Obra em São Paulo
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                Eliminamos cimento, rejunte, respingos de tinta e toda a poeira fina que se acumula após a sua construção ou reforma em SP.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {serviceCards.map((card, idx) => (
                <div key={idx} className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl bg-slate-200">
                  <Image
                    src={card.image}
                    alt={card.altText}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={idx < 3 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{card.title}</h3>
                    <p className="text-sm text-white/85 leading-relaxed">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <WaButton label="Agendar Minha Limpeza" size="xl" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── RESIDENCIAL vs COMERCIAL ─── */}
      <section id="para-quem" aria-labelledby="segments-heading" className="section-padding bg-white overflow-hidden">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-accent font-bold tracking-widest text-xs uppercase mb-3 block">Para quem é</span>
              <h2 id="segments-heading" className="text-4xl md:text-6xl font-headline font-bold text-primary">
                Residencial ou Comercial,<br />temos a solução certa
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {segments.map((seg, i) => (
                <div key={i} className={`rounded-[2rem] p-8 md:p-10 border-2 flex flex-col gap-6 ${i === 0 ? 'border-accent bg-accent/5' : 'border-primary/20 bg-primary/5'}`}>
                  <div>
                    <span className={`text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 inline-block ${i === 0 ? 'bg-accent text-white' : 'bg-primary text-white'}`}>
                      {seg.tag}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary mt-3">{seg.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {seg.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="size-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <WhatsAppButton
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Olá! Preciso de um orçamento de limpeza pós-obra ${i === 0 ? 'residencial' : 'comercial/corporativo'}.`)}`}
                    aria-label={`${seg.cta} via WhatsApp`}
                    className={`inline-flex items-center justify-center gap-3 rounded-full font-bold text-sm uppercase tracking-widest py-4 px-8 transition-all hover:scale-105 ${i === 0 ? 'bg-accent text-white hover:bg-[#16a34a] shadow-[0_6px_20px_rgba(34,197,94,0.4)]' : 'bg-primary text-white hover:bg-primary/90 shadow-[0_6px_20px_rgba(15,23,42,0.3)]'}`}
                  >
                    <Image src="/whatsapp-icon.png" alt="WhatsApp" width={20} height={20} className="size-5 brightness-0 invert shrink-0" />
                    {seg.cta}
                  </WhatsAppButton>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── DEPOIMENTOS ─── */}
      <div className="bg-primary">
        <TestimonialsMarquee />
      </div>

      {/* ─── COMO FUNCIONA ─── */}
      <section id="process" aria-labelledby="process-heading" className="section-padding bg-white overflow-hidden">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-accent font-bold tracking-widest text-xs uppercase mb-3 block">Simples e rápido</span>
              <h2 id="process-heading" className="text-4xl md:text-6xl font-headline font-bold text-primary">Como Funciona</h2>
              <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
                Do orçamento à entrega em 3 etapas simples. Sem burocracia, sem surpresas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {processSteps.map((s, i) => (
                <div key={i} className="relative flex flex-col items-center text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg group-hover:bg-accent transition-colors duration-300">
                      {s.icon}
                    </div>
                    <span className="absolute -top-3 -right-3 text-xs font-black text-white bg-accent rounded-full w-7 h-7 flex items-center justify-center">{s.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{s.text}</p>
                  {i < processSteps.length - 1 && (
                    <ChevronRight className="hidden md:block absolute top-8 -right-4 text-slate-200 size-8" />
                  )}
                </div>
              ))}
            </div>

            {/* Urgency CTA block */}
            <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 rounded-[2.5rem] p-10 md:p-16 text-center">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 w-40 h-40 bg-accent rounded-full blur-3xl" />
                <div className="absolute bottom-4 right-4 w-60 h-60 bg-accent rounded-full blur-3xl" />
              </div>
              <div className="relative z-10">
                <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">⚡ Agenda limitada esta semana</p>
                <h3 className="text-white text-3xl md:text-5xl font-headline font-black mb-4 leading-tight">
                  Sua reforma terminou.<br />Seu novo espaço está esperando.
                </h3>
                <p className="text-white/70 max-w-xl mx-auto mb-8 text-lg">
                  Cada dia sem limpeza técnica é mais poeira fina se depositando nos armários, piso e ar condicionado. Não deixe isso para amanhã.
                </p>
                <div className="relative inline-block group">
                  <div className="absolute -inset-1 bg-accent rounded-full blur opacity-40 group-hover:opacity-80 transition duration-500 animate-pulse-glow" />
                  <WaButton label="RESOLVER AGORA — É GRÁTIS PERGUNTAR!" size="xl" className="relative" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" aria-labelledby="faq-heading" className="section-padding bg-slate-50 overflow-hidden">
        <div className="container-wide max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-accent font-bold tracking-widest text-xs uppercase mb-3 block">Dúvidas frequentes</span>
              <h2 id="faq-heading" className="text-4xl md:text-5xl font-headline font-bold text-primary">Tudo o que você precisa saber</h2>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-100 last:border-0">
                    <AccordionTrigger className="text-left text-base md:text-lg font-bold text-slate-800 hover:text-primary hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="flex justify-center">
              <WaButton label="Tirar Dúvidas pelo WhatsApp" />
            </div>
          </ScrollReveal>
        </div>
      </section>

    </article>
  );
}
