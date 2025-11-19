import { Search, Users, BookOpen, CheckCircle } from "lucide-react"


export default function HowItWorks() {


    return (
        <section className="bg-white">
            <div className="py-16 px-4 sm:px-6 lg:px-8 container mx-auto">
                <div className="mb-12 text-center" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold  mb-4 text-gray-900">How It Works</h2>
                    <p className=" text-gray-900 text-lg max-w-2xl mx-auto">
                        Getting started with SkillSwap is simple and straightforward
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center" data-aos="fade-up">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                                <Search size={32} className="text-white" />
                            </div>
                        </div>
                        <h3 className="font-bold text-lg  text-gray-900 mb-2">Browse Skills</h3>
                        <p className=" text-gray-900">Explore a wide variety of skills offered by local experts</p>
                    </div>
                    <div className="text-center" data-aos="fade-up">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                                <Users size={32} className="text-white" />
                            </div>
                        </div>
                        <h3 className="font-bold text-lg  text-gray-900 mb-2">Connect</h3>
                        <p className=" text-gray-900">Message providers and discuss your learning goals</p>
                    </div>
                    <div className="text-center" data-aos="fade-up">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                                <BookOpen size={32} className="text-white" />
                            </div>
                        </div>
                        <h3 className="font-bold text-lg  text-gray-900 mb-2">Learn</h3>
                        <p className=" text-gray-900">Attend sessions and gain new skills from experienced teachers</p>
                    </div>
                    <div className="text-center" data-aos="fade-up">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                                <CheckCircle size={32} className="text-white" />
                            </div>
                        </div>
                        <h3 className="font-bold text-lg  text-gray-900 mb-2">Rate & Review</h3>
                        <p className=" text-gray-900">Share your experience and help others find great providers</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
