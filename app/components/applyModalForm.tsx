"use client";
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomButton from "./customButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const validationSchema = Yup.object({
  name: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\d+$/, "Phone number must be a number"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  date: Yup.date().required("Expected Joining Date is required"),
  pay: Yup.number()
    .required("Desired Pay is required")
    .positive("Pay must be a positive number"),
  file: Yup.mixed()
    .required("Resume is required")
    .test("fileType", "Only image files are allowed", (value) => {
      if (value && value instanceof File) {
        return value.type.startsWith("image/");
      }
      return false;
    }),
});

export default function ApplyModalForm({ slug, setOpen }: any) {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const getBase64Image = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      date: "",
      pay: "",
      file: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoader(true);
      // Handle form submission
      const base64Image = await getBase64Image(values?.file);
      const formData = {
        fullName: values.name,
        email: values.email,
        contact: values.phone,
        address: values.address,
        city: values.city,
        date: values.date,
        pay: values.pay,
        image: base64Image,
        applyFor: slug,
      };
      try {
        const response = await fetch("/api/career", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          router.push("/thank-you");
          setOpen(false);
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
            type="text"
            id="name"
            placeholder="Full Name"
            className="bg-[#ffffff96] inputField"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="relative w-full">
          <Input
            required
            type="email"
            id="email"
            placeholder="Email"
            className="bg-[#ffffff96] inputField"
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
            className="bg-[#ffffff96] inputField"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
          ) : null}
        </div>
        <div className="relative w-full">
          <Input
            required
            type="text"
            id="address"
            placeholder="Address"
            className="bg-[#ffffff96] inputField"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="text-red-500 text-sm">{formik.errors.address}</div>
          ) : null}
        </div>
      </div>

      <div className="relative flex items-center gap-x-2">
        <div className="relative w-full">
          <Input
            required
            type="text"
            id="city"
            placeholder="City"
            className="bg-[#ffffff96] inputField"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.city && formik.errors.city ? (
            <div className="text-red-500 text-sm">{formik.errors.city}</div>
          ) : null}
        </div>
        <div className="relative w-full">
          <Input
            required
            type="date"
            id="date"
            placeholder="Expected Joining Date"
            className="bg-[#ffffff96] inputField"
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.date && formik.errors.date ? (
            <div className="text-red-500 text-sm">{formik.errors.date}</div>
          ) : null}
        </div>
      </div>

      <div className="relative flex items-center gap-x-2">
        <div className="relative w-full">
          <Input
            required
            type="number"
            id="pay"
            placeholder="Desired Pay"
            className="bg-[#ffffff96] inputField"
            name="pay"
            value={formik.values.pay}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.pay && formik.errors.pay ? (
            <div className="text-red-500 text-sm">{formik.errors.pay}</div>
          ) : null}
        </div>
        <div className="relative w-full">
          <Input
            required
            type="file"
            id="file"
            className="bg-[#ffffff96] inputField"
            name="file"
            onChange={(event: any) => {
              formik.setFieldValue("file", event.currentTarget.files[0]);
            }}
            onBlur={formik.handleBlur}
          />
          {formik.touched.file && formik.errors.file ? (
            <div className="text-red-500 text-sm">{formik.errors.file}</div>
          ) : null}
        </div>
      </div>

      <div className="flex justify-end items-center mt-[-5px]">
        <CustomButton
          isWhite={true}
          title={loader ? "" : "Submit Form"}
          type="submit"
          disabled={loader}
          icon={loader ? <Loader2 className="animate-spin-slow" /> : ""}
        />
      </div>
    </form>
  );
}
