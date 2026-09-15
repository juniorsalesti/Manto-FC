import { ArrowDown, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../config';
import { heroImage } from '../data/products';

interface HeroProps {
  onExploreClick: () => void;
}

export function Hero({ onExploreClick }: HeroProps) {
  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white">
      {/* Subtle geometric accent line referencing athletic court / field precision */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#FDB927]/5 rounded-full blur-3xl" />
        <div className="absolute left-1/4 top-1/3 w-96 h-96 bg-[#552583]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Minimalist Micro Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-neutral-100 text-neutral-800 text-xs font-semibold tracking-wider uppercase mb-6 border border-neutral-200/70">
              <span className="w-2 h-2 rounded-full bg-[#FDB927]" />
              <span>Catálogo Exclusivo • Temporada 2024/25</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-main-title"
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 uppercase leading-[1.08] mb-6 font-sans"
            >
              CAMISAS QUE <br />
              <span className="relative inline-block text-neutral-950">
                REPRESENTAM
                {/* Underline accent with subtle purple and yellow tone */}
                <span className="absolute bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#552583] via-neutral-900 to-[#FDB927] -z-1 opacity-70" />
              </span>{' '}
              SUA PAIXÃO.
            </h1>

            {/* Subtitle */}
            <p
              id="hero-subtitle"
              className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl mb-9"
            >
              Modelos de futebol e NBA com diferentes versões e acabamentos.
              Escolha sua camisa e fale conosco pelo WhatsApp.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              {/* Botão Principal: VER CAMISAS */}
              <button
                id="hero-btn-ver-camisas"
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xs bg-neutral-950 text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-md active:scale-98 cursor-pointer group"
              >
                <span>VER CAMISAS</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              {/* Botão Secundário: FALAR NO WHATSAPP */}
              <a
                id="hero-btn-falar-whatsapp"
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xs bg-white text-neutral-900 text-xs font-bold uppercase tracking-widest border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-50 transition-all shadow-xs active:scale-98"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>FALAR NO WHATSAPP</span>
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-neutral-100 w-full">
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight">100%</span>
                <span className="text-xs text-neutral-500 font-medium">Fotos Reais</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight">1.1</span>
                <span className="text-xs text-neutral-500 font-medium">Padrão Tailandesa</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight">Rápido</span>
                <span className="text-xs text-neutral-500 font-medium">Atendimento Direto</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Studio Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Studio Frame Card */}
              <div className="relative rounded-xs overflow-hidden bg-neutral-100 border border-neutral-200/90 shadow-lg group">
                <img
                  id="hero-studio-image"
                  src={heroImage}
                  alt="Composição de camisas esportivas em estúdio profissional"
                  className="w-full h-auto aspect-[16/10] sm:aspect-[4/3] object-cover object-center group-hover:scale-[1.01] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Subtle vignette / studio lighting gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Studio Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs bg-neutral-950/80 backdrop-blur-md px-4 py-2.5 rounded-xs border border-white/10">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#FDB927]" />
                    <span className="font-semibold tracking-wide">Futebol & NBA Studio Selection</span>
                  </div>
                  <span className="text-[11px] text-neutral-300 uppercase tracking-wider font-mono">Padrão 1.1</span>
                </div>
              </div>

              {/* Decorative side badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white p-4 rounded-xs border border-neutral-200 shadow-md items-center gap-3">
                <div className="w-10 h-10 rounded-xs bg-neutral-950 text-white flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#FDB927]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-900 uppercase tracking-wide">Acabamento Premium</div>
                  <div className="text-[11px] text-neutral-500">Escudos bordados & termoaplicados</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
