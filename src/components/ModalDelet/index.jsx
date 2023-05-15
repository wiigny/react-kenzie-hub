import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { Button } from "../Button";

export const ModalDelet = () => {
  const { deletTech, closeModal } = useContext(TechContext);

  return (
    <section>
      <h3>Deseja realmente excluir a tecnologia ?</h3>
      <div>
        <Button onclick={deletTech} name={"Sim, excluir"} />
        <Button onclick={closeModal} name={"Cancelar"} />
      </div>
    </section>
  );
};
