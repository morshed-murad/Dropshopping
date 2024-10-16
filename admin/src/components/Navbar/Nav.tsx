import Link from "next/link";
import React from "react";
import { FaBasketShopping } from "react-icons/fa6";
import Container from "../Container";
export default function Nav() {
  return (
    <main className=" py-4 px-4 md:px-8 lg:px-20 sticky top-0 w-full bg-slate-200 z-20 shadow-sm">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-bold w-full">Log</h1>
          <nav className="w-full flex justify-start items-center gap-4 ">
            <Link href="/about">About</Link>
            <Link href="/products">products</Link>
            <Link href="/contact-us">Contact Us</Link>
          </nav>
          <div className="w-full flex items-center justify-end  ">
            <div className="py-2 px-2 bg-slate-100 rounded-full ">
              <FaBasketShopping />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
