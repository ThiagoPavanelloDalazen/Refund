import logoSvg from "../assets/logo.svg"
import logoutSvg from "../assets/logout.svg"
import { useAuth } from "../contexts/AuthContext"

export function Header(){
    const { signOut } = useAuth()

    return (
        <header className="w-full flex justify-between">
            <img src={logoSvg} alt="logo" />

            <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-200">Olá, Thiago</span>

                <button type="button" onClick={signOut} className="my-8 cursor-pointer hover:opacity-75 transition ease-linear">
                    <img src={logoutSvg} alt="ícone de sair" />
                </button>
            </div>
        </header>
    )
}