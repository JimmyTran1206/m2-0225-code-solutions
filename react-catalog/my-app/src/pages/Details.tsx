import { useEffect, useState } from 'react';
import { readProduct, type Product, toDollars } from '../lib';
import { useParams, Link, useNavigate } from 'react-router-dom';

export function Details() {
  const {productId}= useParams();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const navigate=useNavigate();

  useEffect(() => {
    async function fetchProduct(productId: number) {
      try {
        const product = await readProduct(productId);
        setProduct(product);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (productId) {
      setIsLoading(true);
      fetchProduct(+productId);
    }
  }, [productId]);

  if (isLoading) return <div>Loading...</div>;
  if (error || !product) {
    return (
      <div>
        Error Loading product {productId}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }
  const { name, price, imageUrl, shortDescription, longDescription } = product;
  function handleAddToCart(){
    alert (`Added ${name} to cart`);
    navigate('/');
  }
  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="flex-auto p-6">
          <Link to='/' className="p-3 text-gray-600 cursor-pointer">
            &lt; Back to Dashboard
          </Link>
          <div className="flex flex-wrap mb-4">
            <div className="w-full sm:w-1/2 md:w-2/5 pt-2 px-4">
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-80 object-contain"
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-2/5 pt-2 px-4">
              <h2 className="w-full sm:w-1/2 md:w-3/5 px-4 font-bold text-4xl">{name}</h2>
              <p className="w-full sm:w-1/2 md:w-3/5 px-4 font-bold text-gray-400 text-2xl">{toDollars(price)}</p>
              <p className="w-full sm:w-1/2 md:w-3/5 px-4 ">{shortDescription}</p>
            </div>
          </div>

          <div className="px-4">
            <p className="w-full sm:w-1/2 md:w-3/5 px-4">{longDescription}</p>
          </div>
        </div>
      </div>
      <button className="bg-gray-300 text-black rounded px-4 py-2 hover:bg-gray-400 mx-4" onClick={handleAddToCart}>
        Add to cart
      </button>
    </div>
  );
}
