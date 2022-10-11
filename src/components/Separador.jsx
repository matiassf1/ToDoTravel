import React from 'react'

export const Separador = React.memo(() => {
    return (
      <hr className='w-1/3 sm:w-full my-2' style={{
          background: 'RoyalBlue',
          color: 'RoyalBlue',
          borderColor: 'RoyalBlue',
          height: '3px',
        }}/>
    )
  })
