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

export default function TermsAndConditions() {
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
                                <Heading isH1 title="TERMS & CONDITIONS" isCenter={false} />
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
                                                    <Image src={imageSrc} fill alt="" />
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                </Carousel>
                                <Heading
                                    subtitle="Aun Digital is your Online Personal Assistant. Our holistic digital marketing services in Dubai give your business maximum digital reach, attract prospects, and trap them into your sales funnel. We value your business and aspire to see it thrive."
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
                        <PrivacyStatement title="" subtitle={`Welcome to AUNDigital.ae (referred to as "we," "us," or "our"). These Terms and Conditions ("Terms") govern your use of our website, products, and services. Please read these Terms carefully before accessing or using our platform. By using AUNDigital.ae, you agree to comply with and be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website.`} />
                        <PrivacyStatement title="Acceptance of Terms:" subtitle="By accessing or using AUNDigital.ae, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use our services." />
                        <PrivacyStatement title="Services:" subtitle="AUNDigital.ae provides digital marketing services in Dubai. These services include but are not limited to search engine optimization (SEO), social media marketing, content creation, and website development. The specific details of the services can be found on our website." />
                        <PrivacyStatement title="User Registration:" subtitle="Some features of our services may require you to register an account. You agree to provide accurate, current, and complete information during the registration process. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account." />
                        <PrivacyStatement title="Intellectual Property:" subtitle="All content on AUNDigital.ae, including but not limited to text, graphics, logos, images, and software, is the property of AUNDigital.ae and is protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, distribute, or display any portion of the content without our express written permission." />
                        <PrivacyStatement title="Payment and Billing:" subtitle="Payment for our services is due as per the terms agreed upon in the service agreement. We accept various payment methods, and all payment information is handled securely. Failure to make timely payments may result in the suspension or termination of services." />
                        <PrivacyStatement title="Cancellation and Refund Policy:" subtitle="Details regarding cancellation and refunds are outlined in our service agreement. Please review the terms carefully before engaging our services." />
                        <PrivacyStatement title="Confidentiality:" subtitle="AUNDigital.ae agrees to keep confidential any information provided by the client that is not publicly known. Similarly, the client agrees to keep confidential any proprietary information provided by AUNDigital.ae." />
                        <PrivacyStatement title="Limitation of Liability:" subtitle="AUNDigital.ae shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services." />
                        <PrivacyStatement title="Indemnification:" subtitle="You agree to indemnify and hold AUNDigital.ae harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of our services, violation of these Terms, or infringement of any intellectual property or other right of any person or entity." />
                        <PrivacyStatement title="Governing Law:" subtitle="These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising out of or in connection with these Terms shall be resolved through arbitration in Dubai." />
                        <PrivacyStatement title="Changes to Terms:" subtitle="AUNDigital.ae reserves the right to update or modify these Terms at any time without prior notice. The latest version of the Terms will be posted on our website. It is your responsibility to review these Terms periodically." />
                        <PrivacyStatement title="Contact Information:" subtitle="For any questions regarding these Terms, please contact us at contact@aundigital.ae." />
                        <PrivacyStatement title="" subtitle="By using AUNDigital.ae, you agree to these Terms and Conditions. Thank you for choosing AUNDigital.ae for your digital marketing needs." />
                    </div>
                </MaxWidthWrapper>
            </MaxWidthWrapper>
        </>
    );
}
