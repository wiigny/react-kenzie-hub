import { useState } from "react";
import { Navigate } from "react-router-dom";
import { NotFoundStyled } from "./NotFoundStyled";

import "react-toastify/dist/ReactToastify.css";

export const NotFound = () => {
  const [toLogin, setToLogin] = useState(false);

  const redirectUser = () => {
    setTimeout(() => {
      setToLogin(true);
    }, 2000);
  };
  redirectUser();

  if (toLogin) {
    return <Navigate to={"/login"} />;
  }

  return (
    <NotFoundStyled>
      <h1>404</h1>
      <p>Not Found</p>
      <span>The requested page does not exist</span>
    </NotFoundStyled>
  );
};
