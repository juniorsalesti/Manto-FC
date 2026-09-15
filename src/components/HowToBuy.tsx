import { MessageCircle, Search, CheckCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../config';

export function HowToBuy() {
  const steps = [
    {
      num: '01',
      title: 'ESCOLHA A CAMISA',
      description: 'Navegue pelo nosso catálogo e encontre o time, seleção ou franquia da NBA que você procura.',
      icon: Search,
    },
    {
      num: '02',
      title: 'CHAME NO WHATSAPP',
      description: 'Clique no botão de atendimento do produto para abrir a conversa já com o modelo selecionado.',
      icon: MessageCircle,
    },
    {
      num: '03',
      title: 'CONFIRME TAMANHO E DISPONIBILIDADE',
      description: 'Nossa equipe confere o estoque, indica as medidas exatas e passa todas as opções de envio.',
      icon: CheckCircle,
    },
  ];

  return (
    <section id="como-comprar" className="py-20 sm:py-28 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
            Atendimento Personalizado
          </span>
          <h2
            id="how-to-buy-title"
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 uppercase font-sans mb-4"
          >
            COMO COMPRAR
          </h2>
          <p
            id="how-to-buy-description"
            className="text-neutral-600 text-sm sm:text-base leading-relaxed"
          >
            "Gostou de um modelo? Clique no WhatsApp, envie o nome da camisa e nossa equipe confirma
            disponibilidade, tamanhos e condições."
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                id={`how-to-buy-step-${step.num}`}
                className="relative bg-[#FAFAFA] p-8 rounded-xs border border-neutral-200/90 flex flex-col justify-between hover:border-neutral-950 transition-all duration-300"
              >
                <div>
                  {/* Step indicator */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-black font-mono text-neutral-300 tracking-tighter">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xs bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 shadow-2xs">
                      <Icon className="w-5 h-5 text-neutral-950" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-neutral-950 uppercase tracking-tight mb-3">
                    {step.title}
                  </h3>

                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-200/60 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Sem burocracia</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Container */}
        <div className="bg-neutral-950 text-white rounded-xs p-8 sm:p-12 border border-neutral-800 text-center flex flex-col items-center justify-center max-w-4xl mx-auto shadow-md relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#552583]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#FDB927]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FDB927] mb-2 inline-block">
              Canal Oficial
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4">
              Pronto para garantir seu manto?
            </h3>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-8">
              Atendimento ágil para tirar dúvidas de caimento, fotos reais em tempo real e consultar
              prazos de envio para todo o Brasil.
            </p>

            <a
              id="how-to-buy-cta-btn"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xs bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md active:scale-98"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>FALAR COM A LOJA</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
