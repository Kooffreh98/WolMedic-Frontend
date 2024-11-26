import React from 'react'


export const InputBtn = ({value, name, onChange}:{name:string, value?: string, onChange: React.ChangeEventHandler<HTMLInputElement>}) => {
  return (
    <input className='rounded border focus:outline-teal-600 border-solid h-12 p-2' type='text' id={name} name={name} value={value} onChange={onChange} />
  )
}
