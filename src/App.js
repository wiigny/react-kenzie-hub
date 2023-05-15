import { Route, Routes } from "react-router-dom";
import { ProtectRoutes } from "./components/ProtectRoutes";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";
import { NotFound } from "./pages/notFound";
import { RegisterPage } from "./pages/register";

const App = () => {
  return (
    <Routes>
      <Route element={<ProtectRoutes />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
