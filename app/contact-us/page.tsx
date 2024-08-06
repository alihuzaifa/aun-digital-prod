import Contact from "../components/contact/contact";
import type { Metadata } from 'next';
import { metadataJson } from "@/metadata";
export async function generateMetadata(
): Promise<Metadata> {
  // Fetch metadata from the JSON file
  const pageMetadata = metadataJson['contact'];

  return {
    ...pageMetadata,
    openGraph: {
      ...pageMetadata.openGraph,
      images: [...(pageMetadata.openGraph?.images || [])],
    },
  };
}

export default function page() {
  return <Contact />;
}
