import MaxWidthWrapper from "./maxWidthWrapper";

export default function BlogHeader() {
  return (
    <MaxWidthWrapper>
      <div className="my-3">
        <p className="text-md md:text-lg text-[#35acc9] font-bold text-center  mb-3 pt-5">
          Stay One-Step Ahead of the Competition With
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center w-full sm:w-[70%] md:w-[63%] lg:w-[55%] mx-0 sm:mx-auto">
          Latest News, Insights, Advices, And Evolving Industry-Trends From A
          Team Of{" "}
          <span className="text-[#35acc9]">Digital Transformation Experts</span>
        </p>
      </div>
    </MaxWidthWrapper>
  );
}
