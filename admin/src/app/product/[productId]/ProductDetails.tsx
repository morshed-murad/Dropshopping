"use client";
import React, { useCallback, useState } from "react";

import { Rating } from "@mui/material";
import { cartProductType, selectedImgType } from "@/types/cartType";
import SetColor from "@/components/products/SetColor";
import SetQuantity from "@/components/products/SetQuantity";
import Button from "@/components/Button";
import ProductImage from "@/components/products/ProductImage";
import { useCart } from "@/hooks/useCart";

interface ProductDetailsProps {
  product: any;
}

const Horizontal = () => {
  return <hr className="w-[30% my-2]" />;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { handleAddProductToCart, cartProducts } = useCart();
  const [cartProduct, setCartProduct] = useState<cartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });

  console.log(cartProducts);
  // it Select the color of image or product
  const handleColorSelect = useCallback(
    (value: selectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [cartProduct.selectedImg]
  );
  //it Increase and Decrease it quantity
  const handleQTYIncrease = useCallback(() => {
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity + 1 };
    });
  }, []);

  const handleQTYDecrease = useCallback(() => {
    setCartProduct((prev) => {
      if (prev.quantity > 1) {
        return { ...prev, quantity: prev.quantity - 1 };
      }
      return prev;
    });
  }, []);
  // it is product rating review
  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <ProductImage
        cartProduct={cartProduct}
        product={product}
        handleColorSelect={handleColorSelect}
      />
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h1 className="text-3xl font-medium text-slate-700">{product.name}</h1>
        <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">CATEGORY: </span>
          {product.category}
        </div>
        <div>
          <span className="font-semibold">BRAND: </span>
          {product.brand}
        </div>
        <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
          {product.inStock ? "In stock" : "Out of stock"}
        </div>
        <Horizontal />
        <SetColor
          cartProduct={cartProduct}
          images={product.images}
          handleColorSelect={handleColorSelect}
        />
        <Horizontal />
        <SetQuantity
          cartProduct={cartProduct}
          handleQTYIncrease={handleQTYIncrease}
          handleQTYDecrease={handleQTYDecrease}
        />
        <Horizontal />
        <div className="lg:max-w-[300px]">
          <Button
            outline
            disabled
            label="Add To Cart"
            onClick={() => handleAddProductToCart(cartProduct)}
          />
        </div>
      </div>
    </div>
  );
}
