import { getAllProducts, getAllCategories } from '@/lib/products';
import ProductList from '@/components/ProductList';

export default function ProductsPage() {
  const products = getAllProducts();
  const categories = getAllCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">สินค้าทั้งหมด</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">หมวดหมู่</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300"
            >
              {category === 'all' ? 'ทั้งหมด' :
                category === 'electronics' ? 'อิเล็กทรอนิกส์' :
                  category === 'home' ? 'ของใช้ในบ้าน' :
                    category === 'furniture' ? 'เฟอร์นิเจอร์' : category}
            </span>
          ))}
        </div>
      </div>

      <ProductList products={products} />
    </div>
  );
}

export const dynamic = 'force-static';