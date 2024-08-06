"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomButton from "./customButton";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function SpeakToExpert({ slug }: any) {
  const router = useRouter();
  const [loader, setLoader] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Full Name is required"),
    company: Yup.string().required("Company Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    service: Yup.string().required("Please select a service"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "", // Added initial value for the service field
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoader(true);
      const formData = {
        fullName: values.name,
        email: values.email,
        contact: values.phone,
        company: values.company,
        service: values.service,
        blogPage: slug,
      };
      try {
        const response = await fetch("/api/speakToExpert", {
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
      console.log("Form values", values);
      // Handle form submission
    },
  });

  return (
    <form className="flex flex-col gap-y-4 mt-3" onSubmit={formik.handleSubmit}>
      <div className="relative flex items-center gap-x-2">
        <div className="relative w-full">
          <Input
            required
            type="text"
            id="name"
            placeholder="Full Name"
            className="bg-[#ffffff96] inputField2"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>
      </div>
      <div className="relative flex items-center gap-x-2">
        <div className="relative w-full">
          <Input
            required
            type="text"
            id="company"
            placeholder="Company"
            className="bg-[#ffffff96] inputField2"
            name="company"
            value={formik.values.company}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.company && formik.errors.company ? (
            <div className="text-red-500 text-sm">{formik.errors.company}</div>
          ) : null}
        </div>
      </div>

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
      <div className="relative flex items-center gap-x-2">
        <div className="relative w-full">
          <Input
            required
            type="text"
            id="phone"
            placeholder="Phone"
            className="bg-[#ffffff96] inputField2"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
          ) : null}
        </div>
      </div>
      <div className="relative flex items-center gap-x-2">
        <div className="relative w-full">
          <Select
            value={formik.values.service}
            onValueChange={(value) => formik.setFieldValue("service", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent className="bg-[#ffffff96] inputField2">
              <SelectItem value="branding">
                Corporate Identity / Branding
              </SelectItem>
              <SelectItem value="brochure">
                Company Profile / Brochure / E-Magazines
              </SelectItem>
              <SelectItem value="website">
                Website Design / CMS / CRM
              </SelectItem>
              <SelectItem value="portal">
                Portal Development / Internet
              </SelectItem>
              <SelectItem value="marketing">
                Digital Marketing / SEO / Social / Paid
              </SelectItem>
              <SelectItem value="mobile-app">Mobile App / AR / VR</SelectItem>
              <SelectItem value="blockchain">
                Blockchain / NFT / Web 3.0
              </SelectItem>
              <SelectItem value="resource">Resource Augmentation</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {formik.errors.service ? (
            <div className="text-red-500 text-sm">{formik.errors.service}</div>
          ) : null}
        </div>
      </div>

      <div className="flex justify-end items-center mt-[-5px]">
        <CustomButton
          title={loader ? "" : "Submit"}
          type="submit"
          disabled={loader}
          icon={loader ? <Loader2 className="animate-spin-slow" /> : ""}
        />
      </div>
    </form>
  );
}
