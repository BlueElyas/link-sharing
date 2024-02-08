import {  createContext, ReactNode, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
type AuthProviderProps = {
    children: ReactNode
}

type AuthContextProps = {
    createAccount: (userData: any) => void
    isAuthenticated: boolean
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
    login: (userData: any) => void
}

const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: AuthProviderProps)  => {
    const [user, setUser] = useState()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const navigate = useNavigate()

    const login  = (userData: any) => {
        const localItems: string | null = localStorage.getItem('user')
        if (localItems === null) {
            return
        }
        const parsedLocalItems = JSON.parse(localItems)
        if(parsedLocalItems.userName = userData.username && parsedLocalItems.password === userData.password) {
            setUser(userData)
            setIsAuthenticated(true)
            navigate('/')
        }
        console.log(isAuthenticated)
    }

    const createAccount = (userData : any) => {
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData))
        navigate('/')
    }

    return (
        <AuthContext.Provider value={{createAccount, isAuthenticated, setIsAuthenticated, login}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(AuthContext)
}