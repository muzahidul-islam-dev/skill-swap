import React, { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { UserProvider } from '../../context/AuthContext'
import Loading from '../pertial/Loading';

function PrivateLayout() {
    const location = useLocation();
    const { user, loading } = useContext(UserProvider);

    if (loading) return <Loading />;

    if (!user) {
        return <Navigate to="/auth/sign-in" state={{ from: location }} />;
    }

    return <Outlet />;
}

export default PrivateLayout
