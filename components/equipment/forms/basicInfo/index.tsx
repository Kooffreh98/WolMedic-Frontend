import React from 'react'
import Button from '../../btn'
import { InputBtn } from '../input'
import { SimpleHeader } from '../../header'

const EquipmentBasicInfo = () => {
  return (
    <div>
        <SimpleHeader heading='Basic Information' />
        <p className='text-center'>Enter the equipment name and category</p>
        <form className='flex flex-col justify-between gap-8'>
            <div className='flex flex-col gap-4'>
              <label htmlFor='name'>Name</label>
              <InputBtn name='name' />
            </div>
            <section className='flex gap-4 items-end'>
              <div className='w-4/5 flex flex-col gap-4'>
                <label htmlFor='category'>Category</label>
                <select className='rounded-md border focus:outline-teal-600 w-full border-solid p-2 h-12' id='category' name='category'>
                    <option className='hover:bg-teal-100'>Surgery</option>
                    <option className='hover:bg-teal-100'>Dialysis</option>
                    <option className='hover:bg-teal-100'>Cancer</option>
                    <option className='hover:bg-teal-100'>Physiotheraphy</option>
                </select>
              </div>
              <input type='button' className='bg-yellow-300 w-2/6 h-12 text-bg-teal-700 flex items-center justify-center' value="Add Category" />
            </section>
            <Button text='Next' width='w-1/2' />
        </form>
    </div>
  )
}

export default EquipmentBasicInfo