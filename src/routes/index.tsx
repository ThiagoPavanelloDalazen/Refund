import { AuthRoutes } from "./AuthRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManagerRoutes } from "./ManagerRoutes";
import { Loading } from "../components/Loading";
import { useAuth } from "../contexts/AuthContext";

const isLoading = false;

export function Routes() {
  const { session } = useAuth()

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

  return getRoutesComponent();
}