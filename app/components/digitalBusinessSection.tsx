"use client";

import React, { useState } from "react";
import MaxWidthWrapper from "./maxWidthWrapper";
import CustomButton from "./customButton";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import CountUp from "react-countup";
import { Plus } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface InHouseTeamCountProps {
  text: string;
  count: number;
  index: number;
}

const InHouseTeamCount: React.FC<InHouseTeamCountProps> = ({
  text,
  count,
  index,
}) => {
  return (
    <div
      className={`p-4 border-r border-[#666] border-solid ${
        index === 1 ? "lg:border-l" : ""
      }`}
    >
      <div
        className={`text-5xl leading-none font-bold flex justify-center items-center gap-2`}
      >
        <CountUp end={count} delay={1} duration={4} />
        <Plus size={36} strokeWidth={3} />
      </div>
      <p className="text-2xl font-medium leading-none mt-2 text-center">
        {text}
      </p>
    </div>
  );
};

const DigitalBusinessSection: React.FC = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const array = [
    {
      text: "In-House Team",
      count: 50,
    },
    {
      text: "Years Of Experience",
      count: 15,
    },
    {
      text: "Digital Projects",
      count: 450,
    },
  ];
  return (
    <MaxWidthWrapper>
      <section className="my-3">
        <div className="flex flex-wrap">
          <div className="md:w-[70%] w-full md:pr-10 md:py-6 mb-6 md:mb-0">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold my-8">
              Empowering Digital Businesses With Revolutionary Web Design
              Services In Dubai
            </p>
            <p className="text-sm sm:text-md md:text-lg my-8">
              Nestled in the heart of the United Arab Emirates, Aun Digital is a
              prominent web design agency in Dubai known for converting website
              designs, web development, and marketing services. If you are
              developing a business concept that has to take advantage of the
              web, we are here to help you design creative and adaptable web
              design solutions that win people over, look interactive, and
              produce profits.
            </p>
            {isReadMore && (
              <>
                <p className="text-sm sm:text-md md:text-lg my-8">
                  With hundreds of successful projects under our belt, several
                  satisfied clients, and years of relevant industry knowledge,
                  you can rely on Aun Digital to produce unique web development
                  solutions that will make an impression in the digital world.
                </p>
                <p className="text-sm sm:text-md md:text-lg my-8">
                  Driven by ingenuity, originality, and imagination, we, as the
                  best web design company in Dubai, ensure that your website is
                  visually appealing and user-friendly, defines who you are and
                  what you do, appeals to your target market, and is responsive
                  and mobile-friendly.
                </p>
                <p className="text-sm sm:text-md md:text-lg my-3">
                  For more than a decade, Aun Digital has been at the forefront
                  of the web design industry in Dubai, continually evolving the
                  web design services as per the client&rsquo;s requirements. Our
                  extensive experience has allowed us to refine our processes
                  and develop a deep understanding of what works in the web
                  design industry. Over the years, we have grown into a
                  powerhouse of creativity and innovation, with a team of expert
                  web designers in Dubai who are passionate about pushing
                  boundaries and delivering exceptional results.
                </p>
                <p className="text-sm sm:text-md md:text-lg my-3">
                  With each project, we strive to exceed expectations of our
                  clients and set new standards for excellence, ensuring that
                  our clients always receive the best possible service.
                </p>
              </>
            )}

            <div className="mt-5">
              <CustomButton
                onClick={() => {
                  setIsReadMore(true);
                }}
                title={isReadMore ? "Let's Talk" : "Read More"}
                icon={<IoIosArrowRoundForward className="btn-icon" />}
              />
            </div>
          </div>

          {/* Image */}
          <div className="md:w-[30%] w-full">
            <div className="relative w-full h-full pb-[100%]">
              <Image
                src="/about.png"
                alt="About Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {array.map(({ text, count }, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <InHouseTeamCount text={text} count={count} index={index + 1} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </MaxWidthWrapper>
  );
};

export default DigitalBusinessSection;
