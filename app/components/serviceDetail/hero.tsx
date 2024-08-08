"use client";
import Image from "next/image";
import React, { useState } from "react";
import bgImage from "../../../public/bg.png";
import MaxWidthWrapper from "../maxWidthWrapper";
import Heading from "../heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import CustomButton from "../customButton";
import Link from "next/link";
import Modal from "../messageModal";
import ContactForm from "../contact/form";

export default function Hero({
  title,
  description,
  page,
}: {
  title: string;
  description: string;
  page?: string;
}) {
  const [open, setOpen] = useState(false);
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );
  const imagesArray = [
    "/contact/1.png",
    "/contact/2.png",
    "/contact/3.png",
    "/contact/4.png",
    "/contact/1.png",
    "/contact/2.png",
    "/contact/3.png",
    "/contact/4.png",
  ];
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "500px",
      }}
    >
      <Image
        src={bgImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        style={{ zIndex: -1, overflowY: "hidden" }}
      />
      <MaxWidthWrapper className="relative z-[1] py-5">
        <div className="flex flex-wrap pt-10">
          <div className="md:w-[50%] w-full flex flex-col">
            <Heading title={title} isCenter={false} />
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              className="w-full"
            >
              <CarouselContent>
                {imagesArray.map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4"
                  >
                    <div
                      className={`w-[130px] h-[80px] object-cover relative m-auto`}
                    >
                      <Image src={_} fill priority alt="" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="mt-[-60px]">
              <Heading subtitle={description} isCenter={false} />
            </div>
            <div className="flex gap-x-3">
              <Link href={"/about-us"}>
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
          <div className="md:w-[50%] w-full mb-6 md:mb-0 p-4 hidden md:block">
            <div className="p-6 shadow-xl bg-white rounded-2xl">
              <Heading title="Let’s Get Started" isCenter={false} />
              <ContactForm isShow={false} page={page} />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
}
