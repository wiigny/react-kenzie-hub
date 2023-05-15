import { useContext } from "react";
import { RxUpdate } from "react-icons/rx";

import { TechContext } from "../../contexts/TechContext";
import { Button } from "../Button";
import trash from "../../assets/trash.svg";

export const CardTech = () => {
  const { showModalDelet, showModalUpdate, techs } = useContext(TechContext);

  return techs.map((elt) => (
    <li key={elt.id}>
      <h3>{elt.title}</h3>
      <div>
        <p>{elt.status}</p>
        <Button onclick={() => showModalDelet("Deletar", elt.id)}>
          <img src={trash} alt="excluir" />
        </Button>
        <Button
          onclick={() =>
            showModalUpdate("Atualizar Tecnologia", elt.id, elt.title)
          }
        >
          <RxUpdate size="1.2em" color="#ffffff" />
        </Button>
      </div>
    </li>
  ));
};
