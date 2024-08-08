"use client";
import Image from "next/image";
import React from "react";
import bgImage from "../../../public/service-detail/stacks/bg.png";
import MaxWidthWrapper from "../maxWidthWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Stacks({
  title,
  description,
  images1 = [],
  images2 = [],
}: {
  title?: string;
  description?: string;
  images1?: string[];
  images2?: string[];
}) {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );
  const plugin2 = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "400px",
      }}
    >
      <Image
        src={bgImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        style={{ zIndex: -1, overflowY: "hidden" }}
        priority
      />
      <MaxWidthWrapper className="relative z-[1] py-2">
        <div className="my-3">
          <p className={`text-2xl sm:text-3xl md:text-4xl font-bold`}>
            {title}
          </p>
          <p className={`text-md md:text-lg`}>{description}</p>
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
            {images1.map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-1/3 sm:basis-1/4 md:basis-1/6 lg:basis-1/8"
              >
                <div
                  className={`w-[90px] h-[90px] rounded-full object-cover relative m-auto`}
                >
                  <Image src={_} fill priority alt="" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin2.current]}
          onMouseEnter={plugin2.current.stop}
          onMouseLeave={plugin2.current.reset}
          className="w-full px-10 mt-6"
        >
          <CarouselContent>
            {images2.map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/4 md:basis-1/5 lg:basis-1/7"
              >
                <div
                  className={`w-[90px] h-[90px] rounded-full object-cover relative m-auto`}
                >
                  <Image src={_} fill alt="" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </MaxWidthWrapper>
    </div>
  );
}
