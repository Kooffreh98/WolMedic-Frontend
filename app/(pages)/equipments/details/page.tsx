import EquipmentDetail from '@/components/equipment/forms/details'
import { EquipmentImageList } from '@/components/equipment/image/imageCollection'
import { MinorNav } from '@/components/equipment/minorNav'
import shears from '@/public/Images/shears.png'
import React from 'react'
import Layout from '@/app/(root)/layout'

const EquipmentDetails = () => {
  let data = [
    {src: shears, alt: 'shears'}, {src: shears, alt: 'shears'}, {src: shears, alt: 'shears'}
  ]
  let detail = {
    name: 'Scissors',
    category: 'Surgery',
    description: 'Lorem ipsum dolor sit amet consectetur. Tellus sapien laoreet quisque lorem dignissim adipiscing sit. Enim integer viverra pellentesque tempus turpis nunc. Amet vel amet morbi elit ultrices quisque a feugiat. Gravida nunc sit sit sit mauris viverra a ac nunc.',
    age: '19-35',
    gender: 'Female',
    length: '15cm',
    width: '30cm',
    keywords: ['Scissors', 'Surgery', 'Cutting', 'Shears']
  }
  return (
    <Layout>
    <section>
        <MinorNav heading='Equipment List' link='' btn='Edit' btn2='Delete' />
        <div className='flex'>
        <EquipmentDetail name= 'Scissors' category= 'Surgery' description= 'Lorem ipsum dolor sit amet consectetur. Tellus sapien laoreet quisque lorem dignissim adipiscing sit. Enim integer viverra pellentesque tempus turpis nunc. Amet vel amet morbi elit ultrices quisque a feugiat. Gravida nunc sit sit sit mauris viverra a ac nunc.' age= '19-35' gender= 'Female' length= '15cm' width= '30cm'
          keywords= {['Scissors', 'Surgery', 'Cutting', 'Shears']} />
        <EquipmentImageList list={data} />
        </div>
    </section>
    </Layout>
  )
}

export default EquipmentDetails