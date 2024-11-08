import React from 'react'
import Button from '../../btn'
import Image from 'next/image'
import { SimpleHeader } from '../../header'
import { InputBtn } from '../input'
import cancel from '@/public/icons/cancel.svg'

export const AddCategory = () => {
  return (
    <div className='flex flex-col justify-between bg-white shadow rounded-lg'>
        <div className='flex justify-between'>
            <SimpleHeader heading='Create a new Category' />
            <Image src={cancel} alt='cancel'/>
        </div>
        <form className='flex flex-col justify-between'>
            <div>
              <label htmlFor='name'>Category Name</label>
              <InputBtn name='name' />
            </div>
            <Button text='Save' width='w-1/2'/>
        </form>
    </div>
  )
}
