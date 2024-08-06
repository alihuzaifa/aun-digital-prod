"use client";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "../customButton";

export default function Support({
  title,
  description,
  content,
}: {
  title: string;
  description: string;
  content: any[];
}) {
  const [obj, setObj] = useState({
    title: content[0]?.title || "",
    image: content[0]?.image || "",
    description: content[0]?.description || "",
  });
  const openChat = () => {
    const tawkApi = (window as any).Tawk_API;
    if (tawkApi) {
      tawkApi.maximize();
    } else {
      console.error("Tawk.to is not loaded yet.");
    }
  };

  return (
    <div className="hidden md:block">
      <div className="mb-20" />
      <div className="my-3">
        <p className={`text-2xl sm:text-3xl md:text-4xl font-bold`}>{title}</p>
        <div className="text-md md:text-lg my-3">{description}</div>
      </div>
      <div className="flex flex-wrap">
        <div className="md:w-[35%]  w-full py-4 text-start flex-col">
          {content?.map((item, index) => {
            return (
              <div
                className="flex items-center justify-between py-1 hover-custom"
                key={index}
                onMouseOver={() => {
                  setObj(item);
                }}
              >
                <span className="text-lg sm:text-xl font-bold">
                  {item?.title}
                </span>
                <Image
                  src="/service-detail/arrow.png"
                  alt="arrow"
                  width={60}
                  height={60}
                  className="hover-image"
                  priority
                />
              </div>
            );
          })}
        </div>
        <div className="md:w-[65%] w-full p-4 text-start flex flex-col">
          {obj?.title !== "" && (
            <>
              <div className="flex items-center gap-x-2 py-1">
                <Image src={obj?.image} alt="arrow" width={120} height={120} />
                <span className="text-lg sm:text-xl md:text-2xl font-bold">
                  {obj?.title}
                </span>
              </div>
              <p className={`text-md md:text-lg my-3`}>{obj?.description}</p>
              <div>
                <CustomButton title="Let's Talk" onClick={openChat} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
