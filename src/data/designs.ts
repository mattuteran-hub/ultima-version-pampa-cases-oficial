export type DesignCategory = 'Todos' | 'Identidad' | 'Paisaje' | 'Cultura';

export type SampleArtworkKey =
  | 'horizonte-pampeano'
  | 'ritual-mate'
  | 'avenida-porteña'
  | 'cerro-sur'
  | 'solsticio-dorado';

export interface CaseDesign {
  id: string;
  name: string;
  collection: Exclude<DesignCategory, 'Todos'>;
  finish: string;
  description: string;
  imageSrc?: string;
  artworkKey?: SampleArtworkKey;
  isSample?: boolean;
}

export const CASE_DESIGNS: CaseDesign[] = [
  {
    id: 'sol-de-mayo',
    name: 'Bandera & Sol de Mayo',
    collection: 'Identidad',
    finish: 'Textura cuero granulado',
    description:
      'Franjas celeste y blanco cálido con el Sol de Mayo en relieve dorado. Nuestro diseño insignia.',
    imageSrc: '/assets/aistudio/Funda_de_celular_con_bandera_argentina_e5455104.png',
    isSample: false,
  },
  {
    id: 'horizonte-pampeano',
    name: 'Horizonte Pampeano',
    collection: 'Paisaje',
    finish: 'Mate suave al tacto · Muestra',
    description:
      'Curvas orgánicas inspiradas en nuestro emblema: cielo celeste, llanura abierta y trazo en dorado suave.',
    artworkKey: 'horizonte-pampeano',
    isSample: true,
  },
  {
    id: 'ritual-mate',
    name: 'Ritual de Sobremesa',
    collection: 'Cultura',
    finish: 'Acabado satinado · Muestra',
    description:
      'Ilustración minimalista en línea fina que celebra la ronda de mate y los momentos cotidianos.',
    artworkKey: 'ritual-mate',
    isSample: true,
  },
  {
    id: 'avenida-portena',
    name: 'Trazos de Buenos Aires',
    collection: 'Cultura',
    finish: 'Mate arquitectónico · Muestra',
    description:
      'Geometría urbana inspirada en cúpulas, balcones clásicos y la estética porteña contemporánea.',
    artworkKey: 'avenida-porteña',
    isSample: true,
  },
  {
    id: 'cerro-sur',
    name: 'Relieve Austral',
    collection: 'Paisaje',
    finish: 'Textura suave · Muestra',
    description:
      'Líneas topográficas que evocan la cordillera y el viento del sur sobre fondo blanco cálido.',
    artworkKey: 'cerro-sur',
    isSample: true,
  },
  {
    id: 'solsticio-dorado',
    name: 'Estampa Dorada',
    collection: 'Identidad',
    finish: 'Edición sobria · Muestra',
    description:
      'Composición limpia y atemporal con acentos dorados sutiles pensada para el uso diario.',
    artworkKey: 'solsticio-dorado',
    isSample: true,
  },
];

export const DESIGN_CATEGORIES: DesignCategory[] = [
  'Todos',
  'Identidad',
  'Paisaje',
  'Cultura',
];
