import Image from "next/image";

const ServiceCard = () => {
  return (
    <div className="item">
      <div className="serv-category-card bg-light-blue p-12 rounded-lg transition duration-500 hover:bg-cover hover:bg-[url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='400' height='500' preserveAspectRatio='none' viewBox='0 0 400 500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1247%26quot%3b)' fill='none'%3e%3crect width='400' height='500' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1248%26quot%3b)'%3e%3c/rect%3e%3cpath d='M225.5920827574034 291.8041314343701L308.10614687375784 251.55933334981106 267.8613487891988 169.04526923345662 185.34728467284435 209.29006731801564z' fill='rgba(25%2c 144%2c 186%2c 0.41)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M-59.26 250.84 a90.91 90.91 0 1 0 181.82 0 a90.91 90.91 0 1 0 -181.82 0z' fill='rgba(25%2c 144%2c 186%2c 0.41)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M184.6520623437056 368.9714315825685L246.52829868736902 352.39174402360663 229.94861112840712 290.51550767994325 168.07237478474372 307.09519523890515z' fill='rgba(25%2c 144%2c 186%2c 0.41)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M118.78 258.05 a123.46 123.46 0 1 0 246.92 0 a123.46 123.46 0 1 0 -246.92 0z' fill='rgba(25%2c 144%2c 186%2c 0.41)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1247'%3e%3crect width='400' height='500' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='50%25' x2='100%25' y2='50%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1248'%3e%3cstop stop-color='rgba(68%2c 50%2c 110%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(25%2c 144%2c 186%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e')]">
        <Image
          alt="Service Category"
          className="img-fluid w-[110px] h-[110px] mb-8"
          src="/assets/images/bages/serv-icon-6.png"
          width={110}
          height={110}
          priority
        />
        <h3 className="pt-4 pb-2">
          Stellar Design
          <br />
          Expertise
        </h3>
        <p className="h-44 overflow-auto pr-1">
          We take immense pride in offering our clients the best, most
          responsive, and most appealing web design services in Dubai. We follow
          solid design principles and practices to develop feature-rich websites
          that work smoothly across various domains and devices.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
