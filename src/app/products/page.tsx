import { getAllProducts } from '@/lib/products';
import ProductList from '@/components/ProductList';

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">สินค้าทั้งหมด</h1>
      <ProductList products={products} />
    </div>
  );
}

export const dynamic = 'force-static';