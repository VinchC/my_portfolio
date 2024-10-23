import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
    return (
      <span
        className={cn(
          "bg-accent/30 font-mono border hover:bg-accent/50 transition-colors border-border px-1 py-0.5 text-accent-foreground rounded-lg",
          className
        )}
        {...props}
      />
    );
  };