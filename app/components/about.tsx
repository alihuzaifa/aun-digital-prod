"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import MaxWidthWrapper from "./maxWidthWrapper";
import Heading from "./heading";

export default function About() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );
  const imagesArray = [
    "/home/awards/1.png",
    "/home/awards/2.png",
    "/home/awards/3.png",
    "/home/awards/4.png",
    "/home/awards/5.png",
  ];
  return (
    <div className="relative w-full h-auto">
      <Image
        src="/home/about.png"
        alt="Background Image"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
        className="absolute inset-0 -z-10"
      />
      <MaxWidthWrapper>
        <div className="relative z-10 py-5">
          <div className="flex flex-wrap">
            <div className="md:w-1/2 w-full mb-10 md:mb-0 p-4 text-start flex items-center flex-col">
              <Heading
                isH1
                title="Reliable Website Design Company in Dubai For Success"
                isCenter={false}
              />
              <p className="text-md md:text-lg my-3">
                Aun Digital is no less than a synonym of quality, trust, and
                perfection! As a leading web design company in Dubai, we are
                dedicated to delivering fantastic web design and development
                services. More than a decade of industry experience adds another
                feather in our cap.
              </p>
              <p className="text-md md:text-lg my-3">
                Our team of skilled web developers in Dubai has a profound
                knowledge of UI/UX design principles and the latest web design
                trends, enabling them to create compelling web experiences
                across all types of devices.
              </p>
              <div
                className={`xl:w-[600px] lg:w-[490px] md:w-[370px] w-[270px] h-[250px] sm:h-[300px] relative`}
              >
                <Image src={"/careers/side-banner.webp"} fill alt="" />
              </div>
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
                        className={`w-[130px] h-[120px] object-cover relative m-auto`}
                      >
                        <Image src={_} fill alt="" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            <div className="md:w-1/2 w-full mb-6 md:mb-0 p-4 hidden md:block"></div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
