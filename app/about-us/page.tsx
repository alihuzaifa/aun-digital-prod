import MaxWidthWrapper from "../components/maxWidthWrapper";
import CareerHero from "../components/careerHero";
import Heading from "../components/heading";
import DigitalSolutionCards from "../components/about/digitalSolutions";
import Cta from "../components/about/cta";
import CustomerSupport from "../components/about/customerSupport";
import Portfolio from "../components/about/portfolio";
import Conquer from "../components/about/conquer";
import Contact from "../components/about/contact";

import type { Metadata } from "next";
import { metadataJson } from "@/metadata";

export async function generateMetadata(): Promise<Metadata> {
  // Fetch metadata from the JSON file
  const pageMetadata = metadataJson["about"];

  return {
    ...pageMetadata,
    openGraph: {
      ...pageMetadata.openGraph,
      images: [...(pageMetadata.openGraph?.images || [])],
    },
  };
}

export default function Page() {
  return (
    <section>
      <div className="mt-28" />
      <MaxWidthWrapper>
        <CareerHero />
        <div className="my-20">
          <Heading
            isH1
            isCenter={false}
            title="Explore Our Comprehensive"
            isblue="Online Digital Solutions"
          />
        </div>
        <div className="mt-16 mb-20">
          <DigitalSolutionCards />
        </div>
      </MaxWidthWrapper>
      <Cta />
      <MaxWidthWrapper>
        <CustomerSupport />
        <Portfolio />
        <Conquer />
        <div className="my-20" />
        <Contact />
      </MaxWidthWrapper>
    </section>
  );
}
