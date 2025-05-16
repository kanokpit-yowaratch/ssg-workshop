import Link from 'next/link';
import { getAllProducts } from '@/lib/products';
import NextImage from 'next/image';

export default function Home() {
  const featuredProducts = getAllProducts().slice(0, 3);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">ยินดีต้อนรับสู่ NextShop</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">สินค้าแนะนำ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map(product => (
            <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48 bg-gray-200 flex items-center justify-center">
                <NextImage
                  src={product.image}
                  fill={true}
                  objectFit="cover"
                  priority={true}
                  alt="Product cover"
                  className="w-full h-auto"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <p className="font-bold">{product.price.toLocaleString()} บาท</p>
                <Link
                  href={`/products/${product.id}`}
                  className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  ดูรายละเอียด
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/products"
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900"
          >
            ดูสินค้าทั้งหมด
          </Link>
        </div>
      </div>
    </main>
  );
}

// กำหนดให้หน้านี้เป็น Static Generation
export const dynamic = 'force-static';