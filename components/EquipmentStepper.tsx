"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "../components/ui/Button";

interface FormState {
  name: string;
  description: string;
  category: string;
  image: File | string;
  tags: string[];
  useCases: string;
}

const steps = [
  { id: 1, title: "Basic Information" },
  { id: 2, title: "Equipment Description" },
  { id: 3, title: "Specifications" },
  { id: 4, title: "Upload Images" },
  { id: 5, title: "Keywords" },
  { id: 6, title: "useCases" },
];

const EquipmentStepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [tag, setTag] = useState<string[]>([]);
  const [form, setForm] = useState<FormState>({
    name: '',
    description: '',
    category: '',
    image: '',
    tags: [],
    useCases: ''
  });

  function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = event.target;
   

    if (name === 'tags') {
        const tagsArray = value.split(',').map((tag) => tag.trim());
        setTag(tagsArray); // Fix: directly set the array instead of using spread operator
        setForm({...form, tags: tagsArray});
    }else if (name === 'image' && files && files.length>0) {
        // const file = files[0];
        setForm({...form, image: files[0]});
    } else{
        setForm({...form, [name]: value }); 
    }
    console.log(form);
  }

  const handleSubmit = async () => {
    
    const formData = new FormData();

  // Append all form fields to FormData
  formData.append("name", form.name);
  formData.append("description", form.description);
  formData.append("category", form.category);
  // formData.append("tags", JSON.stringify(form.tags));
  form.tags.forEach((tag) => formData.append("tags[]", tag));
  formData.append("useCases", form.useCases);

  // Append the file (if any)
   if (form.image instanceof File) {
    formData.append("files", form.image);
   }
    console.log(formData);
    
    
    try {
        const response = await fetch('https://medequip-api.vercel.app/api/equipment/',{
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          },
          body: formData,
        });
        if (response.ok) {
          //redirect to the email verification page after sucessfull submission
          const responseData = await response.json();
          console.log(responseData);
        }else {
          const errorData = await response.json();
          console.error("Error: Failed to submit the form", errorData);
          alert("Failed to create equipment");
        }
      } catch (error) {
        console.error("An error occured:", error);
      }
    
  }

  const renderStepContent = (step: number) => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold">Basic Information</h2>
            <p className="text-gray-600">
              Enter basic details of the equipment.
            </p>
            <input
              type="text"
              name="name"
              placeholder="Equipment Name"
              className="w-full border rounded-lg p-4 my-4"
              value={form.name}
              onChange={handleChange}
            />
            <label htmlFor="Category">Category</label> <br/>
            <select name="category" onChange={handleChange} id="Category" value={form.category}
             className="w-[70%] border rounded-lg p-4 my-4 mr-4"
            >
              <option value="Surgery">Surgery</option>
              <option value="Dialysis">Dialysis</option>
              <option value="Cancer">Cancer</option>
              <option value="Physiotherapy">Physiotherapy</option>
            </select>

            <Button label="Add Category" typeProperty="button"/>  
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold text-center">Equipment Description</h2>
            <p className="text-gray-600 text-center">
              Provide a detailed description of the equipment.
            </p>
            <textarea
              placeholder="Enter description here..."
              name="description"
              className="w-full border p-4 rounded-lg shadow-sm my-4"
              rows={5}
              value={form.description}
              onChange={handleChange}
            ></textarea>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-2xl font-bold">Specifications</h2>
            <p className="text-gray-600">
              Enter detailed specifications for the equipment.
            </p>
            <button className="flex items-center space-x-2 bg-yellow-100 border-yellow-400 text-yellow-600 p-4 rounded-lg shadow my-4">
              <span className="text-xl">+</span>
              <span>Add Specification</span>
            </button>
          </div>
        );
      case 4:
        return (
          <div>
            <h2 className="text-2xl font-bold">Upload Images</h2>
            <p className="text-gray-600">
              Upload clear images of the equipment.
            </p>
            <label className="block bg-gray-100 p-6 border border-gray-300 rounded-lg cursor-pointer my-4">
              <input type="file" className="hidden" name='image' onChange={handleChange} />
              <div className="flex flex-col items-center">
                <span className="text-gray-500">Choose Image</span>
                <Image
                  src="/placeholder.png"
                  alt="Upload Placeholder"
                  className="w-16 h-16 mt-2"
                  width={100}
                  height={100}
                />
              </div>
            </label>
          </div>
        );
      case 5:
          return (
            <div>
              <h2 className="text-2xl font-bold">Keywords</h2>
              <p className="text-gray-600">
                Add relevant keywords to improve searchability
              </p>
              <input
                type="text"
                name="tags"
                placeholder="keywords"
                className="w-full border rounded-lg p-4 my-4"
                value={tag.join(",")}
                onChange={handleChange}
              />
              
              {/* <Button label="Add Category" typeProperty="button"/>   */}
            </div>
          );
        case 6:
          return (
            <div>
              <h2 className="text-2xl font-bold text-center">Use Cases</h2>
              <p className="text-gray-600 text-center">
               Describe the practical applications of the equipment
              </p>
              <textarea
                placeholder="Enter use cases here..."
                name="useCases"
                className="w-full border p-4 rounded-lg shadow-sm my-4"
                rows={5}
                value={form.useCases}
                onChange={handleChange}
              ></textarea>
              <Button 
                typeProperty="submit"
                label='Create Equipment'
                otherStyles=''
                onClick={handleSubmit}
              />
            </div>
          );
      default:
        return null;
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Stepper Header */}
      <div className="flex justify-between items-center mb-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex-1 text-center ${
              step.id === currentStep
                ? "text-teal-500 font-bold"
                : "text-gray-400"
            }`}
          >
            <div className="h-2 w-full bg-gray-200 rounded-lg overflow-hidden">
              <div
                className={`h-2 ${
                  step.id <= currentStep ? "bg-teal-500" : "bg-gray-200"
                }`}
                style={{ width: `${100 / steps.length}%` }}
              ></div>
            </div>
            <p className="mt-2">{step.title}</p>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div>{renderStepContent(currentStep)}</div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className={`px-6 py-2 rounded-lg ${
            currentStep === 1
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length}
          className={`px-6 py-2 rounded-lg ${
            currentStep === steps.length
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-teal-500 text-white hover:bg-teal-600"
          }`}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default EquipmentStepper;
