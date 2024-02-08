import { ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { useAuthContext } from "../../context/AuthContext"

type ProtectedRouteProps = {
    children: ReactNode
}

export default function ProtectedRoute( { children }: ProtectedRouteProps ) {

    const { isAuthenticated } = useAuthContext()

    if(!isAuthenticated) {
       return <> <Navigate to='/login'/></>
    }
    return <>{children}</>
}