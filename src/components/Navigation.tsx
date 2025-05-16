import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">NextShop</Link>
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-gray-300">หน้าแรก</Link>
          <Link href="/products" className="hover:text-gray-300">สินค้า</Link>
        </div>
      </div>
    </nav>
  );
}