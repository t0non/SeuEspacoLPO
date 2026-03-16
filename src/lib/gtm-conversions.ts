// Funções de conversão para Google Tag Manager
declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

export const gtag_report_conversion = (url?: string): boolean => {
  // Envia evento de conversão para o GTM
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'conversion',
      event_category: 'WhatsApp',
      event_action: 'Click',
      event_label: 'WhatsApp Button',
      value: 1,
      send_to: 'AW-17931024307/5dwzCJjegu8bELPvluZC',
      event_callback: () => {
        if (typeof url !== 'undefined') {
          window.open(url, '_blank');
        }
      }
    });
  }
  
  // Fallback: abre o WhatsApp diretamente
  if (typeof url !== 'undefined') {
    window.open(url, '_blank');
  }
  
  return false;
};

// Tornar a função disponível globalmente
if (typeof window !== 'undefined') {
  window.gtag_report_conversion = gtag_report_conversion;
}
