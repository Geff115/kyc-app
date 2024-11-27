// Extracting the User's address information from the form
"use client";

import { useForm } from "@components/FormContext";
import { useForm as useHookForm  } from "react-hook-form";

const AddressDetails = () => {
  const { formData, setFormData, nextStep } = useForm();
  const { register, handleSubmit, formState: { errors } } = useHookForm();

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="house_number">House Number</label>
        <input id="house_number" type="text" {...register("house_number", { required: "House number is required" })} />
        {errors.house_number && <span className="text-red-500">{errors.house_number.message}</span>}
      </div>
      <div>
        <label htmlFor="street">street</label>
        <input id="street" type="text" {...register("street", { required: "Street name is required" })} />
        {errors.street && <span className="text-red-500">{errors.street.message}</span>}
      </div>
      <div>
        <label htmlFor="city_state">City/State</label>
        <input id="city_state" type="text" {...register("city_state", { required: "Enter a valid City or State" })} />
        {errors.city_state && <span className="text-red-500">{errors.city_state.message}</span>}
      </div>
      <div>
        <label htmlFor="postal_code">Postal Code</label>
        <input id="postal_code" type="text" {...register("postal_code", { required: "Enter a valid postal code" })} />
        {errors.postal_code && <span className="text-red-500">{errors.postal_code.message}</span>}
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <input id="country" type="text" {...register("country", { required: "What Country are you from?" })} />
        {errors.country && <span className="text-red-500">{errors.country.message}</span>}
      </div>
      <div>
        <button type="button" onClick={prevStep}>
          Back
        </button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default AddressDetails;
