import EquipmentList from '@/components/equipment/cardList'
import { MinorNav } from '@/components/equipment/minorNav'
import add from '@/public/icons/add.svg'
import { equips } from '@/components/equipment/data'
import React from 'react'

const EquipmentsPage = () => {
  return (
    <section className='flex flex-col justify-between'>
      <MinorNav heading='Equipment List' btn='Add new' src={add} link='/equipments/basic_information' alt='add new'/>
      <EquipmentList data={equips} />
    </section>
  )
}

export default EquipmentsPage