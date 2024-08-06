"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import CustomButton from "./customButton";
import MessageForm from "./messageForm";

interface modal {
  open: boolean;
  setOpen: any;
}
export default function Modal({ open, setOpen }: modal) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="rounded-3xl sm:rounded-3xl modalBg p-5">
        <AlertDialogHeader>
          <X
            className="text-muted-foreground cursor-pointer"
            onClick={() => {
              setOpen(false);
            }}
          />
          <AlertDialogDescription>
            <div className="flex flex-wrap">
              <div className="md:w-1/2 w-full hidden md:block">
                <div className="relative w-full h-[500px] rounded-tl-2xl rounded-tr-2xl overflow-hidden">
                  <Image
                    src={"/modal/dubai.png"}
                    fill
                    priority
                    alt={"title"}
                    className="object-fill"
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <p className="text-lg sm:text-xl md:text-3xl font-medium text-center text-white mb-1">
                  Get In Touch
                </p>
                <p className="text-xl sm:text-2xl md:text-4xl font-semibold text-center text-white">
                  Our Experts
                </p>
                <MessageForm />
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
