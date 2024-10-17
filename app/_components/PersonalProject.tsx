/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { PersonalProjectProps } from "../types";

export const PersonalProject = (props: PersonalProjectProps) => {
  return (
    <Link
      target="_blank"
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors h-28 p-1 rounded-lg"
    >
      <img
        src={props.Logo}
        style={{ width: 48, height: "auto" }}
        alt={props.alt}
      />
      <div>
        <p className="text-lg font-semibold">{props.title}</p>

        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
