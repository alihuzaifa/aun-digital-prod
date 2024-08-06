"use client";
import React from "react";
import MaxWidthWrapper from "../maxWidthWrapper";
import Image from "next/image";
import bgImage from "../../../public/bg.png";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Heading from "../heading";

interface PrivacyStatementProps {
    title: string;
    subtitle: string;
}

export const PrivacyStatement: React.FC<PrivacyStatementProps> = ({ title, subtitle }) => {
    return (
        <>
            <p className="text-xl sm:text-2xl font-bold text-start text-[#44326e] my-2">
                {title}
            </p>
            <p className="text-md md:text-lg text-start mb-5">
                {subtitle}
            </p>
        </>
    );
};

export default function Privacy() {
    const plugin = React.useRef(Autoplay({ delay: 1000, stopOnInteraction: true }));

    const imagesArray = [
        "/contact/1.png",
        "/contact/2.png",
        "/contact/3.png",
        "/contact/4.png",
        "/contact/1.png",
        "/contact/2.png",
        "/contact/3.png",
        "/contact/4.png",
    ];

    return (
        <>
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
                <MaxWidthWrapper className="">
                    <MaxWidthWrapper className="relative z-[1]">
                        <div className="flex flex-wrap pt-10 ms-[-12px]">
                            <div className="md:w-[50%] w-full text-start flex flex-col">
                                <Heading isH1 title="Privacy Policy" isCenter={false} />
                                <Carousel
                                    opts={{
                                        align: "start",
                                        loop: true,
                                    }}
                                    plugins={[plugin.current]}
                                    onMouseEnter={() => plugin.current.stop()}
                                    onMouseLeave={() => plugin.current.reset()}
                                    className="w-full"
                                >
                                    <CarouselContent>
                                        {imagesArray.map((imageSrc, index) => (
                                            <CarouselItem
                                                key={index}
                                                className="basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4"
                                            >
                                                <div className={`w-[130px] h-[80px] object-cover relative m-auto`}>
                                                    <Image src={imageSrc} fill priority alt="" />
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                </Carousel>
                                <Heading
                                    subtitle="Aun Digital is your Online Personal Assistant. Our holistic digital marketing contact in Dubai gives your business maximum digital reach, attracts prospects, and traps them into your sales funnel. We value your business and aspire to see it thrive."
                                    isCenter={false}
                                />
                            </div>
                            <div className="md:w-[50%] w-full mb-6 md:mb-0 p-4 hidden md:block"></div>
                        </div>
                    </MaxWidthWrapper>
                </MaxWidthWrapper>
            </div>
            <MaxWidthWrapper className="my-20">
                <MaxWidthWrapper className="ms-[-12px]">
                    <div className="">
                        <PrivacyStatement title="Privacy Statement for AUNDigital.ae" subtitle="At AUNDigital.ae, we are committed to protecting your privacy and safeguarding your personal information. This Privacy Statement outlines how we collect, use, disclose, and protect the information you provide when using our website and services." />
                        <PrivacyStatement title="Information We Collect:" subtitle="We may collect personal information when you voluntarily provide it to us, such as when you fill out a contact form, register for an account, or subscribe to our newsletter. The types of personal information we may collect include your name, email address, phone number, and other relevant contact details." />
                        <PrivacyStatement title="How We Use Your Information:" subtitle="We use the information we collect for various purposes, including to provide and improve our services, communicate with you, process payments, and send you relevant updates and marketing information. We may also use your information to personalize your experience on our website." />
                        <PrivacyStatement title="Information Sharing:" subtitle="AUNDigital.ae does not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, as long as they agree to keep this information confidential." />
                        <PrivacyStatement title="Security:" subtitle="We take reasonable measures to protect the security of your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security." />
                        <PrivacyStatement title="Cookies:" subtitle="AUNDigital.ae uses cookies to enhance your user experience. Cookies are small pieces of data stored on your device that improve website functionality. You can choose to disable cookies through your browser settings, but please note that some features of our website may not function properly if cookies are disabled." />
                        <PrivacyStatement title="Links to Third-Party Websites:" subtitle="Our website may contain links to third-party websites. Please be aware that we are not responsible for the privacy practices of such sites. We encourage you to review the privacy statements of these websites when you visit them." />
                        <PrivacyStatement title="Children's Privacy:" subtitle="AUNDigital.ae does not knowingly collect personal information from children under the age of 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take steps to remove that information from our systems." />
                        <PrivacyStatement title="Changes to the Privacy Statement:" subtitle="AUNDigital.ae reserves the right to update or modify this Privacy Statement at any time without prior notice. The latest version of the Privacy Statement will be posted on our website. It is your responsibility to review this Privacy Statement periodically." />
                        <PrivacyStatement title="Contact Information:" subtitle="If you have any questions or concerns about our Privacy Statement or the handling of your personal information, please contact us at privacy@aundigital.ae." />
                        <PrivacyStatement title="" subtitle="By using AUNDigital.ae, you agree to the terms of this Privacy Statement. Thank you for trusting us with your information." />
                    </div>
                </MaxWidthWrapper>
            </MaxWidthWrapper>
        </>
    );
}
