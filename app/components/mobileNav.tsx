import React, { useState } from "react";
import {
  AlignJustify,
  ChevronDown,
  ChevronUp,
  Minus,
  Plus,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data";

interface NavLinkProps {
  title: string;
  href: string;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ title, href, className }) => (
  <Link href={href} className={className}>
    <span className="text-md">{title}</span>
    <hr className="border-t border-[#d4d4d4] mt-1" />
  </Link>
);

interface IconProps {
  isOpen: number;
  handleToggle: () => void;
  OpenIcon: React.ElementType;
  ClosedIcon: React.ElementType;
  index?: number;
}

const NavLinkWithIcon: React.FC<IconProps> = ({
  isOpen,
  handleToggle,
  OpenIcon,
  ClosedIcon,
  index,
}) => (
  <motion.div
    initial={{ rotate: 0 }}
    animate={{ rotate: isOpen == index || isOpen ? 180 : 0 }}
    transition={{ duration: 0.3 }}
    onClick={handleToggle}
    className="cursor-pointer"
  >
    {isOpen == index || isOpen ? (
      <OpenIcon className="w-4 h-4 text-black" />
    ) : (
      <ClosedIcon className="w-4 h-4 text-black" />
    )}
  </motion.div>
);

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubOpenIndex, setIsSubOpenIndex] = useState<number>(-1);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleSubToggle = (index: number) => () =>
    setIsSubOpenIndex((prev) => (prev === index ? -1 : index));

  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="max-h-[100vh] overflow-y-auto p-4">
        <div className="flex flex-col justify-between h-full py-8">
          <div className="flex flex-col gap-y-2">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={150}
                height={150}
              />
            </Link>
            <NavLink title="Home" href="/" />
            <NavLink title="About Us" href="/about-us" />
            <div className="capitalize">
              <div className="flex items-center justify-between">
                <span className="text-sm">Services</span>
                <NavLinkWithIcon
                  isOpen={isOpen ? 1 : 0}
                  handleToggle={handleToggle}
                  OpenIcon={Minus}
                  ClosedIcon={Plus}
                />
              </div>
              <hr className="border-t border-[#d4d4d4] mt-1" />
              {isOpen && (
                <div className="ps-2 gap-y-2">
                  {services?.map(({ title, children }, index) => (
                    <div className="capitalize" key={index}>
                      <div className="flex items-center justify-between my-1">
                        <span className="text-sm uppercase">{title}</span>
                        <NavLinkWithIcon
                          isOpen={isSubOpenIndex}
                          handleToggle={handleSubToggle(index)}
                          index={index}
                          OpenIcon={ChevronUp}
                          ClosedIcon={ChevronDown}
                        />
                      </div>
                      <hr className="border-t border-[#d4d4d4] mt-1" />
                      {isSubOpenIndex === index && (
                        <div className="ps-4">
                          {children?.map(({ title, href }, idx) => (
                            <NavLink key={idx} title={title} href={href} />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <NavLink title="Careers" href="/careers" />
            <NavLink title="Blogs" href="/blog" />
            <NavLink title="Contact Us" href="/contact-us" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
