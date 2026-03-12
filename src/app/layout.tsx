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
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W8FGQZCC');
            `,
          }}
        />
      </head>
      <body className={cn('font-sans antialiased bg-background text-foreground')}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W8FGQZCC"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        <Toaster />
        <main>{children}</main>
        <Footer />
        <WhatsappFab />
      </body>
    </html>
  );
}
