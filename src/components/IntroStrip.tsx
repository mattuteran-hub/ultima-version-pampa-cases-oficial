export function IntroStrip() {
  return (
    <section
      aria-label="Presentación de Pampa Cases"
      className="border-b border-[#1C1F22]/8 bg-[#FAF8F4]"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-12 md:items-center lg:px-8 lg:py-16">
        <div className="md:col-span-5">
          <p className="text-xs font-semibold tracking-[0.12em] text-[#9E7C3B] uppercase">
            Propuesta de valor
          </p>
          <h2 className="mt-2 font-display text-2xl leading-snug font-medium text-[#1C1F22] [text-wrap:balance] sm:text-3xl">
            Cuidá tu iPhone con diseño propio, sin pagar de más.
          </h2>
        </div>

        <div className="md:col-span-7 md:pl-6">
          <p className="text-base leading-relaxed text-[#555B61]">
            En <strong className="font-semibold text-[#1C1F22]">Pampa Cases</strong> creemos que
            una funda no es solo un accesorio de protección: es algo que llevás con vos en la facu,
            en el trabajo o en una salida. Combinamos materiales resistentes y terminaciones
            cuidadas con estética argentina contemporánea y precios accesibles.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#1C1F22]/8 pt-5 text-sm text-[#1C1F22]">
            <span>Diseños argentinos originales</span>
            <span aria-hidden="true" className="text-[#C6A15B]">
              ·
            </span>
            <span>Calidad premium al tacto</span>
            <span aria-hidden="true" className="text-[#C6A15B]">
              ·
            </span>
            <span>Precios accesibles</span>
          </div>
        </div>
      </div>
    </section>
  );
}
