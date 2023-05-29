import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { InferType, object, string } from "yup";
import InputError from "./InputError";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useParams from "../hooks/useParams";

const loginSchema = object().shape({
  email: string().email().required("Email is required"),
  name: string().required("Name is required"),
});

type LoginFormValues = InferType<typeof loginSchema>;

function LoginForm() {
  const navigate = useNavigate();
  const { searchParams } = useParams();
  const { auth, handleLogin: loginHandler } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin: SubmitHandler<LoginFormValues> = async ({
    email,
    name,
  }) => {
    try {
      await loginHandler(email, name);
    } catch (error) {
      console.error("Authentication Login Error", error);
    }
  };

  useEffect(() => {
    if (auth) {
      navigate({ pathname: "/", search: searchParams.toString() });
    }
  }, [auth, navigate, searchParams]);

  return (
    <div className=" w-full flex justify-center items-center h-screen">
      <form
        className="flex flex-col bg-black text-white w-64 h-max gap-3 p-4 justify-center items-center"
        onSubmit={handleSubmit(handleLogin)}
      >
        <h3 className="text-2xl">Login</h3>

        <label htmlFor="email">Email:</label>
        <input
          className="border-b-[1px] border-b-black p-2 text-black"
          {...register("email", { required: true })}
          type="email"
          name="email"
          id="email"
          aria-invalid={errors.email ? "true" : "false"}
        />

        {errors.email && (
          <InputError errorMessage={errors.email.message as string} />
        )}

        <label htmlFor="name">Name:</label>

        <input
          className="border-b-[1px] border-b-black p-2 text-black"
          {...register("name", { required: true })}
          type="text"
          name="name"
          id="name"
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && (
          <InputError errorMessage={errors.name.message as string} />
        )}

        <input
          className="bg-white text-black p-3 hover:text-white hover:bg-gray-800 cursor-pointer"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
}

export default LoginForm;
