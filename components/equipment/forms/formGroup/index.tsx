import React from 'react'

interface child {
    children: React.ReactNode;
    heading: string;
}
export const FormGroup = ({children, heading}:child) => {
  return (
    <div className='w-full rounded border-2 border-gray-300 flex flex-col gap-4 border-dashed p-4'>
        <h3 className='text-black text-lg text-left'>{heading}</h3>
        <div className='flex flex-wrap justify-evenly gap-4 w-full'>
          {children}
        </div>
    </div>
  )
}
