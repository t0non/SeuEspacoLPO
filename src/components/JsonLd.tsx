import React from 'react';

const JsonLd: React.FC = () => {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Seu Espaço LPO",
    "image": "https://files.catbox.moe/gfptca.png",
    "@id": "https://seuespacolpo.com.br",
    "url": "https://seuespacolpo.com.br",
    "telephone": "+5511988259447",
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
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://wa.me/5511988259447"
    ],
    "areaServed": [
      "Santo Amaro", "Alto da Boa Vista", "Vila Mascote", "Chácara Santo Antônio", 
      "Jabaquara", "Jardim Prudência", "Moema", "Pinheiros", "Americanópolis", 
      "Cupecê", "Pedreira", "Campo Belo", "Cidade Ademar", "Diadema", 
      "São Bernardo do Campo", "Brooklin", "Vila da Saúde", "Vila Mariana"
    ]
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Limpeza Pós Obra",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Seu Espaço LPO"
    },
    "areaServed": [
      { "@type": "City", "name": "São Paulo" },
      { "@type": "City", "name": "Diadema" },
      { "@type": "City", "name": "São Bernardo do Campo" }
    ],
    "description": "Limpeza técnica pós-obra com detalhamento minucioso. Remoção de respingos de tinta, rejunte e poeira fina."
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
          "text": "Diferente da faxina comum, a limpeza pós-obra utiliza produtos químicos específicos para remover resíduos pesados como cimento, rejunte e gesso, além de equipamentos industriais."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto custa o serviço e como é feito o orçamento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O valor é calculado principalmente por metro quadrado (m²) e pelo nível de complexidade da sujeira. Orçamentos via WhatsApp em até 30 minutos."
        }
      },
      {
        "@type": "Question",
        "name": "Vocês trazem todos os produtos e equipamentos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Nossa equipe vai equipada com tudo o que é necessário: aspiradores industriais, lavadoras de alta pressão e produtos químicos profissionais certificados."
        }
      },
      {
        "@type": "Question",
        "name": "Existe algum risco para meus móveis planejados?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pelo contrário. Nossa limpeza interna e externa de armários usa produtos específicos que hidratam e protegem o MDF, removendo o pó de obra sem deixar manchas."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
};

export default JsonLd;
