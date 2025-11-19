import React, { use } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { UserProvider } from '../../context/AuthContext'
import Loading from '../pertial/Loading'

function AuthLayout() {
    const {user, loading} = use(UserProvider)
    const location = useLocation();

    
    const redirectPath = location?.state?.from?.pathname || '/';

    if(loading) return <Loading />
    if(user){
        return <Navigate to={redirectPath} replace />
    }else{
        return <Outlet />
    }
}

export default AuthLayout
