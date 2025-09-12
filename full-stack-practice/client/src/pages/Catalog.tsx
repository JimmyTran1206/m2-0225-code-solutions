import { useEffect, useState } from 'react';
import { ProductCard } from '../components/ProductCard';

export type Product = {
  productId: number;
  name: string;
  price: number;
  imageUrl: string;
  shortDescription: string;
  longDescription: string;
};

export function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<unknown>();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok)
          throw new Error(`Response status: ${response.status}`);
        const result = (await response.json()) as Product[];
        setProducts(result);
      } catch (error) {
        setError(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <main className="container">
        <h1 className="text-5xl font-semibold">Catalog</h1>
        <section className="flex flex-wrap justify-between pt-4 mt-2 border-t-2 border-gray-300 products__section">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </section>
      </main>
    </>
  );
}
