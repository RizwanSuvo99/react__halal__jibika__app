import { useAuthState } from "react-firebase-hooks/auth";
import { halalAuth } from "../firebase/firebase.config";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";


const PrivateRoutes = ({children}) => {
  const [user] = useAuthState(halalAuth);
  const location = useLocation();

  useEffect(()=>{
    if(!user){
        Swal.fire({
            title:"Please Login First",
            icon:"warning"
        })
    }
  },[user])

  if(!user){
    return <Navigate to={"/login"} state={{from:location}} replace/>
  }

  return (
    <div>{children}</div>
  )
}

export default PrivateRoutes