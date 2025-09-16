import { useContext } from 'react';
import { CartContext } from './CartContext';

export function useCart() {
  const context = useContext(CartContext);
  if (!context)
    throw new Error('useCart can only be used within the CartProvider');
  return context;
}
