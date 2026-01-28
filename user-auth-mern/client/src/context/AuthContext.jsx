import { createContext, useState, useEffect } from "react";
import API from "../api/axios.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      API.get("/users/profile")
        .then(res => setUser(res.data.user))
        .catch(() => logout());
    }
  }, []);

  const login = async (data) => {
    const res = await API.post("/auth/login", data);
    localStorage.setItem("token", res.data.token);
    const profile = await API.get("/users/profile");
    setUser(profile.data.user);
  };

  const register = async (data) => {
    const res = await API.post("/auth/register", data);
    localStorage.setItem("token", res.data.token);
    const profile = await API.get("/users/profile");
    setUser(profile.data.user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
