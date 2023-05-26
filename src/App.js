import { Suspense } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <>
      <Suspense>{useRoutes(routes)}</Suspense>
    </>
  );
}

export default App;
