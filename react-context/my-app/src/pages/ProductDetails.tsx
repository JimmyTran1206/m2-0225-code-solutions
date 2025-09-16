import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { readProduct, type Product, toDollars } from '../lib';
import { useCart } from '../components/useCart';

export function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  const { addToCart } = useCart();

  useEffect(() => {
    async function loadProduct(productId: number) {
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
      loadProduct(+productId);
    }
  }, [productId]);

  function handleAddToCart() {
    if (!product) throw new Error('Should never happen');
    alert(`Added ${product?.name} to cart`);
    addToCart(product);
    navigate('/');
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    return (
      <div>
        Error Loading Product {productId}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }
  if (!product) return null;
  const { name, imageUrl, price, shortDescription, longDescription } = product;
  return (
    <div className="container">
      <div className="p-6">
        <div className="flex flex-wrap">
          <div className="flex-1 flex-grow px-4">
            <Link to="/" className="text-gray-600 whitespace-no-wrap">
              &lt; Back to catalog
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap mb-4">
          <div className="w-full px-4 sm:w-1/2 md:w-2/5">
            <img
              src={imageUrl}
              alt={name}
              className="object-contain w-full h-96"
            />
          </div>
          <div className="w-full px-4 my-12 sm:w-1/2 md:w-3/5">
            <h2 className="font-bold">{name}</h2>
            <h5 className="my-2 text-gray-600">{toDollars(price)}</h5>
            <p>{shortDescription}</p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="flex-1 flex-grow max-w-full px-4">
            <p className="whitespace-pre-wrap">{longDescription}</p>
          </div>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className="px-3 py-1 mx-10 border border-gray-300 rounded">
        Add to Cart
      </button>
    </div>
  );
}
