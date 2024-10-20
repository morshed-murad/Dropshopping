import { cartProductType } from "@/types/cartType";
import { createContext, useCallback, useContext, useState } from "react";
import toast from "react-hot-toast";

type CartContextType = {
  cartTotalQTY: number;
  cartProducts: cartProductType[] | null;
  handleAddProductToCart: (product: cartProductType) => void;
  handleRemoveProductFromCart: (product: cartProductType) => void;
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

      toast.success("Product added to cart");

      localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));

      return updatedCart;
    });
  }, []);

  const handleRemoveProductFromCart = useCallback(
    (product: cartProductType) => {
      if (cartProducts) {
        const filterProdects = cartProducts.filter((item) => {
          return item.id === product.id;
        });
        setCartProducts(filterProdects);
        toast.success("Product removed");
        localStorage.setItem("eShopCartItems", JSON.stringify(filterProdects));
        return cartProducts;
      }
    },
    []
  );

  const value = {
    cartTotalQTY,
    cartProducts,
    handleAddProductToCart,
    handleRemoveProductFromCart,
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
