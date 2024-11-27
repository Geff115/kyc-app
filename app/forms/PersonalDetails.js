// Extracting the User's personal information from the form
"use client";

import { useForm } from "@components/FormContext";
import { useForm as useHookForm  } from "react-hook-form";

const PersonalDetails = () => {
  const { formData, setFormData, nextStep } = useForm();
  const { register, handleSubmit, formState: { errors } } = useHookForm();

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstname">First Name</label>
        <input id="firstname" {...register("firstname", { required: "First name is required" })} />
        {errors.firstname && <span className="text-red-500">{errors.firstname.message}</span>}
      </div>
      <div>
        <label htmlFor="lastname">Last Name</label>
        <input id="lastname" {...register("lastname", { required: "Last name is required" })} />
        {errors.lastname && <span className="text-red-500">{errors.lastname.message}</span>}
      </div>
      <div>
        <label htmlFor="gender">Gender</label>
        <select id="gender" {...register("gender", { required: "What do you identify as? Please specify" })}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <span className="text-red-500">{errors.gender.message}</span>}
      </div>
      <div>
        <label htmlFor="dob">Date Of Birth</label>
        <input id="dob" type="date" placeholder="MM/DD/YYYY" {...register("dob", { required: "DOB is required" })} />
        {errors.dob && <span className="text-red-500">{errors.dob.message}</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" {...register("email", { required: "Email address is required" })} />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" type="tel" placeholder="123-456-7890" {...register("phone", { required: "Enter your phone number" })} />
        {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
      </div>
      <div>
        <label htmlFor="relationship">Relationship Status</label>
        <select id="relationship" {...register("relationship", { required: "Please tell us your relationship status" })}>
          <option value="">Select...</option>
          <option value="single">Single</option>
          <option value="in_a_relationship">In a Relationship</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
        </select>
        {errors.relationship && <span className="text-red-500">{errors.relationship.message}</span>}
      </div>
      <div>
        <label htmlFor="mothername">Mother's Name</label>
        <input id="mothername" {...register("mothername", { required: "What's your mother's name?" })} />
        {errors.mothername && <span className="text-red-500">{errors.mothername.message}</span>}
      </div>
      <div>
        <label htmlFor="fathername">Father's Name</label>
        <input id="fathername" {...register("fathername", { required: "What's your father's name?" })} />
        {errors.fathername && <span className="text-red-500">{errors.fathername.message}</span>}
      </div>
      <button type="submit">Next</button>
    </form>
  );
};

export default PersonalDetails;
