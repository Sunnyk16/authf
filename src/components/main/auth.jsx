// import React from 'react';
// import './auth.css';

const Auth = () => {
    return (
        <div className="columns-2 gap-2 px-2 py-2">
            {/* container 1 */}
            <div className="w-full h-48 bg-gray-100 rounded-sm">
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
                        <p className="font-semibold text-l text-center text-gray-400 p-2">are you a new customer?</p>
                        <button className="bg-white text-green-600 rounded-full w-auto h-10 p-1 px-2 shadow-sm font-bold  text-center capitalize ">enroll now</button>
                    </div>
                </div>

                </main>

                {/* body */}
                

                
                
            </div>

            {/* container 2 */}
            <div className="w-full h-48 bg-red-600 rounded-sm">

            </div>
        </div>
    );
};

export default Auth;