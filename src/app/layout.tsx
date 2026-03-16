import type { Metadata } from 'next';
import { Instrument_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/components/footer';
import WhatsappFab from '@/components/whatsapp-fab';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Seu Espaço LPO | Limpeza Pós Obra de Alto Padrão',
  description:
    'Especialistas em Limpeza Pós-Obras. O toque final que sua reforma merece. Limpeza pesada e detalhada para residências e comércios em São Paulo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn(instrumentSans.variable)}>
      <head>
      </head>
      <body className={cn('font-sans antialiased bg-background text-foreground')}>
        <Toaster />
        <main>{children}</main>
        <Footer />
        <WhatsappFab />
      </body>
    </html>
  );
}
