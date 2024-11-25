"use client";
import { useEffect, useState } from 'react';
import EquipmentList from '@/components/equipment/cardList';
import { MinorNav } from '@/components/equipment/minorNav';
import add from '@/public/icons/add.svg';
import { equips } from '@/components/equipment/data';
import React from 'react';
import Layout from "app/(root)/layout";
import Navbar from "components/Navbar";

const EquipmentsPage = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  useEffect(() =>{
    const equipList = async () => {
      try {
        const response = await fetch(`https://medequip-api.vercel.app/api/equipment/`);
        if (!response.ok) throw new Error('Failed to fetch equipment', response.json);
        const data = await response.json();
        console.log(data);
        setEquipmentList(data);
      } catch (error) {
        console.error(error);
      }
    };

    equipList();
  },[]);
  return (
    <div className='bg-white'>
     {/* Sidebar Placeholder - hidden on small screens */}
     <Layout>
     <div className="hidden w-full md:ml-64 w-1/4 bg-white p-4">
       {/* Sidebar content here */}
     </div>
     <Navbar />
   </Layout>

    

      <section className='flex flex-col pt-20 md:pt-20 md:pl-[10%] lg:pl-[10%]'>
        {/* Heading and button at the top */}
        <MinorNav 
          heading='Equipment List' 
          btn='Add new' 
          src={add} 
          link='/equipments/basic_information' 
          alt='add new'
        />
        
        {/* List of equipment cards directly under the heading */}
        <div className="flex flex-wrap gap-4 mt-4">
          <EquipmentList data={equipmentList} />
        </div>
      </section>
    </div>
  )
}

export default EquipmentsPage
