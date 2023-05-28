import { useEffect, useState } from "react";
import LocalStorageManager from "../utils/LocalStorageManager";

import { useDispatch } from "react-redux";
import { getUser } from "../features/auth/authSlice";
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const storage = new LocalStorageManager();

    const token = storage.getItem("accessToken");
    if (token) {
      const decodedToken = storage.decodedJwt(token);
      setUser(decodedToken);
      dispatch(getUser(decodedToken));
    } else {
      setUser(null);
      dispatch(getUser(null));
    }
  });

  return { user };
};
