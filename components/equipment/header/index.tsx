import React from 'react'

export const SimpleHeader = ({heading}:{heading:string}) => {
  return (
    <h3 className='text-black text-lg text-center'>{heading}</h3>
  )
}
