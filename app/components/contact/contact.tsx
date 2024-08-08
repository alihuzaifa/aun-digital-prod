"use client";
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

import MaxWidthWrapper from "../maxWidthWrapper";
import Image from "next/image";
import bgImage from "../../../public/bg.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Heading from "../heading";
import ContactForm from "./form";
import { MapPin } from "lucide-react";
interface NavigationMenuItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

const NavigationMenuItemComponent: React.FC<NavigationMenuItemProps> = ({
  href,
  icon,
  text,
}) => {
  return (
    <NavigationMenuItem className="text-sm">
      <Link href={href} className="gap-2 flex">
        {icon}
        <span className="block">{text}</span>
      </Link>
    </NavigationMenuItem>
  );
};

export default function Contact() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );
  const usaLinks = [
    {
      text: "+971 4 547 1297",
      icon: <BsFillTelephoneFill color="#44326e" />,
      href: "tel:+97145471297",
    },
    {
      text: "+971 56 703 2672",
      icon: <BsFillTelephoneFill color="#44326e" />,
      href: "tel:+971567032672",
    },
    {
      text: "+971 4 547 3892",
      icon: <FaWhatsapp color="#44326e" />,
      href: "tel:+97145473892",
    },
  ];
  const uaeLinks = [
    {
      text: "+131 4 948 7144",
      icon: <BsFillTelephoneFill color="#44326e" />,
      href: "tel:+13149487144",
    },
  ];
  const pakistanLinks = [
    {
      text: "+92 314 258 8805",
      icon: <BsFillTelephoneFill color="#44326e" />,
      href: "tel:+923142588805",
    },
  ];
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
            <div className="md:w-[50%] lg:w-[50%] w-full text-start flex items-center flex-col">
              <Heading
                isH1
                title="Questions? Reach Out, We&rsquo;re Here To Help. Contact Us Today."
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
                className="w-full"
              >
                <CarouselContent>
                  {imagesArray.map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4"
                    >
                      <div
                        className={`w-[130px] h-[60px] sm:h-[70px] object-cover relative m-auto`}
                      >
                        <Image src={_} fill priority alt="" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className="mt-[-50px]" />
              <Heading
                subtitle=" Aun Digital is your Online Personal Assistant. Our holistic
                digital marketing contact in Dubai give your business maximum
                digital reach, attract prospects, and trap them into your sales
                funnel. We value your business and aspire to see it thrive."
                isCenter={false}
              />
            </div>
            <div className="md:w-[50%] lg:w-[50%] w-full mb-6 md:mb-0 p-4 hidden md:block"></div>
          </div>
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper className="my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20">
          <ContactForm />
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14441.75680625169!2d55.271516!3d25.188407!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69384d37b0f9%3A0xa20af7814a6759bc!2sAun%20Digital%20-%20Web%20Design%20%26%20Development%20Company%20in%20Dubai!5e0!3m2!1sen!2sus!4v1707773986845!5m2!1sen!2sus"
              width="100%"
              height={450}
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 my-20">
          <div>
            <p className="text-lg md:text-2xl font-semibold mb-8 text-[#44326e]">
              UAE
            </p>
            <NavigationMenu orientation="vertical">
              <NavigationMenuList className="flex-col items-start space-y-2">
                <NavigationMenuItem className="text-sm">
                  <span className="gap-2 flex">
                    <MapPin size={20} color="#44326e" className="ms-[-5px]" />
                    <span className="block">
                      Office # 1701, Prime Tower - Business Bay - Dubai
                    </span>
                  </span>
                </NavigationMenuItem>
                {usaLinks?.map(({ href, text, icon }, index) => {
                  return (
                    <NavigationMenuItemComponent
                      key={index}
                      href={href}
                      icon={icon}
                      text={text}
                    />
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div>
            <p className="text-lg md:text-2xl font-semibold mb-8 text-[#44326e]">
              USA
            </p>
            <NavigationMenu orientation="vertical">
              <NavigationMenuList className="flex-col items-start space-y-2">
                <NavigationMenuItem className="text-sm">
                  <span className="gap-2 flex">
                    <MapPin size={20} color="#44326e" className="ms-[-5px]" />
                    <span className="block">
                      447 Broadway New York, NY 10013
                    </span>
                  </span>
                </NavigationMenuItem>
                {uaeLinks?.map(({ href, text, icon }, index) => {
                  return (
                    <NavigationMenuItemComponent
                      key={index}
                      href={href}
                      icon={icon}
                      text={text}
                    />
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div>
            <p className="text-lg md:text-2xl font-semibold mb-8 text-[#44326e]">
              PAKISTAN
            </p>
            <NavigationMenu orientation="vertical">
              <NavigationMenuList className="flex-col items-start space-y-2">
                <NavigationMenuItem className="text-sm">
                  <span className="gap-2 flex">
                    <MapPin size={20} color="#44326e" className="ms-[-5px]" />
                    <span className="block">
                      Office # 907, Business Avenue, Shahrah-e-Faisal Block 6,
                      Karachi Pakistan
                    </span>
                  </span>
                </NavigationMenuItem>
                {pakistanLinks?.map(({ href, text, icon }, index) => {
                  return (
                    <NavigationMenuItemComponent
                      key={index}
                      href={href}
                      icon={icon}
                      text={text}
                    />
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
