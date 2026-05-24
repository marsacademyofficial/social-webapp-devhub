"use client";

import { loginSchema, LoginSchemaType } from "@/lib/zodschema/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InfoIcon, LoaderIcon } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../shadcnui/button";
import { Checkbox } from "../shadcnui/checkbox";
import { Field, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

const LoginForm = () => {
  const [loginError, setLoginError] = useState("");

  const { control, handleSubmit, formState, reset } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      emailId: "",
      password: "",
      rememberMe: true,
    },

    mode: "onSubmit",
  });

  const loginDataSubmit = (lfdata: LoginSchemaType) => {
    setLoginError("");

    // test with dummy data
    if (
      lfdata.emailId === "subho@gmail.com" &&
      lfdata.password === "12345678"
    ) {
      console.log(lfdata);
      reset();
    } else {
      console.log("The login information you entered is incorrect. ");
      setLoginError("The login information you entered is incorrect.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(loginDataSubmit)}
      noValidate
      className="space-y-3">
      {/* error display section  */}
      {loginError ?
        <p className="text-destructive font-paragraph flex gap-2 rounded-xl border-2 p-4">
          <InfoIcon />
          The login information you entered is incorrect.
        </p>
      : " "}

      <Controller
        name="emailId"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel
              htmlFor={field.name}
              className="font-heading">
              Email Id{" "}
            </FieldLabel>
            <Input
              {...field}
              id={field.name}
              type="email"
              aria-invalid={fieldState.invalid}
              placeholder="Email id"
              className="font-paragraph py-5 focus-visible:border-blue-400 focus-visible:ring-1"
              autoComplete="off"
            />
          </Field>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel
              htmlFor={field.name}
              className="font-heading">
              Password{" "}
            </FieldLabel>
            <Input
              type="password"
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="Password"
              className="font-paragraph py-5 focus-visible:border-blue-400 focus-visible:ring-1"
              autoComplete="off"
            />
          </Field>
        )}
      />

      <Controller
        name="rememberMe"
        control={control}
        render={({ field, fieldState }) => (
          <Field
            data-invalid={fieldState.invalid}
            orientation={"horizontal"}>
            <Checkbox
              id={field.name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <FieldLabel
              htmlFor={field.name}
              className="font-heading">
              Remember Me{" "}
            </FieldLabel>
          </Field>
        )}
      />

      <Button
        type="submit"
        className="font-paragraph w-full cursor-pointer bg-blue-500 py-5 text-white"
        disabled={!formState.isValid || formState.isSubmitting}>
        {formState.isSubmitting ?
          <>
            <LoaderIcon className="animate-spin" />
          </>
        : <>Log in</>}
      </Button>
    </form>
  );
};

export default LoginForm;
