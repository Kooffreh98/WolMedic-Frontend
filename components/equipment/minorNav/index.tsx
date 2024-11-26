import React from 'react'
import Button from '../../ui/Button'
import Link from 'next/link'

interface Props {
    heading: string
    btn: string
    btn2: string
    onclick: () => void
    onclick2: () => void
}

export const MinorNav = (props: Props) => {
  return (
    <div className='flex flex-row justify-between h-10 my-4'>
        <h3 className='text-black text-lg pl-5 md:pl-[15%]'>{props.heading}</h3>
        <div className='flex justify-between gap-4'>
            <Button label={props.btn} onClick={props.onclick} />
            <Button label={props.btn2} type='critical' onClick={props.onclick2} />
        </div>
    </div>
  )
}
