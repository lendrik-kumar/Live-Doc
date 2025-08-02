import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='bg-white p-8 rounded-lg shadow-md w-96'>
            <h4 className='text-2xl font-semibold text-gray-800 mb-6 text-center'>Join a room</h4>
            <div className='space-y-4'>
                <input 
                    type="text" 
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400' 
                    placeholder='Room ID' 
                />
                <input 
                    type="text" 
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400' 
                    placeholder='Username' 
                />
            </div>
            <div className='mt-6'>
                <button className='w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors'>
                    Join
                </button>
            </div>
            <div className='mt-6 text-center'>
                <span>
                    Don't have an invite? then &nbsp; 
                    <a href="" className='text-blue-500 hover:underline'>
                        Create one
                    </a>
                </span>
            </div>
        </div>
        <footer className='' >
            <div className='text-center mt-8 text-gray-500'>
                <p>Made with ❤️ by Sanket Kamboj</p>
            </div>
            <span className='text-center block mt-2 text-gray-500'>
                source code on &nbsp;
                <a href="https://github.com/lendrik-kumar/LiveDoc" className='text-blue-500 hover:underline'>
                    GitHub
                </a>
            </span>
        </footer>
    </div>
  )
}

export default Home