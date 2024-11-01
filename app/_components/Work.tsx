/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { WorkProps } from "../types";
import { Badge } from "@/components/ui/badge";
import LanguageContext from "../contexts/LanguageContext";
import { useContext } from "react";

export const Work = (props: WorkProps) => {
  const language = useContext(LanguageContext);

  return (
    <Link
      target="_blank"
      href={props.url}
      className="logo"
    >
      <img
        src={props.picture}
        className="w-12 h-auto bg-white object-contain"
        alt={props.alt}
      />
      <div>
          <p className="text-sm font-semibold">{props.role}</p>
        <p className="text-xs">{props.title}</p>
      </div>
      <div className="ml-auto text-end">
        <p className="text-xs">{props.date}</p>
        {props.training && (
          <Badge
            className="text-xs border border-lime-600 text-lime-600"
            variant="outline"
          >
            {language === "English" ? "Training" : "Formation"}
          </Badge>
        )}
      </div>
    </Link>
  );
};
