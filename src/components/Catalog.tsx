import { useState, useMemo } from 'react';
import { MessageCircle, Search, Eye, Filter, ArrowUpRight, Check } from 'lucide-react';
import { Product, FilterType } from '../types';
import { getWhatsAppUrl } from '../config';

interface CatalogProps {
  products: Product[];
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  onSelectProductForModal: (product: Product) => void;
}

const FILTERS: { id: FilterType; label: string }[] = [
  { id: 'TODOS', label: 'TODOS' },
  { id: 'FUTEBOL', label: 'FUTEBOL' },
  { id: 'NBA', label: 'NBA' },
  { id: 'TORCEDOR', label: 'TORCEDOR' },
  { id: 'JOGADOR', label: 'JOGADOR' },
  { id: 'TAILANDESA 1.1', label: 'TAILANDESA 1.1' },
];

export function Catalog({
  products,
  activeFilter,
  onFilterChange,
  onSelectProductForModal,
}: CatalogProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter and search logic
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Filter tab check
      let matchesFilter = true;
      if (activeFilter === 'FUTEBOL') {
        matchesFilter = product.category === 'Futebol';
      } else if (activeFilter === 'NBA') {
        matchesFilter = product.category === 'NBA';
      } else if (activeFilter === 'TORCEDOR') {
        matchesFilter = product.version === 'Torcedor';
      } else if (activeFilter === 'JOGADOR') {
        matchesFilter = product.version === 'Jogador';
      } else if (activeFilter === 'TAILANDESA 1.1') {
        matchesFilter = product.version === 'Tailandesa 1.1';
      }

      // Search query check
      let matchesSearch = true;
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        matchesSearch =
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.version.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query);
      }

      return matchesFilter && matchesSearch;
    });
  }, [products, activeFilter, searchQuery]);

  return (
    <section id="catalogo" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#552583] inline-flex items-center gap-1.5 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FDB927]" />
            Coleção Selecionada
          </span>
          <h2
            id="catalog-main-heading"
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 uppercase font-sans mb-4"
          >
            NOSSO CATÁLOGO
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Navegue pelos mantos disponíveis. Escolha seu modelo favorito e consulte disponibilidade,
            tamanhos e valores diretamente no WhatsApp.
          </p>
        </div>

        {/* Filters and Search Bar Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-200">
          {/* Filters List */}
          <div
            id="catalog-filters-container"
            className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none"
          >
            {FILTERS.map((item) => {
              const isActive = activeFilter === item.id;
              return (
                <button
                  key={item.id}
                  id={`filter-btn-${item.id.toLowerCase().replace(/\s+/g, '-')}`}
                  type="button"
                  onClick={() => onFilterChange(item.id)}
                  className={`px-4 py-2.5 rounded-xs text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-neutral-950 text-white shadow-xs'
                      : 'bg-neutral-100 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="catalog-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar camisa, time, liga..."
              className="w-full pl-9 pr-4 py-2.5 text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-xs focus:outline-none focus:border-neutral-950 focus:bg-white transition-all placeholder:text-neutral-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Counter Info */}
        <div className="flex items-center justify-between text-xs text-neutral-500 mb-6 font-mono">
          <span>
            Mostrando <strong className="text-neutral-900">{filteredProducts.length}</strong> modelo(s)
          </span>
          {activeFilter !== 'TODOS' && (
            <button
              type="button"
              onClick={() => onFilterChange('TODOS')}
              className="text-neutral-900 underline hover:text-neutral-600 cursor-pointer"
            >
              Limpar filtro ({activeFilter})
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div
            id="products-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="group bg-white rounded-xs border border-neutral-200/90 hover:border-neutral-900 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-lg"
              >
                {/* Image Container with Studio Background */}
                <div className="relative aspect-[4/4] bg-[#F4F4F5] overflow-hidden flex items-center justify-center p-6 cursor-pointer"
                  onClick={() => onSelectProductForModal(product)}
                >
                  <img
                    id={`product-img-${product.id}`}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Top Badge (if any) */}
                  {product.badge && (
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest bg-neutral-950 text-white rounded-xs">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Version Chip */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-white/95 text-neutral-800 border border-neutral-200 rounded-xs backdrop-blur-xs">
                      {product.version}
                    </span>
                  </div>

                  {/* Quick View Hover Button */}
                  <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xs bg-white text-neutral-950 text-xs font-bold uppercase tracking-wider shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                      Ver Detalhes
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Category */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-black uppercase tracking-widest text-[#552583]">
                        {product.category}
                      </span>
                      <span className="text-neutral-300">•</span>
                      <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wide">
                        {product.version}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3
                      id={`product-title-${product.id}`}
                      className="text-lg font-extrabold text-neutral-950 uppercase tracking-tight mb-2 group-hover:text-neutral-800 transition-colors"
                    >
                      {product.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4">
                      {product.description}
                    </p>

                    {/* Available Sizes Pills */}
                    <div className="flex items-center gap-1.5 mb-6">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mr-1">
                        Tam:
                      </span>
                      {product.sizes.map((sz) => (
                        <span
                          key={sz}
                          className="w-6 h-6 flex items-center justify-center text-[10px] font-bold text-neutral-700 bg-neutral-100 rounded-xs border border-neutral-200"
                        >
                          {sz}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action: CONSULTAR NO WHATSAPP */}
                  <div className="pt-4 border-t border-neutral-100">
                    <a
                      id={`btn-whatsapp-${product.id}`}
                      href={getWhatsAppUrl(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xs bg-neutral-950 text-white hover:bg-emerald-600 text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-98 shadow-xs group/btn"
                    >
                      <MessageCircle className="w-4 h-4 text-[#FDB927] group-hover/btn:text-white transition-colors" />
                      <span>CONSULTAR NO WHATSAPP</span>
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-neutral-50 rounded-xs border border-dashed border-neutral-200">
            <Filter className="w-8 h-8 text-neutral-400 mx-auto mb-3" />
            <p className="text-sm font-bold text-neutral-900 uppercase">Nenhum modelo encontrado</p>
            <p className="text-xs text-neutral-500 mt-1 mb-4">
              Tente redefinir a busca ou remover o filtro ativo.
            </p>
            <button
              type="button"
              onClick={() => {
                onFilterChange('TODOS');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-neutral-950 text-white rounded-xs"
            >
              Ver Todos os Modelos
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
