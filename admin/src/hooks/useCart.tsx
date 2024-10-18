import { cartProductType } from "@/types/cartType";
import { createContext, useCallback, useContext, useState } from "react";

type CartContextType = {
  cartTotalQTY: number;
  cartProducts: cartProductType[] | null;
  handleAddProductToCart: (product: cartProductType) => void;
};


export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propsName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQTY, setCartTotalQTY] = useState(0);
  const [cartProducts, setCartProducts] = useState<cartProductType[] | null>(
    null
  );


  const handleAddProductToCart = useCallback((product: cartProductType) => {
    setCartProducts((prev) => {
      let updatedCart;
      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }

      return updatedCart;
    });
  }, []);

  const value = {
    cartTotalQTY,
    cartProducts,
    handleAddProductToCart,
  };
  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }

  return context;
};
