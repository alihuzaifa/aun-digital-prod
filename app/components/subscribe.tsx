"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import CustomButton from "./customButton";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function Subscribe() {
  const router = useRouter();
  const [loader, setLoader] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });
  const activateForTwoSeconds = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoader(true);
      const formData = {
        email: values.email,
      };
      try {
        const response = await fetch("/api/subscribe", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          router.push("/thank-you");
          formik.resetForm();
        } else {
          alert("Form submission failed.");
        }
      } catch (error) {
        alert("An error occurred while submitting the form.");
      } finally {
        setLoader(false);
      }
    },
  });

  return (
    <form className="flex flex-col gap-y-4 mt-3" onSubmit={formik.handleSubmit}>
      <div className="relative flex items-center gap-x-2">
        <div className="relative w-full">
          <Input
            required
            type="email"
            id="email"
            placeholder="Email"
            className="bg-[#ffffff96] inputField2"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>
      </div>
      <div className="flex justify-end items-center mt-[-5px]">
        <CustomButton
          title={loader ? "" : "Subscribe"}
          type="submit"
          disabled={loader}
          icon={loader ? <Loader2 className="animate-spin-slow" /> : ""}
        />
      </div>
    </form>
  );
}
