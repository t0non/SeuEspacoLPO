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
  metadataBase: new URL('https://www.seuespacolpo.com.br'),
  alternates: {
    canonical: 'https://www.seuespacolpo.com.br',
  },
  title: {
    default: 'Limpeza Pós-Obra em São Paulo | Seu Espaço LPO — Orçamento em 30 min',
    template: '%s | Seu Espaço LPO',
  },
  description:
    'Limpeza pós-obra profissional em São Paulo com equipe CLT, maquinário industrial e entrega em 24h. ⭐ 5,0/5 em 18 avaliações reais no Google. Atendemos Santo Amaro, Moema, Diadema, Brooklin e toda a Grande SP. Orçamento grátis via WhatsApp em até 30 minutos!',
  keywords: [
    'limpeza pós obra São Paulo',
    'limpeza pós obra',
    'limpeza pós reforma São Paulo',
    'faxina pós obra SP',
    'limpeza técnica pós obra',
    'empresa de limpeza pós obra',
    'limpeza de obra residencial',
    'limpeza de obra comercial',
    'limpeza pós reforma Santo Amaro',
    'limpeza pós obra Moema',
    'limpeza pós obra Diadema',
    'limpeza pós reforma Brooklin',
    'limpeza pós obra Pinheiros',
    'limpeza de vidros pós obra',
    'remoção de poeira pós construção',
    'limpeza pós obra preço',
    'São Paulo',
    'Santo Amaro',
    'Moema',
    'Pinheiros',
    'Brooklin',
    'Diadema',
    'São Bernardo do Campo',
    'Vila Mariana',
    'Campo Belo',
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
    url: 'https://www.seuespacolpo.com.br',
    siteName: 'Seu Espaço LPO',
    title: 'Limpeza Pós-Obra em São Paulo | Seu Espaço LPO',
    description: 'Sua reforma terminou. Agora é hora do toque final. Limpeza técnica pós-obra com equipe CLT, maquinário industrial e entrega garantida em 24h. Orçamento grátis!',
    images: [
      {
        url: 'https://files.catbox.moe/gfptca.png',
        width: 1200,
        height: 630,
        alt: 'Seu Espaço LPO - Limpeza Pós Obra Profissional em São Paulo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Limpeza Pós-Obra em São Paulo | Seu Espaço LPO',
    description: 'Equipe técnica especializada. Remoção de resíduos de obra, poeira fina e respingos. Pronto para morar em até 24h. Orçamento grátis!',
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
    'theme-color': '#0f1f3c',
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
        <link rel="preload" as="video" href="/sessao1.mp4" type="video/mp4" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WZ4DGTDT');`,
          }}
        />
        {/* Google Ads Global Site Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17931024307" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17931024307');
            `,
          }}
        />
        <meta name="google-site-verification" content="UWo2PB2qF1XLCbuobMIaxMLPTjtzJ967inc184NKS14" />
        <JsonLd />
      </head>
      <body className={cn('font-sans antialiased bg-background text-foreground')}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WZ4DGTDT"
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
