import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4 border-b pb-2">Get in Touch</h1>
                    <p className="text-lg text-gray-900 font-medium mb-8">We'd love to hear from you!</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        
                        <div className="lg:order-2">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your Name"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 border focus:border-gray-900 focus:ring-gray-900"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 border focus:border-gray-900 focus:ring-gray-900"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        placeholder="How can we help you?"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 border focus:border-gray-900 focus:ring-gray-900"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        
                        <div className="lg:order-1 flex flex-col justify-center space-y-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 flex items-center mb-2">
                                    <Mail className="h-5 w-5 text-gray-900 mr-3" />
                                    Email Support
                                </h3>
                                <p className="text-gray-700">support@skillswapbd.com</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 flex items-center mb-2">
                                    <Phone className="h-5 w-5 text-gray-900 mr-3" />
                                    Phone
                                </h3>
                                <p className="text-gray-700">+880 17XX-XXXXXX</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 flex items-center mb-2">
                                    <MapPin className="h-5 w-5 text-gray-900 mr-3" />
                                    Office Location
                                </h3>
                                <p className="text-gray-700">
                                    Digital Hub, Dhaka, Bangladesh
                                    <br />(Online services only)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;