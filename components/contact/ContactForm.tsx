"use client";

import React, { useRef, useState, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { EMAIL_ID, PHONE_NO } from "@/config/contactConfig";
import publicStore from "@/stores/publicStores";

const iconBg = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  red: "bg-red-500",
} as const;

const contactItems = [
  {
    iconColor: "blue" as const,
    label: "Email:",
    value: EMAIL_ID,
    href: `mailto:${EMAIL_ID}`,
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 text-blue-400'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    iconColor: "green" as const,
    label: "Phone:",
    value: `+91-${PHONE_NO}`,
    href: `tel:${PHONE_NO}`,
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 text-green-400'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    iconColor: "red" as const,
    label: "Location:",
    value: "Chennai, Tamilnadu",
    href: null,
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 text-red-400'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];


export default function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const submitContactForm = publicStore(
    (state: any) => state.submitContactForm
  );
  const isLoading = publicStore(
    (state: any) => state.isLoading
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    projectDetails: "",
  });

  const updateField = (
    field: keyof typeof formData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const response = await submitContactForm({
      ...formData,
      projectBudget: "",
    });

    if (response) {
      setFormData({
        name: "",
        email: "",
        number: "",
        projectDetails: "",
      });
    }
  };

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        id="contact"
        className="w-full md:py-12 pb-8 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        {/* LEFT SIDE */}
        <motion.div
          className="w-full md:w-[60%] max-w-md self-start"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          <h3 className="font-headers text-5xl text-black mb-6">
            LET'S TALK ABOUT GROWING YOUR BUSINESS
          </h3>

          <p className="font-body text-gray text-lg leading-relaxed mb-6">
            Fill out the form below, and one of our experts will get in touch with you to discuss how we can elevate your business.</p>

          <div className="bg-gray-800 py-8 w-full">
            <h3 className="text-2xl font-bold mb-8">
              Contact Information
            </h3>

            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex mb-3 items-center gap-4 group"
              >
                <div
                  style={{
                    backgroundColor: `${item.iconColor}`,
                    opacity: 90,
                  }}
                  className={`${iconBg[item.iconColor]} p-4 rounded-xl`}
                >
                  <motion.div
                    animate={{
                      y: [0, -1, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                    }}
                  >
                    {item.icon}
                  </motion.div>
                </div>

                <div>
                  <p className="text-gray-400 font-semibold">
                    {item.label}
                  </p>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-400"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          className="w-full md:w-[40%] bg-[#6b6b75] rounded-lg p-8 text-white"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {[
              {
                label: "NAME OF YOUR BUSINESS:",
                field: "name",
                placeholder: "Enter your business name"
              },
              {
                label: "EMAIL:",
                field: "email",
                placeholder: "Enter your email"
              },
              {
                label: "NUMBER:",
                field: "number",
                placeholder: "Enter phone number"
              },
              {
                label: "DESCRIPTION:",
                field: "projectDetails",
                placeholder: "Enter description"
              },
            ].map((field) => (
              <div key={field.field}>
                <label className="block font-headers text-2xl mb-2">
                  {field.label}
                </label>

                <input
                  type="text"
                  placeholder={field.placeholder}
                  className="w-full bg-transparent border-b border-white/50 pb-2 focus:outline-none"
                  value={
                    formData[
                    field.field as keyof typeof formData
                    ]
                  }
                  onChange={(e) =>
                    updateField(
                      field.field as keyof typeof formData,
                      e.target.value
                    )
                  }
                  required
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary hover:bg-btn-hover px-8 py-3 rounded-md font-bold transition-all"
            >
              {isLoading
                ? "Submitting..."
                : "Schedule a Free Consultation"}
            </button>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
};
