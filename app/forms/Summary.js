// A summary of all the data entered from the forms
// Allowing Users to review and go back to make changes
"use client";

import { useForm } from "@components/FormContext";

const Summary = () => {
    const { formData, prevStep } = useForm();
  
    const handleSubmit = () => {
      alert("Form submitted successfully!");
      console.log(formData);
    };
  
    // Helper function to render the uploaded files
    const renderUploadedFile = (fileData, label) => {
      if (fileData && fileData.url) {
        return (
          <div className="mt-2">
            <p>{label}:</p>
            {fileData.type === "application/pdf" ? (
              <a
                href={fileData.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View {label} PDF
              </a>
            ) : (
              <img
                src={fileData.url}
                alt={`Preview of uploaded ${label}`}
                className="w-32 h-32 object-cover rounded-md mt-2"
              />
            )}
          </div>
        );
      }
      return null;
    };
  
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold">Review Your Details</h2>
        <div className="space-y-4">
          {/* Display the personal details in a form-like structure */}
          <div className="space-y-2">
            <p><strong>First Name:</strong> {formData.firstName}</p>
            <p><strong>Last Name:</strong> {formData.lastName}</p>
            <p><strong>Gender:</strong> {formData.gender}</p>
            <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
            <p><strong>Relationship Status:</strong> {formData.relationshipStatus}</p>
            <p><strong>Mother&apos;s Name:</strong> {formData.motherName}</p>
            <p><strong>Father&apos;s Name:</strong> {formData.fatherName}</p>
            <p><strong>Address:</strong> {formData.houseNumber} {formData.street}, {formData.cityState}, {formData.postalCode}, {formData.country}</p>
          </div>
  
          {/* Render Uploaded Files */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Uploaded Files:</h3>
            {renderUploadedFile(formData.id_document, "ID Document")}
            {renderUploadedFile(formData.proof_of_address, "Proof of Address")}
          </div>
  
          {/* Back and Submit Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevStep}
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Summary;