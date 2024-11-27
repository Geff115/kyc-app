// Rendering the steps dynamically
"use client";

import { useForm } from "@components/FormContext";
import PersonalDetails from "@forms/PersonalDetails";
import AddressDetails from "@forms/AddressDetails";
import DocumentUpload from "@forms/DocumentUpload";
import Summary from "@forms/Summary"
import ProgressBar from "@components/ProgressBar";

export default function KYCForm() {
  const { currentStep } = useForm();

  const steps = [
    <PersonalDetails key="step-1" />,
    <AddressDetails key="step-2" />,
    <DocumentUpload key="step-3" />,
    <Summary key="step-4" />
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">KYC Form</h1>
      <ProgressBar />
      <p>Start your KYC process here!</p>
      {steps[currentStep - 1]}
    </div>
  );
}
