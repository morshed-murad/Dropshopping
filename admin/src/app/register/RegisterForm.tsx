"use client";

import Heading from "@/components/Heading";
import Input from "@/components/inputs/Input";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({});
  return (
    <>
      <Heading title="Sign up fo E-shop" />
      <hr className="bg-slate-300 w-full h-px" />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </>
  );
}
