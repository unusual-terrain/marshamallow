import { Routes, Route } from "react-router-dom";
import { Console, Home } from "../pages";
import { useAuth } from "../services";

export const Marshmallow = () => {
  const { authData } = useAuth();
  return (
    <Routes>
      <Route path="/" element={authData? <Console /> : <Home />} />
    </Routes>
  );
};
