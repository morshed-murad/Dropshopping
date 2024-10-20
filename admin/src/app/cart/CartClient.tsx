"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Link from "next/link";

import { MdArrowBack } from "react-icons/md";
import ItemContent from "./ItemContent";

import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/utils/formatPrice";

export default function CartClient() {
  const { cartProducts, handleClearCart, cartTotalAmount, cartTotalQTY } =
    useCart();

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">Your cart is empty</div>
        <div>
          <Link
            href={"/"}
            className="text-slate-500 flex items-center gap-1 mt-2"
          >
            <MdArrowBack />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Heading title="Shopping Cart" center />
      <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8">
        <div className="col-span-2 justify-self-start capitalize">product</div>
        <div className="capitalize justify-self-center">price</div>
        <div className="capitalize justify-self-center">quantity</div>
        <div className="capitalize justify-self-end">title</div>
      </div>
      <div>
        {cartProducts &&
          cartProducts.map((item) => {
            return <ItemContent key={item.id} item={item} />;
          })}
      </div>
      <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4 ">
        <div className="w-[90px] pt-[7px]">
          <Button
            label="Clear Cart"
            onClick={() => {
              handleClearCart();
            }}
            small
            outline
          />
        </div>
        <div className="text-sm flex flex-col gap-1 items-start">
          <div className="flex justify-between w-full text-base font-semibold">
            <span>Total Quantity</span>
            <span>{cartTotalQTY}</span>
          </div>
          <div className="flex justify-between w-full text-base font-semibold">
            <span>Subtotal</span>
            <span>{formatPrice(cartTotalAmount)}</span>
          </div>
          <p className="text-slate-500">
            taxes and shipping calculate at checkout
          </p>
          <Button label="Checkout" onClick={() => {}} />
          <Link
            href="/"
            className="text-slate-500 flex items-center gap-1 mt-2"
          >
            <MdArrowBack />
            <span> Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
