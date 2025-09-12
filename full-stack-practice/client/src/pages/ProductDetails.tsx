import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Product } from './Catalog';
import { toDollars } from '../lib/to-dollars';

export function ProductDetails() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<unknown>();
  const [product, setProduct] = useState<Product>();
  const { productId } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`);
        if (!response.ok)
          throw new Error(`Response status: ${response.status}`);
        const product = (await response.json()) as Product;
        setProduct(product);
      } catch (error) {
        setError(error);
      }
    };
    fetchProduct();
  }, [productId]);

  function handleAddClick(name: string) {
    alert(`Added ${name} to cart.`);
  }
  return (
    <>
      <section className="container flex flex-col gap-4 border-b border-l border-r border-gray-400 details">
        <Link to="/" className="">
          &#10094; Back to Catalog
        </Link>
        {product ? (
          <>
            <div className="gap-4 item__details sm:flex">
              <div className="mx-auto min-w-[300px] object-cover">
                <img src={product.imageUrl} alt={product.name} />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl">{product?.name}</h2>
                <p className="text-lg text-gray-400">
                  {toDollars(product.price)}
                </p>
                <p>{product.shortDescription}</p>
              </div>
            </div>
            <div className="long_description">
              <p className="mb-2">{product.longDescription}</p>
            </div>
            <button
              onClick={() => handleAddClick(product.name)}
              className="px-2 py-1 my-2 bg-gray-300 border-2 rounded-md hover:border-blue-500">
              Add to Cart
            </button>
          </>
        ) : (
          <span>{`Product: ${productId} not found`}</span>
        )}
      </section>
    </>
  );
}
