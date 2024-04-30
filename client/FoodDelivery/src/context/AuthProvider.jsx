import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

import { CircularProgress } from "@mui/material";

import { auth } from "src/firebase/config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubcribed = auth.onIdTokenChanged((user) => {
      if (user?.uid) {
        setUser(user);
        if (user.accessToken !== localStorage.getItem("accessToken")) {
          localStorage.setItem("accessToken", user.accessToken);
          window.location.reload();
        }
        setIsLoading(false);
        return;
      }

      // reset user info
      setUser({});
      navigate("/login");
      setIsLoading(false);
    });

    return () => {
      unsubcribed();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);
  return (
    <AuthContext.Provider value={{ user, setUser, auth }}>
      {isLoading ? (
        <CircularProgress sx={{ margin: "auto", width: "100%" }} />
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
