"use client";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CustomButton from "../customButton";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object({
  name: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Contact Number is required"),
  budget: Yup.string().required("Budget is required"),
  message: Yup.string().required("Message is required"),
  // recaptcha: Yup.string().required("ReCAPTCHA validation is required"),
});

export default function ContactForm({
  isShow = true,
  page = "",
}: {
  isShow?: boolean;
  page?: string;
}) {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const router = useRouter()
  const [loader, setLoader] = useState(false);

  // const handleRecaptchaChange = (value: any) => {
  //   setRecaptchaValue(value);
  //   formik.setFieldValue("recaptcha", value);
  // };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      budget: "",
      message: "",
      // recaptcha: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoader(true);
      // Handle form submission
      const formData = {
        fullName: values.name,
        email: values.email,
        contact: values.phone,
        budget: values.budget,
        message: values.message,
        servicePageName: ''
      };

      if (page) {
        formData['servicePageName'] = page;
      }
      try {
        const response = await fetch('/api/sendEmail', {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            Accept: "application/json",
          },
        });
        console.log("response", response)

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
        {isShow && (
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-start mb-3">
            Let&rsquo;s Talk <br /> <span>Business</span>
          </p>
        )}
        <div className="relative mb-3">
          <div className="flex gap-x-3">
            <div className="relative w-full">
              <Input
                required
                type="text"
                id="name"
                placeholder="Full Name"
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
            <div className="relative w-full">
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
          </div>
        </div>
        <div className="relative mb-3">
          <div className="flex gap-x-3">
            <div className="relative w-full">
              <Input
                required
                type="number"
                id="phone"
                placeholder="Enter Your Contact No"
                className="block inputField2"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.phone}
                </div>
              ) : null}
            </div>
            <div className="relative w-full">
              <Input
                required
                type="text"
                id="budget"
                placeholder="Enter Your Budget"
                className="block inputField2"
                name="budget"
                value={formik.values.budget}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.budget && formik.errors.budget ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.budget}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="relative mb-3">
          <Textarea
            placeholder="Your Message"
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
        {/* <div className="relative flex items-center">
          <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY"
            onChange={handleRecaptchaChange}
          />
          {formik.touched.recaptcha && formik.errors.recaptcha ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.recaptcha}
            </div>
          ) : null}
        </div> */}
        <div className="flex items-center mt-3">
          <CustomButton
            title={loader ? "" : "Get Started"}
            icon={
              loader ? (
                <Loader2 className="animate-spin-slow" />
              ) : (
                <IoIosArrowRoundForward className="btn-icon" />
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
