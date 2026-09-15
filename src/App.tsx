import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { Catalog } from './components/Catalog';
import { QualityDetails } from './components/QualityDetails';
import { HowToBuy } from './components/HowToBuy';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductModal } from './components/ProductModal';
import { PRODUCTS } from './data/products';
import { FilterType, Product } from './types';

export default function App() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('TODOS');
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const scrollToCatalog = () => {
    const el = document.getElementById('catalogo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToModels = () => {
    const el = document.getElementById('modelos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHowToBuy = () => {
    const el = document.getElementById('como-comprar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (category: FilterType) => {
    setActiveFilter(category);
    scrollToCatalog();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* Fixed Sticky Header */}
      <Header
        onNavigateToCatalog={scrollToCatalog}
        onNavigateToModels={scrollToModels}
        onNavigateToHowToBuy={scrollToHowToBuy}
      />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onExploreClick={scrollToCatalog} />

        {/* Categories Section ("ESCOLHA SEU ESTILO") */}
        <Categories onSelectCategory={handleSelectCategory} />

        {/* Catalog Section ("NOSSO CATÁLOGO") */}
        <Catalog
          products={PRODUCTS}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          onSelectProductForModal={setModalProduct}
        />

        {/* Premium Detail Highlight ("QUALIDADE NOS DETALHES.") */}
        <QualityDetails />

        {/* How to Buy ("COMO COMPRAR") */}
        <HowToBuy />
      </main>

      {/* Footer */}
      <Footer
        onNavigateToCatalog={scrollToCatalog}
        onNavigateToHowToBuy={scrollToHowToBuy}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Quick View / Details Modal */}
      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
      />
    </div>
  );
}
