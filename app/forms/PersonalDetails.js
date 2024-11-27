// Extracting the User's personal information from the form
"use client";

import { useForm } from "@components/FormContext";
import { useForm as useHookForm  } from "react-hook-form";

const PersonalDetails = () => {
  const { formData, setFormData, nextStep, prevStep } = useForm();
  const { register, handleSubmit, formState: { errors } } = useHookForm();

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="firstname" className="block font-medium text-gray-700">First Name</label>
          <input 
            id="firstname" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("firstname", { required: "First name is required" })} 
          />
          {errors.firstname && <span className="text-red-500 text-sm">{errors.firstname.message}</span>}
        </div>
        <div className="space-y-2">
          <label htmlFor="lastname" className="block font-medium text-gray-700">Last Name</label>
          <input 
            id="lastname" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("lastname", { required: "Last name is required" })} 
          />
          {errors.lastname && <span className="text-red-500 text-sm">{errors.lastname.message}</span>}
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
          <label htmlFor="dob" className="block font-medium text-gray-700">Date Of Birth</label>
          <input 
            id="dob" 
            type="date" placeholder="MM/DD/YYYY" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("dob", { required: "DOB is required" })} 
          />
          {errors.dob && <span className="text-red-500 text-sm">{errors.dob.message}</span>}
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
          <label htmlFor="phone" className="block font-medium text-gray-700">Phone Number</label>
          <input 
            id="phone" 
            type="tel" placeholder="123-456-7890" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("phone", { required: "Enter your phone number" })} 
          />
          {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
        </div>
        <div className="space-y-2">
          <label htmlFor="relationship" className="block font-medium text-gray-700">Relationship Status</label>
          <select 
            id="relationship" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("relationship", { required: "Please tell us your relationship status" })}
          >
            <option value="">Select...</option>
            <option value="single">Single</option>
            <option value="in_a_relationship">In a Relationship</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
          </select>
          {errors.relationship && <span className="text-red-500 text-sm">{errors.relationship.message}</span>}
        </div>
        <div className="space-y-2">
          <label htmlFor="mothername" className="block font-medium text-gray-700">Mother&apos;s Name</label>
          <input 
            id="mothername" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("mothername", { required: "What's your mother's name?" })} 
          />
          {errors.mothername && <span className="text-red-500 text-sm">{errors.mothername.message}</span>}
        </div>
        <div className="space-y-2">
          <label htmlFor="fathername" className="block font-medium text-gray-700">Father&apos;s Name</label>
          <input 
            id="fathername" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("fathername", { required: "What's your father's name?" })} 
          />
          {errors.fathername && <span className="text-red-500 text-sm">{errors.fathername.message}</span>}
        </div>
        <div className="flex justify-between mt-6">
          <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">
            Back
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Next</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
