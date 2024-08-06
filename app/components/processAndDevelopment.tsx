"use client";
import { motion } from "framer-motion";
import ProcessAndDesignCard from "./processAndDesignCard";
import { RiFindReplaceLine } from "react-icons/ri";
import { GiWireframeGlobe } from "react-icons/gi";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";
import { ShieldCheck } from "lucide-react";
import { MdOutlineSecurity } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Heading from "./heading";

export const iconBoxes = [
  {
    icon: <RiFindReplaceLine size={32} className="fill-[#FA6262]" />,
    iconBase: "bg-[#FEE8E8]",
    title: "Discover",
    description:
      "In the first phase, we conduct a needs assessment to understand the needs and requirements of the client.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#FA6262]",
  },
  {
    icon: <GiWireframeGlobe className="fill-[#44D88D]" size={32} />,
    iconBase: "bg-[#E3F9EE]",
    title: "Wireframe",
    description:
      "In the second phase, we curate detailed wireframes for outlining user flow, along with the hierarchy and page structure.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#44D88D]",
  },
  {
    icon: <AiOutlineAntDesign className="fill-[#4C86E7]" size={32} />,
    iconBase: "bg-[#D3E9FF]",
    title: "Design",
    description:
      "In this phase, we select key visual elements such as font styles, rich media & typography that align with the brand’s",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#4C86E7]",
  },
  {
    icon: <FaCode className="fill-[#7444FF]" size={32} />,
    iconBase: "bg-[#EAE3FF]",
    title: "Development",
    description:
      "In this phase, we transform the plan & design into a fully-functional website following the best-in-class coding practices & technologies.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#7444FF]",
  },
  {
    icon: <ShieldCheck className="fill-[#FFAF13]" size={32} />,
    iconBase: "bg-[#FFF3DC]",
    title: "Testing",
    description:
      "In this phase, we perform multiple tests, such as performance usability & functionality tests, to ensure seamless performance across devices.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#FFAF13]",
  },
  {
    icon: <MdOutlineSecurity className="fill-[#B939E5]" size={32} />,
    iconBase: "bg-[#FAF1FF]",
    title: "Launch",
    description:
      "This is the final phase, during which we deploy the fully functional website, supported by routine performance maintenance for a set period.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#B939E5]",
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const ProcessAndDevelopment = () => {
  return (
    <section className="my-20">
      <div className="my-20">
        <Heading
          title="Web Design And Development Process"
          subtitle="As a leading web design and development company in Dubai, we stay abreast with the latest industry trends to ensure deliver of top-notch website design services. Below is a boiled down version of our process that we uphold to streamline the projects."
          isCenter={false}
        />
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {iconBoxes.map((iconBox, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 py-2"
            >
              <motion.div
                key={iconBox.title}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                }}
                custom={index}
              >
                <ProcessAndDesignCard iconBox={iconBox} />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ProcessAndDevelopment;
