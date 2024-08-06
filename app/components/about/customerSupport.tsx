import Image from "next/image";
import Heading from "../heading";

interface InfoCardProps {
  src: string;
  title: string;
  title2: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ src, title, title2 }) => {
  return (
    <div className="shadow-lg p-6 border-[#44326e] rounded-lg w-full sm:w-[240px] serviceCard">
      <Image src={src} alt={"Info Card"} width={50} height={50}  />
      <p className="text-md md:text-lg my-3 font-bold serviceText">
        {title} <br /> {title2}
      </p>
    </div>
  );
};

export default function CustomerSupport() {
  const service1 = [
    {
      title: "24/7 Customer",
      title2: "Support",
      src: "/about/services/1.webp",
    },
    {
      title: "100% Design",
      title2: "Ownership",
      src: "/about/services/2.webp",
    },
    {
      title: "Experts At Your",
      title2: "Service",
      src: "/about/services/4.webp",
    },
  ];
  const service2 = [
    {
      title: "Unlimited",
      title2: "Revision",
      src: "/about/services/4.webp",
    },
    {
      title: "Money-Back",
      title2: "Guarantee",
      src: "/about/services/5.webp",
    },
    {
      title: "Fast And Smooth",
      title2: "Delivery",
      src: "/about/services/6.webp",
    },
  ];
  return (
    <div className="py-20 mb-20">
      <div className="flex flex-wrap">
        <div className="md:w-1/2 w-full mb-10 md:mb-0 p-4  md:text-start flex relative flex-col">
          <Heading
            title="Our Exceptional Features Makes Us Stand Out"
            subtitle="Our best website design company near me takes care of the customer's
            satisfaction and it continues to be the focal point of our
            offerings. Because of this, we've created a culture that our
            consumers are satisfied from beginning to end."
            isCenter={false}
          />
        </div>
        <div className="md:w-1/2 w-full p-4">
          <div className="flex justify-center sm:justify-between items-center flex-wrap">
            {service1?.map(({ title, title2, src }, index) => {
              return (
                <InfoCard key={index} title={title} title2={title2} src={src} />
              );
            })}
          </div>
          <div className="flex justify-center sm:justify-between items-center flex-wrap">
            {service2?.map(({ title, title2, src }, index) => {
              return (
                <InfoCard key={index} title={title} title2={title2} src={src} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
