import { CheckCircle2, Sparkles, Layers, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { detailImage } from '../data/products';
import { getWhatsAppUrl } from '../config';

export function QualityDetails() {
  const features = [
    {
      title: 'Tecido Dry-Tech & Micro-Mesh',
      description: 'Tramas de absorção ativa que mantêm a pele seca, com respirabilidade contínua.',
    },
    {
      title: 'Escudos Bordados & Termoaplicados',
      description: 'Definição milimétrica de linhas, cores fiéis e toque macio sem incômodos.',
    },
    {
      title: 'Costuras Reforçadas & Caimento Fiel',
      description: 'Acabamento estruturado nas golas, mangas e bainhas, resistindo a diversas lavagens.',
    },
    {
      title: 'Padrão Oficial & Tailandesa 1.1',
      description: 'Etiquetas internas, tags externas e cortes alinhados às especificações mundiais.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#111315] text-white overflow-hidden relative">
      {/* Subtle background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#552583]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FDB927]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Close-up macro photograph */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-xs overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group">
                <img
                  id="quality-detail-image"
                  src={detailImage}
                  alt="Fotografia aproximada de tecido, costura e detalhes da camisa"
                  className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Macro Specs */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xs bg-neutral-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FDB927] animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-300">
                      Macro Studio Inspection
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-neutral-400">Fibra 100% Respirável</span>
                </div>
              </div>

              {/* Decorative side pill */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white text-neutral-950 px-4 py-2.5 rounded-xs border border-neutral-300 shadow-lg items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#552583]" />
                <span className="text-xs font-black uppercase tracking-wider">Qualidade Comprovada</span>
              </div>
            </div>
          </div>

          {/* Right: Text and technical features */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-neutral-900 text-neutral-300 text-xs font-bold tracking-widest uppercase mb-4 border border-neutral-800">
              <Layers className="w-3.5 h-3.5 text-[#FDB927]" />
              <span>Diferencial de Fabricação</span>
            </div>

            <h2
              id="quality-section-title"
              className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase leading-tight mb-6 font-sans"
            >
              QUALIDADE NOS <br />
              <span className="text-[#FDB927]">DETALHES.</span>
            </h2>

            <p
              id="quality-section-text"
              className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal"
            >
              "Modelos selecionados para quem procura uma camisa com visual diferenciado, ótimo acabamento e detalhes que fazem a diferença."
            </p>

            {/* Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full mb-10">
              {features.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xs bg-neutral-900/80 border border-neutral-800/90">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FDB927] shrink-0" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed pl-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              id="quality-cta-whatsapp"
              href={getWhatsAppUrl(undefined)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xs bg-white text-neutral-950 hover:bg-[#FDB927] hover:text-neutral-950 transition-all font-bold text-xs uppercase tracking-widest active:scale-98 shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>QUERO ESSA CAMISA</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
