import { ArrowUpRight, Award, Flame, Trophy, Shirt } from 'lucide-react';
import { FilterType } from '../types';

interface CategoriesProps {
  onSelectCategory: (category: FilterType) => void;
}

export function Categories({ onSelectCategory }: CategoriesProps) {
  return (
    <section id="modelos" className="py-20 bg-[#F7F7F8] border-y border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">
              Modelos & Acabamentos
            </div>
            <h2
              id="categories-title"
              className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 uppercase font-sans"
            >
              ESCOLHA SEU ESTILO
            </h2>
          </div>
          <p className="text-neutral-500 text-sm mt-3 sm:mt-0 max-w-sm">
            Conheça as variações de confecção e encontre a peça ideal para o seu uso.
          </p>
        </div>

        {/* 3 Main Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* 01 — TORCEDOR */}
          <div
            id="category-card-torcedor"
            onClick={() => onSelectCategory('TORCEDOR')}
            className="group relative bg-white p-8 rounded-xs border border-neutral-200/90 hover:border-neutral-900 transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 group-hover:text-neutral-950 transition-colors">
                  01
                </span>
                <div className="w-9 h-9 rounded-xs bg-neutral-100 flex items-center justify-center text-neutral-800 group-hover:bg-neutral-950 group-hover:text-white transition-colors">
                  <Shirt className="w-4 h-4" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold tracking-tight text-neutral-950 uppercase mb-3">
                TORCEDOR
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                "Conforto para representar seu time todos os dias."
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-900">
              <span>Ver Modelos Torcedor</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* 02 — JOGADOR */}
          <div
            id="category-card-jogador"
            onClick={() => onSelectCategory('JOGADOR')}
            className="group relative bg-white p-8 rounded-xs border border-neutral-200/90 hover:border-neutral-900 transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 group-hover:text-neutral-950 transition-colors">
                  02
                </span>
                <div className="w-9 h-9 rounded-xs bg-neutral-100 flex items-center justify-center text-neutral-800 group-hover:bg-neutral-950 group-hover:text-white transition-colors">
                  <Flame className="w-4 h-4" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold tracking-tight text-neutral-950 uppercase mb-3">
                JOGADOR
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                "Visual inspirado nos modelos utilizados em campo."
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-900">
              <span>Ver Modelos Player</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* 03 — NBA */}
          <div
            id="category-card-nba"
            onClick={() => onSelectCategory('NBA')}
            className="group relative bg-white p-8 rounded-xs border border-neutral-200/90 hover:border-neutral-900 transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 group-hover:text-neutral-950 transition-colors">
                  03
                </span>
                <div className="w-9 h-9 rounded-xs bg-neutral-100 flex items-center justify-center text-neutral-800 group-hover:bg-[#552583] group-hover:text-[#FDB927] transition-colors">
                  <Trophy className="w-4 h-4" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold tracking-tight text-neutral-950 uppercase mb-3">
                NBA
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                "Camisas de basquete para quem vive o jogo."
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-900">
              <span>Ver Camisas NBA</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

        </div>

        {/* Highlight Banner Card: TAILANDESA 1.1 */}
        <div
          id="category-highlight-tailandesa"
          onClick={() => onSelectCategory('TAILANDESA 1.1')}
          className="group bg-neutral-950 text-white p-6 sm:p-8 rounded-xs border border-neutral-800 hover:border-neutral-700 transition-all duration-300 cursor-pointer shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xs bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FDB927] shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-xs bg-[#552583] text-[#FDB927] text-[10px] font-extrabold uppercase tracking-widest">
                  Padrão Superior
                </span>
                <span className="text-xs text-neutral-400 uppercase tracking-widest font-mono">
                  Certificação 1.1
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase">
                TAILANDESA 1.1
              </h4>
              <p className="text-neutral-400 text-sm mt-0.5">
                "Acabamento premium e detalhes diferenciados."
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FDB927] group-hover:text-white transition-colors self-end sm:self-auto">
            <span>Explorar Coleção Tailandesa 1.1</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

      </div>
    </section>
  );
}
