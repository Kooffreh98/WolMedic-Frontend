import EquipmentBasicInfo from '@/components/equipment/forms/basicInfo'
import { EquipmentProgressBar } from '@/components/equipment/progressBar'
import React from 'react'

const BasicInformation = () => {
  return (
    <section className='h-screen grid'>
        <div className='w-2/5 m-auto bg-white slef-center rounded-lg p-5 flex flex-col gap-6 shadow-md'>
            <EquipmentProgressBar progress={1}/>
            <EquipmentBasicInfo />
        </div>
    </section>
  )
}

export default BasicInformation