"use client";
import { motion } from "framer-motion";
import MaxWidthWrapper from "./maxWidthWrapper";
import React from "react";
import { ChildItemOfServices } from "@/types";
import { services } from "@/data";
import { ChevronRight } from "lucide-react";
import { linkColor, themeColor1 } from "@/important";
import { cn } from "@/lib/utils";

interface SlidingSheetProps {
  onClose: () => void;
}

const ListItem2 = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <li className="w-full">
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
          className
        )}
        {...props}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center gap-x-2 gap-y-1">
          <ChevronRight
            size={19}
            color={themeColor1}
            className={`transition-transform duration-500 ${isHovered ? "transform translate-x-2" : ""
              }`}
          />
          <div
            className={`flex-1 ${isHovered ? `text-[${linkColor}]` : ""
              } font-medium leading-none text-sm`}
          >
            {title}
          </div>
        </div>
        <hr />
      </a>
    </li>
  );
});

const SlidingSheet: React.FC<SlidingSheetProps> = ({ onClose }) => {
  const [children, setChildren] = React.useState<ChildItemOfServices[]>(
    services[0]?.children || []
  );
  const [title, setTitle] = React.useState<string>(services[0]?.title || "");
  let array2FirstPart: ChildItemOfServices[] = [];
  let array2SecondPart: ChildItemOfServices[] = [];

  if (children.length > 5) {
    const firstPartLength = Math.ceil(children.length / 2);
    array2FirstPart = children.slice(0, firstPartLength);
    array2SecondPart = children.slice(firstPartLength);
  } else {
    array2FirstPart = children.slice(0);
  }
  return (
    <motion.div
      className="sheet-wrapper fixed top-24 left-0 w-full flex bg-white z-50 opacity-95"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.25 }}
      onMouseLeave={onClose}
    >
      <MaxWidthWrapper>
        <div className="text-center text-2xl font-bold mt-3 pt-3 underline">
          {title}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
          <ul className="list-none pl-4">
            {services?.map(({ title, children }, index) => {
              return (
                <span
                  key={index}
                  onMouseEnter={() => {
                    setChildren(children);
                    setTitle(title);
                  }}
                  className="block"
                >
                  <ListItem2 title={title} />
                </span>
              );
            })}
          </ul>
          <ul className="list-none pl-4">
            {array2FirstPart?.map(({ title, href }, index) => {
              return (
                <span key={index} className="block">
                  <ListItem2 href={href} title={title} />
                </span>
              );
            })}
          </ul>
          <ul className="list-none pl-4">
            {array2SecondPart?.map(({ title, href }, index) => {
              return (
                <span key={index} className="block">
                  <ListItem2 href={href} title={title} />
                </span>
              );
            })}
          </ul>
        </div>
      </MaxWidthWrapper>
    </motion.div>
  );
};
export default SlidingSheet;
ListItem2.displayName = "ListItem2"