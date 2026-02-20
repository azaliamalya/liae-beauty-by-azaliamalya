"use client";

import { createContext, useContext, useEffect, useState } from "react";

type CartItem = {
  name: string;
  price: number; // harga asli
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void;
  discount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [discount, setDiscount] = useState(20); // misalnya 20%

  useEffect(() => {
    const savedDiscount = localStorage.getItem("discount");
    if (savedDiscount) {
      setDiscount(Number(savedDiscount));
    }
  }, []);

  const addToCart = (item: CartItem) => {
    setCart([...cart, item]); // simpan harga asli
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, discount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("Must use inside CartProvider");
  return context;
}


