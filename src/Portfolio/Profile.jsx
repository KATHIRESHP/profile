import React from 'react'

const Profile = (props) => {
    const { img } = props;
    return (
        <div className='flex flex-col md:flex-row  bg-teal-950   text-white'>
            <div className=' bg-clip-text text-transparent text-black lg:w-6/12 sm:w-full py-5 md:py-10 flex flex-col items-center justify-center' style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center' }}>
                <div className='gap-2 xl:px-11 lg:px-7 md:px-3 sm:px-0 font-serif'>
                    <h1 className='xl:text-3xl lg:text-xl md:text-lg sm:text-lg '>Kathiresh P</h1>
                    <p className='italic'>from Vellakovil, Tiruppur.</p>
                    <p className='italic cursor-text bg-teal-950 text-white text-lg md:text-xl '>Contact: kathireshpalanisamy055@gmail.com</p>
                </div>
            </div>
            <div className='bg-teal-600 py-5 md:py-10 lg:w-6/12 sm:w-full md:w-full flex flex-col items-center justify-center'>
                <div className='gap-2 xl:px-11 lg:px-7 md:px-3 sm:px-0 font-serif'>
                    <h1 className='xl:text-3xl lg:text-xl md:text-lg sm:text-lg  font-bold'>Bachelor of Engineering</h1>
                    <p className='italic'>Computer Science and Engineering</p>
                    <p className='italic'>Full stack developer - MERN</p>
                </div>
            </div>
        </div>
    )
}

export default Profile