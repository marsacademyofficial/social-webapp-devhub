import {
  registerSchema,
  RegisterSchemaType,
} from "@/lib/zodschema/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {} = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      fullName: " ",
      phoneNumber: " ",
      emailId: " ",
      password: " ",
      confirmPassword: " ",
    },

    mode: "onSubmit",
  });

  return <></>;
};

export default RegisterForm;
