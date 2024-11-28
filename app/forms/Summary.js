// A summary of all the data entered from the forms
// Allowing Users to review and go back to make changes
"use client";

import { useForm } from "@components/FormContext";
import Image from "next/image";

const Summary = () => {
    const { formData, prevStep } = useForm();
  
    const handleSubmit = () => {
      alert("Form submitted successfully!");
    };

    // Helper function to format date
    const formatDate = (date) => {
      if (!date) return "N/A";
      if (typeof date === "string") return date;
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };
  
    // Helper function to render the uploaded files
    const renderUploadedFile = (fileData, label) => {
      console.log(`${label} Data:`, fileData);  // Log the file data
      if (!fileData || !fileData.url) {
        return <p className="text-red-500">{label} is missing!</p>;
      }
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
            <Image
              src={fileData.url}
              alt={`Preview of uploaded ${label}`}
              width={128}
              height={128}
              unoptimized
              className="w-32 h-32 object-cover rounded-md mt-2"
            />
          )}
        </div>
      );
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center">
        <div className="max-w-4xl w-full bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Review Your Details</h2>
          <div className="space-y-6">
            {/* Personal details */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700 text-center mb-3">Personal Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <p><strong>First Name:</strong> {formData.firstName}</p>
                <p><strong>Last Name:</strong> {formData.lastName}</p>
                <p><strong>Gender:</strong> {formData.gender}</p>
                <p><strong>Date of Birth:</strong> {formatDate(formData.dateOfBirth)}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
                <p><strong>Relationship Status:</strong> {formData.relationshipStatus}</p>
                <p><strong>Mother&apos;s Name:</strong> {formData.motherName}</p>
                <p><strong>Father&apos;s Name:</strong> {formData.fatherName}</p>
                <p><strong>Address:</strong> {formData.houseNumber} {formData.street}, {formData.cityState}, {formData.postalCode}, {formData.country}</p>
              </div>
            </div>
  
            {/* Uploaded Files */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-700 mb-3 text-center">Uploaded Files</h3>
              <div className="space-y-4">
                {renderUploadedFile(formData.id_document, "ID Document")}
                {renderUploadedFile(formData.proof_of_address, "Proof of Address")}
              </div>
            </div>
  
            {/* Action Buttons */}
            <div className="flex justify-between mt-6">
              <button
                onClick={prevStep}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 transition"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 transition"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Summary;
