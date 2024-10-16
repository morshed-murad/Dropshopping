import Container from "@/components/Container";
import React from "react";
import ProductDetails from "./ProductDetails";
import { product } from '../../../utils/product';

interface IPrams {
  productId?: string;
}
export default function page({ params }: { params: IPrams }) {
  console.log("params", params);
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
}
