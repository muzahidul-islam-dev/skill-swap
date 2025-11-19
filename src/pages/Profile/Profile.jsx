import React, { use, useEffect, useState } from 'react'
import { UserProvider } from '../../context/AuthContext'
import Loading from '../../components/pertial/Loading';
import toast from 'react-hot-toast';

function Profile() {
    const [isEditing, setIsEditing] = useState(false)
    const { user, loading, profileUpdate } = use(UserProvider);
    const [formData, setFormData] = useState({
        displayName: user,
        photoURL: ''
    })

    useEffect(() => {
        if (user) {
            setFormData({
                displayName: user?.displayName,
                photoURL: user?.photoURL
            })
        }
    }, [user, loading])
    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        if (formData.displayName == '' || formData.photoURL == '') {
            return toast.error('All Field is required')
        }

        const result = await profileUpdate(formData.displayName, formData.photoURL);
        if (result.error) {
            return toast.error(result.message)
        } else {
            setIsEditing(false)
            toast.success(result.message)
        }

    }
    if (loading) return <Loading />
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>

                    {!isEditing ? (
                        <div className="space-y-6">
                            <div className="flex items-center gap-6">
                                <img
                                    src={user.photoURL || "/placeholder.svg"}
                                    alt={user.displayName}
                                    className="w-24 h-24 rounded-full object-cover text-gray-900"
                                />
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">{user.displayName}</h2>
                                    <p className="text-gray-900">{user.email}</p>
                                </div>
                            </div>

                            <div className="border-t border-border pt-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-900 mb-2">Full Name</label>
                                        <p className="text-lg text-gray-900">{user.displayName}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                                        <p className="text-lg text-gray-900">{user.email}</p>
                                    </div>
                                </div>
                            </div>

                            <button onClick={() => setIsEditing(true)} className="w-full bg-gray-900 py-2 rounded-lg cursor-pointer">
                                Edit Profile
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleUpdateProfile} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    value={formData.displayName}
                                    onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none text-gray-900"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">Photo URL</label>
                                <input
                                    type="text"
                                    value={formData.photoURL}
                                    onChange={(e) => setFormData({ ...formData, photoURL: e.target.value })}
                                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none text-gray-900"
                                />
                            </div>

                            <div className="flex gap-4">
                                <button type="submit" disabled={loading} className="flex-1 bg-gray-900 py-2 rounded-lg cursor-pointer">
                                    {loading ? "Saving..." : "Update Profile"}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="flex-1 bg-red-500 py-2 rounded-lg cursor-pointer"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Profile
