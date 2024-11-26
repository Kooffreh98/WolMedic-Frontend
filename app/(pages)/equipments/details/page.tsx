"use client";
import { useEffect, useState } from 'react';
import EquipmentDetail from "@/components/equipment/forms/details";
import { EquipmentImageList } from "@/components/equipment/image/imageCollection";
import { MinorNav } from "@/components/equipment/minorNav";
import shears from "@/public/Images/shears.png";
import React from "react";
import Layout from "@/app/(root)/layout";
import Navbar from "@/components/Navbar";
import { useSearchParams, useRouter } from "next/navigation";

const EquipmentDetails = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams?.get('id');
  const [details, setDetails] = useState({
    name: "",
    category: "",
    description: "",
    tags: [],
    useCases: ""
  });

  useEffect(() =>{
    const fetchUsers = async () => {
      try {
        const response = await fetch(`https://medequip-api.vercel.app/api/equipment/${id}`);
        if (!response.ok) throw new Error('Failed to fetch equipment', response.json);
        const data = await response.json();
        console.log(data);
        setDetails(data);
        console.log(details);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  },[id]);

    const deleteEquipment = async () => {
      try {
        const res = await fetch(`https://medequip-api.vercel.app/api/equipment/${id}`,
          {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        );
        if (!res.ok) throw new Error('Failed to delete equipment', res.json);
        const data = await res.json();
        console.log(data);
        router.back();
      } catch (error) {
        console.error(error);
      }
      
    };

  

  const data = [
    { src: shears, alt: "shears" },
    { src: shears, alt: "shears" },
    { src: shears, alt: "shears" },
  ];
  const detail = {
    name: details.name,
    category: details.category,
    description:
      details.description,
    age: "19-35",
    gender: "Female",
    length: "15cm",
    width: "30cm",
    keywords: [details.tags],
  };

  return (
    <div className="flex bg-gray-100 flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <Layout>
        <div className="hidden md:block md:w-1/4 bg-white shadow-lg">
          {/* Sidebar content if needed */}
        </div>
        <Navbar />
      </Layout>

      {/* Main Content */}
      <div className="flex-1 lg:ml-[21%] p-6 space-y-6 pt-20">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <MinorNav
            heading="Equipment Details"
            btn="Edit"
            btn2="Delete"
            onclick2={() => deleteEquipment }
          />
          <div className="flex flex-wrap gap-4 mt-4">
            <EquipmentDetail {...detail} />
            <EquipmentImageList list={data} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default EquipmentDetails;
