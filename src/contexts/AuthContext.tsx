import { createContext, useContext, useState, type ReactNode } from "react"
import { useNavigate } from "react-router-dom"

type UserRole = "employee" | "manager"

type Session = {
    user: {
        role: UserRole
    }
}

type AuthContextData = {
    session: Session | undefined
    signOut: () => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

type AuthProviderProps = {
    children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
    const navigate = useNavigate()
    const [session, setSession] = useState<Session | undefined>({
        user: {
            role: "manager",
        },
    })

    function signOut() {
        setSession(undefined)
        navigate("/")
    }

    return (
        <AuthContext.Provider value={{ session, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}
