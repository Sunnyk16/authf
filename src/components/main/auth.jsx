// import React from 'react';
// import './auth.css';

const Auth = () => {
    return (
        <div className="flex gap-2 px-2 py-2 ">
            {/* container 1 */}
            <div className="w-1/2  bg-gray-100 rounded-sm">
                {/* header */}
                <main>
                    <div className="columns-2 gap-2 px-1 py-1">
                        <div className="w-full h-5">
                            <img></img>
                            <p className="font-bold p-2 text-2xl capitalize">
                                <span className="text-green-600">regions</span> bank
                            </p>

                        </div>

                        <div className="  w-full h-5 flex justify-evenly  ">
                            <p className="font-semibold text-l text-center text-gray-500 p-2">are you a new customer?</p>
                            <button className="bg-white text-green-600 rounded-full w-auto h-10 p-1 px-2 shadow-sm font-bold  text-center capitalize ">enroll now</button>
                        </div>
                    </div>

                </main>

                {/* body */}
                <div className="w-full columns-1 ">

                    <div className="text-center">
                        <p className="text-3xl font-extrabold">welcome to bank</p>
                        <p className="font-semibold text-gray-500">
                            sign in to access your account
                        </p>
                    </div>


                    {/* <div className="w-full columns-1 flex flex-col mt-4 justify-center items-center">
                        <div className="relative w-full mb-4 flex justify-center">
                            <input type="text" id="username" className="peer w-96 h-12 p-3  border-gray-300 rounded-md text-base sm:text-lg md:text-xl focus:outline-none focus:border-green-500" placeholder=" " />
                            <label htmlFor="username" className="absolute left-3 top-3 text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-green-600 transition-all">Username</label>
                        </div>
                        <div className="relative w-full mb-6 flex justify-center">
                            <input type="password" id="password" className="peer w-96 h-12 p-3  border-gray-300 rounded-md text-base sm:text-lg md:text-xl focus:outline-none focus:border-green-500" placeholder=" " />
                            <label htmlFor="password" className="absolute left-3 top-3 text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-green-600 transition-all">Password</label>
                        </div>
                        <button className="w-96 h-12 bg-green-600 text-white rounded-full  mt-4 hover:bg-green-700 transition-all">Sign In</button>

                    </div> */}
                    <div className="w-full columns-1 flex flex-col mt-4 justify-center items-center">
                        <div className="relative w-96 mb-4">
                            <input type="text" id="username" className="peer w-full h-12 p-3 border-gray-300 rounded-md text-base sm:text-lg md:text-xl focus:outline-none focus:border-green-500" placeholder=" " />
                            <label htmlFor="username" className="absolute left-3 top-3 text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-green-600 transition-all">Username</label>
                        </div>
                        <div className="relative w-96 mb-6">
                            <input type="password" id="password" className="peer w-full h-12 p-3 border-gray-300 rounded-md text-base sm:text-lg md:text-xl focus:outline-none focus:border-green-500" placeholder=" " />
                            <label htmlFor="password" className="absolute left-3 top-3 text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-green-600 transition-all">Password</label>
                        </div>

                        <div className="flex items-start mb-4">
                            <input type="checkbox" id="rememberMe" className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">Remember me</label>
                        </div>                        
                        <button className="w-96 h-12 bg-green-600 text-white rounded-full mt-4 hover:bg-green-700 transition-all">Sign In</button>
                    </div>

                    <div className="flex justify-evenly mt-5">
                        <p className=" text-green-500  capitalize">forgot username</p>
                        <p className=" text-green-500 capitalize">forgot password</p> 
                    </div>



                </div>






            </div>

            {/* container 2 */}
            <div className="w-1/2 h-48 bg-red-600 rounded-sm">

            </div>
        </div>
    );
};

export default Auth;