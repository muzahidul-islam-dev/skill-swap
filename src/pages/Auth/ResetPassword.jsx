import { use, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { UserProvider } from "../../context/AuthContext";
import toast from "react-hot-toast";

function ResetPassword() {

    const [searchParams] = useSearchParams();
    const [email, setEmail] = useState(searchParams.get('email') ?? '');
    const { resetPassword } = use(UserProvider);
    const navigate = useNavigate();
    const handleReset = async (e) => {
        e.preventDefault();
        if (email == '') {
            return toast.error('Email field is required')
        }
        const result = await resetPassword(email);
        if (result.error) {
            return toast.error(result.message)
        } else {
            toast.success(result.message)
            navigate('/auth/sign-in', {
                replace: true
            })

            window.open('https://gmail.com','_blank')
        }
    }
    return (
        <div className="px-4 py-12 bg-gray-100">
            <div className="container min-h-screen flex items-center justify-center">
                <div data-aos="fade-up" className="w-full max-w-md">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h1 className="text-3xl font-bold mb-2 text-center text-gray-900">Reset Password</h1>
                        <p className="text-center mb-8 text-gray-900">Enter email for reset your password</p>

                        <form onSubmit={handleReset} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-900">Email Address</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none text-gray-900"
                                    placeholder="Enter Email"
                                />
                            </div>

                            <button type="submit" className="w-full bg-gray-900 text-white py-2 rounded-lg cursor-pointer hover:shadow-lg duration-300">
                                Reset Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
