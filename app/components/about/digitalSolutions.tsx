"use client"
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
type CardProp = {
  title: string;
  description: string;
  imageSrc: string;
};

const DigitalSolutionCard = ({ title, description, imageSrc }: CardProp) => {
  const openChat = () => {
    const tawkApi = (window as any).Tawk_API;
    if (tawkApi) {
      tawkApi.maximize();
    } else {
      console.error("Tawk.to is not loaded yet.");
    }
  };
  return (
    <div className="p-5 flex flex-col border-[1px] shadow-xl rounded-xl digitalParentCard mb-10 lg:mb-0">
      <div className="flex justify-center items-center">
        <div className="border-black w-[120px] h-[120px] rounded-full p-4  relative top-[-70px] digitalCard">
          <Image src={imageSrc}  alt="image" width={80} height={80} />
        </div>
      </div>
      <p className="text-xl sm:text-2xl md:text-3xl font-bold my-8 relative top-[-70px] text-center">
        {title}
      </p>
      <p className="text-md md:text-lg my-1 relative top-[-70px] text-center">
        {description}
      </p>
      <div className="flex justify-center items-center">
        <Button className="btn2 text-white gap-x-2" onClick={openChat}>
          Live Chat <Plus />
        </Button>
      </div>
    </div>
  );
};

export default function DigitalSolutionCards() {
  const digitalSolutionsCardData = [
    {
      title: "Website Development",
      description: `Aun Digital provides web development services focusing on user experience enhancement along with search engine optimization and secure and backed up regularly. Contact us now to elevate your brand to become industry leader.`,
      imageSrc: "/about/digitalSolution/1.webp",
    },
    {
      title: "Digital Marketing",
      description: `We are a full-service Digital Marketing Agency in Dubai, UAE. If you want to boost your online presence with increased profitability let us help you providing complete Digital Marketing Strategy focusing on organic, social and paid mediums.`,
      imageSrc: "/about/digitalSolution/2.webp",
    },
    {
      title: "E-Commerce Web Development",
      description: `If you want to generate more sales on your Ecommerce Website, Contact us now for the best Ecommerce Web Development Services. Our team has vast experience in developing Websites focusing on increased online sales with fastest speed and latest features.`,
      imageSrc: "/about/digitalSolution/3.webp",
    },
    {
      title: "Digital Branding & Communication",
      description: `Let us provide you complete digital branding and communication strategy for your brand. Our experts not only play with colors but also know your target audience behavior to make your brand unique with creative branding and design strategy.`,
      imageSrc: "/about/digitalSolution/4.webp",
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
      {digitalSolutionsCardData?.map(
        ({ title, description, imageSrc }, index) => {
          return (
            <DigitalSolutionCard
              title={title}
              description={description}
              imageSrc={imageSrc}
              key={index}
            />
          );
        }
      )}
    </section>
  );
}
