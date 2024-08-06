"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { CiInstagram, CiLocationOn, CiMail } from "react-icons/ci";
import { BsFillTelephoneFill, BsTwitterX } from "react-icons/bs";
import {
  FaBehance,
  FaFacebook,
  FaLinkedinIn,
  FaPinterest,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import MaxWidthWrapper from "./maxWidthWrapper";

const Footer = () => {
  const services = [
    {
      path: "/services/digital-marketing-agency-dubai",
      name: "Digital Marketing",
    },
    { path: "/services/seo-agency-dubai", name: "Seo Agency" },
    { path: "/", name: "Web Development" },
    { path: "/services/social-media-agency-dubai", name: "Social Media" },
    { path: "/services/branding-agency-dubai", name: "Branding" },
    { path: "/services/ui-ux-design-agency-dubai", name: "Ui Ux Design" },
    { path: "/mobile-app-development-dubai", name: "Mobile App Development" },
    { path: "/services/ppc-pay-per-click-agency-dubai", name: "Ppc Marketing" },
    { path: "/services/it-resource-outsourcing", name: "IT Resource" },
    { path: "/services/email-marketing-dubai", name: "Email Marketing" },
    {
      path: "/services/wordpress-website-design-dubai",
      name: "Wordpress Web Design",
    },
  ];
  const quickLinks = [
    { path: "/about-us", name: "About Us" },
    { path: "/blog", name: "Our Blog" },
    { path: "/contact-us", name: "Contact Us" },
  ];

  return (
    <footer className="bg-[#44326e] text-white rounded-tl-sm rounded-tr-sm">
      <MaxWidthWrapper>
        <p className="my-2 pt-5 font-bold text-lg text-start md:text-xl lg:text-2xl">
          Collaborate with us
        </p>
        <div>
          <div className="py-4">
            <div className="gap-10 space-y-10 md:grid md:grid-cols-12 md:space-y-0">
              <div className="col-span-3">
                <Link href="/" className="shrink-0">
                  <Image
                    src={`/white-logo.png`}
                    width={200}
                    height={200}
                    alt={""}
                  />
                </Link>
                <p className="mb-8 mt-6">
                  Aun Digital is an industry-leading digital transformation
                  agency dedicated to delivering cutting-edge digital solutions
                  to help businesses grow.
                </p>
                <p className="mb-1 font-medium text-md">Follow Us On:</p>
                <div className="flex space-x-2 ml-[-10px]">
                  <Link
                    href={"https://www.facebook.com/Aundigitalagency/"}
                    target="_blank"
                    className="mb-2 flex h-10 w-10 items-center justify-center rounded text-white transition-colors"
                  >
                    <FaFacebook size={24} />
                  </Link>
                  <Link
                    href="https://www.facebook.com/Aundigitalagency/"
                    target="_blank"
                    className="mb-2 flex h-10 w-10 items-center justify-center rounded text-white transition-colors"
                  >
                    <CiInstagram size={24} />
                  </Link>
                  <Link
                    href="https://twitter.com/AunDigital"
                    target="_blank"
                    className="mb-2 flex h-10 w-10 items-center justify-center rounded text-white transition-colors"
                  >
                    <BsTwitterX size={20} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/aundigitalagency"
                    target="_blank"
                    className="mb-2 flex h-10 w-10 items-center justify-center rounded text-white transition-colors"
                  >
                    <FaLinkedinIn size={24} />
                  </Link>
                </div>
                <div className="flex space-x-2 ml-[-10px]">
                  <Link
                    href="https://www.pinterest.com/aundigitalagency/"
                    target="_blank"
                    className="mb-2 flex h-10 w-10 items-center justify-center rounded text-white transition-colors"
                  >
                    <FaPinterest size={24} />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@AunDigitalAgency/about"
                    target="_blank"
                    className="mb-2 flex h-10 w-10 items-center justify-center rounded text-white transition-colors"
                  >
                    <FaTiktok size={24} />
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@aundigitalagency"
                    target="_blank"
                    className="mb-2 flex h-10 w-10 items-center justify-center rounded text-white transition-colors"
                  >
                    <FaYoutube size={20} />
                  </Link>
                  <Link
                    href="/https://www.behance.net/aundigitalagency"
                    target="_blank"
                    className="mb-2 flex h-10 w-10 items-center justify-center rounded text-white transition-colors"
                  >
                    <FaBehance size={24} />
                  </Link>
                </div>
              </div>
              <div className="col-span-3">
                <p className="mb-4 text-sm font-medium ms-1">SERVICES</p>
                <NavigationMenu orientation="vertical">
                  <NavigationMenuList className="flex-col items-start space-y-2">
                    {services.map((link, index) => (
                      <NavigationMenuItem key={link.name} className="text-sm ">
                        <Link
                          href={link.path}
                          className={index === 0 ? "block ms-1" : "block"}
                        >
                          {link.name}
                        </Link>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              <div className="col-span-3">
                <p className="mb-4 text-sm font-medium ms-1">QUICK LINKS</p>
                <NavigationMenu orientation="vertical">
                  <NavigationMenuList className="flex-col items-start space-y-2">
                    {quickLinks.map((link, index) => (
                      <NavigationMenuItem key={link.name} className="text-sm">
                        <Link
                          href={link.path}
                          className={index === 0 ? "block ms-1" : "block"}
                        >
                          {link.name}
                        </Link>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              <div className="col-span-3">
                <p className="mb-4 text-sm font-medium ms-1">CONTACT</p>
                <NavigationMenu orientation="vertical">
                  <NavigationMenuList className="flex-col items-start space-y-2">
                    <NavigationMenuItem className="text-sm">
                      <span className="block font-medium ms-1">
                        UNITED ARAB EMIRATES (UAE)
                      </span>
                    </NavigationMenuItem>

                    <NavigationMenuItem className="text-sm">
                      <span className="block">
                        Office # 1701, Prime Tower - Business Bay - Dubai
                      </span>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="text-sm">
                      <Link
                        href="tel:+97145471297"
                        className="gap-2 flex justify-center"
                      >
                        <BsFillTelephoneFill />
                        <span className="text-white block">
                          +971 4 547 1297
                        </span>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="text-sm">
                      <Link
                        href="tel:+971567032672"
                        className="gap-2 flex justify-center"
                      >
                        <BsFillTelephoneFill />
                        <span className="text-white block">
                          +971 56 703 2672
                        </span>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="text-sm">
                      <Link
                        href="tel:+97145473892"
                        className="gap-2 flex justify-center"
                      >
                        <FaWhatsapp />
                        <span className="text-white block">
                          +971 4 547 3892
                        </span>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="text-sm">
                      <span className="block font-medium mt-2">
                        UNITED STATES (USA)
                      </span>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="text-sm">
                      <span className="gap-2 flex justify-center">
                        <CiLocationOn size={18} />
                        <span className="text-white block">
                          447 Broadway New York, NY 10013
                        </span>
                      </span>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="text-sm">
                      <Link
                        href="tel:+13149487144"
                        className="gap-2 flex justify-center"
                      >
                        <BsFillTelephoneFill />
                        <span className="text-white block">
                          +131 4 948 7144
                        </span>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="text-sm">
                      <Link
                        href="mailto:info@aundigital.ae"
                        className="gap-2 flex justify-center"
                      >
                        <CiMail size={18} className="pt-[0.5px]" />
                        <span className="text-white block">
                          info@aundigital.ae
                        </span>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between text-sm text-white pb-2">
          <p className="mt-3 md:mt-0">
            Copyrights &copy; {new Date().getFullYear()}{" "}
            <span className="text-blue-500">Aun Digital</span>, all rights
            reserved.{" "}
          </p>
          <p className="mt-1 md:mt-0 ml-[-7px] md:ml-0">
            <Link href={"/privacy-policy"}>
              <span className="px-2">Privacy Policy</span>
            </Link>
            <Link href={"/terms-and-condition"}>
              <span className="px-2 border-l">Terms & Conditions</span>
            </Link>
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
