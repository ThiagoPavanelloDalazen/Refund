import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./AuthRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManagerRoutes } from "./ManagerRoutes";
import { Loading } from "../components/Loading";

const isLoading = false;

//const session = undefined;

const session = {
  user: {
    role: "manager"
  }
}


export function Routes() {

  function getRoutesComponent(){
    switch(session?.user.role){
      case "employee":
        return <EmployeeRoutes />;
      case "manager":
        return <ManagerRoutes />;
      default:
        return <AuthRoutes />;
    }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <BrowserRouter>
      {getRoutesComponent()}
    </BrowserRouter>
  );
}