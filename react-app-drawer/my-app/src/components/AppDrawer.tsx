import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './AppDrawer.css';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};

export function AppDrawer({ menuItems }: Props) {
  const [isOpen, toggleOpen] = useState(false);

  function handleClick() {
    toggleOpen(!isOpen);
  }

  return (
    <div className="flex h-screen gap-4">
      <header
        className={`${
          isOpen ? 'w-[224px]' : 'w-20'
        } flex flex-col gap-6 pt-6 border-r-2 shadow-xl border-r-gray-100 bg-slate-50 relative`}>
        <button
          onClick={handleClick}
          className="relative flex flex-col gap-1 px-6">
          <div
            className={`h-[6px] transition-all ease-in-out rounded-md bg-gray-700 w-7 ${
              isOpen && 'bg-red-500 rotate-45 absolute top-2'
            }`}></div>
          <div
            className={`h-[6px] rounded-md bg-gray-700 w-7 ${
              isOpen && 'hidden'
            }`}></div>
          <div
            className={`h-[6px] transition-all ease-in-out rounded-md bg-gray-700 w-7 ${
              isOpen && 'bg-red-500 -rotate-45 absolute top-2'
            }`}></div>
        </button>
        <h1
          className={`text-2xl font-medium text-nowrap text-black px-6 mt-4 ${
            !isOpen && 'ml-[-200px] absolute'
          }`}>
          Hylian Shopping
        </h1>
        <div className="pl-6 links">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path}>
              <div
                className={`flex items-center gap-2 py-2 pl-2 hover:bg-gray-200 ${
                  !isOpen && 'mr-4'
                }`}>
                <div className={`image h-[18px] w-[18px]`}>
                  <img src={item.iconUrl} alt="" />
                </div>
                <p className={`text-lg ${!isOpen && 'hidden'}`}>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </header>
      <main className="flex grow">
        <Outlet />
      </main>
    </div>
  );
}
