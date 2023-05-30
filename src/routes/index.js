import Arena from "../pages/arena";
import Home from "../pages/home";
import Layout from "../pages/layout";
import Login from "../pages/login";
import Market from "../pages/market";
import Portfolio from "../pages/portfolio";
import Social from "../pages/social";
import { ProtectedRouter } from "./PrivateRouter";
import { PublicdRouter } from "./PublicRouter";

export const routes = [
  {
    path: "/",
    element: (
      <ProtectedRouter>
        <Layout />
      </ProtectedRouter>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "arena",
        element: <Arena />,
      },
      { path: "market", element: <Market /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "social", element: <Social /> },
    ],
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
