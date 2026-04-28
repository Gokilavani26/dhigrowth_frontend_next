"use client";

import { useState } from "react";
import { toastError } from "@/utils/toastHandler";
import publicStore from "@/stores/publicStores";

type FormData = {
  name: string;
  email: string;
  number: string;
  location: string;
  primarySkillSet: string;
  experiences: string;
  additionalSkillSet: string;
  portfolioLink: string;
  websiteLink: string;
  currentStatus: string;
  preferredTypesProjects: string;
  preferredIndustries: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  number: "",
  location: "",
  primarySkillSet: "",
  experiences: "",
  additionalSkillSet: "",
  portfolioLink: "",
  websiteLink: "",
  currentStatus: "",
  preferredTypesProjects: "",
  preferredIndustries: "",
};

const stepOneFields = [
  ["name", "NAME :", "Enter your name"],
  ["email", "EMAIL :", "Enter your email"],
  ["number", "NUMBER :", "Enter your number"],
  ["location", "LOCATION :", "Enter your location"],
  ["primarySkillSet", "PRIMARY SKILL SET :", "Enter your primary skill set"],
  ["experiences", "EXPERIENCES :", "Enter your experiences"],
] as const;

const stepTwoFields = [
  ["additionalSkillSet", "ADDITIONAL SKILL SET :", "You also good at"],
  ["portfolioLink", "PORTFOLIO LINK :", "Drive link"],
  ["websiteLink", "WEBSITE LINK :", "Website link"],
  ["currentStatus", "YOUR CURRENT STATUS :", "Working / Freelancer"],
  ["preferredTypesProjects", "PREFERRED TYPES OF PROJECTS :", "You are good at"],
  ["preferredIndustries", "PREFERRED INDUSTRIES TO WORK IN :", "Industry"],
] as const;

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] =
    useState<FormData>(initialForm);

  const submitSkilledUsersForm = publicStore(
    (state: any) => state.submitSkilledUsersForm
  );

  const isLoading = publicStore(
    (state: any) => state.isLoading
  );

  const updateField = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateStep1 = () => {
    if (!formData.name.trim()) {
      toastError("Name is required");
      return false;
    }

    if (
      !/^\S+@\S+\.\S+$/.test(
        formData.email
      )
    ) {
      toastError("Valid email required");
      return false;
    }

    if (
      !/^\d{10}$/.test(
        formData.number
      )
    ) {
      toastError(
        "Phone must be 10 digits"
      );
      return false;
    }

    if (!formData.location.trim()) {
      toastError("Location required");
      return false;
    }

    if (!formData.primarySkillSet.trim()) {
      toastError(
        "Primary skill set required"
      );
      return false;
    }

    if (!formData.experiences.trim()) {
      toastError(
        "Experience required"
      );
      return false;
    }

    return true;
  };

  const handleNext = () => {
    if (!validateStep1()) return;
    setCurrentStep(2);
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleSubmit = async () => {
    const response =
      await submitSkilledUsersForm(
        formData
      );

    if (response) {
      setFormData(initialForm);
      setCurrentStep(1);
    }
  };

  const renderField = (
    field: keyof FormData,
    label: string,
    placeholder: string,
    type = "text"
  ) => (
    <div className="space-y-2">
      <label className="font-headers text-white text-2xl">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={formData[field]}
        onChange={(e) =>
          updateField(
            field,
            e.target.value
          )
        }
        className="w-full bg-transparent
        placeholder:text-white/80
        border-b border-white/50
        focus:border-white
        text-white py-2
        outline-none font-body"
      />
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row w-full bg-white">

      {/* LEFT */}
      <div className="w-full md:w-1/2 lg:p-12 p-0 self-start">
        <h3 className='font-headers text-5xl md:block hidden leading-tight text-black mb-6'>
          JOIN OUR COMMUNITY IN 5 <br /> MINUTES
        </h3>

        <p className="font-body text-gray text-lg leading-relaxed">
          Join our skilled community in minutes! Share your skills and experience to unlock tailored gigs. Once verified, access your dashboard and start earning. Let's begin!
        </p>
      </div>

      {/* RIGHT FORM */}
      <div className="w-full md:w-1/2 lg:p-12 p-0">
        <div className="bg-[#686977] rounded-lg p-8">

          {/* Progress */}
          <div className="mb-8 flex gap-2">
            <div
              onClick={handleBack}
              className={`h-1 w-1/2 rounded-full cursor-pointer
              ${currentStep === 1
                  ? "bg-primary"
                  : "bg-white/50"
                }`}
            />

            <div
              className={`h-1 w-1/2 rounded-full
              ${currentStep === 2
                  ? "bg-primary"
                  : "bg-white/50"
                }`}
            />
          </div>

          {currentStep === 1 ? (
            <div className="space-y-4">

              {stepOneFields.map(
                ([field, label, placeholder]) =>
                  <div key={field}>
                    {renderField(
                      field,
                      label,
                      placeholder,
                      field === "email"
                        ? "email"
                        : "text"
                    )}
                  </div>
              )}

              <button
                type="button"
                onClick={handleNext}
                className="bg-primary
                hover:bg-btn-hover
                text-white font-bold
                py-3 px-8 rounded-md"
              >
                {isLoading
                  ? "Validating..."
                  : "Next"}
              </button>

            </div>
          ) : (
            <div className="space-y-4">

              {stepTwoFields.map(
                ([field, label, placeholder]) =>
                  <div key={field}>
                    {renderField(
                      field,
                      label,
                      placeholder
                    )}
                  </div>
              )}

              <div className="pt-4 space-x-2">

                <button
                  type="button"
                  onClick={handleBack}
                  className="bg-primary
                  hover:bg-btn-hover
                  text-white font-bold
                  py-3 px-8 rounded-md"
                >
                  Back
                </button>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="bg-primary
                  hover:bg-btn-hover
                  text-white font-bold
                  py-3 px-8 rounded-md"
                >
                  {isLoading
                    ? "Submitting..."
                    : "Submit"}
                </button>

              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}