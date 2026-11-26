import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Diseños', href: '#disenos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#1C1F22]/8 bg-[#F7F4EE]/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line brand mark */}
        <a
          href="#inicio"
          className="flex shrink-0 items-center gap-2.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C1F22]"
        >
          <img
            src={BRAND_CONFIG.logoSrc}
            alt="Emblema de Pampa Cases"
            referrerPolicy="no-referrer"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="font-display text-lg font-semibold tracking-tight text-[#1C1F22]">
            {BRAND_CONFIG.name}
          </span>
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 whitespace-nowrap text-sm font-medium text-[#555B61] underline-offset-4 transition-colors duration-150 hover:text-[#1C1F22] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C1F22]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#contacto"
            className="hidden shrink-0 whitespace-nowrap rounded-lg bg-[#1C1F22] px-4 py-2 text-sm font-medium text-[#F7F4EE] transition-colors duration-150 hover:bg-[#31363B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1F22] sm:inline-flex"
          >
            Consultar
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-[#1C1F22] transition-colors hover:bg-[#EFEAE0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1F22] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Responsive mobile menu */}
      {mobileOpen && (
        <nav
          aria-label="Menú móvil"
          className="border-t border-[#1C1F22]/8 bg-[#F7F4EE] px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-[#1C1F22] transition-colors hover:bg-[#EFEAE0]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
