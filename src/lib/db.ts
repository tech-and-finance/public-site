import { openDB } from 'idb';
import { Product } from '../types';
import { products as sampleProducts } from '../data/products';

const DB_NAME = 'prezzaccio-db';
const STORE_NAME = 'products';

export const initDB = async () => {
  const db = await openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        store.createIndex('title', 'title');
        store.createIndex('description', 'description');
        store.createIndex('category', 'category');
      }
    },
  });

  // Check if we need to seed the data
  const count = await db.count(STORE_NAME);
  if (count === 0) {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    
    // Add all sample products
    for (const product of sampleProducts) {
      await store.add(product);
    }
    await tx.done;
  }

  return db;
};

export const getAllProducts = async (): Promise<Product[]> => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};

export const searchProducts = async (query: string): Promise<Product[]> => {
  const db = await initDB();
  const allProducts = await db.getAll(STORE_NAME);
  const searchQuery = query.toLowerCase();
  
  return allProducts.filter(product => 
    product.title.toLowerCase().includes(searchQuery) ||
    product.description.toLowerCase().includes(searchQuery)
  );
};