import React from "react";
import Privacy from "../components/privacy/privacy";

import type { Metadata } from "next";
import { metadataJson } from "@/metadata";

export async function generateMetadata(): Promise<Metadata> {
  // Fetch metadata from the JSON file
  const pageMetadata = metadataJson["privacyPolicy"];

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
      <Privacy />
    </>
  );
}
