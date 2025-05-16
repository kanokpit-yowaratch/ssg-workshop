import { Product } from '@/types';
import productsData from '@/data/products.json';

const products = productsData as Product[];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}
