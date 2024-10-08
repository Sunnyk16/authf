// import React from 'react';
// import './auth.css';
import img1 from "../../../public/img1.png"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css';

const Auth = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setLoading(true);
        // Simulate loading for 1 second (or your desired duration)
        setTimeout(() => {
            navigate('/'); // Change '/next-page' to your desired route
        }, 1000); // Adjust the timeout duration as needed
    };
    return (
        <div className="flex flex-col md:flex-row gap-4 px-2 mx-2 ">
            {/* container 1 */}
            <div className="w-full md:w-1/2 md:p-4 h-screen bg-gray-100 rounded-sm">
                {/* header */}
                <main>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-2 px-1 py-1 ">
                        <div className="w-full mb-2 h--3 md:mb-0 md:h-2">
                            <img></img>
                            <p className="font-bold p-2 text-2xl capitalize">
                                <span className="text-green-600">regions</span> bank
                            </p>

                        </div>

                        <div className="  w-full h-5 flex justify-evenly hidden lg:flex  ">
                            <p className="font-semibold text-l text-center text-gray-500 p-2">are you a new customer?</p>
                            <button className="bg-white text-green-600 rounded-full w-36 h-10 p-1 px-2 shadow-sm shadow-gray-400 font-bold  text-center capitalize ">enroll now</button>
                        </div>
                    </div>

                </main>

                {/* body */}
                <div className="w-full columns-1 mt-10 ">

                    <div className="text-center">
                        <p className="text-3xl font-extrabold">welcome to bank</p>
                        <p className="font-semibold text-gray-500">
                            sign in to access your account
                        </p>
                    </div>



                    <div className="w-full columns-1 flex flex-col mt-4 justify-center items-center">
                        <div className="relative w-96 mb-4 ">
                            <input type="text" id="username" className="peer w-full h-12 p-3 border-gray-300 rounded-md text-base sm:text-lg md:text-xl focus:outline-none focus:border-green-500 shadow-sm shadow-gray-400" placeholder=" " />
                            <label htmlFor="username" className="absolute left-3 top-3 text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-green-600 transition-all">Username</label>
                        </div>
                        <div className="relative w-96 mb-6">
                            <input type="password" id="password" className="peer w-full h-12 p-3 border-gray-300 rounded-md text-base sm:text-lg md:text-xl focus:outline-none focus:border-green-500 shadow-sm shadow-gray-400" placeholder=" " />
                            <label htmlFor="password" className="absolute left-3 top-3 text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-green-600 transition-all">Password</label>
                        </div>

                        <div className="flex items-start mb-4">
                            <input type="checkbox" id="rememberMe" className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">Remember me</label>
                        </div>
                        {/* <button className="w-96 h-12 bg-green-600 text-white rounded-full mt-4 hover:bg-green-700 transition-all">Sign In</button> */}
                        {/* <button
                            className={`w-96 h-12 bg-green-600 text-white rounded-full mt-4 hover:bg-green-700 transition-all ${loading ? 'spin' : ''}`}
                            onClick={handleClick}
                            disabled={loading} // Optional: disable the button while loading
                        >
                            {loading ? (
                                <span className="flex justify-center items-center">
                                    <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8z"></path>
                                    </svg>
                                    Loading...
                                </span>
                            ) : (
                                'Sign In'
                            )}
                        </button> */}
                        <button
      className="w-96 h-12 bg-green-600 text-white rounded-full mt-4 hover:bg-green-700 transition-all relative overflow-hidden"
      onClick={!loading ? handleClick : undefined} // Only trigger click if not loading
      disabled={loading} // Disable button while loading
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="loader mr-2"></div>
          <span>Processing...</span>
        </div>
      ) : (
        'Sign In'
      )}
      {loading && (
        <div className="absolute inset-0 bg-green-700 opacity-50 animate-pulse"></div>
      )}
    </button>
                    </div>

                    <div className="flex justify-evenly mt-5">
                        <p className=" text-green-500  capitalize">forgot username</p>
                        <p className=" text-green-500 capitalize">forgot password</p>
                    </div>



                </div>

                <div className="  w-full h-5 flex justify-evenly lg:hidden  mt-4 ">
                    <p className="font-semibold text-sm l:text-l  text-center text-gray-500 p-2 ">are you a new customer?</p>
                    <button className="bg-white text-green-600 rounded-full w-36  h-10 p-1 px-2 shadow-sm shadow-gray-400 font-bold sm:w-28 sm:h-8 text-center capitalize ">enroll now</button>
                </div>

                {/* footer */}
                <div className="mt-20 md:mt-52">
                    <div className="w-full columns-1 flex justify-center items-center mt-4">
                        <p className="text-gray-500">© 2024 Regions Bank. All Rights Reserved.</p>
                    </div>

                </div>







            </div>

            {/* container 2 */}
            <div className="w-full md:w-1/2  bg-gray-300 rounded-sm">
                <img src={img1} alt="img1" className="w-full h-full object-cover transition-transform duration-300 ease-in-out trasform hover:scale-105"></img>



            </div>
        </div>
    );
};

export default Auth;