import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const List=["All","Live","Gaming","Songs","Cooking","UPSC","Cricket"]

  return (
    <div className='flex'>
     {
      List.map((item,index)=>
       (
          <Button key={index} name={item}/>
        )
     )}
    </div>
  )
}


export default ButtonList