import React from 'react'

const Project = (props) => {
    const {name, description, used} = props;
  return (
    <div className='container flex flex-col p-3 font-serif bg-teal-400 justify-center items-center rounded-lg'>
        <h1 className='text-2xl font-light'>{name}</h1>
        <br/>
        <p className='text-lg font-serif'>{description}</p>
        <h3 className='mt-6'>Items used:</h3>
        <h5>{used}</h5>
    </div>
  )
}

export default Project