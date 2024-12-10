import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    title: 'Echo Dot (5ª generazione)',
    description: 'Smart speaker con Alexa, audio migliorato, controllo della Casa Intelligente',
    price: 39.99,
    originalPrice: 64.99,
    discount: 38,
    imageUrl: 'https://images.unsplash.com/photo-1512446816042-444d641267d4?auto=format&fit=crop&q=80&w=400',
    amazonUrl: 'https://www.amazon.it/dp/B09B8V1LZ3',
    category: 'Electronics'
  },
  {
    id: '2',
    title: 'Fire TV Stick 4K',
    description: 'Streaming in 4K con Wi-Fi 6 e telecomando vocale Alexa',
    price: 49.99,
    originalPrice: 69.99,
    discount: 29,
    imageUrl: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=400',
    amazonUrl: 'https://www.amazon.it/dp/B09BS7H3D6',
    category: 'Electronics'
  },
  {
    id: '3',
    title: 'Kindle Paperwhite',
    description: 'E-reader impermeabile con schermo da 6.8", 8GB, con pubblicità',
    price: 129.99,
    originalPrice: 149.99,
    discount: 13,
    imageUrl: 'https://images.unsplash.com/photo-1592496001020-d31bd830651f?auto=format&fit=crop&q=80&w=400',
    amazonUrl: 'https://www.amazon.it/dp/B08N36XNTT',
    category: 'Electronics'
  },
  {
    id: '4',
    title: 'Set di Pentole Professionali',
    description: 'Set di 10 pentole in acciaio inox con coperchi in vetro temperato, adatte a tutti i piani cottura',
    price: 89.99,
    originalPrice: 159.99,
    discount: 44,
    imageUrl: 'https://images.unsplash.com/photo-1584990347449-716dc4d5f94c?auto=format&fit=crop&q=80&w=400',
    amazonUrl: 'https://www.amazon.it/dp/B09XXXXX1',
    category: 'Casa e Cucina'
  },
  {
    id: '5',
    title: 'Tappetino Yoga Premium',
    description: 'Tappetino ecologico antiscivolo per yoga e pilates, spessore 6mm con tracolla per il trasporto',
    price: 24.99,
    originalPrice: 39.99,
    discount: 38,
    imageUrl: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80&w=400',
    amazonUrl: 'https://www.amazon.it/dp/B09XXXXX2',
    category: 'Sport e Fitness'
  },
  {
    id: '6',
    title: 'Set Pennelli Trucco Professionali',
    description: 'Kit 15 pennelli makeup in setole sintetiche di alta qualità con custodia da viaggio',
    price: 19.99,
    originalPrice: 34.99,
    discount: 43,
    imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=400',
    amazonUrl: 'https://www.amazon.it/dp/B09XXXXX3',
    category: 'Bellezza'
  }
];