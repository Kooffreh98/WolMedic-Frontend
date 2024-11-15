import EquipmentBasicInfo from '@/components/equipment/forms/basicInfo'
import { EquipmentProgressBar } from '@/components/equipment/progressBar'
import Layout from "app/(root)/layout";
import React from 'react'

const BasicInformation = () => {
  return (
    <Layout>
      <section className='h-screen grid'>
        <div className='lg:ml-64 w-full lg:w-3/5 m-auto bg-white self-center rounded-lg p-5 flex flex-col gap-6 shadow-md'>
          <EquipmentProgressBar progress={1} />
          <EquipmentBasicInfo />
        </div>
      </section>
    </Layout>
  )
}

export default BasicInformation
