"use client"
import Image from "next/image";
import React, { useState } from "react";
import MaxWidthWrapper from "../maxWidthWrapper";
import CustomButton from "../customButton";
import { IoIosArrowRoundForward } from "react-icons/io";
import Heading from "../heading";
import Modal from "../messageModal";

export default function Cta() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="bg-[#44326e] py-20 mb-10 text-white">
        <MaxWidthWrapper>
          <div className="flex flex-wrap">
            <div className="md:w-1/2 w-full mb-10 md:mb-0 p-4  md:text-start flex relative flex-col">
              <Heading title="Are you worried about low website traffic and leads?" subtitle="Aun Digital, A full service digital agency is here to provide you complete solution of your problems. Our strategical marketing approach covers all aspects to make your brand shine online with increased website traffic and sales. Your online business deserves to be succeeded." isCenter={false} />
              <div className="mt-5">
                <CustomButton
                  title="Get a Quote"
                  isWhite={true}
                  icon={<IoIosArrowRoundForward className="btn-icon" />}
                  onClick={() => {
                    setOpen(true)
                  }}
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full mb-6 md:mb-0 p-4">
              <div
                className={`xl:w-[600px] lg:w-[490px] md:w-[370px] w-full h-[400px] md:h-full  relative`}
              >
                <Image src={"/about/cta/cta.webp"} fill  alt="" />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
}
