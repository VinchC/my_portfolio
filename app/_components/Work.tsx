/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { WorkProps } from "../types";
import { Badge } from "@/components/ui/badge";

export const Work = (props: WorkProps) => {
  return (
    <Link
      target="_blank"
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors h-28 p-1 rounded-lg"
    >
      <img
        src={props.picture}
        className="w-12 h-auto bg-white object-contain"
        // style={{ width: 48, height: "auto", background: "white" }}
        alt={props.alt}
      />
      <div>
        <div>
          <p className="text-md font-semibold">{props.title}</p>
        </div>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <div className="ml-auto">
        <p className="text-xs text-end text-muted-foreground">{props.date}</p>
          {props.training && <Badge className="text-xs border border-lime-500 text-lime-500" variant="outline">Training</Badge>}
      </div>
    </Link>
  );
};
