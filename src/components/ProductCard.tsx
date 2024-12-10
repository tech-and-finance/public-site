import React from 'react';
import { ExternalLink, Tag } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={product.imageUrl} 
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
          -{product.discount}%
        </span>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-2xl font-bold text-red-600">€{product.price.toFixed(2)}</span>
            <span className="text-sm text-gray-500 line-through ml-2">
              €{product.originalPrice.toFixed(2)}
            </span>
          </div>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Tag size={14} />
            {product.category}
          </span>
        </div>
        
        <a
          href={product.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors duration-300"
        >
          <ExternalLink size={18} />
          Vedi su Amazon
        </a>
      </div>
    </div>
  );
};