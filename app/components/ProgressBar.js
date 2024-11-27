// Enhancing the UX with a Progress Bar
"use client";

import { useForm } from "@components/FormContext";

const ProgressBar = () => {
  const { currentStep } = useForm();
  const steps = 4;

  return (
    <div className="w-full bg-gray-300 rounded-full h-2.5">
      <div
        className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
        style={{ width: `${(currentStep / steps) * 100}%`}}
      ></div>
    </div>
  );
};

export default ProgressBar;