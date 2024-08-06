import MaxWidthWrapper from "../components/maxWidthWrapper";
import CareerHero from "../components/careerHero";
import Heading from "../components/heading";
import CareerCards from "../components/careerCards";

import type { Metadata } from "next";
import { metadataJson } from "@/metadata";

export async function generateMetadata(): Promise<Metadata> {
  // Fetch metadata from the JSON file
  const pageMetadata = metadataJson["career"];

  return {
    ...pageMetadata,
    openGraph: {
      ...pageMetadata.openGraph,
      images: [...(pageMetadata.openGraph?.images || [])],
    },
  };
}

export default function page() {
  return (
    <MaxWidthWrapper>
      <section>
        <CareerHero />
        <div className="my-20">
          <Heading
            isH1
            isCenter={false}
            title="Current Openings."
            subtitle="At Aun Digital, we welcome talent with open arms. We are frequently on the lookout for energetic, confident, and talented individuals who are willing to dedicate their expertise and skills to our growing team!"
          />
          <div className="mb-20" />
          <CareerCards />
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
