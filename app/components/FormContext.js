"use client";

import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <FormContext.Provider
      value = {{ formData, setFormData, currentStep, nextStep, prevStep }}
    >
        {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);