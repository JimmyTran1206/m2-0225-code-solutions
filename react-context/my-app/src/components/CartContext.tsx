import { createContext, ReactNode, useState } from 'react';
import { Product } from '../lib';

export type CartValue = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

export const CartContext = createContext<CartValue>({
  cart: [],
  addToCart: () => undefined,
});

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);
  function addToCart(product: Product) {
    setCart([...cart, product]);
  }
  const cartContextValues = {
    cart,
    addToCart,
  };
  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  );
}
