
import { Link } from 'react-router-dom'

const Home = () => {
return (
    <div className=" bg-gray-100  bg-gradient-to-r from-white to-green-200 min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl font-bold mb-4 test  text-green-400 lg:text-7xl  mx-2">Welcome <span className=''>to</span> Our Website</h1>
        <p className="text-xl mb-8 text-center max-w-lg text-zinc-600">
            Discover amazing content and explore new horizons with us.
        </p>
        <Link to={"/auth"} >
        <button className="explore-button bg-white text-green-500 font-semibold py-2 px-4 rounded-full shadow-sm shadow-gray-400 hover:bg-green-300 hover:text-white hover:scale-95 transition duration-300">
            Explore
        </button>
        </Link>
    </div>
)
}

export default Home
