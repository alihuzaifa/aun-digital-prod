import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div className="mt-28" />
      <div className="flex flex-wrap ">
        <div className="md:w-1/2 w-full p-4 text-start flex items-center flex-col pt-10">
          <div className="my-3">
            <p
              className={`text-2xl sm:text-3xl md:text-4xl font-bold  text-start`}
            >
              404 <br /> Page Not Found
            </p>
            <p className={`text-md md:text-lg text-start`}>
              This is not the web page you are looking for...
            </p>
          </div>
        </div>
        <div className="md:w-1/2 w-full mb-10 md:mb-0 p-4 text-start flex items-center flex-col">
          <div
            className={`xl:w-[500px] lg:w-[450px] md:w-[340px] w-[270px] h-[300px] relative`}
          >
            <Image src={"/notFound.gif"} fill priority alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
