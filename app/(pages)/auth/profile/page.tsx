"use client";
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from "next/navigation";
import Layout from "app/(root)/layout";
import { FC } from "react";
import Modal from '@/components/Modal';

const UserDetailsPage: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams?.get('id');
  const [user, setUser] = useState({
    id: id,
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    role: '',
    createdAt: '',
    updatedAt: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const handleOpenModal = (userId: number) => {
    setSelectedUser(userId);
    setShowModal(true);
  };

  const handleConfirm = () => {
    setResponse("Yes");
    setShowModal(false);
  };

  const handleCancel = () => {
    setResponse("No");
    setShowModal(false);
  };

  useEffect(() =>{
    const fetchUsers = async () => {
      try {
        const response = await fetch(`https://medequip-api.vercel.app/api/users/${id}`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        );
        if (!response.ok) throw new Error('Failed to fetch equipment', response.json);
        const data = await response.json();
        console.log(data);
        setUser(data);
        console.log(user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  },[id]);

  useEffect(() => {
    const deleteUser = async () => {
      if (response === "Yes" && selectedUser !== null) {
        try {
          const res = await fetch(`https://medequip-api.vercel.app/api/users/${selectedUser}`,
            {
              method: 'DELETE',
              headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              },
            }
          );
          if (!res.ok) throw new Error('Failed to delete user', res.json);
          const data = await res.json();
          console.log(data);
          router.back();
        } catch (error) {
          console.error(error);
        }
      }
      
    };
    deleteUser();
  }, [response, selectedUser]);

  return (
    <div className="flex flex-col bg-white w-full lg:grid lg:grid-cols-[auto,1fr] min-h-screen text-gray-800 bg-gray-100">
      {/* Sidebar Placeholder - hidden on small screens */}
      <Layout>
        <div className="hidden w-full md:ml-64 lg:block w-1/4 bg-white p-4">
          {/* Sidebar content here */}
        </div>
      </Layout>

      {/* Main Content */}
      <div className="flex pt-20 flex-col flex-1">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              Accounts &gt; All Users &gt;{" "}
              <span className="text-green-500">User Profile</span>
            </h2>
          </div>
          <button onClick={() => router.back()} className="bg-gray-200 px-4 py-2 rounded-md text-gray-600 hover:bg-gray-300">
            Back
          </button>
        </header>

        {/* User Details Section */}
        <main className="flex-1 p-4 text-sm">
          <section className="bg-white rounded-lg shadow-md p-4 lg:p-6 mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              User Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 mb-1">First Name</label>
                <input
                  type="text"
                  value={user.firstname}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Last Name</label>
                <input
                  type="text"
                  value={user.lastname}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">
                  Email Address
                </label>
                <input
                  type="test"
                  value={user.email}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Occupation</label>
                <input
                  type="text"
                  value="Gynecologist"
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Address</label>
                <input
                  type="text"
                  value="San Jose, California, USA"
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Phone Number</label>
                <input
                  type="text"
                  value={user.phone}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                />
              </div>
              <Modal
                isOpen={showModal}
                message="Are you sure you want to proceed?"
                onConfirm={handleConfirm}
                onCancel={handleCancel}
              />
            </div>
          </section>

          {/* Statistics Section */}
          <section className="bg-white rounded-lg shadow-md p-4 lg:p-6 mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Statistics
            </h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-gray-700">450</p>
                <p className="text-gray-500">Searches</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-700">21</p>
                <p className="text-gray-500">Saves</p>
              </div>
            </div>
          </section>

          {/* Delete User Button */}
          <div className="flex justify-end">
            <button 
             onClick={() => {handleOpenModal(user.id);}} 
             className="px-4 lg:px-6 py-2 lg:py-3 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Delete User
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDetailsPage;
