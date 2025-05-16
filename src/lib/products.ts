import { Product } from '@/types';
import productsData from '@/data/products.json';

// สร้าง Type assertion เพื่อบอก TypeScript ว่าข้อมูลเป็น array ของ Product
const products = productsData as Product[];

// ฟังก์ชันดึงข้อมูลสินค้าทั้งหมด
export function getAllProducts(): Product[] {
  return products;
}

// ฟังก์ชันดึงข้อมูลสินค้าตาม ID
export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

// ฟังก์ชันดึงข้อมูลสินค้าตามหมวดหมู่
export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
}

// ฟังก์ชันดึงรายการ category ที่มีทั้งหมด
export function getAllCategories(): string[] {
  const categories = products.map(product => product.category);
  return ['all', ...new Set(categories)];
}