import { useState } from 'react';
import { ArrowUpRight, Eye, X } from 'lucide-react';
import {
  CASE_DESIGNS,
  CaseDesign,
  DESIGN_CATEGORIES,
  DesignCategory,
} from '../data/designs';
import { CaseArtworkMockup } from './CaseArtworkMockup';

interface CatalogSectionProps {
  onSelectDesignForInquiry: (designName: string) => void;
}

export function CatalogSection({ onSelectDesignForInquiry }: CatalogSectionProps) {
  const [activeCategory, setActiveCategory] = useState<DesignCategory>('Todos');
  const [inspectedDesign, setInspectedDesign] = useState<CaseDesign | null>(null);

  const visibleDesigns =
    activeCategory === 'Todos'
      ? CASE_DESIGNS
      : CASE_DESIGNS.filter((item) => item.collection === activeCategory);

  const handleInquiry = (designName: string) => {
    setInspectedDesign(null);
    onSelectDesignForInquiry(designName);
    const contactEl = document.getElementById('contacto');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="disenos" className="border-b border-[#1C1F22]/8 bg-[#F7F4EE] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header + Filter Bar */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#1C1F22]/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] text-[#9E7C3B] uppercase">
              Catálogo de diseños
            </p>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[#1C1F22] [text-wrap:balance] sm:text-4xl">
              Elegí el diseño que va con vos
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#555B61] sm:text-base">
              Modelos pensados para el uso diario. Consultanos por el modelo de tu iPhone para
              confirmar disponibilidad.
            </p>
          </div>

          {/* Functional Segmented Filter */}
          <div
            role="tablist"
            aria-label="Filtrar diseños por colección"
            className="inline-flex w-fit flex-wrap items-center gap-1 rounded-xl border border-[#1C1F22]/10 bg-[#FAF8F4] p-1"
          >
            {DESIGN_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-[40px] shrink-0 whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1F22] sm:text-sm ${
                    isActive
                      ? 'bg-[#8EC9E8] text-[#14222B]'
                      : 'text-[#555B61] hover:text-[#1C1F22]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {visibleDesigns.map((design) => (
            <article
              key={design.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#1C1F22]/10 bg-[#FAF8F4] transition-transform duration-200 hover:-translate-y-0.5"
            >
              {/* Visual Showcase Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden border-b border-[#1C1F22]/8 bg-[#EFEAE0]/65">
                <CaseArtworkMockup design={design} size="card" />

                <button
                  type="button"
                  onClick={() => setInspectedDesign(design)}
                  aria-label={`Ver detalle de ${design.name}`}
                  className="absolute right-3 bottom-3 inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-[#1C1F22]/12 bg-[#F7F4EE]/95 px-3 py-1.5 text-xs font-medium text-[#1C1F22] backdrop-blur-sm transition-colors hover:bg-[#8EC9E8] hover:text-[#14222B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1F22]"
                >
                  <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Ver detalle</span>
                </button>
              </div>

              {/* Card Body — Clean Unboxed Metadata + Title + Description */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#555B61]">
                    <span className="font-medium text-[#9E7C3B]">{design.collection}</span>
                    <span aria-hidden="true">·</span>
                    <span>{design.finish}</span>
                  </div>

                  <h3 className="mt-2 font-display text-xl font-medium text-[#1C1F22]">
                    {design.name}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#555B61]">
                    {design.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-[#1C1F22]/8 pt-4">
                  <button
                    type="button"
                    onClick={() => handleInquiry(design.name)}
                    className="inline-flex min-h-[40px] w-full items-center justify-between text-sm font-medium text-[#1C1F22] transition-colors hover:text-[#376682] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1F22]"
                  >
                    <span>Consultar por este diseño</span>
                    <ArrowUpRight className="h-4 w-4 text-[#C6A15B]" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Accessible Detail Preview Modal */}
      {inspectedDesign && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-design-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C1F22]/55 p-4 backdrop-blur-xs"
          onClick={() => setInspectedDesign(null)}
        >
          <div
            className="relative grid w-full max-w-3xl overflow-hidden rounded-2xl border border-[#1C1F22]/12 bg-[#F7F4EE] shadow-xl md:grid-cols-12"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setInspectedDesign(null)}
              aria-label="Cerrar vista previa"
              className="absolute top-3 right-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#FAF8F4] text-[#1C1F22] transition-colors hover:bg-[#EFEAE0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1F22]"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex aspect-[4/4.5] items-center justify-center bg-[#EFEAE0]/75 p-6 md:col-span-6 md:aspect-auto">
              <CaseArtworkMockup design={inspectedDesign} size="modal" />
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-8 md:col-span-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#555B61]">
                  <span className="font-medium text-[#9E7C3B]">{inspectedDesign.collection}</span>
                  <span aria-hidden="true">·</span>
                  <span>{inspectedDesign.finish}</span>
                </div>

                <h3
                  id="modal-design-title"
                  className="mt-2 font-display text-2xl font-medium text-[#1C1F22] sm:text-3xl"
                >
                  {inspectedDesign.name}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-[#555B61] sm:text-base">
                  {inspectedDesign.description}
                </p>

                <p className="mt-5 border-t border-[#1C1F22]/10 pt-4 text-xs leading-relaxed text-[#555B61]">
                  {inspectedDesign.isSample
                    ? 'Imagen de muestra orientativa de la colección. Consultanos por modelos de iPhone disponibles y stock actualizado.'
                    : 'Modelo real de la colección. Consultanos por el modelo exacto de tu iPhone y disponibilidad inmediata.'}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => handleInquiry(inspectedDesign.name)}
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#8EC9E8] px-5 py-3 text-sm font-semibold text-[#14222B] transition-colors hover:bg-[#7BBCE0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1F22]"
                >
                  <span>Consultar disponibilidad</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
