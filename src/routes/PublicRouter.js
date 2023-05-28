import { Navigate } from "react-router-dom";
import LocalStorageManager from "../utils/LocalStorageManager";

export const PublicdRouter = ({ children }) => {
  const storage = new LocalStorageManager();

  const token = storage.getItem("accessToken");

  if (!token) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};
