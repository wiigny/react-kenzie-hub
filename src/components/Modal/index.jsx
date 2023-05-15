import { useContext } from "react";
import { MdClose } from "react-icons/md";
import { TechContext } from "../../contexts/TechContext";
import { Button } from "../Button";
import { ModalStyled } from "./ModalStyled";

export const Modal = ({ children, headerName }) => {
  const { closeModal } = useContext(TechContext);

  return (
    <ModalStyled id="Modal">
      <div>
        <h3>{headerName}</h3>
        <Button id={"closeModal"} onclick={closeModal}>
          <MdClose />
        </Button>
      </div>

      {children}
    </ModalStyled>
  );
};
