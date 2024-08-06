"use client";
import { Button } from "@/components/ui/button";
import { data } from "@/data";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface BlogCardProps {
  imageSrc: string;
  href: string;
  title: string;
  description: string;
  date: string;
}

const Card: React.FC<BlogCardProps> = ({
  imageSrc,
  title,
  description,
  date,
  href,
}) => {
  return (
    <Link href={href}>
      <div className="flex flex-col rounded-2xl bg-white shadow-2xl">
        <div className="relative w-full h-[200px] rounded-tl-2xl rounded-tr-2xl">
          <Image
            src={imageSrc}
            layout="fill"
            alt={title}
            className="rounded-tl-2xl rounded-tr-2xl"
          />
        </div>
        <div className="py-3 px-2">
          <p className="flex justify-between text-md font-semibold text-[#44326e] my-1 gap-x-1">
            <span>{title}</span>
            <span className="text-black text-sm font-normal">{date}</span>
          </p>
          <p className="text-sm font-medium my-1">{description}</p>
        </div>
      </div>
    </Link>
  );
};
export const RecentBlogCard: React.FC<any> = ({ imageSrc, title, href }) => {
  return (
    <Link href={href}>
      <div className="flex flex-col rounded-2xl bg-white shadow-2xl min-h-[320px]">
        <div className="relative w-full h-[200px] rounded-tl-2xl rounded-tr-2xl">
          <Image
            src={imageSrc}
            layout="fill"
            alt={title}
            className="rounded-tl-2xl rounded-tr-2xl"
          />
        </div>
        <div className="py-3 px-2">
          <p className="text-md font-semibold text-[#44326e] my-1">
            <span>{title}</span>
          </p>
          <span>Aijaz Ahmed</span>
        </div>
      </div>
    </Link>
  );
};

export default function BlogCard() {
  const categories = [
    { text: "All", id: 1 },
    { text: "Copywriting", id: 2 },
    { text: "Digital Marketing", id: 3 },
    { text: "Infographics", id: 4 },
    { text: "Mobile App Development", id: 5 },
    { text: "News", id: 6 },
    { text: "Web Design", id: 7 },
  ];
  const [blogCardData, setBlogCardData] = useState(data);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [visibleItems, setVisibleItems] = useState(10);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
      setLoading(false);
    }, 500); // Simulate a 1-second delay
  };
  return (
    <section>
      <div className="py-3 no-scrollbar mb-4 flex">
        {categories?.map(({ text, id }, index) => {
          return (
            <span
              onClick={() => {
                if (id == 1) {
                  setBlogCardData(data);
                } else {
                  const filterByKey = data?.filter(({ key }) => key === id);
                  setBlogCardData(filterByKey);
                }
                setCurrentIndex(index);
              }}
              className={`${
                currentIndex == index ? "tab-bg" : "tab-without-bg"
              } me-4`}
              key={id}
            >
              {text}
            </span>
          );
        })}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogCardData
          .slice(0, visibleItems)
          ?.map(({ title, description, imageSrc, date, href }, index) => {
            return (
              <Card
                key={index}
                imageSrc={imageSrc}
                title={title}
                description={description}
                date={date}
                href={href}
              />
            );
          })}
      </div>
      {visibleItems < blogCardData.length && (
        <div className="my-5 flex justify-center items-center">
          <Button
            className="loadMoreBtn font-semibold"
            disabled={loading}
            onClick={loadMore}
          >
            {loading ? (
              <LoaderCircle className="animate-spin text-white" size={30} />
            ) : (
              "Load More"
            )}
          </Button>
        </div>
      )}
    </section>
  );
}
