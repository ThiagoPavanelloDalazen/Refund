import { BrowserRouter } from "react-router-dom"
import { Routes } from "./routes"
import { AuthProvider } from "./contexts/AuthContext"

export function App(){
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  )
}