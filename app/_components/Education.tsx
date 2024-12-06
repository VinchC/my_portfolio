/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { EducationProps } from "../types";
import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

export const Education = (props: EducationProps) => {
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
        <div>
          <p className="text-sm font-semibold">{props.title}</p>
        </div>
        <p className="text-xs">{props.school}</p>
      </div>
      <div className="ml-auto">
        <p className="text-xs text-end">{language === "English" ? props.dateEn : props.dateFr}</p>
      </div>
    </Link>
  );
};
