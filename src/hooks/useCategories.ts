import { useMemo } from 'react';
import { Product } from '../types';

export const useCategories = (products: Product[]) => {
  const categories = useMemo(() => {
    const uniqueCategories = new Set(products.map(product => product.category));
    return Array.from(uniqueCategories).sort();
  }, [products]);

  return categories;
};