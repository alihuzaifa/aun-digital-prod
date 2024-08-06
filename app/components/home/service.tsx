"use client";
import Image from "next/image";
import React from "react";
import Heading from "../heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

export default function Service() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );
  const data = [
    {
      title: "Digital Marketing",
      description:
        "Boost your online presence with us as we offer multi-channel digital marketing services better than any other agency in the industry. We take your digital marketing efforts to the next level and help you achieve a substantial ROI with putting measurable business growth at the forefront of our strategy. Known as the best web development agency in Dubai, Aun Digital provides communicable digital marketing services",
      heading: "Marketing Beyond Boundaries",
      content: [
        {
          title: "UI UX Design Services",
          url: "/services/ui-ux-design-agency-dubai",
        },
        {
          title: "PSD To HTM",
          url: "/services/psd-to-html-dubai",
        },
        {
          title: "Landing Page Design",
          url: "/services/landing-page-design",
        },
        {
          title: "UX Audit",
          url: "/services/ux-audit",
        },
        {
          title: "Logo Design",
          url: "/services/logo-design-dubai",
        },
      ],
    },
    {
      title: "UI UX Designing",
      description:
        "As the best web development company in Dubai, we believe in the power of impressive UI/UX. Our UI/UX experts strategize everything by combining their expertise and your business requirements to deliver stellar experience. Our design process goes through rigorous design testing and meets your business goals to provide a high-quality user experience. Contact us for the following services.",
      heading: "Attention to-detail Design",
      content: [
        {
          title: "Website Development",
          url: "/dubai-website-design-and-development/",
        },
        {
          title: "Wordpress Development",
          url: "/services/wordpress-website-design-dubai",
        },
        {
          title: "CMS Website",
          url: "/services/cms-website-development-dubai",
        },
        {
          title: "Web Maintenance",
          url: "/services/web-maintenance-dubai",
        },
        {
          title: "Logo Design",
          url: "/services/logo-design-dubai",
        },
      ],
    },
    {
      title: "Design & Development",
      description:
        "As the best web development company in Dubai, we believe in the power of impressive UI/UX. Our UI/UX experts strategize everything by combining their expertise and your business requirements to deliver stellar experience. Our design process goes through rigorous design testing and meets your business goals to provide a high-quality user experience. Contact us for the following services.",
      heading: "Revitalize  Your Web  Presence ",
      content: [
        {
          title: "Copywriting Service",
          url: "/services/copywriting-service-dubai",
        },
        {
          title: "Website Copywriting",
          url: "/services/website-copywriting",
        },
        {
          title: "CMS Website",
          url: "/services/cms-website-development-dubai",
        },
        {
          title: "Blog Writing",
          url: "/services/blog-writing",
        },
        {
          title: "Translation Agency",
          url: "/services/translation-agency-dubai",
        },
      ],
    },
    {
      title: "Copywriting",
      description:
        "Copywriting is not just about conveying the brand message, it is about writing conversion-focused content smartly that can drive traffic to the website through effective use of SEO strategies. At Aun Digital, we have got a team of skillful writers who have years of writing catchphrases that actually convert! Trust us to put across your ideas and brand message in the most effective and meaningful way!",
      heading: "Innovative Writing  Solutions ",
      content: [
        {
          title: "Branding Services",
          url: "/services/logo-design-dubai",
        },
        {
          title: "Logo Design Services",
          url: "/services/logo-design-dubai",
        },
        {
          title: "Brochure Design Services",
          url: "/services/brochure-design-dubai",
        },
        {
          title: "PPT Design Services",
          url: "/services/ppt-design-dubai",
        },
        {
          title: "Infographics Design",
          url: "/services/infographics-design-services-dubai",
        },
      ],
    },
    {
      title: "Brand Identity",
      description:
        "Aun Digital is one of the leading communication and branding agencies based in Dubai. Our branding and communication experts provide the businesses with personalised visuals and improved communication mediums. From the design standpoint to the copywriting, we guarantee to create an emotional association of your brand with the customers. We revamp your brand’s dullness into a colourful one with following branding services.",
      heading: "Refining Your Brand Essence ",
      content: [
        {
          title: "Mobile App Development",
          url: "/services/logo-design-dubai",
        },
        {
          title: "IOS App Development",
          url: "/services/logo-design-dubai",
        },
        {
          title: "React App Development",
          url: "/services/brochure-design-dubai",
        },
        {
          title: "PPT Design Services",
          url: "/services/ppt-design-dubai",
        },
        {
          title: "Infographics Design",
          url: "/services/infographics-design-services-dubai",
        },
      ],
    },
    {
      title: "App Development",
      description:
        "Aun Digital specialises in delivering engaging and responsive mobile application solutions that are visually appealing and tech-driven. With a focus on performance, efficiency, and enhanced user experience, Aun Digital knows how to convert your idea into a winning app. Be it the android one, iOS, hybrid, or cross-platform application, our dedicated mobile app developers have set the benchmark in all the industries across Dubai.",
      heading: "Sleek App Design Solutions",
      content: [
        {
          title: "E Commerce Website",
          url: "/services/e-commerce-solutions",
        },
        {
          title: "Woo Commerce Development",
          url: "/services/woo-commerce-development",
        },
        {
          title: "Shopify Development",
          url: "/services/shopify-development-dubai",
        },
        {
          title: "Big Commerce Development",
          url: "/services/big-commerce-development-service-dubai",
        },
        {
          title: "Magento Ecommerce",
          url: "/services/magento-ecommerce-development",
        },
      ],
    },
    {
      title: "E-Commerce Solutions",
      description:
        "E-commerce stores need to be aesthetically pleasing to convert the visitors into buyers. At Aun Digital, we create ecommerce websites that are targeted to enhance your customer’s shopping and navigating experience. We enable digital businesses to achieve substantial ROIs from their online stores. With more than a decade of experience, Aun Digital is known for creating powerful ecommerce solutions.",
      heading: "Online Retail Mastery ",
      content: [
        {
          title: "E Commerce Website",
          url: "/services/e-commerce-solutions",
        },
        {
          title: "Woo Commerce Development",
          url: "/services/woo-commerce-development",
        },
        {
          title: "Shopify Development",
          url: "/services/shopify-development-dubai",
        },
        {
          title: "Big Commerce Development",
          url: "/services/big-commerce-development-service-dubai",
        },

        {
          title: "Magento Ecommerce",
          url: "/services/magento-ecommerce-development",
        },
      ],
    },
    {
      title: "IT Resource Outsourcing",
      description:
        "Aun Digital believes in strategic partnerships and unbiased outsourcing, and for that purpose, you can hire our best experts for outstanding results. The entire concept of outsourcing resources is to help the growing businesses with a dedicated team at their disposal. We provide a team full of incredible experts to our businesses and they connect with each other for the discussion. To keep your dynamic project absolutely in the running.",
      heading: "Tech Talent Acquisition ",
      content: [
        {
          title: "It Resource Outsourcing",
          url: "services/it-resource-outsourcing",
        },
        {
          title: "Mirakl Development",
          url: "services/mirakl-development-dubai",
        },
        {
          title: "ASO App Store",
          url: "services/aso-app-store-optimization-dubai",
        },
        {
          title: "Influencer Marketing",
          url: "services/influencer-marketing-agency-dubai",
        },

        {
          title: "PHP Development",
          url: "services/php-development-dubai",
        },
      ],
    },
  ];
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full hidden md:block"
      >
        <CarouselContent>
          {data.map(({ title, description, heading, content }, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-wrap w-full h-[800px]">
                <div className="relative w-[35%] h-full p-4 text-start flex flex-col justify-end pt-10">
                  <div className="relative z-10 p-4 ps-10 text-white">
                    <ul className="flex flex-wrap list-disc">
                      {content?.map(({ title, url }, index) => (
                        <li className="w-1/2 p-2 whitespace-nowrap" key={index}>
                          <Link href={url}  className="">
                            <span className="">{title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Image
                    src={`/home/${index + 1}/1.png`}
                    alt="Your Image Description"
                    layout="fill"
                    priority
                    objectFit="cover"
                    className="absolute inset-0"
                  />
                </div>
                <div className="w-[65%] h-full flex flex-col">
                  <div className="ms-4">
                    <Heading
                      title={title}
                      subtitle={description}
                      isCenter={false}
                    />
                  </div>
                  <div className="flex flex-wrap w-full h-full">
                    <div className="w-[70%] p-4 text-start flex items-center flex-col pt-10 relative h-full">
                      <Image
                        src={`/home/${index + 1}/2.png`}
                        alt="Your Image Description"
                        layout="fill"
                        priority
                        objectFit="cover"
                        className="absolute inset-0"
                      />
                    </div>
                    <div className="w-[30%] text-start flex flex-col justify-between pt-10 relative">
                      <div className="flex flex-col justify-center items-center h-[300px]">
                        <div>
                          <Image
                            src={"/signature.gif"}
                            width={200}
                            height={200}
                            unoptimized
                            alt=""
                          />
                        </div>

                        <div></div>
                      </div>

                      <div className="relative w-full h-full flex flex-col">
                        <div className="absolute top-4 left-4 text-white font-bold text-xl z-10">
                          <p
                            className={`text-3xl sm:text-4xl md:text-5xl font-bold pt-10 uppercase`}
                          >
                            {heading}
                          </p>
                        </div>
                        <div className="relative w-full h-full">
                          <Image
                            src={`/home/${index + 1}/3.png`}
                            alt="Description of image"
                            layout="fill"
                            objectFit="cover"
                            priority
                            className="absolute inset-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
