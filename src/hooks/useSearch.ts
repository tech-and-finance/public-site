import { useState, useEffect, useMemo } from 'react';
import { Product } from '../types';
import { searchProducts, getAllProducts } from '../lib/db';

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const results = query.trim()
          ? await searchProducts(query)
          : await getAllProducts();
        setProducts(results);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchProducts, 300);
    return () => clearTimeout(timeoutId);
  }, [query]);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter(product => product.category === selectedCategory);
  }, [products, selectedCategory]);

  return {
    products: filteredProducts,
    query,
    setQuery,
    loading,
    selectedCategory,
    setSelectedCategory
  };
};