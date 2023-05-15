import { createContext, useEffect, useState } from "react";
import { Api } from "../services/Api";
import { Post } from "../services/request/Post";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const [response, setResponse] = useState("");

  const [token, setToken] = useState("");

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const getToken = JSON.parse(localStorage.getItem("@KenzieHub:Token"));

      if (!getToken) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await Api.get("profile", {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        });

        setUser(data);
        setToken(getToken);
      } catch (error) {
        console.error(error);
        localStorage.clear();
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [response]);

  const login = (data) => {
    const resp = (resp) => {
      setResponse(resp);
    };
    const error = (err) => {
      setResponse(err);
    };

    Post(data, resp, error, "sessions");
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, login, response, setResponse, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};
