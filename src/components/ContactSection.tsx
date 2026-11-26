import { useEffect, useState } from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG, buildWhatsAppHref } from '../config/brand';
import { CASE_DESIGNS } from '../data/designs';

interface ContactSectionProps {
  selectedDesignName: string;
  onSelectedDesignChange: (name: string) => void;
}

export function ContactSection({
  selectedDesignName,
  onSelectedDesignChange,
}: ContactSectionProps) {
  const [iphoneModel, setIphoneModel] = useState('');
  const [twoUnitsPromo, setTwoUnitsPromo] = useState(false);

  useEffect(() => {
    if (!selectedDesignName && CASE_DESIGNS[0]) {
      onSelectedDesignChange(CASE_DESIGNS[0].name);
    }
  }, [selectedDesignName, onSelectedDesignChange]);

  const whatsappHref = buildWhatsAppHref({
    designName: selectedDesignName || undefined,
    iphoneModel,
    twoUnitsPromo,
  });

  return (
    <section
      id="contacto"
      className="border-b border-[#1C1F22]/8 bg-[#FAF8F4] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-2xl border border-[#1C1F22]/10 bg-[#F7F4EE] p-6 sm:p-10 lg:grid-cols-12 lg:items-center lg:gap-12 lg:p-12">
          {/* Left Invitation Copy */}
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-[0.12em] text-[#9E7C3B] uppercase">
              Contacto directo
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight font-medium tracking-tight text-[#1C1F22] [text-wrap:balance] sm:text-4xl">
              ¿Querés saber si está disponible para tu iPhone?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#555B61]">
              Escribinos directamente por WhatsApp para consultar por modelos de iPhone disponibles,
              coordinar tu pedido o preguntarnos por el descuento llevando dos unidades.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-6 border-t border-[#1C1F22]/10 pt-6 text-sm text-[#555B61]">
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 font-medium text-[#1C1F22] transition-colors hover:text-[#376682] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C1F22]"
              >
                <Instagram className="h-4 w-4 text-[#C6A15B]" aria-hidden="true" />
                <span>Seguinos en Instagram</span>
              </a>

              <span aria-hidden="true" className="hidden text-[#C6A15B] sm:inline">
                ·
              </span>

              <span>{BRAND_CONFIG.coverageNote}</span>
            </div>
          </div>

          {/* Right Interactive WhatsApp Inquiry Card */}
          <div className="rounded-xl border border-[#1C1F22]/10 bg-[#FAF8F4] p-6 sm:p-7 lg:col-span-6">
            <h3 className="font-display text-xl font-medium text-[#1C1F22]">
              Armá tu consulta rápida
            </h3>
            <p className="mt-1 text-sm text-[#555B61]">
              Personalizá el mensaje antes de abrir el chat.
            </p>

            <div className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="design-select"
                  className="block text-xs font-semibold tracking-wide text-[#1C1F22]"
                >
                  Diseño que te gustó
                </label>
                <select
                  id="design-select"
                  value={selectedDesignName}
                  onChange={(e) => onSelectedDesignChange(e.target.value)}
                  className="mt-1.5 min-h-[44px] w-full rounded-lg border border-[#1C1F22]/15 bg-[#F7F4EE] px-3.5 py-2.5 text-sm text-[#1C1F22] focus:border-[#8EC9E8] focus:outline-none focus:ring-2 focus:ring-[#8EC9E8]/50"
                >
                  {CASE_DESIGNS.map((design) => (
                    <option key={design.id} value={design.name}>
                      {design.name}
                    </option>
                  ))}
                  <option value="Varios diseños">Quiero consultar por varios diseños</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="iphone-model-input"
                  className="block text-xs font-semibold tracking-wide text-[#1C1F22]"
                >
                  Modelo de tu iPhone (opcional)
                </label>
                <input
                  id="iphone-model-input"
                  type="text"
                  value={iphoneModel}
                  onChange={(e) => setIphoneModel(e.target.value)}
                  placeholder="Escribí tu modelo para confirmar stock"
                  className="mt-1.5 min-h-[44px] w-full rounded-lg border border-[#1C1F22]/15 bg-[#F7F4EE] px-3.5 py-2.5 text-sm text-[#1C1F22] placeholder:text-[#555B61]/70 focus:border-[#8EC9E8] focus:outline-none focus:ring-2 focus:ring-[#8EC9E8]/50"
                />
              </div>

              <label className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-lg border border-[#1C1F22]/8 bg-[#F7F4EE]/70 px-3.5 py-2.5 text-sm text-[#1C1F22]">
                <input
                  type="checkbox"
                  checked={twoUnitsPromo}
                  onChange={(e) => setTwoUnitsPromo(e.target.checked)}
                  className="h-4 w-4 rounded border-[#1C1F22]/30 accent-[#1C1F22]"
                />
                <span>Consultar descuento llevando 2 unidades</span>
              </label>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-lg bg-[#8EC9E8] px-6 py-3.5 text-sm font-semibold text-[#14222B] transition-colors duration-150 hover:bg-[#7BBCE0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1F22]"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
