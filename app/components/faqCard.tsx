import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FaqCardProps, FaqCardsArrayProps } from "@/types";

const FaqBox: React.FC<FaqCardProps> = ({ title, description, number }) => {
  return (
    <div className="flip-box">
      <div className="flip-box-front">
        <div className="inner">
          <p className="faqNum">{number}</p>
          <p className="text-md">{title}</p>
        </div>
      </div>
      <div
        className="flip-box-back"
        style={{ backgroundColor: "#00a7cf", border: "1px solid #00a7cf" }}
      >
        <div className="inner">
          <p className="faqNum">{number}</p>
          <p className="text-md text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};
const FaqCards: React.FC<FaqCardsArrayProps> = ({ faqArray }) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {faqArray.map(({ title, description }, index) => (
          <CarouselItem
            key={index}
            className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <FaqBox
              title={title}
              description={description}
              number={index + 1}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
export default FaqCards;
