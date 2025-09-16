import { Link, Outlet } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from './useCart';

export function Header() {
  const { cart } = useCart();
  return (
    <div>
      <nav className="flex px-4 text-white bg-gray-900">
        <ul>
          <li className="inline-block px-4 py-2">
            <Link to="/about" className="text-white">
              About
            </Link>
          </li>
          <li className="inline-block px-4 py-2">
            <Link to="/" className="text-white">
              Catalog
            </Link>
          </li>
        </ul>
        <div className="items-center flex-grow">
          <ul>
            <li className="relative px-4 py-2">
              <FaShoppingCart color="white" size="20" className="inline" />
              <span className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full top-1 left-8">
                {cart.length}
              </span>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
