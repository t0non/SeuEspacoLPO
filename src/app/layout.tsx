import type { Metadata } from 'next';
import { Instrument_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/components/footer';
import WhatsappFab from '@/components/whatsapp-fab';
import JsonLd from '@/components/JsonLd';
import Script from 'next/script';

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
  verification: {
    google: 'UWo2PB2qF1XLCbuobMIaxMLPTjtzJ967inc184NKS14',
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M8Q3XJ82');`,
          }}
        />
        <meta name="google-site-verification" content="UWo2PB2qF1XLCbuobMIaxMLPTjtzJ967inc184NKS14" />
        <JsonLd />
      </head>
      <body className={cn('font-sans antialiased bg-background text-foreground')}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M8Q3XJ82"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Toaster />
        <main>{children}</main>
        <Footer />
        <WhatsappFab />
      </body>
    </html>
  );
}
