// A summary of all the data entered from the forms
// Allowing Users to review and go back to make changes
"use client";

import { useForm } from "@/components/FormContext";

const Summary = () => {
  const { formData, prevStep } = useForm();

  const handleSubmit = () => {
    alert("Form submitted successfully!");
    console.log(formData);
  };

  return (
    <div>
      <h2>Review Your Details</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <div>
        <button onClick={prevStep}>Back</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Summary;