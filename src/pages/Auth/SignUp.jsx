import { Eye, EyeOff } from 'lucide-react';
import React, { use, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Google from './../../assets/google.png'
import { UserProvider } from '../../context/AuthContext';
import toast from 'react-hot-toast';
function SignUp() {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        photoURL: ''
    })

    const { registerUsingCredintial, loginWithGoogle } = use(UserProvider)
    const location = useLocation();
    const navigate = useNavigate();


    const redirectPath = location?.state?.from?.pathname || '/';
    
    const handleSubmit = async (e) => {
        e.preventDefault();

            if (formData.fullName == '' || formData.email == '' || formData.password == '' || formData.photoURL == '') {
                return toast.error('All Field is required.')
            }

            if(formData.password.length < 6){
                return toast.error('Length must be at least 6 character')
            }else if(formData.password == formData.password?.toUpperCase()){
                return toast.error('Must have a Lowercase letter in the password')
            }else if(formData.password == formData.password?.toLowerCase()){
                return toast.error('Must have an Uppercase letter in the password')
            }

            const result = await registerUsingCredintial(formData.fullName, formData.email, formData.password, formData.photoURL)
            if (result?.error) {
                if (result.code == 'auth/email-already-in-use') {
                    return toast.error('Email Allready Exists')
                } else {
                    return toast.error(result.message)
                }
            } else {
                toast.success(result.message)
                navigate(redirectPath, {
                    replace: true
                })
            }
    }

    const handleGoogleLogin = async () => {
        const result = await loginWithGoogle()
        if(result.error){
            return toast.error(result.message)
        }else{
            toast.success(result.message)
            navigate('/', {
                replace: true
            })
        }
    }
    return (
        <div className="px-4 py-12 bg-gray-100">
            <div className="container min-h-screen flex items-center justify-center">
                <div data-aos="fade-up" className="w-full max-w-md">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h1 className="text-3xl font-bold mb-2 text-center text-gray-900">Create Account</h1>
                        <p className=" text-center text-gray-900 mb-8">Sign up for Learning in SkillSwap account</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-900">Full Name</label>
                                <input
                                    type="text"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    className="w-full px-4 py-2 border border-border rounded-lg text-gray-900 focus:outline-none"
                                    placeholder="Enter Full Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-900">Email Address</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-2 border border-border rounded-lg text-gray-900 focus:outline-none"
                                    placeholder="Enter Email"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-900">Photo URL</label>
                                <input
                                    type="text"
                                    value={formData.photoURL}
                                    onChange={(e) => setFormData({ ...formData, photoURL: e.target.value })}
                                    className="w-full px-4 py-2 border border-border rounded-lg text-gray-900 focus:outline-none"
                                    placeholder="Enter Photo URL"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-900">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="w-full px-4 py-2 border border-border rounded-lg text-gray-900 focus:outline-none"
                                        placeholder="Enter Password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-0 bottom-0 cursor-pointer"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <button type="submit" disabled={loading} className="w-full bg-gray-900 text-white py-2 rounded-lg cursor-pointer hover:shadow-lg duration-300">
                                {loading ? "Signing up..." : "Sign Up"}
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
                            <Link to="/auth/sign-in" className="font-medium">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
