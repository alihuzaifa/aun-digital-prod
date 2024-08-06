import { blogArray, homePageFaq } from "@/data";
import MaxWidthWrapper from "./components/maxWidthWrapper";
import BlogCardHome from "./components/blogCardHome";
import DigitalBusinessSection from "./components/digitalBusinessSection";
import About from "./components/about";
import ProcessAndDevelopment from "./components/processAndDevelopment";
import Heading from "./components/heading";
import FaqCards from "./components/faqCard";
import Client from "./components/client";
import VideoBackground from "./components/videoBackground";

import type { Metadata } from "next";
import { metadataJson } from "@/metadata";
import Web from "./components/web";
import CaseStudies from "./components/caseStudies";
import Industries from "./components/industries";
import Reviews from "./components/reviews";
import Service from "./components/home/service";

export async function generateMetadata(): Promise<Metadata> {
  // Fetch metadata from the JSON file
  const pageMetadata = metadataJson["home"];

  return {
    ...pageMetadata,
    openGraph: {
      ...pageMetadata.openGraph,
      images: [...(pageMetadata.openGraph.images || [])],
    },
  };
}

export default function Home() {
  return (
    <>
      <VideoBackground />
      <About />
      <div className="mb-20" />
      <Service />
      <div className="mb-20" />
      <MaxWidthWrapper>
        <DigitalBusinessSection />
        <div className="mb-20" />
        <Web />
        <div className="mb-20" />
        <CaseStudies title="Why Do Clients Rely on Us?" />
        <div className="mb-20" />
        <Industries />
        <div className="mb-20" />
        <Reviews />
        <div className="mb-20" />
        <ProcessAndDevelopment />
        <div className="mt-3 mb-20" />
        <Heading title="Latest Blogs" isCenter={false} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10">
          {blogArray?.map((obj, index) => {
            return (
              <BlogCardHome
                key={index}
                title={obj?.title}
                image={obj?.image}
                href={obj?.href}
                date={obj?.date}
              />
            );
          })}
        </div>
      </MaxWidthWrapper>
      <Client />
      <MaxWidthWrapper>
        <div className="mb-20">
          <Heading
            isCenter={false}
            title="Frequently Asked Questions"
            subtitle="Here’s a list of frequently asked questions that we often receive related to our website design services in Dubai."
          />
          <FaqCards faqArray={homePageFaq} />
        </div>
      </MaxWidthWrapper>
    </>
  );
}
