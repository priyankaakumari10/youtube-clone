import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='py-2 px-4 m-2 bg-slate-300 rounded-md'>
            {name}
        </button>
    </div>
  )
}

export default Button