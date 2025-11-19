import React from 'react'

function Provider({ provider, index, className ,...rest }) {
    return (
        <div
            className={`bg-white p-6 rounded-lg text-center hover:shadow-lg duration-300 ${className ?? ''}`}
            {...rest}
        >
            <img
                src={provider.image}
                alt={provider.providerName}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-bold text-lg mb-2 text-gray-900">{provider.providerName}</h3>
            <p className="text-sm mb-3 text-gray-900">{provider.skillName}</p>
            <div className="flex items-center justify-center gap-1">
                <span className="text-yellow-400 font-bold">{provider.rating}</span>
                <span className="text-yellow-400">★</span>
            </div>
        </div>
    )
}

export default Provider
