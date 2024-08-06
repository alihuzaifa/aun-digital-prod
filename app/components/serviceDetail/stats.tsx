"use client"
import Image from 'next/image'
import React from 'react'
import MaxWidthWrapper from '../maxWidthWrapper';
import Heading from '../heading';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import CountUp from "react-countup";
import { Plus } from 'lucide-react';

export default function Stats({
    title,
}: {
    title?: string;
}) {
    const plugin = React.useRef(
        Autoplay({ delay: 1000, stopOnInteraction: true })
    );
    const array = [
        {
            text: "In-House Team",
            count: 50,
            image: "/service-detail/stats/1.png",
        },
        {
            text: "Years Of Experience",
            count: 15,
            image: "/service-detail/stats/2.png",
        },
        {
            text: "Digital Projects",
            count: 450,
            image: "/service-detail/stats/3.png",
        },
        {
            text: "Satisfied Clients",
            count: 550,
            image: "/service-detail/stats/4.png",
        },
    ];
    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                minHeight: "400px",
            }}
            className='my-20'
        >

            <Image
                src={'/service-detail/stats-bg.png'}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                style={{ zIndex: -1, overflowY: "hidden" }}
                priority
            />
            <MaxWidthWrapper className="relative z-[1] py-1">
                <div className="text-white py-3">
                    <Heading title={title} />
                </div>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {array.map(({ text, count, image }, index) => (
                            <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                <div
                                    className={`p-4 text-white`}
                                >
                                    <div className="flex justify-center items-center my-3">
                                        <Image src={image} height={100} width={100} alt='stats-image'  />
                                    </div>
                                    <div
                                        className={`text-5xl leading-none font-bold flex justify-center items-center gap-2`}
                                    >

                                        <CountUp end={count} delay={1} duration={4} />
                                        <Plus size={36} strokeWidth={3} />
                                    </div>
                                    <p className="text-2xl font-medium leading-none mt-3 text-center">
                                        {text}
                                    </p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </MaxWidthWrapper>
        </div>
    )
}