import { Button } from "@/components/ui/button";

export default function CustomButton({ isWhite, title, icon, ...props }: any) {
  return (
    <Button className={`${isWhite ? "btn-white" : "btn"} text-white`} {...props}>
      {title || ""} {icon || ""}{" "}
    </Button>
  );
}
