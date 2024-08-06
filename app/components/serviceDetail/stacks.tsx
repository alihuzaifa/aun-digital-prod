"use client"
import Image from 'next/image'
import React from 'react'
import bgImage from "../../../public/service-detail/stacks/bg.png";
import MaxWidthWrapper from '../maxWidthWrapper';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";


export default function Stacks() {
    const plugin = React.useRef(
        Autoplay({ delay: 1000, stopOnInteraction: true })
    );
    const plugin2 = React.useRef(
        Autoplay({ delay: 1000, stopOnInteraction: true })
    );
    const imagesArray = [
        "/service-detail/stacks/1.png",
        "/service-detail/stacks/2.png",
        "/service-detail/stacks/3.png",
        "/service-detail/stacks/4.png",
        "/service-detail/stacks/5.png",
        "/service-detail/stacks/6.png",
        "/service-detail/stacks/7.png",
        "/service-detail/stacks/8.png",
        "/service-detail/stacks/1.png",
        "/service-detail/stacks/2.png",
        "/service-detail/stacks/3.png",
        "/service-detail/stacks/4.png",
        "/service-detail/stacks/5.png",
        "/service-detail/stacks/6.png",
        "/service-detail/stacks/7.png",
        "/service-detail/stacks/8.png",
    ];
    const imagesArray2 = [
        "/service-detail/stacks/9.png",
        "/service-detail/stacks/10.png",
        "/service-detail/stacks/11.png",
        "/service-detail/stacks/12.png",
        "/service-detail/stacks/13.png",
        "/service-detail/stacks/14.png",
        "/service-detail/stacks/15.png",
        "/service-detail/stacks/9.png",
        "/service-detail/stacks/10.png",
        "/service-detail/stacks/11.png",
        "/service-detail/stacks/12.png",
        "/service-detail/stacks/13.png",
        "/service-detail/stacks/14.png",
        "/service-detail/stacks/15.png",
    ];
    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                minHeight: "400px",
            }}
        >
            <Image
                src={bgImage}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                style={{ zIndex: -1, overflowY: "hidden" }}
                priority
            />
            <MaxWidthWrapper className="relative z-[1] py-2">
                <div className="my-3">
                    <p
                        className={`text-2xl sm:text-3xl md:text-4xl font-bold`}
                    >
                        Our Digital Marketing Technology Stack
                    </p>
                    <p
                        className={`text-md md:text-lg`}
                    >
                        As the best digital marketing agency in Dubai, we push boundaries by leveraging state-of-the-art
                    </p>
                    <p
                        className={`text-md md:text-lg`}
                    >
                        tools and technologies to drive your brand forward.
                    </p>
                </div>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    className="w-full"
                >
                    <CarouselContent>
                        {imagesArray.map((_, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-1/3 sm:basis-1/4 md:basis-1/6 lg:basis-1/8"
                            >
                                <div
                                    className={`w-[90px] h-[90px] rounded-full object-cover relative m-auto`}
                                >
                                    <Image src={_} fill priority alt="" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[plugin2.current]}
                    onMouseEnter={plugin2.current.stop}
                    onMouseLeave={plugin2.current.reset}
                    className="w-full px-10 mt-6"
                >
                    <CarouselContent>
                        {imagesArray2.map((_, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-1/2 sm:basis-1/4 md:basis-1/5 lg:basis-1/7"
                            >
                                <div
                                    className={`w-[90px] h-[90px] rounded-full object-cover relative m-auto`}
                                >
                                    <Image src={_} fill  alt="" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </MaxWidthWrapper>
        </div>
    )
}