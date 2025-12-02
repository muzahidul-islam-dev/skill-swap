import { Clock, MessageSquare, Star, User } from 'lucide-react';
import React from 'react';

const About = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4 border-b pb-2">About SkillSwapBD</h1>
                    <p className="text-lg text-gray-900 font-medium mb-8">Connecting learners with mentors, one skill at a time.</p>

                    
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                            <MessageSquare className="h-6 w-6 text-gray-900 mr-2" /> Our Mission
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            SkillSwapBD was founded on the belief that everyone has a valuable skill to share and something new to learn. Our mission is to democratize education by creating a seamless platform where experienced mentors can connect with passionate students for one-on-one, personalized online training. We aim to foster a culture of lifelong learning and practical skill development.
                        </p>
                    </section>

                    
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="p-6 bg-indigo-50 rounded-xl">
                                <Star className="h-8 w-8 text-gray-900 mx-auto mb-3" />
                                <h3 className="font-bold text-lg mb-1 text-gray-900">Quality</h3>
                                <p className="text-sm text-gray-600">Ensuring high standards in every session.</p>
                            </div>
                            <div className="p-6 bg-indigo-50 rounded-xl">
                                <User className="h-8 w-8 text-gray-900 mx-auto mb-3" />
                                <h3 className="font-bold text-lg mb-1 text-gray-900">Community</h3>
                                <p className="text-sm text-gray-600">Building a supportive global network.</p>
                            </div>
                            <div className="p-6 bg-indigo-50 rounded-xl">
                                <Clock className="h-8 w-8 text-gray-900 mx-auto mb-3" />
                                <h3 className="font-bold text-lg mb-1 text-gray-900">Accessibility</h3>
                                <p className="text-sm text-gray-600">Making expert knowledge affordable and available.</p>
                            </div>
                        </div>
                    </section>

                    
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">The Founders</h2>
                        <p className="text-gray-700">
                            A small team of dedicated educators and technologists, committed to changing how people learn in Bangladesh and beyond.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;