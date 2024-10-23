import { buttonVariants, cn } from "@/components/ui/button";
import React from "react";

export default function CV() {
  const onButtonClick = () => {
    const pdfUrl = "cantonnet_vincent_cv_dev.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "/cantonnet_vincent_cv_dev.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <button
        onClick={onButtonClick}
        className={cn(
          buttonVariants({ variant: "outline" }),
          "size-8 p-0 border-border bg-black"
        )}
      >
        CV
      </button>
    </>
  );
}
