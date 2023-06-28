import React from 'react'

const Profile = (props) => {
    const {img} = props;
    return (
        <div className='flex bg-teal-950  text-white'>
            <div className=' bg-clip-text text-transparent text-black w-6/12 py-11 flex flex-col items-center justify-center' style={{backgroundImage: `url(${img})`, backgroundPosition: 'center'}}>
                <div className='gap-2 px-11 font-serif'>
                    <h1 className='text-5xl'>Kathiresh P</h1>
                    <p className='italic'>from Vellakovil, Tiruppur.</p>
                </div>
            </div>
            <div className='bg-teal-600 w-6/12 flex flex-col items-center justify-center'>
            <div className='gap-2 px-11 font-serif'>
                <h1 className='text-3xl font-bold'>Bachelor of Engineering</h1>
                <p className='italic'>Computer Science and Engineering</p>
                <p className='italic'>Full stack developer - MERN</p>
            </div>
            </div>
        </div>
    )
}

export default Profile