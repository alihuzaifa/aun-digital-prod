import { Button } from "@/components/ui/button";
import { careerCardData } from "@/data";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
type CardProp = {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
};

const CareerCard = ({ title, description, imageSrc, href }: CardProp) => {
  return (
    <div className="p-5 flex flex-col border-[1px] border-black rounded-2xl careerCard">
      <Image src={imageSrc} alt="image" width={100} height={100} />
      <p className="text-xl sm:text-2xl md:text-3xl font-bold my-8">{title}</p>
      <p className="text-md md:text-lg my-8">{description}</p>
      <Link href={href}>
        <Button className="btn2 text-white gap-x-2">
          Apply <Plus />
        </Button>
      </Link>
    </div>
  );
};

export default function CareerCards() {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2  lg:grid-cols-3">
      {careerCardData?.map(({ title, description, imageSrc, href }, index) => {
        return (
          <CareerCard
            title={title}
            description={description}
            imageSrc={imageSrc}
            key={index}
            href={href}
          />
        );
      })}
    </section>
  );
}
