import Image from "next/image";

interface CareerHeroProps {
  title?: string;
  subtitle?: string;
}

export default function CareerHero({
  title = "Our Strategy, Your",
  subtitle = "Success",
}: CareerHeroProps) {
  return (
    <div style={{ position: "relative", width: "100%", height: "auto" }}>
      <Image
        src={"/careers/bg.png"}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        style={{ zIndex: -1, position: "absolute", top: 0, left: 0 }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "20px 0px",
        }}
      >
        <div className="flex flex-wrap">
          <div className="md:w-1/2 w-full mb-10 md:mb-0 p-4  md:text-start flex items-center relative">
            <p className="text-3xl lg:text-4xl xl:text-5xl font-bold ">
              {title}{" "}
              <span className="text-[#35acc9]">
                {" "}
                <br /> {subtitle}
              </span>
              .
            </p>
            <Image
              src="/careers/shape2.webp"
              alt="Background Image"
              width={100}
              height={100}
              className="absolute left-1/2 md:left-[43%] -translate-x-1/2 top-[90%] md:top-[65%]  md:translate-x-0"
            />
          </div>
          <div className="md:w-1/2 w-full mb-6 md:mb-0 p-4">
            {/* <div
              className={`xl:w-[600px] lg:w-[490px] md:w-[370px] w-full h-[300px]  md:h-[300px] relative`}
            >
              <Image src={"/careers/side-banner.webp"} fill priority alt="" />
            </div> */}
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" /* 16:9 Aspect Ratio */ }}
            >
              <Image
                src="/careers/side-banner.webp"
                layout="fill"
                objectFit="contain"
                alt="Career Banner"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="mt-5 sm:mt-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
