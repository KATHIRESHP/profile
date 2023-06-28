import React from 'react'
import NavItem from './NavItem'

const NavBar = () => {
    return (
        <div className='w-full'>
            <ul className='flex justify-between items-center pr-5'>
                <NavItem link="#home" name="Home"/>
                <NavItem link="#skills" name="Skills" />
                <NavItem link="#projects" name="Projects"/>
                <NavItem link="#internship" name="Internship"/> 
                <NavItem link="#resume" name="Resume"/> 
            </ul>
        </div>
    )
}

export default NavBar