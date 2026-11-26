import { BRAND_CONFIG } from '../config/brand';

export function IdentitySection() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden border-b border-[#1C1F22]/8 bg-[#FAF8F4] py-16 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
        {/* Left Visual: Brand Emblem & Cultural Composition */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto flex max-w-sm flex-col items-center rounded-2xl border border-[#1C1F22]/10 bg-[#F7F4EE] p-10 text-center">
            {/* Subtle gold hairline arc */}
            <div
              aria-hidden="true"
              className="mb-6 h-px w-16 bg-[#C6A15B]"
            />

            <img
              src={BRAND_CONFIG.logoSrc}
              alt="Logo oficial de Pampa Cases: cielo celeste, blanco cálido y tierra dorada en ondas"
              referrerPolicy="no-referrer"
              className="h-40 w-40 rounded-full object-contain shadow-[0_14px_30px_rgba(28,31,34,0.08)] sm:h-44 sm:w-44"
            />

            <p className="mt-7 font-display text-lg font-medium text-[#1C1F22]">
              Cielo, horizonte y llanura
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[#555B61]">
              Nuestro emblema resume la paleta y el movimiento de nuestra tierra: el celeste del
              cielo abierto, el blanco cálido y el dorado suave de la pampa.
            </p>
          </div>
        </div>

        {/* Right Copy: Argentine Cultural Inspiration */}
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold tracking-[0.12em] text-[#9E7C3B] uppercase">
            Identidad de marca
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-medium tracking-tight text-[#1C1F22] [text-wrap:balance] sm:text-4xl">
            Inspirados en lo cotidiano, diseñados para acompañarte siempre.
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-[#555B61]">
            <p>
              Pampa Cases nace en Buenos Aires con una idea simple: transformar símbolos, paisajes
              y escenas de la cultura argentina en diseños actuales, sobrios y con personalidad
              propia.
            </p>
            <p>
              Tomamos referencias que forman parte de nuestro día a día —desde la amplitud del
              horizonte pampeano y los colores de nuestra bandera hasta el ritual del mate y la
              arquitectura porteña— y las volcamos en fundas limpias, modernas y fáciles de
              combinar.
            </p>
          </div>

          {/* 3 Quiet Cultural Pillars */}
          <div className="mt-9 grid gap-6 border-t border-[#1C1F22]/10 pt-8 sm:grid-cols-3">
            <div>
              <p className="font-display text-base font-medium text-[#1C1F22]">Paisajes</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#555B61]">
                Líneas suaves y tonos inspirados en el cielo abierto, la llanura y el sur.
              </p>
            </div>
            <div>
              <p className="font-display text-base font-medium text-[#1C1F22]">Cultura viva</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#555B61]">
                Guiños sutiles a nuestras costumbres, lejos de los clichés recargados.
              </p>
            </div>
            <div>
              <p className="font-display text-base font-medium text-[#1C1F22]">Cercanía</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#555B61]">
                Pensadas para quienes viven entre Zona Oeste, Capital Federal y todo el país.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
