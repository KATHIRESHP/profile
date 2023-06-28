import React from 'react'

const NavItem = (props) => {
    const {link, name} = props;
  return (
    <div className='px-3 py-2 rounded-md hover:bg-green-50 text-white hover:text-black text-xl font-light transition-all ease-in-out delay-100'>
        <li>
            <a href={link}>{name}</a>
        </li>
    </div>
  )
}

export default NavItem