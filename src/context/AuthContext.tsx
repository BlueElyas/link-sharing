import {  createContext, ReactNode, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
type AuthProviderProps = {
    children: ReactNode
}

type AuthContextProps = {
    createAccount: (userData: any) => void
    isAuthenticated: boolean
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: AuthProviderProps)  => {
    const [user, setUser] = useState()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const navigate = useNavigate()

    // const login = (userData: SetStateAction<any>) => {
    //     const stored = localStorage.getItem('user')
    //     const name = userData.name
    //     const password = userData.password
    //     if(!stored) return
    //     if(stored.name === name && stored.password === password) {

    //     } 
    //     }

    const createAccount = (userData : any) => {
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData))
        navigate('/')
    }
    

    return (
        <AuthContext.Provider value={{createAccount, isAuthenticated, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(AuthContext)
}