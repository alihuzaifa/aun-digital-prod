"use client";
import React, { useState } from "react";
import Heading from "../heading";
import CustomButton from "../customButton";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Modal from "../messageModal";

export default function Cta({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [open, setOpen] = useState(false);
  const openChat = () => {
    const tawkApi = (window as any).Tawk_API;
    if (tawkApi) {
      tawkApi.maximize();
    } else {
      console.error("Tawk.to is not loaded yet.");
    }
  };
  return (
    <>
      <div className="cta-1-bg ">
        <div className="w-full md:w-[70%] mx-auto">
          <Heading title={title} subtitle={description} />
          <div className="mt-5 flex flex-wrap justify-center items-center gap-2">
            <Link href={"tel:+97145471297"}>
              <CustomButton
                title="Call Now"
                isWhite={true}
                icon={<ArrowRight className="btn-icon" />}
              />
            </Link>
            <CustomButton
              title="Live Chat"
              isWhite={true}
              onClick={openChat}
              icon={<ArrowRight className="btn-icon" />}
            />
            <CustomButton
              title="Get a Quote"
              isWhite={true}
              icon={<ArrowRight className="btn-icon" />}
              onClick={() => {
                setOpen(true);
              }}
            />
          </div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
}
