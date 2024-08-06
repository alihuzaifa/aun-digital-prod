import BlogHeader from "../components/blogHeader";
import Image from 'next/legacy/image'
import bgImage from "../../public/bg.png";
import Tab from "../components/blog/tab";

import type { Metadata } from 'next';
import { metadataJson } from "@/metadata";


export async function generateMetadata(): Promise<Metadata> {
  // Fetch metadata from the JSON file
  const pageMetadata = metadataJson['blog'];


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
    <section>
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "250px",
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
        <div className="relative z-[1] md:pt-10 pt-5">
          <BlogHeader />
        </div>
      </div>
      <Tab />
    </section>
  );
}
