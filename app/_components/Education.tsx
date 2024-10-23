/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { EducationProps } from "../types";

export const Education = (props: EducationProps) => {
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
          <p className="text-sm font-semibold">{props.title}</p>
        </div>
        <p className="text-xs">{props.school}</p>
      </div>
      <div className="ml-auto">
        <p className="text-xs text-end">{props.date}</p>
      </div>
    </Link>
  );
};
