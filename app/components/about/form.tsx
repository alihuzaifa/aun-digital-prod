"use client"
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CustomButton from "../customButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const validationSchema = Yup.object({
  name: Yup.string().required("User Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  contact: Yup.string()
    .required("Contact number is required")
    .matches(/^\d+$/, "Contact number must be a number"),
  message: Yup.string().required("Message is required"),
});

export default function AboutUsForm() {
  const [loader, setLoader] = useState(false);
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contact: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const formData = {
        fullName: values.name,
        email: values.email,
        contact: values.contact,
        message: values.message,
      };


      try {
        const response = await fetch('/api/about', {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          router.push('/thank-you')
          formik.resetForm();
        } else {
          alert("Form submission failed.")
        }
      } catch (error) {
        alert("An error occurred while submitting the form.")
      } finally {
        setLoader(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-start mb-3">
          Let&rsquo;s Talk <br /> <span>Bussiness</span>
        </p>

        <div className="relative mb-3">
          <Input
            required
            type="text"
            id="name"
            placeholder="User Name"
            className="block inputField2"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.name}
            </div>
          ) : null}
        </div>

        <div className="relative mb-3">
          <Input
            required
            type="email"
            id="email"
            placeholder="Email"
            className="block inputField2"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <div className="relative mb-3">
          <Input
            required
            type="number"
            id="contact"
            placeholder="Number"
            className="block inputField2"
            name="contact"
            value={formik.values.contact}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.contact && formik.errors.contact ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.contact}
            </div>
          ) : null}
        </div>

        <div className="relative mb-3">
          <Textarea
            placeholder="Message"
            className="inputField2"
            required
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.message}
            </div>
          ) : null}
        </div>

        <div className="flex items-center mt-3">
          <CustomButton
            title={loader ? "" : "Get a Quote"}
            isWhite
            icon={
              loader ? (
                <Loader2 className="animate-spin-slow" />
              ) : (
                ""
              )
            }
            type="submit"
            disabled={loader}
          />
        </div>
      </div>
    </form>
  );
}
