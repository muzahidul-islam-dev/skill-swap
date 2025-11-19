import { Clock, MapPin, Star } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

function Skill() {
    const [skill, setSkill] = useState({});
    const [loading, setLoading] = useState(true)
    const params = useParams();

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    useEffect(() => {
        fetch('/skills.json').then(res => res.json()).then(response => {
            const result = response?.find((item) => item.skillId == params.id);
            setSkill(result)
            setLoading(false)
        })
    }, [params])

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            name: '',
            email: ''
        })
        return toast.success('Form Submited.')
    }


    return (
        <div className="px-px md:px-4 py-12 bg-gray-100">
            <div className="container min-h-screen flex items-center justify-center">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div data-aos="fade-right" className="lg:col-span-2">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">

                                <img src={skill.image} alt={skill.skillName} className="w-full h-96 object-cover" />

                                <div className="p-8">
                                    <div className="md:flex md:items-start md:justify-between mb-4">
                                        <div>
                                            <h1 className="text-4xl font-bold mb-2 text-gray-900">{skill.skillName}</h1>
                                            <p className="text-lg text-gray-900">by {skill.providerName}</p>
                                        </div>
                                        <div className="md:text-right my-5 md:my-0">
                                            <div className="text-4xl font-bold text-gray-900 mb-2">${skill.price}</div>
                                            <div className="flex items-center gap-1 md:justify-end">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={20}
                                                        className={i < Math.floor(skill.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                                                    />
                                                ))}
                                                <span className="ml-2 font-bold text-gray-900">{skill.rating}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-border">
                                        <div>
                                            <p className="text-sm text-gray-900">Slots Available</p>
                                            <p className="font-medium text-gray-900">{skill.slotsAvailable} slots</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-bold mb-4 text-gray-900">About This Skill</h2>
                                        <p className=" leading-relaxed mb-6 text-gray-900">{skill.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up" className="lg:col-span-1">
                            <div className="bg-white rounded-lg shadow-lg p-8 sticky top-24">
                                <h2 className="text-2xl font-bold mb-6 text-gray-900">Book Session</h2>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-900">Full Name</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full text-gray-900 px-4 py-2 border border-border rounded-lg focus:outline-none"
                                            placeholder='Enter Full Name'
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-900">Email Address</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-2 border text-gray-900 border-border rounded-lg focus:outline-none"
                                            placeholder='Enter Email Address'
                                            required
                                        />
                                    </div>

                                    <button type="submit" disabled={loading} className="cursor-pointer w-full bg-gray-900 text-white py-3 rounded-lg mt-6">
                                        {loading ? "Booking..." : "Book Now"}
                                    </button>
                                </form>

                                <div className="mt-8 pt-8 border-t border-border">
                                    <h3 className="font-bold mb-4 text-gray-900">Provider</h3>
                                    <p className="text-sm mb-2 text-gray-900">
                                        <strong>Email:</strong> {skill.providerEmail}
                                    </p>
                                    <p className=" text-sm text-gray-900">
                                        <strong>Category:</strong> {skill.category}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill
