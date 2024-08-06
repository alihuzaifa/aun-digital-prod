import React from "react";

import type { Metadata } from "next";
import { metadataJson } from "@/metadata";
import TermsAndConditions from "../components/termsAndCondition/terms";

export async function generateMetadata(): Promise<Metadata> {
  // Fetch metadata from the JSON file
  const pageMetadata = metadataJson["termsAndConditions"];

  return {
    ...pageMetadata,
    openGraph: {
      ...pageMetadata.openGraph,
      images: [...(pageMetadata.openGraph.images || [])],
    },
  };
}

export default function Page() {
  return (
    <>
      <TermsAndConditions />;
    </>
  );
}
