import { createBrowserRouter } from "react-router-dom";

//Página importadas
import App from "./App";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Sobre from "./pages/Sobre";
import PaginaErro from "./pages/PaginaErro";
import RotasProtegidas from "./pages/RotasProtegidas";
import ResetarSenha from "./pages/ResetarSenha";
import InfoCard from "./components/infoCard";
import MostrarCoisas from "./pages/MostrarCoisas";
import MostrarCantores from "./pages/MostrarCantores";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaErro />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "resetar",
        element: <ResetarSenha />
      }
    ],
  },
  {
    path: "/",
    element: <RotasProtegidas />,
    errorElement: <PaginaErro />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "cadastro",
        element: <Cadastro />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
      {
        path: "infocard/:id",
        element: <InfoCard/>
      },
      {
        path: "mostrar",
        element: <MostrarCoisas/>
      },
      {
        path: "mostrarcantores",
        element: <MostrarCantores/>
      },
    ],
  },
]);

export default router;
