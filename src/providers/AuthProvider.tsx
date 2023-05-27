import { ReactNode, createContext, useEffect, useState } from "react";
import { isAuthenticated, login, logout } from "../api";
import { useNavigate } from "react-router-dom";

type AuthContextProps = {
  auth: boolean;
  handleLogOut: () => Promise<void>;
  handleLogin: (email: string, name: string) => Promise<void>;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (email: string, name: string) => {
    const res = await login(email, name);
    if (res.status === 200) {
      setAuth(true);
      navigate("/");
      setTimeout(() => setAuth(false), 1000 * 60 * 60); //Token expires in 60 minutes so add a timeout to handle the state change for us
    }
  };

  const handleLogOut = async () => {
    const res = await logout();
    if (res.status === 200) {
      setAuth(false);
      navigate("/login");
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const isAuth = await isAuthenticated();
        setAuth(isAuth);
      } catch (error) {
        console.error("Authentication error not logged in", error);
      }
    };

    initializeAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, handleLogin, handleLogOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
