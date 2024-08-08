"use client";
import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "./maxWidthWrapper";
import CustomButton from "./customButton";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import MobileNav from "./mobileNav";
import { AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RiArrowDropDownFill } from "react-icons/ri";
import SlidingSheet from "./slidingSheet";
import Modal from "./messageModal";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname()
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && isHeaderVisible) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < prevScrollY && !isHeaderVisible) {
        setIsHeaderVisible(true);
      }

      setIsScrolled(currentScrollY > 0);
      setPrevScrollY(currentScrollY);
    };

    // Set initial scroll state
    setIsScrolled(window.scrollY > 0);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY, isHeaderVisible]);

  const [open, setOpen] = useState(false)

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsSheetOpen(true);
  };
  const handleMouseLeave = () => {
    setIsSheetOpen(false);
  };

  return (
    <>
      <div className="hidden md:block">
        {
          pathname !== "/" &&
          <>
            <header
              className={`fixed top-0 left-0 w-full z-40 transition-colors duration-300 bg-white shadow-2xl cursor-pointer`}
            >
              <MaxWidthWrapper>
                <div className="flex justify-between items-center pb-2 pt-10">
                  <Link href={"/"}>
                    <Image
                      src={`/logo.png`}
                      priority
                      alt="logo"
                      width={220}
                      height={220}
                      onMouseLeave={handleMouseLeave}
                    />
                  </Link>
                  <div className="hidden xl:block">
                    <div className="gap-x-10 flex">
                      <Link href="/" legacyBehavior passHref className="font-semibold">
                        <span className="flex items-center linkContainer "
                          onMouseLeave={handleMouseLeave}
                          onMouseEnter={handleMouseLeave}
                        >Home</span>
                      </Link>
                      <Link
                        href="/about-us"
                        legacyBehavior
                        passHref
                        className="font-semibold"
                      >
                        <span className="flex items-center linkContainer" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseLeave}>
                          About Us
                        </span>
                      </Link>
                      <Link
                        href="/careers"
                        legacyBehavior
                        passHref
                        className="font-semibold"
                      >
                        <span
                          className="flex items-center linkContainer"
                          onMouseEnter={handleMouseEnter}
                        >
                          Services
                          <RiArrowDropDownFill size={30} />
                        </span>
                      </Link>
                      <Link
                        href="/careers"
                        legacyBehavior
                        passHref
                        className="font-semibold"
                      >
                        <span className="flex items-center linkContainer" onMouseLeave={handleMouseLeave}
                          onMouseEnter={handleMouseLeave}
                        >
                          Careers
                        </span>
                      </Link>
                      <Link
                        href="/blogs"
                        legacyBehavior
                        passHref
                        className="font-semibold"
                      >
                        <span className="flex items-center linkContainer" onMouseLeave={handleMouseLeave}
                          onMouseEnter={handleMouseLeave}>Blogs</span>
                      </Link>
                      <Link
                        href="/contact-us"
                        legacyBehavior
                        passHref
                        className="font-semibold"
                      >
                        <span className="flex items-center linkContainer" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseLeave}>
                          Contact Us
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="xl:flex items-center gap-x-6 hidden" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseLeave}>
                    <Link
                      href={"https://www.facebook.com/Aundigitalagency/"}
                      target="_blank"
                    >
                      <FaFacebookF size={20} className="icon" />
                    </Link>
                    <Link href={"https://x.com/AunDigital"} target="_blank">
                      <FaXTwitter size={20} className="icon" />
                    </Link>
                    <Link
                      href={"https://www.instagram.com/aundigital.ae/"}
                      target="_blank"
                    >
                      <FaInstagram size={20} className="icon" />
                    </Link>
                    <CustomButton
                      title={"Let's Talk"}
                      icon={<ArrowRight className="btn-icon" />}
                      onClick={() => {
                        setOpen(true)
                      }}
                    />
                  </div>
                  <div className="xl:hidden flex items-center gap-x-6" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseLeave}>
                    <span className={"hidden sm:flex"}>
                      <CustomButton
                        title={"Let's Talk"}
                        icon={<ArrowRight className="btn-icon" />}
                        onClick={() => {
                          setOpen(true)
                        }}
                      />
                    </span>
                    <MobileNav />
                  </div>
                </div>
              </MaxWidthWrapper>
            </header>
            <div className="mb-28" />
          </>
        }
        {
          pathname === "/" &&
          <>
            <header
              className={`fixed top-0 left-0 w-full z-40 transition-colors duration-300 ${isScrolled ? "bg-white shadow-2xl" : "bg-transparent"} cursor-pointer`}
            >
              <MaxWidthWrapper>
                <div className="flex justify-between items-center pb-2 pt-10">
                  <Link href={"/"}>
                    <Image
                      src={`/logo.png`}
                      priority
                      alt="logo"
                      width={220}
                      height={220}
                      onMouseLeave={handleMouseLeave}
                    />
                  </Link>
                  <div className="hidden xl:block">
                    <div className="gap-x-10 flex">
                      <Link href="/" legacyBehavior passHref className="font-semibold">
                        <span className="flex items-center linkContainer "
                          onMouseLeave={handleMouseLeave}
                          onMouseEnter={handleMouseLeave}
                        >Home</span>
                      </Link>
                      <Link
                        href="/about-us"
                        legacyBehavior
                        passHref
                        className="font-semibold"
                      >
                        <span className="flex items-center linkContainer" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseLeave}>
                          About Us
                        </span>
                      </Link>
                      <Link
                        href="/careers"
                        legacyBehavior
                        passHref
                        className="font-semibold"
                      >
                        <span
                          className="flex items-center linkContainer"
                          onMouseEnter={handleMouseEnter}
                        >
                          Services
                          <RiArrowDropDownFill size={30} />
                        </span>
                      </Link>
                      <Link
                        href="/careers"
                        legacyBehavior
                        passHref
                        className="font-semibold"
                      >
                        <span className="flex items-center linkContainer" onMouseLeave={handleMouseLeave}
                          onMouseEnter={handleMouseLeave}
                        >
                          Careers
                        </span>
                      </Link>
                      <Link
                        href="/blogs"
                        legacyBehavior
                        passHref
                        className="font-semibold"
                      >
                        <span className="flex items-center linkContainer" onMouseLeave={handleMouseLeave}
                          onMouseEnter={handleMouseLeave}>Blogs</span>
                      </Link>
                      <Link
                        href="/contact-us"
                        legacyBehavior
                        passHref
                        className="font-semibold"
                      >
                        <span className="flex items-center linkContainer" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseLeave}>
                          Contact Us
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="xl:flex items-center gap-x-6 hidden" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseLeave}>
                    <Link
                      href={"https://www.facebook.com/Aundigitalagency/"}
                      target="_blank"
                    >
                      <FaFacebookF size={20} className="icon" />
                    </Link>
                    <Link href={"https://x.com/AunDigital"} target="_blank">
                      <FaXTwitter size={20} className="icon" />
                    </Link>
                    <Link
                      href={"https://www.instagram.com/aundigital.ae/"}
                      target="_blank"
                    >
                      <FaInstagram size={20} className="icon" />
                    </Link>
                    <CustomButton
                      title={"Let's Talk"}
                      icon={<ArrowRight className="btn-icon" />}
                      onClick={() => {
                        setOpen(true)
                      }}
                    />
                  </div>
                  <div className="xl:hidden flex items-center gap-x-6" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseLeave}>
                    <span className={"hidden sm:flex"}>
                      <CustomButton
                        title={"Let's Talk"}
                        icon={<ArrowRight className="btn-icon" />}
                        onClick={() => {
                          setOpen(true)
                        }}
                      />
                    </span>
                    <MobileNav />
                  </div>
                </div>
              </MaxWidthWrapper>
            </header>
            {isScrolled && <div className="mb-28" />}
            
          </>
        }
      </div>
      <div className="md:hidden block">
        <>
          <header
            className={`fixed top-0 left-0 w-full z-40 transition-colors duration-300 bg-white shadow-2xl cursor-pointer`}
          >
            <MaxWidthWrapper>
              <div className="flex justify-between items-center pb-2 pt-10">
                <Link href={"/"}>
                  <Image
                    src={`/logo.png`}
                    priority
                    alt="logo"
                    width={220}
                    height={220}
                    onMouseLeave={handleMouseLeave}
                  />
                </Link>
                <div className="hidden xl:block">
                  <div className="gap-x-10 flex">
                    <Link href="/" legacyBehavior passHref className="font-semibold">
                      <span className="flex items-center linkContainer "
                        onMouseLeave={handleMouseLeave}
                        onMouseEnter={handleMouseLeave}
                      >Home</span>
                    </Link>
                    <Link
                      href="/about-us"
                      legacyBehavior
                      passHref
                      className="font-semibold"
                    >
                      <span className="flex items-center linkContainer" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseLeave}>
                        About Us
                      </span>
                    </Link>
                    <Link
                      href="/careers"
                      legacyBehavior
                      passHref
                      className="font-semibold"
                    >
                      <span
                        className="flex items-center linkContainer"
                        onMouseEnter={handleMouseEnter}
                      >
                        Services
                        <RiArrowDropDownFill size={30} />
                      </span>
                    </Link>
                    <Link
                      href="/careers"
                      legacyBehavior
                      passHref
                      className="font-semibold"
                    >
                      <span className="flex items-center linkContainer" onMouseLeave={handleMouseLeave}
                        onMouseEnter={handleMouseLeave}
                      >
                        Careers
                      </span>
                    </Link>
                    <Link
                      href="/blogs"
                      legacyBehavior
                      passHref
                      className="font-semibold"
                    >
                      <span className="flex items-center linkContainer" onMouseLeave={handleMouseLeave}
                        onMouseEnter={handleMouseLeave}>Blogs</span>
                    </Link>
                    <Link
                      href="/contact-us"
                      legacyBehavior
                      passHref
                      className="font-semibold"
                    >
                      <span className="flex items-center linkContainer" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseLeave}>
                        Contact Us
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="xl:flex items-center gap-x-6 hidden" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseLeave}>
                  <Link
                    href={"https://www.facebook.com/Aundigitalagency/"}
                    target="_blank"
                  >
                    <FaFacebookF size={20} className="icon" />
                  </Link>
                  <Link href={"https://x.com/AunDigital"} target="_blank">
                    <FaXTwitter size={20} className="icon" />
                  </Link>
                  <Link
                    href={"https://www.instagram.com/aundigital.ae/"}
                    target="_blank"
                  >
                    <FaInstagram size={20} className="icon" />
                  </Link>
                  <CustomButton
                    title={"Let's Talk"}
                    icon={<ArrowRight className="btn-icon" />}
                    onClick={() => {
                      setOpen(true)
                    }}
                  />
                </div>
                <div className="xl:hidden flex items-center gap-x-6" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseLeave}>
                  <span className={"hidden sm:flex"}>
                    <CustomButton
                      title={"Let's Talk"}
                      icon={<ArrowRight className="btn-icon" />}
                      onClick={() => {
                        setOpen(true)
                      }}
                    />
                  </span>
                  <MobileNav />
                </div>
              </div>
            </MaxWidthWrapper>
          </header>
          <div className="mb-20" />
        </>
      </div>

      <AnimatePresence>
        {isSheetOpen && <SlidingSheet onClose={handleMouseLeave} />}
      </AnimatePresence>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
}