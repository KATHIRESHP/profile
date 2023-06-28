import React from 'react'

const Skills = (props) => {
    const { class_name, name } = props;
    return (
        <div className='xl:py-11 lg:py-8 md:py-6 sm:py-3 xl:text-5xl lg:text-3xl md:text-xl sm:text-lg xl:gap-11 lg:gap-8 md:gap-6 sm:gap-0 flex  items-center md:my-5 justify-center bg-teal-400 rounded-lg'>
            <div className='relative'>
                <i className={class_name}></i>
            </div>
            <div className='xl:text-2xl lg:text-xl md:text-lg sm:text-md'>
                {name}
            </div>
        </div>
    )
}

export default Skills