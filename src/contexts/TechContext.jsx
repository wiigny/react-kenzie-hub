import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { Api } from "../services/Api";
import { AuthContext } from "./AuthContext";

export const TechContext = createContext();
export const TechProvider = ({ children }) => {
  const { user, setResponse, token } = useContext(AuthContext);

  const [headerModal, setHeaderModal] = useState("");

  const [data, setData] = useState(null);

  const [idTech, setIdTech] = useState(null);

  const [onModalAdd, setOnModalAdd] = useState(null);
  const [onModalDel, setOnModalDel] = useState(null);
  const [onModalUpdate, setOnModalUpdate] = useState(null);
  const [nameTech, setNameTech] = useState("");

  const [techs, setTech] = useState([]);

  useEffect(() => {
    if (user) {
      setTech(user.techs);
    }
  }, [user, techs]);

  useEffect(() => {
    const addTech = async () => {
      if (data) {
        try {
          const response = await Api.post("/users/techs", data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setResponse(response.data);

          response.status === 201 && toast.success("Tecnologia criada!");
        } catch (error) {
          console.error(error);
          toast.error(error.response.data.message);
        }
      }
    };

    addTech();
  }, [data, token, setResponse]);

  const showModal = (header) => {
    setHeaderModal(header);
    setOnModalAdd(true);
  };
  const showModalDelet = (header, id) => {
    setHeaderModal(header);
    setOnModalDel(true);
    setIdTech(id);
  };
  const showModalUpdate = (header, id, title) => {
    setHeaderModal(header);
    setOnModalUpdate(true);
    setNameTech(title);
    setIdTech(id);
  };

  const updateTech = async (data) => {
    try {
      const response = await Api.put(`/users/techs/${idTech}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setResponse(response);

      response.status === 201 && toast.success("Tecnologia atualizada!");
      setOnModalUpdate(null);
    } catch (error) {
      console.error(error);
    } finally {
      setOnModalDel(null);
    }
  };
  const deletTech = async () => {
    try {
      const response = await Api.delete(`/users/techs/${idTech}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setResponse(true);

      response.status === 204 && toast.success("Tecnologia deletada!");
    } catch (error) {
      console.error(error);
    } finally {
      setOnModalDel(null);
    }
  };

  const closeModal = () => {
    setOnModalAdd(null);
    setOnModalDel(null);
    setOnModalUpdate(null);
  };

  return (
    <TechContext.Provider
      value={{
        techs,
        onModalAdd,
        onModalDel,
        onModalUpdate,
        setHeaderModal,
        headerModal,
        closeModal,
        setData,
        showModal,
        showModalDelet,
        showModalUpdate,
        deletTech,
        updateTech,
        nameTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
