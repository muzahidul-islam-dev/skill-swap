import { Eye, EyeOff } from 'lucide-react';
import React, { use, useState } from 'react'
import { Link, replace, useLocation, useNavigate } from 'react-router-dom';
import Google from './../../assets/google.png'
import toast from 'react-hot-toast';
import { UserProvider } from '../../context/AuthContext';
function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false)

    const { loginUsingCredintial, loginWithGoogle } = use(UserProvider)

    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location?.state?.from?.pathname || '/';

    console.log(redirectPath)
    const handleLogin = async (e) => {
        e.preventDefault();

        if (formData.email == '' || formData.password == '') {
            return toast.error('All field is required')
        }

        const result = await loginUsingCredintial(formData.email, formData.password)
        if (result.error) {
            if(result.code == 'auth/invalid-credential'){
                return toast.error('Invalid Credintial');
            }
            return toast.error(result.message)
        } else {
            toast.success(result.message)
            navigate(redirectPath, {
                replace: true
            })
        }

    }

    const handleGoogleLogin = async () => {
        const result = await loginWithGoogle()
        if (result.error) {
            return toast.error(result.message)
        } else {
            toast.success(result.message)
            navigate(redirectPath, {
                replace: true
            })
        }
    }
    return (
        <div className="px-4 py-12 bg-gray-100">
            <div className="container min-h-screen flex items-center justify-center">
                <div className="w-full max-w-md">
                    <div data-aos="fade-up" className="bg-white rounded-lg shadow-lg p-8">
                        <h1 className="text-3xl font-bold mb-2 text-center text-gray-900">Login Account</h1>
                        <p className=" text-center mb-8 text-gray-900">Sign in to your SkillSwap account</p>

                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-900">Email Address</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 text-gray-900 py-2 border border-border rounded-lg focus:outline-none"
                                    placeholder="Enter Email"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-900">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="w-full px-4 py-2 border text-gray-900 border-border rounded-lg focus:outline-none"
                                        placeholder="Enter Password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 text-gray-900 top-0 bottom-0 cursor-pointer"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <div className="text-right">
                                <Link
                                    to={`/auth/reset-password?email=${formData.email}`}
                                    className="text-sm text-gray-900"
                                >
                                    Forgot Password?
                                </Link>
                            </div>

                            <button type="submit" disabled={loading} className="w-full bg-gray-900 text-white py-2 rounded-lg cursor-pointer hover:shadow-lg duration-300">
                                {loading ? "Signing in..." : "Sign In"}
                            </button>
                        </form>

                        <div className="my-6 flex items-center gap-4">
                            <div className="flex-1 h-px bg-gray-300"></div>
                            <span className="text-sm text-gray-900">Or</span>
                            <div className="flex-1 h-px bg-gray-300"></div>
                        </div>

                        <button type="button" onClick={handleGoogleLogin} className="w-full text-gray-900 flex items-center justify-center gap-2 cursor-pointer border border-gray-200 py-2 rounded-lg">
                            <img src={Google} alt="" className='h-5' />
                            Sign in with Google
                        </button>

                        <p className="text-center  mt-6 text-gray-900">
                            Don't have an account?{" "}
                            <Link to="/auth/sign-up" className="font-medium">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
