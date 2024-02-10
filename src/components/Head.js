import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
const dispatch = useDispatch();
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }
    return (
        <div className='grid grid-flow-col justify-between m-2 p-2 shadow-2xl'>
            <div className='flex col-span-1'>
                <img
                    className='h-10 w-10 cursor-pointer'
                    alt="menu"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png'
                    onClick={()=>toggleMenuHandler()}
                />

                <img
                    className='h-10 w-28 items-center'

                    alt="logo"
                    src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png' />
            </div>
            <div className='col-span-10'>
                <input type="text" placeholder="Search" />
                <button>Search</button>
            </div>
            <div className='h-10 w-10 col-span-1'
            >

                <img alt="user"
                    src="https://pluspng.com/img-png/user-png-icon-download-icons-logos-emojis-users-2240.png"
                />
            </div>
        </div>
    )
}

export default Head