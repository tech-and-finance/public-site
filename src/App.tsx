import React from 'react';
import { Header } from './components/Header';
import { ProductGrid } from './components/ProductGrid';
import { CategoryFilter } from './components/CategoryFilter';
import { useSearch } from './hooks/useSearch';
import { useCategories } from './hooks/useCategories';

function App() {
  const { products, query, setQuery, loading, selectedCategory, setSelectedCategory } = useSearch();
  const categories = useCategories(products);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchQuery={query} onSearchChange={setQuery} />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">
          {query ? 'Risultati della ricerca' : 'Offerte del Giorno'}
        </h2>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
          </div>
        ) : (
          <ProductGrid products={products} />
        )}
      </main>
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            Prezzaccio non è affiliato con Amazon. Tutti i marchi registrati appartengono ai rispettivi proprietari.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;