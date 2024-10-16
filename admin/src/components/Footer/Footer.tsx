import React from "react";
import Container from "../Container";
import FooterList from "./FooterList";

export default function Footer() {
  return (
    <div className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shoping Categories</h3>
            <span>Phone</span>
            <span>Laptop</span>
            <span>DeskTops</span>
            <span>watchs</span>
            <span>TVs</span>
            <span>Accessories</span>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <span>Countact Us</span>
            <span>shipping policy</span>
            <span>Return & Exchanges</span>
            <span>FAQs</span>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus sed repudiandae, placeat tempora hic porro ullam
              exercitationem omnis totam blanditiis reprehenderit, tenetur est
              sequi maiores deserunt neque repellat minima voluptatum!
              
            </p>
            <span>&copy;</span>
          </div>
        </div>
      </Container>
    </div>
  );
}
