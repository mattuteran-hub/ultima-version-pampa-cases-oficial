/**
 * Configuración centralizada de Pampa Cases.
 * Reemplazá los valores de contacto y redes sociales con los datos reales de la marca.
 */
export const BRAND_CONFIG = {
  name: 'Pampa Cases',
  logoSrc: '/assets/aistudio/Wavy_Landscape_Circle_Emblem_e31c7a4a.png',
  featuredCaseSrc: '/assets/aistudio/Funda_de_celular_con_bandera_argentina_e5455104.png',

  /**
   * Número de WhatsApp en formato internacional sin "+", espacios ni guiones.
   * Ejemplo para Argentina (Buenos Aires): '5491112345678'
   * Dejalo vacío ('') mientras sea un enlace de muestra configurable.
   */
  whatsappPhone: '',

  /**
   * URL base de WhatsApp cuando aún no se configuró un número real.
   * Al cargar `whatsappPhone`, los botones generan automáticamente `https://wa.me/<numero>?text=...`.
   */
  whatsappPlaceholderUrl: 'https://wa.me/',

  /**
   * Enlace de Instagram configurable de la marca.
   */
  instagramUrl: 'https://www.instagram.com/',
  instagramLabel: 'Instagram oficial',

  coverageNote: 'Zona Oeste y Capital Federal · Buenos Aires',
} as const;

export function buildWhatsAppHref(params?: {
  designName?: string;
  iphoneModel?: string;
  twoUnitsPromo?: boolean;
}): string {
  const parts: string[] = ['Hola Pampa Cases, quiero consultar por una funda para iPhone.'];

  if (params?.designName) {
    parts.push(`Diseño de interés: ${params.designName}.`);
  }
  if (params?.iphoneModel?.trim()) {
    parts.push(`Modelo de iPhone: ${params.iphoneModel.trim()}.`);
  }
  if (params?.twoUnitsPromo) {
    parts.push('También me interesa consultar por el descuento llevando dos unidades.');
  }
  if (!params?.iphoneModel?.trim()) {
    parts.push('¿Me confirman qué modelos de iPhone tienen disponibles?');
  }

  const encodedMessage = encodeURIComponent(parts.join(' '));
  const cleanPhone = BRAND_CONFIG.whatsappPhone.replace(/\D/g, '');

  if (cleanPhone) {
    return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
  }

  return `${BRAND_CONFIG.whatsappPlaceholderUrl}?text=${encodedMessage}`;
}
