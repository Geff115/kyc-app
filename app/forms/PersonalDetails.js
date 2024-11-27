// Extracting the User's personal information from the form
"use client";

import { useForm } from "@components/FormContext";
import { useForm as useHookForm  } from "react-hook-form";

const PersonalDetails = () => {
  const { formData, setFormData, nextStep } = useForm();
  const { register, handleSubmit } = useHookForm();

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstname">First Name</label>
        <input id="firstname" {...register("firstname", { required: true })} />
      </div>
      <div>
        <label htmlFor="lastname">Last Name</label>
        <input id="lastname" {...register("lastname", { required: true })} />
      </div>
      <div>
        <label htmlFor="gender">Gender</label>
        <select id="gender" {...register("gender", { required: true })}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="dob">Date Of Birth</label>
        <input id="dob" type="date" placeholder="MM/DD/YYYY" {...register("dob", { required: true })} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" {...register("email", { required: true })} />
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" type="tel" placeholder="123-456-7890" {...register("phone", { required: true })} />
      </div>
      <div>
        <label htmlFor="relationship">Relationship Status</label>
        <select id="relationship" {...register("relationship", { required: true })}>
          <option value="">Select...</option>
          <option value="single">Single</option>
          <option value="in_a_relationship">In a Relationship</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
        </select>
      </div>
      <div>
        <label htmlFor="mothername">Mother's Name</label>
        <input id="mothername" {...register("mothername", { required: true })} />
      </div>
      <div>
        <label htmlFor="fathername">Father's Name</label>
        <input id="fathername" {...register("fathername", { required: true })} />
      </div>
      <button type="submit">Next</button>
    </form>
  );
};

export default PersonalDetails;