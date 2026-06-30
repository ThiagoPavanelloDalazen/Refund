import { Outlet } from "react-router-dom";

import logoSvg from "../assets/logo.svg"

export function AuthLayout(){
    return (
        <div className="flex w-screen min-h-screen bg-gray-100 justify-center items-center text-gray-900">
            <main className="bg-white p-8 rounded-md flex items-center flex-col w-full max-w-[462px] mx-4 shadow-md">
                <img src={logoSvg} alt="logo" className="my-8"/>
                <Outlet />
            </main>
        </div>
    )
}