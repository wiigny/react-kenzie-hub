import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../contexts/TechContext";
import { Button } from "../Button";
import { Form } from "../Form";
import { Input } from "../Input";
import { Label } from "../Label";
import { Select } from "../Select";

export const ModalUpdate = () => {
  const { updateTech, headerModal, nameTech } = useContext(TechContext);
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    updateTech(data);
  };

  return (
    <Form funct={handleSubmit(submit)}>
      <Label htmlFor={"titleUpdate"} name={"Nome"} />
      <Input
        type={"text"}
        id={"titleUpdate"}
        name={"title"}
        value={nameTech}
        disabled={true}
      />

      <Label htmlFor={"selecTecnology"} name={"Selecionar status"} />
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
