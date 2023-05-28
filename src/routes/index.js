import Home from "../pages/home";
import Login from "../pages/login";
import { ProtectedRouter } from "./PrivateRouter";
import { PublicdRouter } from "./PublicRouter";

export const routes = [
  {
    path: "/",
    element: (
      <ProtectedRouter>
        <Home />
      </ProtectedRouter>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicdRouter>
        <Login />
      </PublicdRouter>
    ),
  },
];
