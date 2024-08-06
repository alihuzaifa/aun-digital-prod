"use client";
import React from "react";
import Heading from "./heading";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Industries() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const industries = [
    
    {
      imgSrc: "/home/industries/2.png",
      description:
        "Boost your online presence with our website design and development that complement your business by providing a user-friendly and highly responsive experience, increasing online engagements and conversion rates.",
      title: "Business Consulting",
    },
    {
      imgSrc: "/home/industries/3.png",
      description:
        "Reach and attract your target audience and students with our sleek, modern, and structured website, designed to increase your enrollments and provide a helpful experience.",
      title: "Education",
    },
    {
      imgSrc: "/home/industries/4.png",
      description:
        "Rule the online healthcare industry with our clean, fast-loading, and structured website that will provide instant solutions to people seeking medical aid online.",
      title: "Healthcare",
    },
    {
      imgSrc: "/home/industries/5.png",
      description:
        "Increase conversion rate by 10x with our robust and visually appealing websites, designed to accurately showcase your products and provide a user-friendly experience.",
      title: "Manufacturing",
    },
    {
      imgSrc: "/home/industries/6.png",
      description:
        "Display your properties effectively and attract potential buyers with our stunning and intuitive website, which features powerful search elements and engaging property listings.",
      title: "Real Estate",
    },
    {
      imgSrc: "/home/industries/7.png",
      description:
        "Attract foodies and culinary enthusiasts to your restaurant with our website design, which provides a user-friendly experience, listing menus and reservation options clearly.",
      title: "Restaurants",
    },
    {
      imgSrc: "/home/industries/8.png",
      description:
        "Beat the competition with our modern and up-to-date website that pulls your target audience to your business, effectively increasing online visibility, user engagement and conversion rate.",
      title: "Technology",
    },
    {
      imgSrc: "/home/industries/1.png",
      description:
        "Highlight your vehicles and services with our visually striking website that provides a dynamic user experience with easy navigation and detailed product showcases.",
      title: "Automotive",
    },
  ];
  return (
    <>
      <Heading isCenter={false} title="Our Tailored Digital Marketing Solutions Across Diverse Industries" />
      <div className="mb-2" />
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
          {industries?.map((industry, index) => {
            return (
              <CarouselItem
                key={index}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="item group" key={index}>
                  <div className="relative h-[400px] w-full overflow-hidden mx-auto">
                    <Image
                      src={industry.imgSrc}
                      alt={industry.title}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-5 z-30 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-8 transition-all duration-500 p-5 text-white">
                      <p>{industry.description}</p>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <p className="mt-3 text-center text-xl font-semibold">
                    {industry.title}
                  </p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </>
  );
}
