// Extracting the User's address information from the form
"use client";

import { useForm } from "@components/FormContext";
import { useForm as useHookForm  } from "react-hook-form";

const AddressDetails = () => {
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
          <label htmlFor="house_number" className="block font-medium text-gray-700">House Number</label>
          <input 
            id="house_number" 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("house_number", { required: "House number is required" })} 
          />
          {errors.house_number && <span className="text-red-500 text-sm">{errors.house_number.message}</span>}
        </div>
        <div className="space-y-2">
          <label htmlFor="street" className="block font-medium text-gray-700">street</label>
          <input 
            id="street" 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("street", { required: "Street name is required" })} 
          />
          {errors.street && <span className="text-red-500 text-sm">{errors.street.message}</span>}
        </div>
        <div className="space-y-2">
          <label htmlFor="city_state" className="block font-medium text-gray-700">City/State</label>
          <input 
            id="city_state" 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("city_state", { required: "Enter a valid City or State" })} 
          />
          {errors.city_state && <span className="text-red-500 text-sm">{errors.city_state.message}</span>}
        </div>
        <div className="space-y-2">
          <label htmlFor="postal_code" className="block font-medium text-gray-700">Postal Code</label>
          <input 
            id="postal_code" 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("postal_code", { required: "Enter a valid postal code" })} 
          />
          {errors.postal_code && <span className="text-red-500 text-sm">{errors.postal_code.message}</span>}
        </div>
        <div className="space-y-2">
          <label htmlFor="country" className="block font-medium text-gray-700">Country</label>
          <input 
            id="country" 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("country", { required: "What Country are you from?" })} 
          />
          {errors.country && <span className="text-red-500 text-sm">{errors.country.message}</span>}
        </div>
        <div className="flex justifyn-between mt-6">
          <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">
            Back
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Next</button>
        </div>
      </form>
    </div>
  );
};

export default AddressDetails;
