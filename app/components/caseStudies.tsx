"use client";
import React from "react";
import Heading from "./heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function CaseStudies({
  title = "Why Are We Trusted the Most?",
}: {
  title?: string;
}) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const data = [
    {
      description:
        "Boosted organic visits by 60% via increased brand awareness and a responsive and responsive website.",
      title: "ABB Services LLC",
      logo: "/case-study/logos/1.png",
      bgmage: "/case-study/clients/1.jpg",
    },
    {
      description:
        "Improved organic conversion rate by 7.5% via robust digital presence and fully functioning yet responsive website.",
      title: "AcuSense",
      logo: "/case-study/logos/2.png",
      bgmage: "/case-study/clients/2.jpg",
    },
    {
      description:
        "Increased the session durations by 60% and revamped the older version of the website to a modern one for decreased bounce rates.",
      title: "AWGC",
      logo: "/case-study/logos/3.png",
      bgmage: "/case-study/clients/3.jpg",
    },
    {
      description:
        "Increased the ROAS by 30% and organic rate by 14% while fully migrating the outdated website to WordPress.",
      title: "Fifth Technologies",
      logo: "/case-study/logos/4.png",
      bgmage: "/case-study/clients/4.jpg",
    },
    {
      description:
        "Enhanced their social media strategy with powerful visual content posted at optimized timings for increased engagement.",
      title: "Chic Floors",
      logo: "/case-study/logos/5.png",
      bgmage: "/case-study/clients/5.jpg",
    },
    {
      description:
        "Created an interactive and dynamic website and application aimed at reducing bounce rates",
      title: "Green Arch",
      logo: "/case-study/logos/6.png",
      bgmage: "/case-study/clients/6.jpg",
    },
    {
      description:
        "Designed and developed a responsive website and application using modern web technologies",
      title: "SOS Doctor House Call",
      logo: "/case-study/logos/7.png",
      bgmage: "/case-study/clients/7.jpg",
    },
    {
      description:
        "Americana Foods contacted AUN Digital for a website redesign, as their old one was poor and simply outdated. We delivered a modern and functional site that boosted online engagement and increased relevant traffic.",
      title: "American Foods",
      logo: "/case-study/logos/8.png",
      bgmage: "/case-study/clients/8.png",
    },
    {
      description:
        "After Write for Glory partnered with us, we designed and developed a sleek, user-friendly, and highly responsive website that improved their user engagement and increased conversion rate by 43%.",
      title: "Write For Glory",
      logo: "/case-study/logos/9.png",
      bgmage: "/case-study/clients/9.png",
    },
    {
      description:
        "Our client, Dhafir Holdings, a multi-business chain, sought us out for website development. Our solution, a website redesign, earned them increased online visibility and a 26% hike in conversion rates.",
      title: "Dhafir",
      logo: "/case-study/logos/10.png",
      bgmage: "/case-study/clients/10.png",
    },
   
  ];
  return (
    <>
      <Heading
        title={title}
        subtitle="Have a look at our esteemed clients over the years that establish us as the industry leader."
        isCenter={false}
      />
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
          {data?.map(({ title, description, logo, bgmage }, index) => {
            return (
              <CarouselItem
                key={index}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="case-studies-flip-card relative w-full h-[450px] rounded-3xl">
                  <div className="case-studies-flip-card-inner absolute w-full h-full transition-transform duration-700 transform-style-preserve-3d">
                    {/* Front Side */}
                    <div className="case-studies-flip-card-front absolute w-full h-full flex items-center justify-center backface-hidden">
                      <Image
                        src={bgmage}
                        alt="Front Image"
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute inset-0 flex items-end justify-start bottom-10 left-4">
                        <Image src={logo} alt="Logo" width={200} height={150} />
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="case-studies-flip-card-back absolute w-full h-full flex flex-col justify-center backface-hidden rotate-y-180 bg-[#35acc9] text-white px-5">
                      <div className="flex flex-col">
                        <Image src={logo} alt="Logo" width={130} height={130} />
                        <p className="mt-10">{description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Add hover effect to the container */}
                  <style jsx>{`
                    .case-studies-flip-card {
                      perspective: 1000px; /* Add perspective to the container */
                    }
                    .case-studies-flip-card:hover
                      .case-studies-flip-card-inner {
                      transform: rotateY(180deg);
                    }
                  `}</style>
                </div>
                <p className="mt-3 text-xl font-semibold">{title}</p>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </>
  );
}
