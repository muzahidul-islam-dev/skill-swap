import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "../components/shared/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import ResetPassword from "../pages/Auth/ResetPassword";
import Skill from "../pages/Skill/Skill";
import AuthLayout from "../components/shared/AuthLayout";
import PrivateLayout from "../components/shared/PrivateLayout";
import Profile from "../pages/Profile/Profile";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '',
                element: <PrivateLayout />,
                children: [
                    {
                        path: 'skill/:id',
                        element: <Skill />
                    },
                    {
                        path: 'profile',
                        element: <Profile />
                    }
                ]
            },
            {
                path: 'auth',
                element: <AuthLayout />,
                children: [
                    {
                        path: 'sign-in',
                        element: <Login />
                    },
                    {
                        path: 'sign-up',
                        element: <SignUp />
                    },
                    {
                        path: 'reset-password',
                        element: <ResetPassword />
                    },
                ]
            }
        ]
    }
])

export default routes;