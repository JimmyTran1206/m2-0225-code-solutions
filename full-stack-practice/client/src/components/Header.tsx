import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <>
      <header className="bg-slate-700">
        <nav className="container ">
          <ul className="flex gap-4 text-lg text-white">
            <li className="cursor-pointer hover:opacity-70">
              <Link to="/about">About</Link>
            </li>
            <li className="cursor-pointer hover:opacity-70">
              <Link to="/">Catalog</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
