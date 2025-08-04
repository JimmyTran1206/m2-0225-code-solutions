import { useEffect, useState } from 'react';
import { readCatalog, type Product, toDollars } from '../lib';
import { Link } from 'react-router-dom';
export function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadItems() {
      try {
        const products = await readCatalog();
        setProducts(products);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadItems();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Catalog</h1>
      <hr className="py-1" />
      <div className="flex flex-wrap">
        {products?.map((product) => (
          <Link to={`/details/${product.productId}`} key={product.productId} className="w-full md:w-1/2 lg:w-1/3 pr-4 pl-4">
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

type ProductCardProps = {
  product: Product;
};
function ProductCard({product}: ProductCardProps) {
  return (
    <div
      className="block cursor-pointer text-gray-900 rounded border border-gray-300 mb-4">
      <div className="flex-auto p-6">
        <div className='text-center'><img className="h-64 inline-block" src={product.imageUrl} alt={`An image for ${product.name}`}></img></div>
        <h5 className="font-bold mb-3">{product.name}</h5>
        <p className="text-gray-500">{toDollars(product.price)}</p>
        <p className='text-black-500'>{product.shortDescription}</p>
      </div>
    </div>
  );
}
