/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ProjectProps } from "../types";

export const Project = (props: ProjectProps) => {
  return (
    <Link
      target="_blank"
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/40 transition-colors h-28 p-1 rounded-lg"
    >
      <img
        src={props.Logo}
        style={{ width: 48, height: "auto" }}
        alt={props.alt}
      />
      <div>
        <p className="text-md font-semibold">{props.title}</p>

        <p className="text-xs">{props.description}</p>
      </div>
    </Link>
  );
};
