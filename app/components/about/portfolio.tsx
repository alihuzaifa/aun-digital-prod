import Heading from "../heading";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  const data = [
    "/about/portfolio/1.png",
    "/about/portfolio/2.png",
    "/about/portfolio/3.png",
    "/about/portfolio/4.png",
    "/about/portfolio/5.png",
    "/about/portfolio/6.png",
  ]
  return (
    <div className="mb-20">
      <Heading
        title="Our Portfolio"
        subtitle="Some of our expertise shown here."
        isCenter={false}
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {data?.map((_, index) => {
          return (
            <Link
              href={_}
              key={index}
              className="relative w-full h-[200px] rounded-md"
            >
              <Image
                src={_}
                layout="fill"
                alt={"title"}
                className="rounded-md"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
