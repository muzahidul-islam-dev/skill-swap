import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Toaster } from 'react-hot-toast'

function Layout() {

    useEffect(() => {
        Aos.init({
            duration: 800,
        });
    }, [])
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            <Toaster />
        </div>

    )
}

export default Layout
