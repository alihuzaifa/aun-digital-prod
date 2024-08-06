import CareerDetail from "@/app/components/career/careerDetail";
import CareerHero from "@/app/components/careerHero";
import Heading from "@/app/components/heading";
import MaxWidthWrapper from "@/app/components/maxWidthWrapper";
import { careerCardData } from "@/data";
import { metadataJson } from "@/metadata";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const pageMetadata = metadataJson[slug];
  return {
    ...pageMetadata,
    openGraph: {
      ...pageMetadata.openGraph,
      images: [...(pageMetadata.openGraph?.images || [])],
    },
  };
}

export default function page({ params: { slug } }: any) {
  const checkCardData = careerCardData.find((card) => card.key === slug);
  if (!checkCardData) return notFound();
  return (
    <section>
      <div className="mt-28" />
      <MaxWidthWrapper>
        <CareerHero
          title="We Help Digital Businesses"
          subtitle="Thrive & Dominate"
        />
        <div className="mb-20" />
        <Heading
        isH1
          title={checkCardData?.title}
          subtitle={checkCardData?.description}
          isCenter={false}
        />
        <CareerDetail detail={checkCardData} slug={slug} />
      </MaxWidthWrapper>
    </section>
  );
}
