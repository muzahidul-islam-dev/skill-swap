import { Star } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Skill({ skill, className, ...rest }) {
    return (
        <Link to={`/skill/${skill.skillId}`}>
            <div className={`bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg duration-300 ${className}`} {...rest}>
            <div className="relative h-48 overflow-hidden">
                <img
                    src={skill.image}
                    alt={skill.skillName}
                    className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
                />
            </div>


            <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-gray-900">{skill.skillName}</h3>
                <div className="flex items-center gap-1 mb-3">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={16}
                                className={i < Math.floor(skill.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                            />
                        ))}
                    </div>
                    <span className="text-sm font-medium text-gray-900">{skill.rating}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-gray-900">${skill.price}</span>
                </div>
                    <button className="w-full cursor-pointer bg-gray-900 text-white py-3 rounded-lg">View Details</button>
            </div>
        </div>
        </Link>
    )
}

export default Skill
