import { Navigate, useLocation } from "react-router-dom";
import useToken from "./useToken";

// This component is used to make sure an unauthorized user cannot access the /admin-dashboard
// Not sure exactly how secure this is, but its a poker club website
function PrivateElement({ element: Element }) {
  const { token } = useToken();
  const location = useLocation();

  return token ? Element : <Navigate to="/login" state={{ from: location }} />;
}

export default PrivateElement;
