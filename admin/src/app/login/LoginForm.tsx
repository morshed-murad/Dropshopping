"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/inputs/Input";
import Link from "next/link";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineGoogle } from "react-icons/ai";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
  };
  return (
    <>
      <Heading title="Sign in To E-shop" />
      <Button
        outline
        label="continue whit Google"
        icon={AiOutlineGoogle}
        onClick={() => {}}
      />
      <hr className="bg-slate-300 w-full h-px" />

      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Button
        label={isLoading ? "Loading" : "Log in"}
        onClick={handleSubmit(onSubmit)}
      />
      <p>
        Do not have an account?{" "}
        <Link href="/register" className="underline">
          Sign up
        </Link>
      </p>
    </>
  );
}
