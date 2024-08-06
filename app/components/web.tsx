"use client";
import React from "react";
import CustomButton from "./customButton";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function Web() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );
  const data = [
    {
      beforeText: "Responsive",
      afterText: "Designs",
      image: "/home/service/1.png",
      subtitle:
        "Aun Digital is a thriving name in the web design industry for its powerful and responsive web designs. Our team of professional web developers in Dubai specializes in creating web designs that are smooth, interactive, and easy to engage with. Our responsive web designs are fully empowered to provide a seamless user experience.",
    },
    {
      beforeText: "Market",
      afterText: "Insights",
      image: "/home/service/2.png",
      subtitle:
        "As the pioneer web design agency in Dubai, our experts are keen on market trends and insights. We analyze data and ensure you develop marketing strategies that align with your business goals and produce better results than your key competitors.",
    },
    {
      beforeText: "Performance",
      afterText: "Optimization",
      image: "/home/service/3.png",
      subtitle:
        "Our growth-oriented web developers in Dubai ensure that your website's performance is optimized throughout. We take time to understand your business and objectives, and our web design services ensure that your final project meets your requirements.",
    },
    {
      beforeText: "Integrated",
      afterText: "Solutions",
      image: "/home/service/4.png",
      subtitle:
        "Besides being the best web design company in Dubai, we are also skilled at providing integrated marketing solutions. From web design and development services to strategic digital marketing and search engine optimization, we offer an all-inclusive range of digital solutions.",
    },
    {
      beforeText: "Customer-First",
      afterText: "Approach",
      image: "/home/service/5.png",
      subtitle:
        "At Aun Digital, we believe in a client-centric approach. From the beginning of the project to post-launch support, we ensure that our customers have 24/7 support. Our team collaborates closely with the clients and incorporates feedback at every stage.",
    },
    {
      beforeText: "Stellar Design",
      afterText: "Expertise",
      image: "/home/service/6.png",
      subtitle:
        "We take immense pride in offering our clients the best, most responsive, and most appealing web design services in Dubai. We follow solid design principles and practices to develop feature-rich websites that work smoothly across various domains and devices.",
    },
  ];
  const openChat = () => {
    const tawkApi = (window as any).Tawk_API;
    if (tawkApi) {
      tawkApi.maximize();
    } else {
      console.error("Tawk.to is not loaded yet.");
    }
  };
  return (
    <div className="flex flex-wrap">
      <div className="md:w-[40%] w-full mb-10 md:mb-0 p-4 text-start flex flex-col">
        <p
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-start my-8`}
        >
          Web Design And Development Company In Dubai
        </p>
        <p
          className={`text-lg md:text-xl text-start font-semibold text-[#35acc9] my-2`}
        >
          Let’s Turn Visitors Into Customers
        </p>
        <p className={`text-md md:text-lg text-start my-8`}>
          As a leading web design company in Dubai, we promise to build websites
          for businesses that bring them convertible traffic and measurable
          success. Your success is our goal and we are dedicated to it.
        </p>
        <div className="mt-2">
          <CustomButton
            title="Let's Talk"
            icon={<ArrowRight className="btn-icon" />}
            onClick={() => {
              openChat();
            }}
          />
        </div>
      </div>
      <div className="md:w-[60%] w-full mb-10 md:mb-0 p-4 text-start flex items-center flex-col">
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
            {data?.map(({ beforeText, afterText, image, subtitle }, index) => {
              return (
                <CarouselItem key={index} className="sm:basis-1/2">
                  <div className="serv-category-card">
                    <Image
                      src={image}
                      alt={"service"}
                      width={110}
                      height={90}
                    />
                    <p
                      className={`text-md sm:text-lg md:text-xl font-semibold text-white mt-2`}
                    >
                      {beforeText} <br /> {afterText}
                    </p>
                    <p
                      className={`text-md sm:text-lg text-white mt-2 h-[150px] overflow-y-scroll`}
                    >
                      {subtitle}
                    </p>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
