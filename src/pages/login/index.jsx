import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import { Form } from "../../components/Form";
import { Logo } from "../../components/Logo";
import { loginSchema } from "../../components/Form/loginSchema";
import { useEffect } from "react";
import { toast } from "react-toastify";

import { LoginStyled } from "./LoginStyled";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const LoginPage = () => {
  const { setUser, response, login } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@KenzieHub:Token");

    if (token) {
      navigate("/home");
    }

    if (response.statusText) {
      toast.success(response.statusText);
      localStorage.setItem(
        "@KenzieHub:Token",
        JSON.stringify(response.data.token)
      );

      setUser(response.data.user);

      navigate("/home");
    } else if (response.response) {
      toast.error(response.response.data.message);
    }
  }, [response, navigate, setUser]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  return (
    <LoginStyled>
      <Header>
        <Logo />
      </Header>
      <main>
        <Form funct={handleSubmit(login)} noValidate>
          <h2>Login</h2>

          <Label htmlFor={"email"} name={"Email"} />
          <Input
            type={"email"}
            name={"email"}
            register={register("email")}
            placeholder={"Digite aqui seu email"}
          />
          {errors.email && <span>{errors.email.message}</span>}

          <Label htmlFor={"password"} name={"Senha"} />
          <Input
            type={"password"}
            name={"password"}
            register={register("password")}
            placeholder={"Digite aqui sua senha"}
          />
          {errors.password && <span>{errors.password.message}</span>}

          <Button type={"submit"} name={"Entrar"} />
          <p>Ainda não possui uma conta?</p>
          <Link to={`/register`}>Cadastre-se</Link>
        </Form>
      </main>
    </LoginStyled>
  );
};
