import React from 'react'
import Image from 'next/image'

const Button = ({text, src, alt, color, width}:{text: string, src?: string, alt?: string, color?:string, width?:string}) => {
  return (
    <>
      <button type='button' className={`rounded flex m-auto border-none items-center justify-center h-10 ${width? width : 'w-max'} ${color? 'hover:bg-red-500 bg-red-600' : 'bg-teal-700'} p-5 text-white align-middle items-center`}>
        {src && alt && <Image src={src} alt={alt} />}
        {text}
      </button>
    </>
  )
}

export default Button