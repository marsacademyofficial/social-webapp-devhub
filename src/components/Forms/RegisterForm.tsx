"use client";

import {
  registerSchema,
  RegisterSchemaType,
} from "@/lib/zodschema/registerSchema";
import userRegister from "@/server/userRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
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
  const { push } = useRouter();
  const { handleSubmit, control, formState, reset } =
    useForm<RegisterSchemaType>({
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

  const registerDataSubmit = async ({
    firstName,
    surName,
    emailId,
    gender,
    password,
    phoneNumber,
  }: RegisterSchemaType) => {
    const { isSuccess, message } = await userRegister({
      firstName,
      surName,
      emailId,
      gender,
      password,
      phoneNumber,
    });

    if (isSuccess) {
      toast.success(message);
      reset();
      push("/login");
    } else {
      toast.error(message);
    }
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
              <FieldLabel
                htmlFor={field.name}
                className="font-heading">
                First Name
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="text"
                aria-invalid={fieldState.invalid}
                placeholder="First name"
                className="font-paragraph py-5 focus-visible:border-blue-400 focus-visible:ring-1"
                autoComplete="given-name"
              />
              {fieldState.invalid && (
                <div className="mt-2 flex items-center gap-2 text-sm text-red-500">
                  <AlertCircle className="h-4 w-4" />

                  <FieldError
                    className="font-heading"
                    errors={[fieldState.error]}
                  />
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
              <FieldLabel
                htmlFor={field.name}
                className="font-heading">
                Surname
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="text"
                aria-invalid={fieldState.invalid}
                placeholder="Surname"
                className="font-paragraph py-5 focus-visible:border-blue-400 focus-visible:ring-1"
                autoComplete="family-name"
              />

              {fieldState.invalid && (
                <div className="mt-2 flex items-center gap-2 text-sm text-red-500">
                  <AlertCircle className="h-4 w-4" />

                  <FieldError
                    className="font-heading"
                    errors={[fieldState.error]}
                  />
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
            <FieldLabel
              htmlFor="user_gender"
              className="font-heading">
              Gender
            </FieldLabel>
            <Select
              name={field.name}
              value={field.value}
              onValueChange={field.onChange}>
              <SelectTrigger
                id="user_gender"
                className="font-paragraph w-full py-5 focus-visible:border-blue-400 focus-visible:ring-1"
                aria-invalid={fieldState.invalid}>
                <SelectValue
                  placeholder="Select your gender"
                  className="capitalize"
                />
              </SelectTrigger>

              <SelectContent
                className="font-paragraph cursor-pointer"
                side="bottom">
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            {fieldState.invalid && (
              <div className="mt-2 flex items-center gap-2 text-sm text-red-500">
                <AlertCircle className="h-4 w-4" />

                <FieldError
                  errors={[fieldState.error]}
                  className="font-heading"
                />
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
            <FieldLabel
              htmlFor={field.name}
              className="font-heading">
              Mobile Number
            </FieldLabel>
            <Input
              {...field}
              id={field.name}
              type="text"
              aria-invalid={fieldState.invalid}
              placeholder="Mobile Number"
              className="font-paragraph py-5 focus-visible:border-blue-400 focus-visible:ring-1"
              autoComplete="tel"
            />

            {fieldState.invalid && (
              <div className="mt-2 flex items-center gap-2 text-sm text-red-500">
                <AlertCircle className="h-4 w-4" />

                <FieldError
                  className="font-heading"
                  errors={[fieldState.error]}
                />
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
            <FieldLabel
              htmlFor={field.name}
              className="font-heading">
              Email Address
            </FieldLabel>
            <Input
              {...field}
              id={field.name}
              type="email"
              aria-invalid={fieldState.invalid}
              placeholder="Email address"
              className="font-paragraph py-5 focus-visible:border-blue-400 focus-visible:ring-1"
              autoComplete="email"
            />

            {fieldState.invalid && (
              <div className="mt-2 flex items-center gap-2 text-sm text-red-500">
                <AlertCircle className="h-4 w-4" />

                <FieldError
                  className="font-heading"
                  errors={[fieldState.error]}
                />
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
            <FieldLabel
              htmlFor={field.name}
              className="font-heading">
              Password
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

            {fieldState.invalid && (
              <div className="mt-2 flex items-center gap-2 text-sm text-red-500">
                <AlertCircle className="h-4 w-4" />

                <FieldError
                  errors={[fieldState.error]}
                  className="font-heading"
                />
              </div>
            )}
          </Field>
        )}
      />

      <p className="font-paragraph">
        By tapping Submit, you agree to create an account and to Devhub&apos;s
        <span className="text-blue-400"> Terms</span>, and{" "}
        <span className="text-blue-400">Privacy Policy</span>.
      </p>

      <p className="font-paragraph">
        The ways we can use the information we collect when you create an
        account. we use this information to provide, personalise and improve our
        products.
      </p>
      <Button
        type="submit"
        className="font-paragraph w-full cursor-pointer bg-blue-600 py-5 text-white"
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
