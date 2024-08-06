"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import ApplyModal from "../applyModal";
import Svg from "../svg";
import { useState } from "react";

export default function CareerDetail({
  detail,
  slug,
}: {
  detail: any;
  slug?: any;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-wrap ">
      <div className="md:w-1/2 w-full px-4 pb-2 text-start flex flex-col">
        {detail?.detail?.requirementDescription && (
          <>
            <p className="text-lg md:text-xl font-medium">Requirements:</p>
            <p className="text-md md:text-lg mb-3">
              {detail?.detail?.requirementDescription}
            </p>
          </>
        )}
        <p className="text-lg md:text-xl font-medium">Responsibilities:</p>
        <ul className="list-disc">
          {detail?.detail?.responsibilities?.map(
            (content: string, index: number) => (
              <li className="list-item ms-10 my-1" key={index}>
                {content}
              </li>
            )
          )}
        </ul>
        <p className="text-md md:text-lg my-1">
          Important Note: This is NOT a work-from-home / remote job.
        </p>
        <p className="text-md md:text-lg my-1">
          If you are passionate about joining our team as a{" "}
          {detail?.detail?.title} then apply now at:
        </p>
        <Link
          href="mailto:info@aundigital.ae"
          className="text-md md:text-lg my-1 text-blue-500"
        >
          hr@aundigital.ae
        </Link>
        {detail?.detail?.jobType && (
          <p className="text-md md:text-lg my-1">
            Job Types: {detail?.detail?.jobType}
          </p>
        )}

        {detail?.detail?.isContract && (
          <p className="text-md md:text-lg my-1">
            Contract: {detail?.detail?.isContract}
          </p>
        )}
        {detail?.detail?.isCertificate && (
          <p className="text-md md:text-lg my-1">
            Rewards {detail?.detail?.isCertificate}
          </p>
        )}
        <Button
          className="btn2 text-white gap-x-2 mt-3"
          onClick={() => {
            setOpen(true);
          }}
        >
          Apply <Plus />
        </Button>
        <ApplyModal open={open} setOpen={setOpen} slug={slug} />
      </div>
      <div className="md:w-1/2 w-full p-4 text-start flex items-center flex-col">
        <Svg imagePath={detail?.detail?.imagePath} />
      </div>
    </div>
  );
}
