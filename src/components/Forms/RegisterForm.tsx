"use client";

import {
  registerSchema,
  RegisterSchemaType,
} from "@/lib/zodschema/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, LoaderIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../shadcnui/button";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shadcnui/select";

const RegisterForm = () => {
  const { handleSubmit, control, formState } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      firstName: "",
      surName: "",
      gender: "",
      phoneNumber: "",
      emailId: "",
      password: "",
    },

    mode: "onSubmit",
  });

  const registerDataSubmit = (rData: RegisterSchemaType) => {
    console.log(rData);
  };

  return (
    <form
      onSubmit={handleSubmit(registerDataSubmit)}
      className="grid gap-4">
      <div className="grid grid-cols-2 gap-4">
        <Controller
          name="firstName"
          control={control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>First Name</FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="text"
                aria-invalid={fieldState.invalid}
                placeholder="First name"
                className="py-5 focus-visible:border-blue-400 focus-visible:ring-1"
                autoComplete="given-name"
              />
              {fieldState.invalid && (
                <div className="mt-2 flex items-center gap-2 text-sm text-red-500">
                  <AlertCircle className="h-4 w-4" />

                  <FieldError errors={[fieldState.error]} />
                </div>
              )}
            </Field>
          )}
        />

        <Controller
          name="surName"
          control={control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Surname</FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="text"
                aria-invalid={fieldState.invalid}
                placeholder="Surname"
                className="py-5 focus-visible:border-blue-400 focus-visible:ring-1"
                autoComplete="family-name"
              />

              {fieldState.invalid && (
                <div className="mt-2 flex items-center gap-2 text-sm text-red-500">
                  <AlertCircle className="h-4 w-4" />

                  <FieldError errors={[fieldState.error]} />
                </div>
              )}
            </Field>
          )}
        />
      </div>
      <Controller
        name="gender"
        control={control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel htmlFor="user_gender">Gender</FieldLabel>
            <Select
              name={field.name}
              value={field.value}
              onValueChange={field.onChange}>
              <SelectTrigger
                id="user_gender"
                className="w-full py-5 focus-visible:border-blue-400 focus-visible:ring-1"
                aria-invalid={fieldState.invalid}>
                <SelectValue
                  placeholder="Select your gender"
                  className="capitalize"
                />
              </SelectTrigger>

              <SelectContent
                className=""
                side="bottom">
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            {fieldState.invalid && (
              <div className="mt-2 flex items-center gap-2 text-sm text-red-500">
                <AlertCircle className="h-4 w-4" />

                <FieldError errors={[fieldState.error]} />
              </div>
            )}
          </Field>
        )}
      />

      <Controller
        name="phoneNumber"
        control={control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel htmlFor={field.name}>Mobile Number</FieldLabel>
            <Input
              {...field}
              id={field.name}
              type="text"
              aria-invalid={fieldState.invalid}
              placeholder="Mobile Number"
              className="py-5 focus-visible:border-blue-400 focus-visible:ring-1"
              autoComplete="tel"
            />

            {fieldState.invalid && (
              <div className="mt-2 flex items-center gap-2 text-sm text-red-500">
                <AlertCircle className="h-4 w-4" />

                <FieldError errors={[fieldState.error]} />
              </div>
            )}
          </Field>
        )}
      />

      <Controller
        name="emailId"
        control={control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel htmlFor={field.name}>Email Address</FieldLabel>
            <Input
              {...field}
              id={field.name}
              type="email"
              aria-invalid={fieldState.invalid}
              placeholder="Email address"
              className="py-5 focus-visible:border-blue-400 focus-visible:ring-1"
              autoComplete="email"
            />

            {fieldState.invalid && (
              <div className="mt-2 flex items-center gap-2 text-sm text-red-500">
                <AlertCircle className="h-4 w-4" />

                <FieldError errors={[fieldState.error]} />
              </div>
            )}
          </Field>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel htmlFor={field.name}>Password</FieldLabel>
            <Input
              type="password"
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="Password"
              className="py-5 focus-visible:border-blue-400 focus-visible:ring-1"
              autoComplete="off"
            />

            {fieldState.invalid && (
              <div className="mt-2 flex items-center gap-2 text-sm text-red-500">
                <AlertCircle className="h-4 w-4" />

                <FieldError errors={[fieldState.error]} />
              </div>
            )}
          </Field>
        )}
      />

      <p>
        By tapping Submit, you agree to create an account and to Devhub&apos;s
        <span className="text-blue-400"> Terms</span>, and{" "}
        <span className="text-blue-400">Privacy Policy</span>.
      </p>

      <p>
        The ways we can use the information we collect when you create an
        account. we use this information to provide, personalise and improve our
        products.
      </p>
      <Button
        type="submit"
        className="w-full cursor-pointer bg-blue-600 py-5 text-white"
        disabled={formState.isSubmitting}>
        {formState.isSubmitting ?
          <>
            <LoaderIcon className="animate-spin" />
          </>
        : <>Register</>}
      </Button>
    </form>
  );
};

export default RegisterForm;
