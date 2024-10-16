import React, { useState } from "react";

import { Rating } from "@mui/material";
import { cartProduct } from "@/types/cartType";

interface ProductDetailsProps {
  product: any;
}

const Horizontal = () => {
  return <hr className="w-[30% my-2]" />;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [cartProduct, setCartProduct] = useState<cartProduct>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.image[0] },
    quantity: 1,
    price: product.price,
  });
  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>Images</div>
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
        <div className={product.stock ? "text-teal-400" : "text-rose-400"}>
          {product.stock ? "In stock" : "Out of stock"}
        </div>
        <Horizontal />
        <div>Color</div>
        <Horizontal />
        <div>Quantity</div>
        <Horizontal />
        <div>Add to cart </div>
      </div>
    </div>
  );
}
