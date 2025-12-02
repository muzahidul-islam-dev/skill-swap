import React, { useState, useMemo, useEffect } from 'react';
import {
    ShoppingCart,
    Search,
    Filter,
    ArrowUpDown,
    ArrowLeft,
    Star,
    Heart,
    Menu,
    X,
    User
} from 'lucide-react';
import Skill from '../../components/Skill';



export default function AllSkills() {
    const [filterCategory, setFilterCategory] = useState('All');
    const [sortOrder, setSortOrder] = useState('default');
    const [loading, setLoading] = useState(true);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('/skills.json').then(res => res.json()).then(response => {
            setSkills(response)
            setLoading(false)
        })
    }, [])


    const categories = ['All', ...new Set(skills.map(item => item.category))];

    const processedItems = useMemo(() => {
        let items = [...skills];
        if (filterCategory !== 'All') {
            items = items.filter(item => item.category === filterCategory);
        }
        if (sortOrder === 'asc') {
            items.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'desc') {
            items.sort((a, b) => b.price - a.price);
        }

        return items;
    }, [filterCategory, sortOrder, skills]);

    console.log(categories)



    if (loading) return 'loading...'

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Learn New Skills</h1>
                <p className="mt-2 text-gray-600">Learn hands-on from the best mentors</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-64">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center">
                                <Filter className="h-5 w-5 mr-2 text-indigo-600" />
                                Filters
                            </h3>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3 block">
                                    Category
                                </label>
                                <div className="space-y-2">
                                    {categories.map((cat, index) => (
                                        <label key={index} className="flex items-center space-x-3 cursor-pointer group">
                                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${filterCategory === cat ? 'border-indigo-600' : 'border-gray-300 group-hover:border-indigo-400'}`}>
                                                {filterCategory === cat && <div className="w-2 h-2 rounded-full bg-indigo-600" />}
                                            </div>
                                            <input
                                                type="radio"
                                                name="category"
                                                value={cat}
                                                checked={filterCategory === cat}
                                                onChange={(e) => setFilterCategory(e.target.value)}
                                                className="hidden"
                                            />
                                            <span className={`text-sm ${filterCategory === cat ? 'font-medium text-indigo-700' : 'text-gray-600 group-hover:text-gray-900'} transition`}>
                                                {cat === 'All' ? 'All Categories' : cat}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex-1">

                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <span className="text-gray-500 text-sm mb-2 sm:mb-0 font-medium">
                            Showing: <span className="text-gray-900 font-bold">{processedItems.length}</span> Skills
                        </span>

                        <div className="flex items-center space-x-3">
                            <span className="text-sm text-gray-600 flex items-center">
                                <ArrowUpDown className="h-4 w-4 mr-1" /> Price:
                            </span>
                            <select
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                                className="block w-48 pl-3 pr-8 py-2 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-lg border bg-gray-50 hover:bg-white transition"
                            >
                                <option value="default">Default</option>
                                <option value="asc">Low to High (৳/Hour)</option>
                                <option value="desc">High to Low (৳/Hour)</option>
                            </select>
                        </div>
                    </div>


                    {processedItems.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {processedItems.map((item, index) => (
                                <div
                                    key={item.skillId}
                                >
                                    <Skill data-aos="fade-left" className=" overflow-hidden md:overflow-visible" key={index} skill={item} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
                            <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
                                <Search className="h-full w-full" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900">No skills found</h3>
                            <p className="mt-2 text-gray-500">Try a different category or filter.</p>
                            <button
                                onClick={() => { setFilterCategory('All'); setSortOrder('default'); }}
                                className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                View All Skills
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}