import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { TechContext } from "../../contexts/TechContext";
import { HomeStyled } from "./HomeStyled";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { ListTech } from "../../components/ListTech";
import { Logo } from "../../components/Logo";
import { Modal } from "../../components/Modal";

import plus from "../../assets/plus.svg";
import { ModalAdd } from "../../components/ModalAdd";
import { ModalDelet } from "../../components/ModalDelet";
import { ModalUpdate } from "../../components/ModalUpdate";

export const HomePage = () => {
  const { user, setUser, setResponse } = useContext(AuthContext);

  const {
    techs,
    onModalAdd,
    onModalDel,
    onModalUpdate,
    headerModal,
    showModal,
  } = useContext(TechContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setResponse("");
    setUser(null);
    navigate("/login");
  };

  return (
    <HomeStyled>
      <Header>
        <nav>
          <div className="container">
            <Logo />
            <Button onclick={logout} name={"Sair"} />
          </div>
        </nav>
        <div className="container">
          <h1>
            Olá, {user.name[0].toUpperCase().concat(user.name.substring(1))}
          </h1>
          <p>{user.course_module}</p>
        </div>
      </Header>

      <main>
        <div className="container">
          <section id="listTechs">
            <div>
              <h2>Tecnologias</h2>
              <Button onclick={() => showModal("Cadastrar Tecnologia")}>
                <img src={plus} alt="adicionar tecnologias" />
              </Button>
            </div>

            {techs.length ? (
              <ListTech techs={techs} />
            ) : (
              <h3>Ainda não possuí tecnologias</h3>
            )}
          </section>
        </div>
      </main>

      {onModalAdd ? (
        <Modal headerName={headerModal}>
          <ModalAdd />
        </Modal>
      ) : onModalDel ? (
        <Modal headerName={headerModal}>
          <ModalDelet />
        </Modal>
      ) : onModalUpdate ? (
        <Modal headerName={headerModal}>
          <ModalUpdate />
        </Modal>
      ) : null}
    </HomeStyled>
  );
};
