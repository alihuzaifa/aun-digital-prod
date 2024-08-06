import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CalendarRange, MessageSquareMore, User } from "lucide-react";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook, FaYoutube } from "react-icons/fa6";

export function AccordionDemo8({ summary, content }: any) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Summary</AccordionTrigger>
        <AccordionContent>{summary}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Key Takeaways</AccordionTrigger>
        <AccordionContent className="flex justify-between items-center">
          <ul className="list-decimal ms-5 ">
            {content?.map((item: string, key: number) => {
              return (
                <li className="mb-2" key={key}>
                  {item}
                </li>
              );
            })}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
