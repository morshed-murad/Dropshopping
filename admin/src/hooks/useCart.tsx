import { cartProductType } from "@/types/cartType";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

type CartContextType = {
  cartTotalQTY: number;
  cartTotalAmount: number;
  cartProducts: cartProductType[] | null;
  handleAddProductToCart: (product: cartProductType) => void;
  handleRemoveProductFromCart: (product: cartProductType) => void;
  handleCartQTYIncrease: (product: cartProductType) => void;
  handleCartQTYDecrease: (product: cartProductType) => void;
  handleClearCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propsName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalAmount, setCartTotalAmount] = useState(0);
  const [cartTotalQTY, setCartTotalQTY] = useState(0);
  const [cartProducts, setCartProducts] = useState<cartProductType[] | null>(
    null
  );
  console.log("qty", cartTotalQTY);
  console.log("total", cartTotalAmount);
  // it save to localStorage
  useEffect(() => {
    const cartItems: any = localStorage.getItem("eShopCartItems");
    const cProducts: cartProductType[] | null = cartItems
      ? JSON.parse(cartItems)
      : null;

    setCartProducts(cProducts);
  }, []);

  useEffect(() => {
    const getTotals = () => {
      if (cartProducts && cartProducts.length > 0) {
        const { total, qty } = cartProducts.reduce(
          (acc, item) => {
            const itemTotal = item.price * item.quantity;
            acc.total += itemTotal;
            acc.qty += item.quantity;
            return acc;
          },
          {
            total: 0,
            qty: 0,
          }
        );
        setCartTotalQTY(qty);
        setCartTotalAmount(total);
      }
    };

    getTotals();
  }, [cartProducts]);

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
        const filterProducts = cartProducts.filter((item) => {
          return item.id !== product.id;
        });
        setCartProducts(filterProducts);
        toast.error("Product removed");
        localStorage.setItem("eShopCartItems", JSON.stringify(filterProducts));
      }
    },
    [cartProducts]
  );

  const handleCartQTYIncrease = useCallback(
    (product: cartProductType) => {
      let updatedCart;
      if (product.quantity === 99) {
        return toast.error("Oops! Maximum reached");
      }
      if (cartProducts) {
        updatedCart = [...cartProducts];

        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );

        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = ++updatedCart[existingIndex]
            .quantity;
        }

        setCartProducts(updatedCart);
        localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );
  const handleCartQTYDecrease = useCallback(
    (product: cartProductType) => {
      let updatedCart;
      if (product.quantity === 1) {
        return toast.error("Oops! Minimum reached");
      }
      if (cartProducts) {
        updatedCart = [...cartProducts];

        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );

        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = --updatedCart[existingIndex]
            .quantity;
        }

        setCartProducts(updatedCart);
        localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  const handleClearCart = useCallback(() => {
    setCartProducts(null);
    setCartTotalQTY(0);
    localStorage.setItem("eShopCartItems", JSON.stringify(null));
    toast.error("Cart Cleared");
    setTimeout(() => {}, 1000);
  }, [cartProducts]);

  const value = {
    cartTotalQTY,
    cartTotalAmount,
    cartProducts,
    handleAddProductToCart,
    handleRemoveProductFromCart,
    handleCartQTYIncrease,
    handleCartQTYDecrease,
    handleClearCart,
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
