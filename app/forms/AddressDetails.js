// Extracting the User's address information from the form
"use client";

import { useForm } from "@components/FormContext";
import { useForm as useHookForm  } from "react-hook-form";

const AddressDetails = () => {
  const { formData, setFormData, nextStep } = useForm();
  const { register, handleSubmit } = useHookForm();

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="house_number">House Number</label>
        <input id="house_number" type="text" {...register("house_number", { required: true })} />
      </div>
      <div>
        <label htmlFor="street">street</label>
        <input id="street" type="text" {...register("street", { required: true })} />
      </div>
      <div>
        <label htmlFor="city_state">City/State</label>
        <input id="city_state" type="text" {...register("city_state", { required: true })} />
      </div>
      <div>
        <label htmlFor="postal_code">Postal Code</label>
        <input id="postal_code" type="text" {...register("postal_code", { required: true })} />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <input id="country" type="text" {...register("country", { required: true })} />
      </div>
    </form>
  );
};

export default AddressDetails;