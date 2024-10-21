import Container from "@/components/Container";
import FormWrap from "@/components/FormWrap";
import React from "react";
import LoginForm from "./LoginForm";

export default function page() {
  return (
    <Container>
      <FormWrap>
        <LoginForm />
      </FormWrap>
    </Container>
  );
}
