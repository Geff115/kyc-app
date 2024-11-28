// Allowing User's to upload files
"use client";

import { useForm } from "@components/FormContext";
import { useState, useEffect } from "react";
import { useForm as useHookForm } from "react-hook-form";
import Image from "next/image";

const DocumentUpload = () => {
  const { formData, setFormData, nextStep, prevStep } = useForm();
  const { register, handleSubmit, formState: { errors } } = useHookForm();

  const [idPreview, setIdPreview] = useState(null);
  const [proofPreview, setProofPreview] = useState(null);
  const [idFileError, setIdFileError] = useState("");
  const [proofFileError, setProofFileError] = useState("");

  const handleFileChange = (e, field, setError) => {
    const file = e.target.files[0];
    if (file) {
      const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];
      const allowedPdfType = "application/pdf";
      if (![...allowedImageTypes, allowedPdfType].includes(file.type)) {
        setError("Invalid file type");
        return;
      }
      // Ensuring the file size is not above the 5MB limit
      if (file.size > 5 * 1024 * 1024) {
        setError("File size exceeds the 5MB limit");
        return;
      }

      setError("");

      const blobURL = URL.createObjectURL(file);
      setFormData((prevData) => ({
        ...prevData,
        [field]: { url: blobURL, type: file.type, file: file.name },
      }));

      // Update the preview based on the field
      if (field === "id_document") setIdPreview({ url: blobURL, type: file.type });
      if (field === "proof_of_address") setProofPreview({ url: blobURL, type: file.type });
    }
  };

  useEffect(() => {
    // clean up blob URLs to free up memory
    return () => {
      if (idPreview?.url && !formData.id_document?.url) URL.revokeObjectURL(idPreview.url);
      if (proofPreview?.url && !formData.proof_of_address?.url) URL.revokeObjectURL(proofPreview.url);
    };
  }, [idPreview, proofPreview, formData]);

  const onSubmit = (data) => {
    nextStep();
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="id_document" className="block font-medium text-gray-700">Upload ID Document</label>
          <input
            id="id_document"
            type="file"
            accept=".jpg, .jpeg, .png, .pdf"
            className="w-full p-2 border border-gray-300 rounded-lg"
            {...register("id_document", { required: "Please upload a valid Government ID" })}
            onChange={(e) => handleFileChange(e, "id_document", setIdFileError)}
          />
          {idPreview && (
            <div className="relative w-32 h-32">
              {idPreview.type==="application/pdf" ? (
                <a href={idPreview.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  View your ID PDF
                </a>
              ) : (
                <Image
                  src={idPreview.url}
                  alt="Preview of uploaded ID Document"
                  width={128}
                  height={128}
                  unoptimized
                  className="object-cover rounded-md"
                />
              )}
              <button
                type="button"
                onClick={() => setIdPreview(null)}
                className="text-red-500 underline"
              >
                Remove
              </button>
            </div>
          )}
          {idFileError && <span className="text-red-500 text-sm">{idFileError}</span>}
          {errors.id_document && <span className="text-red-500 text-sm">{errors.id_document.message}</span>}
        </div>

        <div className="space-y-2">
          <label htmlFor="proof_of_address" className="block font-medium text-gray-700">Upload Proof of Address</label>
          <input
            id="proof_of_address"
            type="file"
            accept=".jpg, .png, .jpeg, .pdf"
            className="w-full p-2 border border-gray-300 rounded-lg"
            {...register("proof_of_address", { required: "Please upload a valid proof of address" })}
            onChange={(e) => handleFileChange(e, "proof_of_address", setProofFileError)}
          />
          {proofPreview && (
            <div className="relative w-32 h-32">
              {proofPreview.type === "application/pdf" ? (
                <a href={proofPreview.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  View Your proof of Address PDF
                </a>
              ) : (
                <Image
                  src={proofPreview.url}
                  alt="Preview of uploaded proof of address"
                  width={128}
                  height={128}
                  unoptimized
                  className="object-cover rounded-md"
                />
              )}
              <button
                type="button"
                onClick={() => setProofPreview(null)}
                className="text-red-500 underline"
              >
                Remove
              </button>
            </div>
          )}
          {proofFileError && <span className="text-red-500 text-sm">{proofFileError}</span>}
          {errors.proof_of_address && <span className="text-red-500 text-sm">{errors.proof_of_address.message}</span>}
        </div>

        <div className="flex justify-between mt-6">
          <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-600 transition ease-in-out duration-200">
            Back
          </button>
          <button 
            type="submit"
            disabled={idFileError || proofFileError || !idPreview || !proofPreview}
            className={`px-4 py-2 rounded-lg ${
              idFileError || proofFileError || !idPreview || !proofPreview
              ? 'bg-blue-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 transition ease-in-out duration-200 text-white'
            }`}
            >
              Submit
            </button>
        </div>
      </form>
    </div>
  );
};

export default DocumentUpload;
