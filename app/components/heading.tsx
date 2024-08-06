type Props = {
  title?: string;
  subtitle?: string;
  isblue?: string;
  isCenter?: boolean;
  isH1?: boolean;
};

export default function Heading({
  title,
  subtitle,
  isblue,
  isCenter = true,
  isH1 = false,
}: Props) {
  return (
    <div className="my-3">
      {isH1 ? (
        <h1
          className={`text-2xl sm:text-3xl md:text-4xl font-bold my-8 ${
            isCenter ? "text-center" : "text-start"
          }`}
        >
          {title} <br /> <span className="text-[#35acc9]">{isblue}</span>
        </h1>
      ) : (
        <p
          className={`text-2xl sm:text-3xl md:text-4xl font-bold my-8 ${
            isCenter ? "text-center" : "text-start"
          }`}
        >
          {title} <br /> <span className="text-[#35acc9]">{isblue}</span>
        </p>
      )}

      <p
        className={`text-md md:text-lg my-8 ${
          isCenter ? "text-center" : "text-start"
        }`}
      >
        {subtitle}
      </p>
    </div>
  );
}
