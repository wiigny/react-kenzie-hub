import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../contexts/TechContext";
import { Button } from "../Button";
import { Form } from "../Form";
import { Input } from "../Input";
import { Label } from "../Label";
import { Select } from "../Select";

export const ModalAdd = () => {
  const { setData, headerModal } = useContext(TechContext);
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    setData(data);
  };

  return (
    <Form funct={handleSubmit(submit)}>
      <Label htmlFor={"title"} name={"Nome"} />
      <Input
        type={"text"}
        id={"title"}
        name={"title"}
        register={register("title")}
        placeholder={"Insira o nome da tecnologia"}
      />

      <Label htmlFor={"typeTecnology"} name={"Selecionar status"} />
      <Select
        id={"selecTecnology"}
        name={"typeTecnology"}
        register={register("status")}
        array={["Iniciante", "Intermediário", "Avançado"]}
      />

      <Button type={"submit"} name={headerModal} />
    </Form>
  );
};
