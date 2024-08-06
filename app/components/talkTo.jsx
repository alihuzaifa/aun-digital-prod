"use client";

import { useRef, useState } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { FaRegEnvelope, FaWhatsapp } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import Modal from "./messageModal";

function TalkTo() {
  const tawkMessengerRef = useRef();
  const [open, setOpen] = useState(false);
  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };

  return (
    <>
      <div id="topButton">
        <div
          className="takToButton flex justify-center items-center"
          onClick={handleMinimize}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
            height="32px"
            width="32px"
            role="img"
            alt="Chat icon"
            className="tawk-min-chat-icon"
          >
            <path
              fill="white"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z"
            ></path>
          </svg>
        </div>
        <TawkMessengerReact
          propertyId="6567cfbc68f6b67c37db5e0e"
          widgetId="1hgeo6ug4"
          ref={tawkMessengerRef}
        />
      </div>
      <div id="topButton2">
        <Link
          passHref
          className="whatsappIcon flex justify-center items-center"
          href="https://wa.link/buxpm3"
        >
          <FaWhatsapp size={30} />
        </Link>
      </div>
      <div id="topButton3">
        <div
          className="messageIcon flex justify-center items-center"
          onClick={() => {
            setOpen(true);
          }}
        >
          <FaRegEnvelope size={25} />
        </div>
      </div>
      <div id="topButton4">
        <Link
          href="tel:+97145471297"
          passHref
          className="phoneIcon flex justify-center items-center"
        >
          <FaPhoneAlt size={20} />
        </Link>
      </div>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
}

export default TalkTo;
