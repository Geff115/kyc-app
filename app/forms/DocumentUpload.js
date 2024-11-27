// Allowing User's to upload files
"use client";

import { useForm } from "@components/FormContext";
import { useState } from "react";
import { useForm as useHookForm } from "react-hook-form";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id_document">Upload ID Document</label>
        <input
          id="id_document"
          type="file"
          accept=".jpg, .jpeg, .png, .pdf"
          {...register("id_document", { required: "Please upload a valid Government ID" })}
          onChange={(e) => handleFileChange(e, setIdPreview, setFileError)}
        />
        {idPreview && <img src={idPreview} alt="Preview of uploaded ID Document" className="w-32 h-32 object-cover" />}
        {fileError && <span className="text-red-500">{fileError}</span>}
        {errors.id_document && <span className="text-red-500">{errors.id_document.message}</span>}
      </div>
      <div>
        <label htmlFor="proof_of_address">Upload Proof of Address</label>
        <input
          id="proof_of_address"
          type="file"
          accept=".jpg, .png, .jpeg, .pdf"
          {...register("proof_of_address", { required: "Please upload a valid proof of address" })}
          onChange={(e) => handleFileChange(e, setProofPreview, setFileError)}
        />
        {proofPreview && <img src={proofPreview} alt="Preview of uploaded proof of address" className="w-32 h-32 object-cover" />}
        {fileError && <span className="text-red-500">{fileError}</span>}
        {errors.proof_of_address && <span className="text-red-500">{errors.proof_of_address.message}</span>}
      </div>
      <div>
        <button type="button" onClick={prevStep}>
          Back
        </button>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};

export default DocumentUpload;
