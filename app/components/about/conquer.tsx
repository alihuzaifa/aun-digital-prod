import Image from "next/image";
import Heading from "../heading";

export default function Conquer() {
  return (
    <div className="flex flex-wrap my-20">
      <div className="md:w-1/2 w-full p-4  md:text-start flex relative flex-col">
        <Heading
          isCenter={false}
          title="Revolutionize, Empower, Conquer Purposeful Brand Influence Through
          Dynamic Platforms!"
          subtitle="At the helm of the digital revolution, we engineer purpose-driven
          journeys. Our platforms aren't just tools; they're dynamic stages for
          your brand's narrative. With us, empower your audience, align your
          purpose, and conquer the digital realm with charisma and flair."
        />
      </div>
      <div className="md:w-1/2 w-full">
        <div
          className={`xl:w-[600px] lg:w-[490px] md:w-[370px] w-full h-[300px] md:h-full  relative`}
        >
          <Image src={"/about/conquer/pc.png"} fill  alt="" />
        </div>
      </div>
    </div>
  );
}
