"use client";

import { createContext, useContext, useState, useEffect } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    relationshipStatus: '',
    motherName: '',
    fatherName: '',
    houseNumber: '',
    street: '',
    cityState: '',
    postalCode: '',
    country: '',
    id_document: null,
    proof_of_address: null,
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isMounted, setIsMounted] = useState(false);  // Track if mounted

  useEffect(() => {
    setIsMounted(true);  // set to true once mounted on client
  }, []);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  if (!isMounted) {
    return null;  // prevent hydration mismatch by returning null until client is ready
  }

  return (
    <FormContext.Provider
      value = {{ formData, setFormData, currentStep, nextStep, prevStep }}
    >
        {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
