import React, { use } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserProvider } from '../../context/AuthContext'
import UserPlaceholder from './../../assets/user.png'
import toast from 'react-hot-toast'

function Header() {
    const { user, logout, loading } = use(UserProvider)
    console.log(user, 'header user')
    const navigate = useNavigate();
    const handleLogout = async () => {
        const result = await logout();
        if (result.error) {
            return toast.error(result.message)
        } else {
            toast.success(result.message)
            navigate('/', {
                replace: true
            })
        }
    }
    return (
        <section className="py-5 bg-white">
            <div className="container">
                <div className="flex justify-between items-center">
                    <div>
                        <Link to={'/'} className='text-2xl font-semibold text-gray-900'>SkillSwap</Link>
                    </div>
                    <div>
                        <nav>
                            <ul className='flex gap-5 items-center'>
                                <li><Link to="/" className='text-gray-800'>Home</Link></li>
                                <li><Link to="/skills" className='text-gray-800'>All Skills</Link></li>
                                <li><Link to="/about" className='text-gray-800'>About Us</Link></li>
                                <li><Link to="/contact" className='text-gray-800'>Contact Us</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        {user && !loading ? (
                            <div className="relative">
                                <div className="flex gap-5">
                                    <Link
                                        to={'/profile'}
                                        className="flex items-center gap-2 group"
                                    >
                                        <img
                                            src={user.photoURL || UserPlaceholder}
                                            alt={user.displayName}
                                            className="peer w-8 h-8 rounded-full"
                                        />

                                        <div className="peer-hover:block hidden absolute right-1/2 top-full mt-2 z-50 w-48 bg-white border border-gray-100 rounded-lg shadow-lg p-2">
                                            <p className="px-4 py-2 text-sm font-medium text-gray-900">{user?.displayName}</p>
                                        </div>
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="px-3 cursor-pointer py-2 rounded-lg bg-red-500 text-white"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className='flex gap-2'>
                                    <Link to={'/auth/sign-in'} className="hidden text-gray-900 sm:inline-flex bg-transparent hover:text-white duration-200 border hover:bg-gray-900 border-gray-900 px-4 py-2 rounded-lg">
                                        Sign In
                                    </Link>
                                    <Link className='px-4 py-2 rounded-lg bg-gray-900 text-white' to={'/auth/sign-up'}>Sign Up</Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header
