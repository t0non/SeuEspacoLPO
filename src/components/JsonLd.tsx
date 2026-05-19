import React from 'react';

const JsonLd: React.FC = () => {
  const cleaningServiceData = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "@id": "https://www.seuespacolpo.com.br/#business",
    "name": "Seu Espaço | Limpeza Pós-Obra",
    "alternateName": "Seu Espaço LPO",
    "description": "Empresa especializada em limpeza pós-obra em São Paulo e Grande SP. Equipe CLT, maquinário industrial, produtos certificados e entrega garantida em 24h.",
    "image": "https://files.catbox.moe/gfptca.png",
    "logo": "https://files.catbox.moe/gfptca.png",
    "url": "https://www.seuespacolpo.com.br",
    "telephone": "+5511988259447",
    "priceRange": "$$",
    "currenciesAccepted": "BRL",
    "paymentAccepted": "Dinheiro, Transferência Bancária, PIX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Atendimento em domicílio",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "postalCode": "04602-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.6447,
      "longitude": -46.6759
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "18",
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Limpeza Pós-Obra",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Limpeza de Vãos e Vidros",
            "description": "Técnica especializada para remoção de respingos de tinta e cimento em janelas, esquadrias e fachadas comerciais."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Remoção de Poeira Fina Pós-Obra",
            "description": "Eliminação total do pó pós-construção em forros, luminárias e áreas de difícil acesso com aspiradores industriais."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Recuperação de Piso e Porcelanato",
            "description": "Higienização profunda e recuperação de brilho em porcelanatos e revestimentos técnicos corporativos."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Limpeza de Estofados e Carpetes",
            "description": "Higienização profunda de sofás, poltronas e carpetes afetados pela poeira da obra, removendo ácaros e resíduos."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Detalhamento Técnico de Acabamentos",
            "description": "Acabamento minucioso em metais, interruptores, tomadas e luminárias para uma entrega impecável."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Limpeza Geral 360 Pós-Obra",
            "description": "Checklist completo de limpeza para residências, lojas e escritórios. Imóvel pronto para inauguração ou mudança."
          }
        }
      ]
    },
    "areaServed": [
      { "@type": "Neighborhood", "name": "Santo Amaro" },
      { "@type": "Neighborhood", "name": "Moema" },
      { "@type": "Neighborhood", "name": "Pinheiros" },
      { "@type": "Neighborhood", "name": "Brooklin" },
      { "@type": "Neighborhood", "name": "Vila Mariana" },
      { "@type": "Neighborhood", "name": "Campo Belo" },
      { "@type": "Neighborhood", "name": "Chácara Santo Antônio" },
      { "@type": "Neighborhood", "name": "Vila Mascote" },
      { "@type": "Neighborhood", "name": "Jabaquara" },
      { "@type": "Neighborhood", "name": "Alto da Boa Vista" },
      { "@type": "City", "name": "São Paulo" },
      { "@type": "City", "name": "Diadema" },
      { "@type": "City", "name": "São Bernardo do Campo" }
    ],
    "sameAs": [
      "https://wa.me/5511988259447"
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.seuespacolpo.com.br/#website",
    "url": "https://www.seuespacolpo.com.br",
    "name": "Seu Espaço LPO",
    "description": "Limpeza pós-obra profissional em São Paulo e Grande SP",
    "publisher": {
      "@id": "https://www.seuespacolpo.com.br/#business"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.seuespacolpo.com.br/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual a diferença entre a limpeza pós-obra e uma faxina comum?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A limpeza pós-obra é um serviço técnico que exige maquinário industrial e químicos específicos para remover resíduos de construção como cimento, rejunte e gesso, sem riscar superfícies novas. Uma faxina comum pode manchar seu porcelanato ou riscar vidros ao tentar remover esses resíduos pesados."
        }
      },
      {
        "@type": "Question",
        "name": "O valor é fixo ou depende da metragem?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trabalhamos com orçamento justo baseado no m² e no nível de resíduos. Isso garante que você pague o preço correto pela complexidade real do serviço. Orçamentos são rápidos via WhatsApp em até 30 minutos."
        }
      },
      {
        "@type": "Question",
        "name": "Escritórios e lojas: vocês emitem Nota Fiscal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Atendemos tanto clientes residenciais quanto corporativos com emissão de nota fiscal, conformidade trabalhista (equipe CLT) e toda a documentação necessária para entrada em prédios comerciais."
        }
      },
      {
        "@type": "Question",
        "name": "Existe risco para móveis planejados ou maquinário?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pelo contrário. Nossa limpeza interna e externa de armários e superfícies usa produtos que hidratam e protegem o MDF e metais, removendo o pó de obra sem deixar manchas ou umidade excessiva."
        }
      }
    ]
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.seuespacolpo.com.br"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cleaningServiceData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  );
};

export default JsonLd;
