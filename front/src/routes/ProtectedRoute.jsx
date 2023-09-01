import { useState } from "react";

import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  /**
   * estado true, para el boton entrar del sigin
   * si es false no entra
   */
  const [isAuth, setIsAuth] = useState(true);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
