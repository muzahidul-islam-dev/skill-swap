import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import Skill from '../../components/Skill';
import Provider from '../../components/Provider';
import ContactSection from '../../components/ContactSection';
import HowItWorks from '../../components/HowItWorks';
function Home() {
    const [skills, setSkills] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/skills.json').then(res => res.json()).then(response => {
            setSkills(response)
            setLoading(false)
        })
    }, [])


    return (
        <div>

            <section className='bg-white'>
                <div className="md:px-0">
                    <div className="relative h-96 md:h-[500px] overflow-hidden md:overflow-visible md:rounded-2xl">
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation]}
                            autoplay={{ delay: 5000 }}
                            pagination={{ clickable: true }}
                            navigation
                            className="w-full h-full"
                        >
                            <SwiperSlide>
                                <div
                                    className="w-full h-full bg-cover bg-center relative"
                                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=500&fit=crop)` }}
                                >
                                    <div className="absolute inset-0 bg-black/40"></div>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                                        <h1 className="text-4xl md:text-5xl font-bold mb-4  animate__animated animate__fadeInUp ">Build Your Community</h1>
                                        <p className="text-lg md:text-xl mb-8 max-w-2xl animate__animated animate__fadeInUp">Exchange skills and grow together with local learners</p>
                                        <Link to="/">
                                            <button className="cursor-pointer bg-gray-900 tex-white py-2 px-5 rounded-xl animate__animated animate__fadeInUp">
                                                Get Started
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    className="w-full h-full bg-cover bg-center relative"
                                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=500&fit=crop)` }}
                                >
                                    <div className="absolute inset-0 bg-black/40"></div>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                                        <h1 className="text-4xl md:text-5xl font-bold mb-4  animate__animated animate__fadeInUp ">Build Your Community</h1>
                                        <p className="text-lg md:text-xl mb-8 max-w-2xl animate__animated animate__fadeInUp">Exchange skills and grow together with local learners</p>
                                        <Link to="/">
                                            <button className="cursor-pointer bg-gray-900 tex-white py-2 px-5 rounded-xl animate__animated animate__fadeInUp">
                                                Get Started
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    className="w-full h-full bg-cover bg-center relative"
                                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=500&fit=crop)` }}
                                >
                                    <div className="absolute inset-0 bg-black/40"></div>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                                        <h1 className="text-4xl md:text-5xl font-bold mb-4  animate__animated animate__fadeInUp ">Build Your Community</h1>
                                        <p className="text-lg md:text-xl mb-8 max-w-2xl animate__animated animate__fadeInUp">Exchange skills and grow together with local learners</p>
                                        <Link to="/">
                                            <button className="cursor-pointer bg-gray-900 tex-white py-2 px-5 rounded-xl animate__animated animate__fadeInUp">
                                                Get Started
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </section>
            <section className='py-20 bg-white'>
                <div className="container  overflow-hidden md:overflow-visible">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate__animated animate__fadeInUp text-gray-900">Popular Skills</h2>
                        <p className="text-center text-lg animate__animated animate__fadeInUp text-gray-900">
                            Discover amazing skills offered by local experts in your community
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={skill.skillId}
                            >
                                <Skill data-aos="fade-left" className=" overflow-hidden md:overflow-visible" key={index} skill={skill} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='py-20 bg-gray-100'>
                <div className="container  overflow-hidden md:overflow-visible">
                    <div className="mb-12 animate__animated animate__fadeInUp">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900" data-aos="fade-up">Top Rated Providers</h2>
                        <p className="text-center text-lg text-gray-900" data-aos="fade-up">
                            Learn from the most highly-rated skill providers in our community
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {skills?.sort((a, b) => b.rating - a.rating)?.slice(0, 3).map((provider, index) => (
                            <Provider data-aos="fade-left" className=' overflow-hidden md:overflow-visible' key={index} provider={provider} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <HowItWorks />
            <ContactSection />


            {/* <ContactSection /> */}
        </div>
    )
}

export default Home
