import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import { Logo } from "../../components/Logo";
import { Select } from "../../components/Select";
import { registerSchema } from "../../components/Form/registerSchema";
import { Post } from "../../services/request/Post";
import { RegisterStyled } from "./RegisterStyled";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const RegisterPage = () => {
  const { login, response: responseLogin } = useContext(AuthContext);

  const [disabled, setDisabled] = useState(false);

  const [response, setResponse] = useState("");

  const [body, setBody] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (response.statusText) {
      toast.success(response.statusText);
    } else if (response.response) {
      toast.error(response.response.data.message);
    }
    setDisabled(false);
  }, [response]);

  useEffect(() => {
    if (body) {
      login(body);
    }

    if (responseLogin) {
      localStorage.setItem(
        "@KenzieHub:Token",
        JSON.stringify(responseLogin.data.token)
      );
      navigate("/home");
    }
  }, [body, responseLogin, navigate, login]);

  const submit = (data) => {
    setDisabled(true);

    const resp = (resp) => {
      setBody({
        email: data.email,
        password: data.password,
      });
      setResponse(resp);
    };
    const error = (err) => {
      setResponse(err);
    };

    Post(data, resp, error, "users");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  return (
    <RegisterStyled>
      <Header>
        <Logo />
        <Link to={-1}>Voltar</Link>
      </Header>
      <main>
        <Form funct={handleSubmit(submit)} noValidate>
          <h2>Crie sua conta</h2>
          <p>Rápido e grátis, vamos nessa</p>

          <Label htmlFor={"name"} name={"Nome"} />
          {errors.name && <span>{errors.name.message}</span>}
          <Input
            type={"text"}
            id={"name"}
            register={register("name")}
            name={"name"}
            placeholder={"Digite seu nome"}
          />

          <Label htmlFor={"email"} name={"Email"} />
          {errors.email && <span>{errors.email.message}</span>}
          <Input
            type={"email"}
            id={"email"}
            register={register("email")}
            name={"email"}
            placeholder={"Digite seu email"}
          />

          <Label htmlFor={"password"} name={"Senha"} />
          {errors.password && <span>{errors.password.message}</span>}
          <Input
            type={"password"}
            id={"password"}
            register={register("password")}
            name={"password"}
            placeholder={"Digite sua senha"}
          />

          <Label htmlFor={"confirmPassword"} name={"Confirmar Senha"} />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
          <Input
            type={"password"}
            id={"confirmPassword"}
            register={register("confirmPassword")}
            name={"confirmPassword"}
            placeholder={"Confirme sua senha "}
          />

          <Label htmlFor={"bio"} name={"Bio"} />
          {errors.bio && <span>{errors.bio.message}</span>}
          <Input
            type={"text"}
            id={"bio"}
            register={register("bio")}
            name={"bio"}
            placeholder={"Fale um pouco sobre você"}
          />

          <Label htmlFor={"contact"} name={"Contato"} />
          {errors.contact && <span>{errors.contact.message}</span>}
          <Input
            type={"text"}
            id={"contact"}
            register={register("contact")}
            name={"contact"}
            placeholder={"Opção de contato"}
          />

          <Label htmlFor={"module"} name={"Selecionar módulo"} />
          {errors.course_module && <span>{errors.course_module.message}</span>}
          <Select
            id={"module"}
            register={register("course_module")}
            name={"module"}
            array={[
              "Primeiro módulo (Introdução ao Frontend)",
              "Segundo módulo (Frontend Avançado)",
              "Terceiro módulo (Introdução ao Backend)",
              "Quarto módulo (Backend Avançado)",
            ]}
          >
            <option selected hidden disabled value="">
              Selecione seu módulo
            </option>
          </Select>

          <Button
            disabled={disabled}
            type={"submit"}
            name={disabled ? "Aguarde..." : "Cadastrar"}
          />
        </Form>
      </main>
    </RegisterStyled>
  );
};
