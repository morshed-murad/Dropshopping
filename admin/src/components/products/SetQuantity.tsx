"use client";
import React from "react";
import { cartProduct } from "../../types/cartType";

interface SetQTYProps {
  cartCounter?: boolean;
  cartProduct: cartProduct;
  handleQTYIncrease: () => void;
  handleQTYDecrease: () => void;
}

const btnStyle = "border-[1.2px] border-slate-300 px-2 rounded";

export default function SetQuantity({
  cartCounter,
  cartProduct,
  handleQTYIncrease,
  handleQTYDecrease,
}: SetQTYProps) {
  return (
    <div className="flex gap-8 items-center">
      {cartCounter ? null : (
        <div className="font-semibold capitalize">quantity</div>
      )}
      <div className="flex gap-4 items-center text-base">
        <button className={btnStyle} onClick={handleQTYDecrease}>
          -
        </button>
        <div>{cartProduct.quantity}</div>
        <button className={btnStyle} onClick={handleQTYIncrease}>
          +
        </button>
      </div>
    </div>
  );
}
