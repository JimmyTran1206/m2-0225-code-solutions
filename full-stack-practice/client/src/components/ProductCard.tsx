import { Product } from '../pages/Catalog';
import { toDollars } from '../lib/to-dollars';
import { Link } from 'react-router-dom';

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <>
      <Link to={`/products/${product.productId}`} className="card-wrapper">
        <div className="card">
          <div className="img-wrapper">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full"
            />
          </div>
          <h2 className="text-xl">{product.name}</h2>
          <p className="text-lg text-gray-400">{toDollars(product.price)}</p>
          <p>{product.shortDescription}</p>
        </div>
      </Link>
    </>
  );
}
