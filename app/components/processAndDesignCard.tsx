import { cn } from "@/lib/utils";
import { IconBox } from "@/types";

type IconBoxProps = {
  iconBox: IconBox;
};

const ProcessAndDesignCard = ({
  iconBox: { icon, iconBase, title, description, shadow },
}: IconBoxProps) => {
  return (
    <div
      className={cn(
        "relative top-0 z-[1] overflow-hidden rounded-xl bg-white p-10 shadow-sm transition-all duration-200 hover:-top-[.125rem] hover:shadow-lg hover:shadow-slate-500/20 dark:bg-slate-800 dark:hover:shadow-slate-950/40 min-h-[280px]",
        shadow,
      )}
    >
      {icon ? (
        <div className="relative mb-4 inline-block">
          {icon}
          <span
            className={cn(
              "absolute -right-4 -top-2 -z-[1] block h-10 w-10 rounded-full",
              iconBase,
            )}
          ></span>
        </div>
      ) : null}

      {title ? <h3 className="mb-6 text-lg">{title}</h3> : null}
      {description ? <p>{description}</p> : null}
    </div>
  );
};
export default ProcessAndDesignCard;
