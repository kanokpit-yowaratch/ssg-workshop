import { getAllProducts, getProductById } from '@/lib/products';
import { IdProps } from '@/types';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import NextImage from 'next/image';

export function generateStaticParams() {
  const products = getAllProducts();

  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: Readonly<IdProps>) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/products" className="text-blue-600 hover:underline">
          &larr; กลับไปหน้าสินค้า
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative bg-gray-200 aspect-square flex items-center justify-center rounded-lg">
          {/* <span className="text-gray-500">[รูปภาพสินค้า: {product.name}]</span> */}
          <NextImage
            src={product.image}
            fill={true}
            objectFit="cover"
            priority={true}
            alt="Product cover"
            className="w-full h-auto"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl font-semibold text-blue-600 mb-4">
            {product.price.toLocaleString()} บาท
          </p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">คุณสมบัติ</h2>
            <ul className="list-disc list-inside space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-700">{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {product.category === 'electronics' ? 'อิเล็กทรอนิกส์' :
                product.category === 'home' ? 'ของใช้ในบ้าน' :
                  product.category === 'furniture' ? 'เฟอร์นิเจอร์' : product.category}
            </span>
          </div>

          {/* <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            เพิ่มลงตะกร้า
          </button> */}
        </div>
      </div>
    </div>
  );
}

// กำหนดให้หน้านี้เป็น Static Generation
export const dynamic = 'force-static';