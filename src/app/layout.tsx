import type { Metadata } from 'next';
import { Instrument_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/components/footer';
import WhatsappFab from '@/components/whatsapp-fab';
import JsonLd from '@/components/JsonLd';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://seuespacolpo.com.br'),
  title: {
    default: 'Seu Espaço LPO | Limpeza Pós-Obras em São Paulo',
    template: '%s | Seu Espaço LPO',
  },
  description:
    'Especialistas em Limpeza Pós-Obras em São Paulo. Atendemos Santo Amaro, Moema, Diadema e toda a região. Limpeza profissional e detalhada para sua reforma.',
  keywords: [
    'limpeza pós obra',
    'limpeza técnica',
    'limpeza de luxo',
    'limpeza pós reforma',
    'faxina pós obra',
    'São Paulo',
    'Santo Amaro',
    'Moema',
    'Pinheiros',
    'Brooklin',
    'Diadema',
    'São Bernardo do Campo',
  ],
  authors: [{ name: 'Seu Espaço LPO' }],
  creator: 'Seu Espaço LPO',
  publisher: 'Seu Espaço LPO',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://seuespacolpo.com.br',
    siteName: 'Seu Espaço LPO',
    title: 'Seu Espaço LPO | Limpeza Pós Obra Profissional',
    description: 'O toque final que sua reforma merece. Limpeza técnica e detalhada para residências e comércios em São Paulo.',
    images: [
      {
        url: 'https://files.catbox.moe/gfptca.png', // Using the logo as default OG image
        width: 1200,
        height: 630,
        alt: 'Seu Espaço LPO - Limpeza Pós Obra',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seu Espaço LPO | Limpeza Pós Obra de Alto Padrão',
    description: 'Especialistas em Limpeza Pós-Obras em São Paulo. Pronta para morar em até 24h.',
    images: ['https://files.catbox.moe/gfptca.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'BR-SP',
    'geo.placename': 'São Paulo',
    'geo.position': '-23.6447;-46.6759',
    'ICBM': '-23.6447, -46.6759',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn(instrumentSans.variable)}>
      <head>
        <JsonLd />
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
