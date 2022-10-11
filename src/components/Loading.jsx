import React from 'react'
import '../style/load.css';

export const Loading = () => {
  return (
    <div className='flex flex-col items-center'>
        <h3 className='text-gray-50 place-self-center font-bold text-2xl'>Loading..</h3>
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
