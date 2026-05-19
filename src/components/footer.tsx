import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary text-primary-foreground/80" itemScope itemType="https://schema.org/CleaningService">
      <div className="container mx-auto px-6 py-16">

        {/* Top grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-12 text-center md:text-left">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" aria-label="Voltar ao início - Seu Espaço LPO">
              <Image
                src="https://files.catbox.moe/gfptca.png"
                alt="Seu Espaço LPO — Limpeza Pós-Obra em São Paulo"
                width={220}
                height={55}
                className="h-12 w-auto object-contain"
                itemProp="logo"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs" itemProp="description">
              Especialistas em limpeza pós-obra em São Paulo e Grande SP. Equipe CLT, maquinário industrial e entrega em 24h.
            </p>
            {/* Star rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="size-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-primary-foreground">5,0 · Nota Máxima no Google</span>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Links rápidos do rodapé">
            <h3 className="text-primary-foreground font-bold text-sm uppercase tracking-widest mb-5">Navegação</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#benefits" className="hover:text-accent transition-colors">Diferenciais</Link></li>
              <li><Link href="#scope" className="hover:text-accent transition-colors">Serviços</Link></li>
              <li><Link href="#process" className="hover:text-accent transition-colors">Como Funciona</Link></li>
              <li><Link href="#faq" className="hover:text-accent transition-colors">Perguntas Frequentes</Link></li>
            </ul>
          </nav>

          {/* Contact / NAP */}
          <div>
            <h3 className="text-primary-foreground font-bold text-sm uppercase tracking-widest mb-5">Contato</h3>
            <address className="not-italic text-sm space-y-3" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <p>
                <span className="font-semibold text-primary-foreground block" itemProp="addressLocality">São Paulo</span>
                <span itemProp="addressRegion">SP</span> · <span itemProp="addressCountry">Brasil</span>
              </p>
              <p>
                <span className="font-semibold text-primary-foreground block mb-1">Área de Atendimento:</span>
                Santo Amaro · Moema · Brooklin · Pinheiros · Vila Mariana · Campo Belo · Diadema · São Bernardo do Campo
              </p>
              <a
                href="https://wa.me/5511988259447"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors"
                itemProp="telephone"
                content="+5511988259447"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="size-4" aria-hidden="true">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                (11) 98825-9447
              </a>
              <a href="mailto:contato@seuespacolpo.com" className="block hover:text-accent transition-colors">
                contato@seuespacolpo.com
              </a>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-center">
            <span>CNPJ: 62.495.769/0001-85</span>
            <span>© {currentYear} Seu Espaço LPO. Todos os direitos reservados.</span>
          </div>
          <span className="text-primary-foreground/30">Limpeza Pós-Obra em São Paulo e Grande SP</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
