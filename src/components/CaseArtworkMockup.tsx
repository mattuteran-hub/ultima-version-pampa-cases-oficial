import { useState } from 'react';
import { Smartphone } from 'lucide-react';
import { CaseDesign, SampleArtworkKey } from '../data/designs';

interface CaseArtworkMockupProps {
  design: CaseDesign;
  size?: 'card' | 'modal';
}

function SampleArtworkSvg({ artworkKey }: { artworkKey: SampleArtworkKey }) {
  switch (artworkKey) {
    case 'horizonte-pampeano':
      return (
        <svg viewBox="0 0 240 480" className="h-full w-full" aria-hidden="true">
          <rect width="240" height="480" fill="#F7F4EE" />
          <path
            d="M0 0 H240 V195 C185 235, 115 155, 0 205 Z"
            fill="#8EC9E8"
          />
          <path
            d="M0 245 C80 200, 165 280, 240 232 V480 H0 Z"
            fill="#C6A15B"
            fillOpacity="0.88"
          />
          <path
            d="M0 225 C85 182, 162 260, 240 214"
            fill="none"
            stroke="#1C1F22"
            strokeOpacity="0.14"
            strokeWidth="1.2"
          />
          <circle cx="178" cy="116" r="18" fill="#F7F4EE" fillOpacity="0.45" />
          <text
            x="120"
            y="432"
            textAnchor="middle"
            fill="#F7F4EE"
            fontSize="10"
            letterSpacing="3.5"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="600"
          >
            PAMPA CASES
          </text>
        </svg>
      );

    case 'ritual-mate':
      return (
        <svg viewBox="0 0 240 480" className="h-full w-full" aria-hidden="true">
          <rect width="240" height="480" fill="#EFEAE0" />
          <circle cx="120" cy="250" r="76" fill="#F7F4EE" stroke="#C6A15B" strokeWidth="1.5" />
          {/* Bombilla & mate geometric illustration */}
          <path
            d="M84 246 C84 292, 100 310, 120 310 C140 310, 156 292, 156 246 Z"
            fill="#8EC9E8"
            fillOpacity="0.35"
            stroke="#1C1F22"
            strokeWidth="1.8"
          />
          <path
            d="M80 246 H160"
            stroke="#C6A15B"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M128 246 L152 194"
            stroke="#1C1F22"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="154" cy="190" r="3.5" fill="#C6A15B" />
          {/* Gentle steam curves */}
          <path
            d="M104 222 C98 208, 110 198, 105 184"
            fill="none"
            stroke="#8EC9E8"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M118 218 C113 204, 124 192, 119 178"
            fill="none"
            stroke="#C6A15B"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <text
            x="120"
            y="366"
            textAnchor="middle"
            fill="#1C1F22"
            fillOpacity="0.7"
            fontSize="9.5"
            letterSpacing="3"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="600"
          >
            SOBREMESA
          </text>
        </svg>
      );

    case 'avenida-porteña':
      return (
        <svg viewBox="0 0 240 480" className="h-full w-full" aria-hidden="true">
          <rect width="240" height="480" fill="#1C1F22" />
          {/* Architectural grid & obelisk/dome lines */}
          <rect
            x="24"
            y="164"
            width="192"
            height="278"
            rx="16"
            fill="none"
            stroke="#C6A15B"
            strokeOpacity="0.55"
            strokeWidth="1.2"
          />
          <path
            d="M120 184 L132 344 H108 Z"
            fill="#F7F4EE"
            fillOpacity="0.92"
          />
          <path d="M120 170 L132 184 H108 Z" fill="#8EC9E8" />
          <line x1="48" y1="344" x2="192" y2="344" stroke="#C6A15B" strokeWidth="1.5" />
          <line x1="68" y1="362" x2="172" y2="362" stroke="#8EC9E8" strokeOpacity="0.7" strokeWidth="1.2" />
          <line x1="88" y1="378" x2="152" y2="378" stroke="#F7F4EE" strokeOpacity="0.35" strokeWidth="1" />
          <text
            x="120"
            y="416"
            textAnchor="middle"
            fill="#F7F4EE"
            fillOpacity="0.85"
            fontSize="9.5"
            letterSpacing="3.5"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="500"
          >
            BUENOS AIRES
          </text>
        </svg>
      );

    case 'cerro-sur':
      return (
        <svg viewBox="0 0 240 480" className="h-full w-full" aria-hidden="true">
          <rect width="240" height="480" fill="#F7F4EE" />
          {/* Topographic mountain contour curves */}
          <path
            d="M0 310 L58 232 L106 276 L158 198 L206 254 L240 226 V480 H0 Z"
            fill="#8EC9E8"
            fillOpacity="0.35"
          />
          <path
            d="M0 335 L68 258 L114 294 L166 226 L240 278 V480 H0 Z"
            fill="#8EC9E8"
            fillOpacity="0.65"
          />
          <path
            d="M0 364 C62 342, 134 378, 240 340 V480 H0 Z"
            fill="#1C1F22"
            fillOpacity="0.06"
          />
          <circle cx="72" cy="186" r="14" fill="none" stroke="#C6A15B" strokeWidth="1.8" />
          <path
            d="M32 396 H208"
            stroke="#C6A15B"
            strokeWidth="1.2"
          />
          <text
            x="120"
            y="420"
            textAnchor="middle"
            fill="#1C1F22"
            fillOpacity="0.72"
            fontSize="9.5"
            letterSpacing="3.2"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="600"
          >
            SUR ARGENTINO
          </text>
        </svg>
      );

    case 'solsticio-dorado':
    default:
      return (
        <svg viewBox="0 0 240 480" className="h-full w-full" aria-hidden="true">
          <rect width="240" height="480" fill="#FAF8F4" />
          <g transform="translate(120, 268)">
            <circle r="54" fill="#8EC9E8" fillOpacity="0.2" />
            <circle r="24" fill="#C6A15B" />
            {Array.from({ length: 16 }).map((_, index) => {
              const angle = (index * 360) / 16;
              return (
                <line
                  key={index}
                  x1="0"
                  y1="-32"
                  x2="0"
                  y2={index % 2 === 0 ? '-52' : '-44'}
                  stroke="#C6A15B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  transform={`rotate(${angle})`}
                />
              );
            })}
          </g>
          <text
            x="120"
            y="404"
            textAnchor="middle"
            fill="#1C1F22"
            fillOpacity="0.72"
            fontSize="9.5"
            letterSpacing="3.5"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="600"
          >
            ESTAMPA DORADA
          </text>
        </svg>
      );
  }
}

export function CaseArtworkMockup({ design, size = 'card' }: CaseArtworkMockupProps) {
  const [imageError, setImageError] = useState(false);

  if (design.imageSrc && !imageError) {
    return (
      <div className="relative flex h-full w-full items-center justify-center p-4 sm:p-6">
        <img
          src={design.imageSrc}
          alt={`Funda para iPhone ${design.name} de Pampa Cases`}
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className={`h-full w-auto max-w-full object-contain drop-shadow-[0_18px_28px_rgba(28,31,34,0.14)] transition-transform duration-300 ${
            size === 'card' ? 'group-hover:scale-[1.03]' : ''
          }`}
        />
      </div>
    );
  }

  if (design.artworkKey) {
    return (
      <div className="relative flex h-full w-full items-center justify-center p-4 sm:p-6">
        {/* Realistic iPhone Pro case shell matching the real photo silhouette */}
        <div
          className={`relative aspect-[1/2.02] h-full max-h-[340px] w-auto overflow-hidden rounded-[2rem] border border-[#1C1F22]/12 bg-[#FAF8F4] shadow-[0_18px_32px_rgba(28,31,34,0.13)] transition-transform duration-300 ${
            size === 'modal' ? 'max-h-[420px] rounded-[2.25rem]' : 'group-hover:scale-[1.03]'
          }`}
        >
          {/* Artwork layer */}
          <SampleArtworkSvg artworkKey={design.artworkKey} />

          {/* Subtle tactile surface highlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/40"
          />

          {/* Camera island plateau (top-left) */}
          <div
            aria-hidden="true"
            className="absolute top-3 left-3 grid h-[22%] w-[44%] grid-cols-2 grid-rows-2 gap-1 rounded-[1.05rem] border border-black/10 bg-[#EBE6DC] p-1.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.08)]"
          >
            <div className="flex items-center justify-center rounded-full bg-[#24272B] ring-1 ring-[#C6A15B]/35">
              <div className="h-2.5 w-2.5 rounded-full bg-[#101214]" />
            </div>
            <div className="flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-[#EFEAE0] ring-1 ring-black/15" />
            </div>
            <div className="flex items-center justify-center rounded-full bg-[#24272B] ring-1 ring-[#C6A15B]/35">
              <div className="h-2.5 w-2.5 rounded-full bg-[#101214]" />
            </div>
            <div className="flex items-center justify-center rounded-full bg-[#24272B] ring-1 ring-[#C6A15B]/35">
              <div className="h-2.5 w-2.5 rounded-full bg-[#101214]" />
            </div>
          </div>

          {/* Bottom port cutout */}
          <div
            aria-hidden="true"
            className="absolute inset-x-[26%] bottom-0 h-1.5 rounded-t-md bg-[#2A2E33]/85"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#F7F4EE] via-[#EFEAE0] to-[#8EC9E8]/25 p-6 text-center">
      <Smartphone className="h-10 w-10 text-[#C6A15B]" strokeWidth={1.5} />
      <span className="font-display text-base font-medium text-[#1C1F22]">{design.name}</span>
    </div>
  );
}
