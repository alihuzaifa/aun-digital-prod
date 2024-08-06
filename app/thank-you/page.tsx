"use client";
import React from "react";
import Image from "next/image";
import bgImage from "../../public/bg.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import MaxWidthWrapper from "../components/maxWidthWrapper";
import Heading from "../components/heading";
export default function Contact() {
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
    <>
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
          priority
          style={{ zIndex: -1, overflowY: "hidden" }}
        />
        <MaxWidthWrapper className="relative z-[1] pt-10">
          <div className="flex flex-wrap pt-10">
            <div className="md:w-[50%] lg:w-[50%] w-full text-start flex flex-col">
              <Heading
                isH1
                title="Thank you for submitting your inquiry"
                subtitle="We Will Get In Touch With You Soon..."
                isCenter={false}
              />
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                className="w-full mt-[-20px]"
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
                        <Image src={_} fill alt="" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            <div className="md:w-[50%] lg:w-[50%] w-full mb-6 md:mb-0 p-4 hidden md:block"></div>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
}
