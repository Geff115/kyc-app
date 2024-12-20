// Extracting the User's personal information from the form
"use client";

import { useForm } from "@components/FormContext";
import { useForm as useHookForm  } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const PersonalDetails = () => {
  const { formData, setFormData, nextStep } = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useHookForm({ defaultValues: formData });  // Load default values from form data

  const [selectedDate, setSelectedDate] = useState(formData.dateOfBirth ? new Date(formData.dateOfBirth) : null);

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data, dateOfBirth: selectedDate });  // Update global form data
    nextStep();  // Go to the next step
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="firstName" className="block font-medium text-gray-700">First Name</label>
          <input 
            id="firstName" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("firstName", { required: "First name is required" })} 
          />
          {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="block font-medium text-gray-700">Last Name</label>
          <input 
            id="lastName" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("lastName", { required: "Last name is required" })} 
          />
          {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
        </div>
        <div className="space-y-2">
          <label htmlFor="gender" className="block font-medium text-gray-700">Gender</label>
          <select id="gender" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("gender", { required: "What do you identify as? Please specify" })}
          >
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className="text-red-500 text-sm">{errors.gender.message}</span>}
        </div>
        <div className="space-y-2">
          <label htmlFor="dateOfBirth" className="block font-medium text-gray-700">Date Of Birth</label>
          <DatePicker 
            id="dateOfBirth" 
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MM/dd/yyyy" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            maxDate={new Date()}
            placeholderText="MM/DD/YYYY"
          />
          {selectedDate && calculateAge(selectedDate) < 18 && (
            <span role="alert" className="text-red-500 text-sm">
              You must be at least 18 Years old
            </span>
          )}
          {!selectedDate && errors.dateOfBirth && (
            <span role="alert" className="text-red-500 text-sm">{errors.dateOfBirth.message}</span>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
          <input 
            id="email" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email", { required: "Email address is required" })} 
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>
        <div className="space-y-2">
          <label htmlFor="phoneNumber" className="block font-medium text-gray-700">Phone Number</label>
          <input 
            id="phoneNumber" 
            type="tel" placeholder="123-456-7890" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("phoneNumber", { required: "Enter your phone number" })} 
          />
          {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber.message}</span>}
        </div>
        <div className="space-y-2">
          <label htmlFor="relationshipStatus" className="block font-medium text-gray-700">Relationship Status</label>
          <select 
            id="relationshipStatus" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("relationshipStatus", { required: "Please tell us your relationship status" })}
          >
            <option value="">Select...</option>
            <option value="single">Single</option>
            <option value="in_a_relationship">In a Relationship</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
          </select>
          {errors.relationshipStatus && <span className="text-red-500 text-sm">{errors.relationshipStatus.message}</span>}
        </div>
        <div className="space-y-2">
          <label htmlFor="motherName" className="block font-medium text-gray-700">Mother&apos;s Name</label>
          <input 
            id="motherName" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("motherName", { required: "What's your mother's name?" })} 
          />
          {errors.motherName && <span className="text-red-500 text-sm">{errors.motherName.message}</span>}
        </div>
        <div className="space-y-2">
          <label htmlFor="fatherName" className="block font-medium text-gray-700">Father&apos;s Name</label>
          <input 
            id="fatherName" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("fatherName", { required: "What's your father's name?" })} 
          />
          {errors.fatherName && <span className="text-red-500 text-sm">{errors.fatherName.message}</span>}
        </div>
        <div className="flex justify-between mt-6">
          <button type="submit" className="text-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition ease-in-out duration-200">Next</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
