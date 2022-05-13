import { Navigate } from "react-router-dom";
import { auth } from "./auth";

export default function privateRoute({ children }) {
  return auth ? children : <Navigate to="/login" />;
}
