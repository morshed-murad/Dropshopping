"use client";
import Link from "next/link";
import React from "react";

import Container from "../Container";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/hooks/useCart";
export default function Nav() {
  const { cartTotalQTY } = useCart();
  return (
    <main className="top-0 z-20 sticky bg-slate-200 shadow-sm px-4 md:px-8 lg:px-20 py-4 w-full">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="w-full font-bold text-5xl">Log</h1>
          <nav className="flex justify-start items-center gap-4 w-full">
            <Link href="/about">About</Link>
            <Link href="/products">products</Link>
            <Link href="/contact-us">Contact Us</Link>
          </nav>
          <div className="flex justify-end items-center w-full">
            <div className="relative">
              <Link href="/cart">
                <span className="absolute -top-2 -right-1 px-[4px] py-[0px] rounded-full text-[10px] bg-blue-300 text-white ">
                  {cartTotalQTY}
                </span>
                <FaShoppingCart size={20} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
