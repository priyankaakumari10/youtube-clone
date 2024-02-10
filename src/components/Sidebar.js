import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
  //Early return pattern
  if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-48 bg-white z-50'>
        <h1 className='font-bold'>Subscription</h1>
        <ul>
            <li>Music</li>
            <li>Gamig</li>
            <li>Sports</li>
            <li>Movies</li>
        </ul>

        <h1 className='font-bold'>watch later</h1>
        <ul>
            <li>Music</li>
            <li>Gamig</li>
            <li>Sports</li>
            <li>Movies</li>
        </ul>

        <h1 className='font-bold'>Shorts</h1>
        <ul>
            <li>Music</li>
            <li>Gamig</li>
            <li>Sports</li>
            <li>Movies</li>
        </ul>
    </div>
  )
}

export default Sidebar