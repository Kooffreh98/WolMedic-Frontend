import EquipmentBasicInfo from '@/components/equipment/forms/basicInfo'
import { EquipmentProgressBar } from '@/components/equipment/progressBar'
import Layout from "app/(root)/layout";
import React from 'react'

const BasicInformation = () => {
    return (
        <Layout>
            {/* Center the section both vertically and horizontally */}
            <section className='h-screen lg:ml-64 px-6 py-20 flex items-center justify-center'>
                <div className='w-full lg:w-3/5 bg-white rounded-lg p-5 flex flex-col gap-6 shadow-md'>
                    <EquipmentProgressBar progress={1} />
                    <EquipmentBasicInfo />
                </div>
            </section>
        </Layout>
    )
}

export default BasicInformation;
