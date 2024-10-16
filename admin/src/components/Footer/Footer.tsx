import React from "react";
import Container from "../Container";
import FooterList from "./FooterList";
import Link from "next/link";
import { MdFacebook } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shoping Categories</h3>
            <Link href="">Phone</Link>
            <Link href="">Laptop</Link>
            <Link href="">DeskTops</Link>
            <Link href="">watchs</Link>
            <Link href="">TVs</Link>
            <Link href="">Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="">Countact Us</Link>
            <Link href="">shipping policy</Link>
            <Link href="">Return & Exchanges</Link>
            <Link href="">FAQs</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
              odit. Vitae excepturi tempora nam repellendus recusandae enim
              nisi, ut veritatis corporis debitis sunt ad a commodi eveniet
              perferendis autem sequi.
            </p>
            <span>
              &copy; {new Date().getFullYear()}
              EDR-Shop. All rights reserved
            </span>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="">
                <MdFacebook size={24} />
              </Link>
              <Link href="">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="">
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </div>
  );
}
