const BENEFITS = [
  {
    number: '01',
    title: 'Calidad que se siente en la mano',
    description:
      'Terminaciones prolijas, calce preciso en botones y cámara, y materiales pensados para proteger tu iPhone frente a golpes y roces de todos los días.',
  },
  {
    number: '02',
    title: 'Diseños originales con identidad',
    description:
      'Cada funda parte de una búsqueda estética propia. Propuestas limpias y contemporáneas para expresar tu estilo sin sobrecargar el teléfono.',
  },
  {
    number: '03',
    title: 'Precios accesibles y trato directo',
    description:
      'Cuidamos el equilibrio entre diseño, durabilidad y valor real para que puedas proteger tu equipo sin pagar sobreprecios.',
  },
  {
    number: '04',
    title: 'Descuento llevando dos unidades',
    description:
      '¿Querés renovar dos fundas o compartir el pedido con alguien más? Consultanos por nuestras condiciones especiales al llevar dos unidades.',
    highlight: true,
  },
];

export function BenefitsSection() {
  return (
    <section
      aria-label="Beneficios de Pampa Cases"
      className="border-b border-[#1C1F22]/8 bg-[#F7F4EE] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.12em] text-[#9E7C3B] uppercase">
              Por qué elegirnos
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight font-medium tracking-tight text-[#1C1F22] [text-wrap:balance] sm:text-4xl">
              Diseño cuidado, protección real y beneficios pensados para vos.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#555B61] sm:text-base">
              Atención personalizada por WhatsApp para asesorarte según tu modelo de iPhone antes
              de confirmar tu pedido.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.number}
                className={`flex flex-col justify-between rounded-2xl border p-6 sm:p-7 ${
                  benefit.highlight
                    ? 'border-[#C6A15B]/45 bg-[#8EC9E8]/18'
                    : 'border-[#1C1F22]/10 bg-[#FAF8F4]'
                }`}
              >
                <div>
                  <span className="font-display text-sm font-medium tracking-wider text-[#9E7C3B] tabular-nums">
                    {benefit.number}.
                  </span>
                  <h3 className="mt-3 font-display text-xl font-medium text-[#1C1F22]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#555B61]">
                    {benefit.description}
                  </p>
                </div>

                {benefit.highlight && (
                  <div className="mt-5 border-t border-[#1C1F22]/10 pt-3">
                    <a
                      href="#contacto"
                      className="text-xs font-semibold text-[#1C1F22] underline decoration-[#C6A15B] underline-offset-4 transition-colors hover:text-[#376682]"
                    >
                      Consultar promo por 2 unidades
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
