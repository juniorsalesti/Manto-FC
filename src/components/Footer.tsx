import { MessageCircle, ArrowUp } from 'lucide-react';
import { STORE_NAME, STORE_TAGLINE, getWhatsAppUrl } from '../config';

interface FooterProps {
  onNavigateToCatalog: () => void;
  onNavigateToHowToBuy: () => void;
}

export function Footer({ onNavigateToCatalog, onNavigateToHowToBuy }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0D0E10] text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800/80">
          
          {/* Brand Col */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-xs bg-white text-neutral-950 font-black text-sm tracking-wider relative overflow-hidden">
                <span>M</span>
                <div className="absolute bottom-0 right-0 w-2 h-1 bg-[#FDB927]" />
                <div className="absolute bottom-0 left-0 w-2 h-1 bg-[#552583]" />
              </div>
              <span className="font-extrabold tracking-tight text-xl font-sans uppercase">
                {STORE_NAME}
              </span>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-4">
              "{STORE_TAGLINE}"
            </p>

            <p className="text-neutral-500 text-xs leading-relaxed max-w-md">
              Seleção exclusiva de mantos de futebol e camisas da NBA. Modelos Torcedor, Atleta e Tailandesa 1.1 com acabamento de alto nível.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onNavigateToCatalog}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Catálogo
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onNavigateToHowToBuy}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Como Comprar
                </button>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Notice & Direct Contact */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-4">
              Atendimento Exclusivo
            </h4>
            
            <div className="p-4 rounded-xs bg-neutral-900 border border-neutral-800 mb-4">
              <p className="text-xs text-neutral-300 leading-relaxed font-medium">
                "Consulte disponibilidade, tamanhos e modelos diretamente pelo WhatsApp."
              </p>
            </div>

            <a
              id="footer-btn-whatsapp"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xs bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold uppercase tracking-wider transition-colors border border-neutral-700"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#FDB927]" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} {STORE_NAME}. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center gap-4">
            <span>Fotos reais de estúdio</span>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
