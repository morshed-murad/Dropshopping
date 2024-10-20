import Container from "@/components/Container";
import React from "react";
import ProductDetails from "./ProductDetails";

import ListRating from "@/components/products/ListRating";
import { products } from "@/utils/products";

interface IPrams {
  productId?: string;
}
export default function page({ params }: { params: IPrams }) {
  const product = products.find((item) => item.id === params.productId);
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div className="">Add Rating</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
}
