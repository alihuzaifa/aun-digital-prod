import React from "react";
import Heading from "../heading";
import Image from "next/image";

export default function Service({
  title,
  content,
}: {
  title: string;
  content: any[];
}) {
  return (
    <div className="flex flex-wrap pt-10">
      <div className="md:w-[50%] w-full flex flex-col">
        <Heading title={title} isCenter={false} />
        <div className="flex justify-center items-center">
          <div className="relative right-0 md:right-16 w-[500px] h-[800px]">
            <Image
              src={"/service-detail/service.png"}
              fill
              priority
              alt={"service"}
            />
          </div>
        </div>
      </div>
      <div className="md:w-[50%] w-full mb-6 md:mb-0 p-4 hidden md:block h-[900px] overflow-y-scroll remove-vertical-scroll">
        {content?.map(({ title, description }, index) => {
          return (
            <div className="shadow-2xl py-5 px-3 rounded-2xl" key={index}>
              <div className="my-3">
                <p className="serviceCardNumber ">{index + 1}</p>
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold my-8">
                {title}
              </p>
              <p className="text-md md:text-lg">{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
