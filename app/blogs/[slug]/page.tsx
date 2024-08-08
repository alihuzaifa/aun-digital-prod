import { AccordionDemo8 } from "@/app/components/blog/accordian";
import {
  Blog1,
  Blog10,
  Blog11,
  Blog12,
  Blog13,
  Blog14,
  Blog15,
  Blog16,
  Blog17,
  Blog18,
  Blog19,
  Blog2,
  Blog20,
  Blog21,
  Blog22,
  Blog23,
  Blog24,
  Blog25,
  Blog26,
  Blog27,
  Blog28,
  Blog29,
  Blog3,
  Blog30,
  Blog31,
  Blog32,
  Blog33,
  Blog34,
  Blog35,
  Blog4,
  Blog5,
  Blog6,
  Blog7,
  Blog8,
  Blog9,
} from "@/app/components/blog/blogData";
import { RecentBlogCard } from "@/app/components/blogCard";
import Heading from "@/app/components/heading";
import MaxWidthWrapper from "@/app/components/maxWidthWrapper";
import SpeakToExpert from "@/app/components/speakToExpert";
import Subscribe from "@/app/components/subscribe";
import { data } from "@/data";
import { metadataJson } from "@/metadata";
import { CalendarRange, MessageSquareMore, User } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BsTwitterX } from "react-icons/bs";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook, FaYoutube } from "react-icons/fa6";

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

function CommonHeader({
  data: { imageSrc, summary, content, date, home },
}: any) {
  return (
    <>
      <p className="my-2">
        <Link href={"/blogs"}>
          {" "}
          <span className="text-[#35acc9] me-1">Home</span>
        </Link>
        <span>
          {">>"} {home}
        </span>
      </p>
      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
        <Image
          src={imageSrc}
          alt="Background Image"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="absolute inset-0"
        />
      </div>
      <div className="my-2">
        <AccordionDemo8 summary={summary} content={content} />
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center gap-x-4">
            <div className="flex gap-x-2 items-center">
              <User /> Aijaz Mughal
            </div>
            <div className="flex gap-x-2 items-center">
              <CalendarRange /> {date}
            </div>
            <div className="flex gap-x-2 items-center">
              <MessageSquareMore /> No Comments
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <Link
              href={"https://www.facebook.com/Aundigitalagency/"}
              target="_blank"
              className="mb-2 flex h-10 w-10 items-center justify-center rounded transition-colors"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href="https://twitter.com/AunDigital"
              target="_blank"
              className="mb-2 flex h-10 w-10 items-center justify-center rounded text-black transition-colors"
            >
              <BsTwitterX size={20} />
            </Link>
            <Link
              href="https://www.tiktok.com/@aundigitalagency"
              target="_blank"
              className="mb-2 flex h-10 w-10 items-center justify-center rounded  transition-colors"
            >
              <FaYoutube size={20} />
            </Link>
            <Link
              href="https://www.facebook.com/Aundigitalagency/"
              target="_blank"
              className="mb-2 flex h-10 w-10 items-center justify-center rounded  transition-colors"
            >
              <CiInstagram size={24} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default function page({ params: { slug } }: any) {
  const checkBlogData = data.find((item) => item.pageKey === slug);
  console.log("🚀 ~ page ~ checkBlogData:", checkBlogData, slug);
  if (!checkBlogData) return notFound();
  const checkIndexNo = data.findIndex((item) => item.pageKey === slug);
  const previousBlogData = data[checkIndexNo - 1];
  const nextData = data[checkIndexNo + 1];

  return (
    <section>
      <div className="mt-28" />
      <div className="bg-[#44326E29] w-full h-72 flex justify-center items-center">
        <MaxWidthWrapper>
          <></>
          <Heading title={checkBlogData?.title || ""} />
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper>
        <div className="flex flex-wrap">
          <div className="md:w-[70%] w-full p-4 text-start flex flex-col pt-10">
            <CommonHeader data={checkBlogData || {}} />
            <Blog29 />
            {slug == "tips-to-localize-google-ads" && <Blog1 />}
            {slug == "islamic-new-year-holiday-uae" && <Blog2 />}
            {slug == "how-to-change-location-on-google" && <Blog3 />}
            {slug == "google-june-2024-spam-update" && <Blog4 />}
            {slug ==
              "google-to-stop-indexing-non-mobile-responsive-websites" && (
              <Blog5 />
            )}
            {slug == "eid-al-adha-holidays-dubai-uae" && <Blog6 />}
            {slug == "how-to-setup-tiktok-ads-manager-account" && <Blog7 />}
            {slug == "food-delivery-apps-dubai-uae" && <Blog8 />}
            {slug == "smart-data-and-ai-summit" && <Blog9 />}
            {slug == "google-deepmind-unveils-genie-ai" && <Blog10 />}
            {slug ==
              "google-ads-to-automatically-pause-low-activity-keywords" && (
              <Blog11 />
            )}
            {slug == "laravel-usage-statistics" && <Blog12 />}
            {slug == "eid-al-fitr-holidays-uae-for-financial-markets" && (
              <Blog13 />
            )}
            {slug == "eid-al-fitr-holidays-uae" && <Blog14 />}
            {slug == "google-core-update-recovery-guide" && <Blog15 />}
            {slug == "ppc-for-event-marketing" && <Blog16 />}
            {slug == "best-time-to-post-on-snapchat" && <Blog17 />}
            {slug == "social-media-metrics" && <Blog18 />}
            {slug == "google-circle-to-search" && <Blog19 />}
            {slug == "ramadan-working-hours-uae" && <Blog20 />}
            {slug == "real-estate-website-design" && <Blog21 />}

            {/* Verifying It Please */}
            {slug == "types-of-ctas" && <Blog22 />}
            {slug == "best-home-internet-packages-dubai" && <Blog23 />}
            {slug == "best-ai-tools-for-businesses" && <Blog24 />}
            {slug == "best-practices-for-secure-web-development" && <Blog25 />}
            {slug == "best-practices-for-secure-web-development" && <Blog26 />}
            {slug == "tattoo-design-apps" && <Blog27 />}
            {slug == "website-redesign-costs-and-benefits" && <Blog28 />}
            {slug == "benefits-of-custom-software-application-development" && (
              <Blog29 />
            )}
            {slug == "video-calling-apps-in-uae" && <Blog30 />}
            {slug == "best-instant-loan-apps-in-uae" && <Blog31 />}
            {slug == "content-marketing-mistakes" && <Blog32 />}
            {slug == "future-of-streaming" && <Blog33 />}
            {slug == "arabic-seo-guide" && <Blog34 />}
            {slug ==
              "four-vital-steps-for-businesses-to-accelerate-sales-in-2024" && (
              <Blog35 />
            )}
            <div className="my-3">
              <div className="flex justify-between items-center gap-x-3">
                {checkIndexNo > 0 ? (
                  <div className="flex flex-col gap-y-1">
                    <p className={`text-md md:text-lg my-2`}>Previous</p>
                    <Link href={previousBlogData?.href}>
                      <span className="font-bold text-[#35acc9]">
                        {previousBlogData?.title}
                      </span>
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col gap-y-1"></div>
                )}
                {checkIndexNo === data?.length - 1 ? (
                  <div className="flex flex-col gap-y-1"></div>
                ) : (
                  <div className="flex flex-col gap-y-1">
                    <p className={`text-md md:text-lg my-2 text-end me-4`}>
                      Next
                    </p>
                    <Link href={nextData?.href}>
                      <span className="font-bold text-[#35acc9]">
                        {nextData?.title}
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="md:w-[30%] w-full p-4 text-start flex flex-col pt-10">
            <div className="mt-3" />
            <div className="shadow-2xl bg-white rounded-2xl w-full p-3">
              <p className="text-[#44326e] font-bold text-md md:text-lg my-2">
                Aijaz Mughal
              </p>
              <p className="text-sm md:text-md my-2">
                Mr. Aijaz Mughal is a trusted advisor and thought leader in
                Digital Marketing & Business Growth with over 20 years of
                extensive experience. Throughout his illustrious career, he has
                had the privilege of working with top-tier brands such as Emaar,
                Masdar, Honda, Leejam, Unilever, The Dubai Mall, Emerson,
                Moorfields and Yamaha, where he has made significant
                contributions to their Digital Marketing Success.
              </p>
            </div>
            <div className="mt-20" />
            <div className="w-full p-3 border rounded-2xl">
              <p className={`text-md md:text-lg my-2 font-semibold `}>
                Speak to an Expert
              </p>
              <SpeakToExpert slug={slug} />
            </div>
            <div className="w-full p-3 border rounded-2xl mt-20">
              <p className={`text-md md:text-lg my-4 font-semibold `}>
                Subscribe
              </p>
              <Subscribe />
            </div>
          </div>
        </div>
        <Heading title="Recent Post" isCenter={false} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-10 gap-6">
          {data?.slice(0, 6)?.map((obj, index) => {
            return (
              <RecentBlogCard
                key={index}
                title={obj?.title}
                imageSrc={obj?.imageSrc}
                href={obj?.href}
              />
            );
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
