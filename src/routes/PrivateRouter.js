import { useNavigate, Navigate } from "react-router-dom";
import LocalStorageManager from "../utils/LocalStorageManager";
import { useDispatch } from "react-redux";
import { getUser } from "../features/auth/authSlice";
import { useEffect } from "react";

export const ProtectedRouter = ({ children }) => {
  const dispatch = useDispatch();

  const storage = new LocalStorageManager();

  const token = storage.getItem("accessToken");

  useEffect(() => {
    if (token) {
      const user = storage.decodedJwt(token);

      dispatch(getUser({ user }));
    }
  }, []);

  if (token) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
