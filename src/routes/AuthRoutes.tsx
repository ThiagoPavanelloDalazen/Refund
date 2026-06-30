import { Routes, Route } from "react-router-dom"
import { SignIn } from "../pages/SignIn"
import { AuthLayout } from "../components/AuthLayout"
import { SignUp } from "../pages/SignUp"
import { NotFound } from "../pages/NotFound"

export function AuthRoutes(){
    return (
        <Routes>
            <Route path="/" element={<AuthLayout />}>
                <Route index element={<SignIn/>} />
                <Route path="signup" element={<SignUp/>} />
            </Route>

            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}