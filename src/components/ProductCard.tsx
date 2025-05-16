import Link from 'next/link';
import { Product } from '@/types';
import NextImage from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
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
  );
}