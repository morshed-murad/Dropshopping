import React from "react";
import CartClient from "./CartClient";
import Container from "@/components/Container";

export default function page() {
  return (
    <div className="pt-8">
      <Container>
        <CartClient />
      </Container>
    </div>
  );
}
