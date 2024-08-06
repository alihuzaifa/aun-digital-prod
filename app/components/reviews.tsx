"use client";
import Heading from "./heading";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Reviews() {
  return (
    <>
      <Heading isCenter={false} title="Rating & Reviews" isblue="Trusted By people" />
      <div className="mb-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white gap-x-5 gap-y-7">
        {/* card1 id */}
        <div className="py-7 px-5 bg-[#44326e] mx-5 rounded-3xl" >
          <div className="flex gap-x-3">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p className="text-md sm:text-lg mt-5">
            Even though the deadline was tight, AUN Digital managed to design a
            website for us that now pulls 10x more customers than before.
          </p>
          <hr className="mt-3" />
          <div className="flex mt-4 gap-x-4 items-center">
            <div className="relative w-[50px] h-[50px] rounded-full">
              <Image
                src="/home/reviews/1.png"
                alt="Review Image"
                fill
                className="rounded-full object-fill"
              />
            </div>
            <div>
              <p className="text-md sm:text-lg">Anmar Alkamil</p>
              <p className="text-md sm:text-lg">CEO, Chic Floors</p>
            </div>
          </div>
        </div>
        <div className="py-7 px-5 bg-[#35acc9] mx-5 rounded-3xl mt-[-10px]">
          <div className="flex gap-x-3">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p className="text-md sm:text-lg mt-5">
            Even though the deadline was tight, AUN Digital managed to design a
            website for us that now pulls 10x more customers than before.
          </p>
          <hr className="mt-3" />
          <div className="flex mt-4 gap-x-4 items-center">
            <div className="relative w-[50px] h-[50px] rounded-full">
              <Image
                src="/home/reviews/2.jfif"
                alt="Review Image"
                fill
                className="rounded-full object-fill"
              />
            </div>
            <div>
              <p className="text-md sm:text-lg">Muhammad Sheharyar</p>
              <p className="text-md sm:text-lg">CEO, Acusense</p>
            </div>
          </div>
        </div>
        {/* card3 id */}
        <div className="py-7 px-5 bg-[#44326e] mx-5 rounded-3xl" >
          <div className="flex gap-x-3">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p className="text-md sm:text-lg mt-5">
            Working with AUN Digital has been a game-changer for our business.
            Their team is highly dedicated, and worked hard to implement the
            latest SEO strategies on our website.
          </p>
          <hr className="mt-3" />
          <div className="flex mt-4 gap-x-4 items-center">
            <div className="relative w-[50px] h-[50px] rounded-full">
              <Image
                src="/home/reviews/3.png"
                alt="Review Image"
                fill
                className="rounded-full object-fill"
              />
            </div>
            <div>
              <p className="text-md sm:text-lg">Saahil Kewlani</p>
              <p className="text-md sm:text-lg">CEO, Green Arch Properties</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
