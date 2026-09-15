import { useState } from 'react';
import { X, MessageCircle, Check, ShieldCheck, Ruler, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { getWhatsAppUrl } from '../config';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>('G');

  if (!product) return null;

  const currentSize = product.sizes.includes(selectedSize) ? selectedSize : product.sizes[0];

  return (
    <div
      id="product-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="product-modal-container"
        className="bg-white w-full max-w-3xl rounded-xs border border-neutral-200 shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="product-modal-close-btn"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-xs bg-white/90 border border-neutral-200 flex items-center justify-center text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Big Image Preview */}
        <div className="w-full md:w-1/2 bg-neutral-100 relative min-h-[280px] md:min-h-full flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-neutral-200">
          <img
            id="modal-product-image"
            src={product.image}
            alt={product.name}
            className="max-h-[380px] w-auto object-contain drop-shadow-md"
            referrerPolicy="no-referrer"
          />

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-4 left-4">
              <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest bg-neutral-950 text-white rounded-xs shadow-xs">
                {product.badge}
              </span>
            </div>
          )}

          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
            <span>{product.category}</span>
            <span>Versão: {product.version}</span>
          </div>
        </div>

        {/* Right: Info & WhatsApp Action */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Category tag */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#552583]">
                {product.category}
              </span>
              <span className="text-neutral-300">•</span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-500">
                {product.version}
              </span>
            </div>

            {/* Title */}
            <h3
              id="modal-product-title"
              className="text-2xl font-extrabold text-neutral-950 uppercase tracking-tight mb-3"
            >
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Sizes Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-1.5">
                  <Ruler className="w-3.5 h-3.5 text-neutral-500" />
                  Selecione o Tamanho:
                </span>
                <span className="text-[11px] text-neutral-500 font-mono">
                  Guia padrão
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => {
                  const isSelected = currentSize === size;
                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[42px] h-10 px-3 text-xs font-bold rounded-xs border transition-all cursor-pointer flex items-center justify-center ${
                        isSelected
                          ? 'bg-neutral-950 text-white border-neutral-950 shadow-xs'
                          : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Product Technical Features */}
            {product.details && product.details.length > 0 && (
              <div className="space-y-2 mb-6 pt-4 border-t border-neutral-100">
                <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 mb-1.5">
                  Especificações do Manto
                </div>
                {product.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* WhatsApp Primary CTA */}
          <div className="pt-4 border-t border-neutral-100">
            <a
              id="modal-btn-whatsapp"
              href={getWhatsAppUrl(product.name, currentSize)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-xs bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm active:scale-98"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>CONSULTAR NO WHATSAPP</span>
            </a>
            <p className="text-[11px] text-center text-neutral-500 mt-2">
              Confirme tamanho {currentSize}, fotos adicionais e envio direto com o atendente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
