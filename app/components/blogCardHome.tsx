import { BlogCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const BlogCardHome: FC<BlogCardProps> = ({
  image,
  title,
  href = "/",
  date,
}) => {
  return (
    <Link href={href} target="_blank" className="cursor-pointer pe-3 py-2">
      <figure className="relative flex flex-col w-full h-96 border rounded-xl mb-5">
        <Image
          src={image}
          alt={title}
          fill
          className="h-full w-full rounded-xl object-fill"
        />
      </figure>
      <span className="text-sm md:text:md py-2 font-medium">{date}</span>
      <div className="flex flex-col">
        <h1 className="text-md md:text-lg py-1 font-bold">{title}</h1>
      </div>
    </Link>
  );
};

export default BlogCardHome;
