import { Instagram, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG, buildWhatsAppHref } from '../config/brand';

const FOOTER_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Diseños', href: '#disenos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export function Footer() {
  return (
    <footer className="bg-[#F7F4EE] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 border-b border-[#1C1F22]/10 pb-8 md:flex-row md:items-center">
          {/* Brand Logo + Wordmark */}
          <div className="flex items-center gap-3">
            <img
              src={BRAND_CONFIG.logoSrc}
              alt="Logo de Pampa Cases"
              referrerPolicy="no-referrer"
              className="h-9 w-9 rounded-full object-cover"
            />
            <div>
              <p className="font-display text-lg font-semibold text-[#1C1F22]">
                {BRAND_CONFIG.name}
              </p>
              <p className="text-xs text-[#555B61]">{BRAND_CONFIG.coverageNote}</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Navegación de pie de página" className="flex flex-wrap gap-6 text-sm">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#555B61] transition-colors hover:text-[#1C1F22] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C1F22]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social & Direct Channels */}
          <div className="flex items-center gap-3">
            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Pampa Cases"
              className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-[#1C1F22]/12 bg-[#FAF8F4] px-3.5 py-2 text-xs font-medium text-[#1C1F22] transition-colors hover:border-[#C6A15B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1F22]"
            >
              <Instagram className="h-4 w-4 text-[#C6A15B]" aria-hidden="true" />
              <span>Instagram</span>
            </a>

            <a
              href={buildWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de Pampa Cases"
              className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[#8EC9E8] px-3.5 py-2 text-xs font-semibold text-[#14222B] transition-colors hover:bg-[#7BBCE0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1F22]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-2 text-xs text-[#555B61] sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {BRAND_CONFIG.name}. Todos los derechos reservados.
          </p>
          <p>Fundas para iPhone con diseño e identidad argentina.</p>
        </div>
      </div>
    </footer>
  );
}
