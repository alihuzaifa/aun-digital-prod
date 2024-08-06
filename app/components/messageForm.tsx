"use client"
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomButton from "./customButton";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email Address is required"),
  phone: Yup.string().required("Phone Number is required"),
  subject: Yup.string().required("Subject is required"),
});

export default function MessageForm() {
  const router = useRouter()
  const [loader, setLoader] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoader(true)
      const formData = {
        fullName: values.name,
        email: values.email,
        contact: values.phone,
        message: values.subject,
      };
      // Handle form submission
      try {
        const response = await fetch('/api/expert', {
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
          alert("Form submission failed.");
        }
      } catch (error) {
        alert("An error occurred while submitting the form.");
      } finally {
        setLoader(false);
      }
    },
  });

  // const handleRecaptchaChange = (value: any) => {
  //   formik.setFieldValue("recaptcha", value);
  // };

  return (
    <form className="flex flex-col gap-y-4 mt-3" onSubmit={formik.handleSubmit}>
      <div className="relative flex flex-col">
        <Input
          required
          type="text"
          id="name"
          placeholder="Name"
          className="bg-[#ffffff96] inputField"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="relative flex flex-col">
        <Input
          required
          type="email"
          id="email"
          placeholder="Email Address"
          className="bg-[#ffffff96] inputField"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="relative flex flex-col">
        <Input
          required
          type="text"
          id="phone"
          placeholder="Phone Number"
          className="bg-[#ffffff96] inputField"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
        ) : null}
      </div>
      <div className="relative mb-3">
        <Textarea
          placeholder="Subject"
          className="bg-[#ffffff96] inputField"
          required
          name="subject"
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.subject && formik.errors.subject ? (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.subject}
          </div>
        ) : null}
      </div>

      {/* <div className="relative flex flex-col">
        <ReCAPTCHA
          sitekey="6LcFbxcqAAAAAPkw4Wc_ZqUVeO3ggwPsxhf7qd3N"
          onChange={handleRecaptchaChange}
        />
        {formik.touched.recaptcha && formik.errors.recaptcha ? (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.recaptcha}
          </div>
        ) : null}
      </div> */}

      <div className="flex justify-end items-center mt-[-5px]">
        <CustomButton
          title={loader ? "" : "Submit"}
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
    </form>
  );
}
