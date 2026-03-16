import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary text-primary-foreground/80">
      <div className="container mx-auto px-6 py-12 text-center">
        <Link href="/" className="mb-4 inline-block">
          <Image
            src="https://files.catbox.moe/gfptca.png"
            alt="Seu Espaço LPO"
            width={250}
            height={60}
            className="h-12 w-auto object-contain"
          />
        </Link>
        <p className="max-w-md mx-auto mb-4">
            Atendemos toda São Paulo e Região com excelência em limpeza pós-obra.
        </p>
        <div className="flex justify-center gap-6 mb-6">
            <a href="https://wa.me/5511988259447" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">WhatsApp</a>
            <a href="mailto:contato@seuespacolpo.com" className="hover:text-accent transition-colors">Email</a>
        </div>
        <p className="text-sm text-primary-foreground/60 mb-2">CNPJ: 62.495.769/0001-85</p>
        <p className="text-sm text-primary-foreground/60">
          &copy; {currentYear} Seu Espaço LPO. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
