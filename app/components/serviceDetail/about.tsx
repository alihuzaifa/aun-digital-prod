"use client";
import React, { useState } from "react";
import Heading from "../heading";
import Image from "next/image";
import CustomButton from "../customButton";
import Link from "next/link";
import Modal from "../messageModal";

const About = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-wrap my-20">
        <div className="md:w-1/2 w-full p-4  md:text-start flex relative flex-col">
          <Heading
            isCenter={false}
            title={title}
            subtitle={description}
          />
          <div className="flex gap-x-3">
            <Link href={"tel:+97145471297"}>
              <CustomButton title="More About Us" />
            </Link>
            <CustomButton
              title="Let's Start Your Project"
              onClick={() => {
                setOpen(true);
              }}
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <div
            className={`xl:w-[600px] lg:w-[490px] md:w-[370px] w-full h-[300px] md:h-[400px]  relative`}
          >
            <Image src={"/service-detail/about.png"} fill priority alt="" />
          </div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
};

export default About;
