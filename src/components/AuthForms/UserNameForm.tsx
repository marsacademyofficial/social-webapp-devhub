"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { Controller, useForm } from "react-hook-form";

import createUsername from "@/server/auth/createUsername";

import { UserNameSetupSchemaType } from "@/lib/type";

import { userNameSchema } from "@/lib/zodschema/userNameSchema";

import { Button } from "../shadcnui/button";

import { Field, FieldError, FieldLabel } from "../shadcnui/field";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../shadcnui/input-group";

import { RocketIcon, UserCheckIcon } from "lucide-react";
import { toast } from "react-toastify";
import { Spinner } from "../shadcnui/spinner";

type UserNameFormProps = {
  userIdInfo: string | undefined;
};

const UserNameForm = ({ userIdInfo }: UserNameFormProps) => {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    reset,
    setError,

    formState: { isSubmitting },
  } = useForm<UserNameSetupSchemaType>({
    resolver: zodResolver(userNameSchema),

    defaultValues: {
      userName: "",
    },

    mode: "onChange",
  });

  const submitUserName = async ({ userName }: UserNameSetupSchemaType) => {
    const { message, isSuccess } = await createUsername({
      userName,
      userIdInfo,
    });

    if (!isSuccess) {
      return setError("userName", {
        message,
      });
    } else {
      toast.success(message);
      reset();
      router.push("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitUserName)}
      className="space-y-5">
      <Controller
        name="userName"
        control={control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel
              htmlFor={field.name}
              className="font-heading text-2xl font-semibold">
              Username
            </FieldLabel>

            <InputGroup>
              <InputGroupAddon>
                <InputGroupButton
                  size="icon-xs"
                  className={` ${
                    fieldState.invalid ?
                      "bg-red-500 text-white"
                    : "bg-black text-white dark:bg-white dark:text-black"
                  }`}>
                  <UserCheckIcon />
                </InputGroupButton>
              </InputGroupAddon>
              <InputGroupInput
                {...field}
                id={field.name}
                type="text"
                placeholder="Enter username"
                autoComplete="off"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                disabled={isSubmitting}
                aria-invalid={fieldState.invalid}
                className="font-paragraph font-medium"
                onChange={(event) => {
                  field.onChange(event.target.value.toLowerCase());
                }}
              />

              <InputGroupAddon align="inline-end">
                {isSubmitting && <Spinner />}
              </InputGroupAddon>
            </InputGroup>

            {fieldState.error && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Button
        type="submit"
        className="font-paragraph w-full bg-blue-500 font-medium text-white"
        disabled={isSubmitting}>
        {isSubmitting ?
          <>
            <Spinner />
            Creating Username...
          </>
        : <>
            <RocketIcon /> Create Username
          </>
        }
      </Button>
    </form>
  );
};

export default UserNameForm;
