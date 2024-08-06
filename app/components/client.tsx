"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "./maxWidthWrapper";
import Heading from "./heading";
import CustomButton from "./customButton";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Modal from "./messageModal";
import bgImage from "../../public/home/client.png";

export default function Client() {
  const [open, setOpen] = useState(false);
  const imagesArray = [
    "/home/clients/1.png",
    "/home/clients/2.png",
    "/home/clients/3.png",
    "/home/clients/4.png",
    "/home/clients/5.png",
    "/home/clients/6.png",
    "/home/clients/7.png",
  ];
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );
  return (
    <div className="relative w-full min-h-[300px] text-white">
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="w-full h-full"
          priority
        />
      </div>
      <div className="relative z-[1] pt-5 md:pt-10 pb-8 md:pb-0">
        <MaxWidthWrapper>
          <p className="text-md md:text-lg text-start mb-[-20px]">
            Empowering Businesses!
          </p>
          <div className="flex flex-wrap justify-between items-center">
            <div className="md:w-1/2 w-full mb-10 md:mb-0">
              <Heading title="Our Renowned Clients" isCenter={false} />
            </div>
            <div className="md:w-1/2 w-full mb-10 md:mb-0 text-start flex items-center justify-end">
              <CustomButton
                isWhite={true}
                title="Get a Quote"
                icon={<IoIosArrowRoundForward className="btn-icon" />}
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full mt-5"
          >
            <CarouselContent>
              {imagesArray.map((_, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="w-[130px] h-[70px] object-cover relative m-auto">
                    <Image src={_} fill alt="" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </MaxWidthWrapper>
        <Modal open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}
