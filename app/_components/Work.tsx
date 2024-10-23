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
      className="inline-flex items-center gap-4 hover:bg-accent/40 transition-colors h-24 p-1 rounded-lg"
    >
      <img
        src={props.picture}
        className="w-12 h-auto bg-white object-contain"
        alt={props.alt}
      />
      <div>
        <div>
          <p className="text-sm font-semibold">{props.role}</p>
        </div>
        <p className="text-xs">{props.title}</p>
      </div>
      <div className="ml-auto">
        <p className="text-xs text-end">{props.date}</p>
          {props.training && <Badge className="text-xs border border-lime-600 text-lime-600" variant="outline">Training</Badge>}
      </div>
    </Link>
  );
};
