import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import { AuthRoutes } from "./AuthRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";

export function Routes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/*" element={<AuthRoutes />} />
        <Route path="/employee/*" element={<EmployeeRoutes />} />
      </RouterRoutes>
    </BrowserRouter>
  );
}