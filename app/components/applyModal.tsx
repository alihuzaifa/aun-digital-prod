"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import ApplyModalForm from "./applyModalForm";

interface modal {
  open: boolean;
  setOpen: any;
  slug?: string;
}
export default function ApplyModal({ open, setOpen, slug }: modal) {
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
            <p className="text-xl sm:text-2xl md:text-4xl font-semibold text-center text-white">
              APPLY NOW
            </p>
            <ApplyModalForm slug={slug} setOpen={setOpen} />
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
