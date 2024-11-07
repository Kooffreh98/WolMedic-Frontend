import React from 'react'
import Button from '../btn'
import Link from 'next/link'

interface Props {
    heading: string
    btn: string
    btn2?: string
    src?: string
    alt?: string
    link: string
}

export const MinorNav = (props: Props) => {
  return (
    <div className='flex flex-row justify-between h-10 my-4'>
        <h3 className='text-black text-lg'>{props.heading}</h3>
        <div className='flex justify-between gap-4'>
            <Link href={props.link}>{props.src? <Button text={props.btn} src={props.src} alt={props.alt} /> : <Button text={props.btn} />}</Link>
            {props.btn2 && <Button text={props.btn2} color='red' />}
        </div>
    </div>
  )
}
