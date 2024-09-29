import React from 'react'

const Home = () => {
return (
    <div className="landing-page bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl mb-8 text-center max-w-lg">
            Discover amazing content and explore new horizons with us.
        </p>
        <button className="explore-button bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
            Explore
        </button>
    </div>
)
}

export default Home
