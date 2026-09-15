import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowRight } from 'lucide-react';
import { STORE_NAME, getWhatsAppUrl } from '../config';

interface HeaderProps {
  onNavigateToCatalog?: () => void;
  onNavigateToModels?: () => void;
  onNavigateToHowToBuy?: () => void;
}

export function Header({
  onNavigateToCatalog,
  onNavigateToModels,
  onNavigateToHowToBuy,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (action?: () => void) => {
    setMobileMenuOpen(false);
    if (action) {
      action();
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-neutral-200/80 py-3.5'
          : 'bg-white border-b border-neutral-100 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            id="brand-logo"
            href="#inicio"
            className="group flex items-center gap-2.5 text-decoration-none"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-xs bg-[#111] text-white font-extrabold text-sm tracking-wider group-hover:bg-black transition-colors relative overflow-hidden">
              <span>M</span>
              {/* Subtle Lakers homage micro-accent */}
              <div className="absolute bottom-0 right-0 w-2 h-1 bg-[#FDB927]" />
              <div className="absolute bottom-0 left-0 w-2 h-1 bg-[#552583]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-lg text-neutral-950 font-sans uppercase">
                {STORE_NAME}
              </span>
              <span className="text-[10px] tracking-widest text-neutral-500 uppercase -mt-1 font-medium">
                Premium Jerseys
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-navigation" className="hidden md:flex items-center gap-8">
            <a
              id="nav-link-inicio"
              href="#inicio"
              className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Início
            </a>
            <a
              id="nav-link-camisas"
              href="#catalogo"
              className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToCatalog?.();
              }}
            >
              Camisas
            </a>
            <a
              id="nav-link-modelos"
              href="#modelos"
              className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToModels?.();
              }}
            >
              Modelos
            </a>
            <a
              id="nav-link-comprar"
              href="#como-comprar"
              className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToHowToBuy?.();
              }}
            >
              Como Comprar
            </a>
            <a
              id="nav-link-whatsapp"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-emerald-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              WhatsApp
            </a>
          </nav>

          {/* Action CTA Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="header-cta-whatsapp"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xs bg-neutral-950 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-all shadow-xs active:scale-98"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#FDB927]" />
              <span>Atendimento</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              id="header-mobile-whatsapp-icon"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xs bg-emerald-50 text-emerald-700 border border-emerald-200"
              aria-label="Falar no WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xs text-neutral-800 hover:bg-neutral-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-white border-b border-neutral-200 px-5 pt-4 pb-6 shadow-xl animate-in fade-in slide-in-from-top-3 duration-200"
        >
          <div className="flex flex-col gap-3.5">
            <a
              id="mobile-nav-inicio"
              href="#inicio"
              className="text-base font-medium text-neutral-800 py-2 border-b border-neutral-100"
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Início
            </a>
            <a
              id="mobile-nav-camisas"
              href="#catalogo"
              className="text-base font-medium text-neutral-800 py-2 border-b border-neutral-100"
              onClick={() => handleLinkClick(onNavigateToCatalog)}
            >
              Camisas
            </a>
            <a
              id="mobile-nav-modelos"
              href="#modelos"
              className="text-base font-medium text-neutral-800 py-2 border-b border-neutral-100"
              onClick={() => handleLinkClick(onNavigateToModels)}
            >
              Modelos & Estilos
            </a>
            <a
              id="mobile-nav-comprar"
              href="#como-comprar"
              className="text-base font-medium text-neutral-800 py-2 border-b border-neutral-100"
              onClick={() => handleLinkClick(onNavigateToHowToBuy)}
            >
              Como Comprar
            </a>
            <a
              id="mobile-nav-whatsapp"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-base font-semibold text-emerald-700 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Falar pelo WhatsApp
              </span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="pt-2">
              <a
                id="mobile-drawer-cta-button"
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xs bg-neutral-950 text-white font-semibold text-sm uppercase tracking-wider shadow-sm"
              >
                <span>Consultar Disponibilidade</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
