import { ArrowDownRight } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-[#1C1F22]/8 bg-[#F7F4EE]"
    >
      {/* Subtle geometric horizon curve inspired by the Pampa Cases emblem */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden"
      >
        <svg
          viewBox="0 0 1440 720"
          preserveAspectRatio="none"
          className="h-full w-full opacity-55"
        >
          <path
            d="M840 0 H1440 V540 C1220 595, 1040 430, 840 485 Z"
            fill="#8EC9E8"
            fillOpacity="0.22"
          />
          <path
            d="M780 515 C990 455, 1180 615, 1440 555"
            fill="none"
            stroke="#C6A15B"
            strokeOpacity="0.45"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-24">
        {/* Editorial Copy Column */}
        <div className="lg:col-span-6">
          <p className="text-xs font-medium tracking-[0.14em] text-[#555B61] uppercase">
            Fundas para iPhone · {BRAND_CONFIG.coverageNote}
          </p>

          <h1 className="mt-5 font-display text-4xl leading-[1.08] font-medium tracking-tight text-[#1C1F22] [text-wrap:balance] sm:text-5xl lg:text-[3.5rem]">
            {BRAND_CONFIG.name}: identidad argentina en tus manos.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#555B61] sm:text-lg">
            Diseños originales inspirados en nuestra cultura y paisajes, sobre fundas de
            excelente calidad pensadas para proteger tu iPhone todos los días.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#disenos"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#8EC9E8] px-6 py-3 text-sm font-semibold text-[#14222B] transition-all duration-150 hover:bg-[#7BBCE0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1F22]"
            >
              <span>Ver diseños</span>
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#nosotros"
              className="inline-flex min-h-[44px] items-center px-3 py-3 text-sm font-medium text-[#1C1F22] underline decoration-[#C6A15B] decoration-1 underline-offset-4 transition-colors hover:text-[#555B61]"
            >
              Conocer la marca
            </a>
          </div>
        </div>

        {/* Featured Product Visual Column */}
        <div className="lg:col-span-6">
          <div className="relative mx-auto flex max-w-md items-center justify-center rounded-2xl border border-[#1C1F22]/10 bg-[#FAF8F4] px-8 py-12 sm:py-14">
            {/* Subtle celeste backdrop halo behind the featured case */}
            <div
              aria-hidden="true"
              className="absolute h-64 w-64 rounded-full bg-[#8EC9E8]/28 blur-2xl sm:h-72 sm:w-72"
            />
            <img
              src={BRAND_CONFIG.featuredCaseSrc}
              alt="Funda para iPhone Bandera Argentina con Sol de Mayo de Pampa Cases"
              referrerPolicy="no-referrer"
              className="relative z-10 max-h-[430px] w-auto object-contain drop-shadow-[0_24px_38px_rgba(28,31,34,0.16)]"
            />
            <div className="absolute right-5 bottom-4 left-5 flex items-center justify-between border-t border-[#1C1F22]/8 pt-3 text-xs text-[#555B61]">
              <span className="font-medium text-[#1C1F22]">Bandera &amp; Sol de Mayo</span>
              <span className="text-[#9E7C3B]">Modelo disponible</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
