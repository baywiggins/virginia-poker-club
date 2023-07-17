import { Navigate, useLocation } from "react-router-dom";
import useToken from "./useToken";

function PrivateElement({ element: Element }) {
  const { token } = useToken();
  const location = useLocation();

  return token ? Element : <Navigate to="/login" state={{ from: location }} />;
}

export default PrivateElement;
