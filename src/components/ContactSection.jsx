import { Mail, MapPin, Phone, Send } from 'lucide-react'
import React, { useState } from 'react'

function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false)
    const handleSubmit = () => {

    }
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
            <div className="container overflow-hidden md:overflow-visible">
                <div className="text-center mb-16" data-aos='fade-up'>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Contact Us</h2>
                    <p className="text-lg max-w-2xl mx-auto text-gray-900">
                        Have questions or feedback? We'd love to hear from you. Reach out to our team and we'll respond as soon as
                        possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="grid gap-8">
                        <div className="bg-white rounded-lg shadow-md p-8" data-aos='fade-right'>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-lg">
                                    <Mail className="text-gray-900" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Email</h3>
                                    <p className="text-sm text-gray-900">We'll reply within 24 hours</p>
                                </div>
                            </div>
                            <a href="mailto:rahat1470.com@gmail.com" className="text-gray-900 hover:underline font-medium">
                                rahat1470.com@gmail.com
                            </a>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-8" data-aos='fade-right'>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-lg">
                                    <Phone className="text-gray-900" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Phone</h3>
                                    <p className="text-sm text-gray-900">Mon-Fri, 9am-6pm BDT</p>
                                </div>
                            </div>
                            <a href="tel:+8801907641877" className="text-gray-900 hover:underline font-medium">
                                +8801907641877
                            </a>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-8" data-aos='fade-right'>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-lg">
                                    <MapPin className="text-gray-900" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Location</h3>
                                    <p className="text-sm text-gray-900">Serving your local community</p>
                                </div>
                            </div>
                            <p className="text-gray-900 hover:underline font-medium cursor-pointer">Find us near you</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8 md:p-12" data-aos='fade-left'>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-900">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Enter Name"
                                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none text-gray-900"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-900">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="Enter Email Address"
                                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none text-gray-900"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-900">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    placeholder="Subject"
                                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none text-gray-900"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-900">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Message"
                                    rows={5}
                                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none text-gray-900 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send size={20} />
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
