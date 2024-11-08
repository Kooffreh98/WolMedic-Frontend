import React from 'react'
import EquipmentCard, { CardProps } from '../card'


interface List {
    data: CardProps[]
}

const EquipmentList = (props:List) => {
  return (
    <section className='flex flex-wrap w-[90%] m-auto bg-transparent justify-start gap-4'>
        {props.data.map((item, index) => (
            <EquipmentCard key={index} name={item.name} category={item.category} action={item.action} icon={item.icon} />
        ))
        }
    </section>
  )
}

export default EquipmentList