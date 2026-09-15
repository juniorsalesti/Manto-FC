import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../config';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  // Automatically minimize tooltip after a few seconds or allow user to dismiss
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <aside
      id="floating-whatsapp-container"
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-end gap-3 pointer-events-auto"
    >
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div
          id="floating-whatsapp-tooltip"
          className="hidden sm:flex items-center gap-2.5 bg-neutral-950 text-white py-2.5 px-3.5 rounded-xs shadow-xl border border-neutral-800 text-xs animate-in fade-in slide-in-from-right-2 duration-300"
        >
          <div className="flex flex-col">
            <span className="font-bold text-neutral-100 uppercase text-[10px] tracking-wider">
              Atendimento Online
            </span>
            <span className="text-neutral-300 text-[11px]">
              Tire dúvidas sobre tamanhos e modelos!
            </span>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white p-1"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        id="floating-whatsapp-button"
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Chame nossa equipe no WhatsApp"
      >
        {/* Pulsing ring indicator */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none opacity-75" />
        
        <MessageCircle className="w-7 h-7 fill-white text-emerald-600 relative z-10" />

        {/* Subtle Lakers color ping badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#FDB927] border-2 border-white rounded-full z-20" />
      </a>
    </aside>
  );
}
