import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { halalAuth } from "../firebase/firebase.config";
import Loading from "../pages/Loading/Loading";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const [user, loading] = useAuthState(halalAuth);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    Swal.fire({
      title: "Plese sign in first",
      icon: "warning",
    });
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoutes;