import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col justify-between'>
        <div className='flex'>
            <img
                className='h-10 w-10' 
                alt="menu"
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png'
            />

            <img
                            className='h-20 w-40 items-center' 

                alt="logo"
src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png'            />
        </div>
        <div>
            <input type ="text" placeholder="Search" />
            <button>Search</button>
        </div>
        <div                className='h-10 w-10' 
>
            
            <img alt="user"
            src="https://pluspng.com/img-png/user-png-icon-download-icons-logos-emojis-users-2240.png"
            />
        </div>
    </div>
  )
}

export default Head