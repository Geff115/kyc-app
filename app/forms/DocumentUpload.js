// Allowing User's to upload files
"use client";

import { useForm } from "@components/FormContext";
import { useState } from "react";
import { useForm as useHookForm } from "react-hook-form";
import Image from "next/image";

const DocumentUpload = () => {
  const { formData, setFormData, nextStep, prevStep } = useForm();
  const { register, handleSubmit, formState: { errors } } = useHookForm();

  const [idPreview, setIdPreview] = useState(null);
  const [proofPreview, setProofPreview] = useState(null);
  const [fileError, setFileError] = useState("");

  const handleFileChange = (e, setPreview, setError) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.match(/image\/(jpeg|png)|application\/pdf/)) {
        setError("Invalid file type");
      } else {
        setError("");
        setPreview(URL.createObjectURL(file));
      }
      // Ensuring the file size is not above the 5MB limit
      if (file.size > 5 * 1024 * 1024) {
        setError("File size exceeds the 5MB limit");
        return;
      }
    }
  };

  useEffect(() => {
    return () => {
      setIdPreview(null);
      setProofPreview(null);
    };
  }, []);

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="id_document" className="block font-medium text-gray-700">Upload ID Document</label>
          <input
            id="id_document"
            type="file"
            accept=".jpg, .jpeg, .png, .pdf"
            className="w-full p-2 border border-gray-300 rounded-lg"
            {...register("id_document", { required: "Please upload a valid Government ID" })}
            onChange={(e) => handleFileChange(e, setIdPreview, setFileError)}
          />
          {idPreview && <Image src={idPreview} alt="Preview of uploaded ID Document" className="w-32 h-32 object-cover" />}
          {fileError && <span className="text-red-500 text-sm">{fileError}</span>}
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
            onChange={(e) => handleFileChange(e, setProofPreview, setFileError)}
          />
          {proofPreview && <Image src={proofPreview} alt="Preview of uploaded proof of address" className="w-32 h-32 object-cover" />}
          {fileError && <span className="text-red-500 text-sm">{fileError}</span>}
          {errors.proof_of_address && <span className="text-red-500 text-sm">{errors.proof_of_address.message}</span>}
        </div>
        <div className="flex justify-between mt-6">
          <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">
            Back
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">submit</button>
        </div>
      </form>
    </div>
  );
};

export default DocumentUpload;
