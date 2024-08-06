import React from "react";
import AboutUsForm from "./form";
export default function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20 mx-4">
      <AboutUsForm />
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14441.75680625169!2d55.271516!3d25.188407!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69384d37b0f9%3A0xa20af7814a6759bc!2sAun%20Digital%20-%20Web%20Design%20%26%20Development%20Company%20in%20Dubai!5e0!3m2!1sen!2sus!4v1707773986845!5m2!1sen!2sus"
          width="100%"
          height={450}
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
