// Extracting the User's address information from the form
"use client";

import { useForm } from "@components/FormContext";
import { useForm as useHookForm  } from "react-hook-form";
import Select from "react-select";
import useCountryList from "react-select-country-list";

const AddressDetails = () => {
  const { formData, setFormData, nextStep, prevStep } = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useHookForm({ defaultValues: formData });  // Load default values from form data

  // Fetching the countries list from the library
  const countries = useCountryList().getData();

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });  // Update global form data
    nextStep();  // Go to the next step
  };

  // Handle country change to update the react-hook-form value
  const handleCountryChange = (selectedOption) => {
    setValue("country", selectedOption ? selectedOption.value : "");  // Set country value in the form
    setFormData({ ...formData, country: selectedOption ? selectedOption.label : "" });  // Persisting the data in global form state

  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-mg rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="houseNumber" className="block font-medium text-gray-700">House Number</label>
          <input 
            id="houseNumber" 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("houseNumber", { required: "House number is required" })} 
          />
          {errors.houseNumber && <span className="text-red-500 text-sm">{errors.houseNumber.message}</span>}
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
          <label htmlFor="cityState" className="block font-medium text-gray-700">City/State</label>
          <input 
            id="cityState" 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("cityState", { required: "Enter a valid City or State" })} 
          />
          {errors.cityState && <span className="text-red-500 text-sm">{errors.cityState.message}</span>}
        </div>
        <div className="space-y-2">
          <label htmlFor="postalCode" className="block font-medium text-gray-700">Postal Code</label>
          <input 
            id="postalCode" 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("postalCode", { required: "Enter a valid postal code" })} 
          />
          {errors.postalCode && <span className="text-red-500 text-sm">{errors.postalCode.message}</span>}
        </div>
        <div className="space-y-2">
          <label htmlFor="country" className="block font-medium text-gray-700">Country</label>
          <Select 
            id="country" 
            options={countries}   // Dynamic list of countries
            onChange={handleCountryChange}  //Handle the change event
            defaultValue={countries.find((c) => c.value === getValues("country"))}  // Preselect country
            getOptionLabel={(e) => e.label}
            getOptionValue={(e) => e.value}
            className="react-select-container"
            classNamePrefix="react-select"
            isSearchable={true}  // Enabling search functionality
            placeholder="Select your country" 
          />
          {errors.country && <span className="text-red-500 text-sm">{errors.country.message}</span>}
        </div>
        <div className="flex justify-between mt-6">
          <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-600 transition ease-in-out duration-200">
            Back
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Next</button>
        </div>
      </form>
    </div>
  );
};

export default AddressDetails;
