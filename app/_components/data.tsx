import { PersonalProjectProps, WorkProps } from "../types";
import php from "../../public/images/php_logo.png";
import javascript from "../../public/images/javascript_logo.png";
import graphql from "../../public/images/graphql_logo.png";
import wcag from "../../public/images/wcag_logo.jpg";
import wcs from "../../public/images/wcs_logo.png";
import kreno from "../../public/images/kreno_logo.svg";

export const SIDE_PROJECTS: PersonalProjectProps[] = [
    {
      Logo: wcag.src,
      title: "Access4All",
      description:
        "A website which aims to be accessible by anybody, developped with Next, React, Typescript - work in progress",
      url: "https://github.com/VinchC/access",
      alt: "WCAG logo",
    },
    {
      Logo: graphql.src,
      title: "Whatsnext",
      description:
        "A website about hip hop Lps, aiming to improve mys skills acquired during my training, developped with Node, Next, React, Typescript and GraphQL - work in progress",
      url: "https://github.com/VinchC/whatsnext",
      alt: "GraphQL logo",
    },
    {
      Logo: php.src,
      title: "Wild Series",
      description: "A website about series, developped with Symfony",
      url: "https://github.com/VinchC/wild_series",
      alt: "PHP logo",
    },
    {
      Logo: javascript.src,
      title: "Secret Santa",
      description:
        "A little joke developped in HTML, CSS and JavaScript - hidden bonus inside !",
      url: "https://github.com/VinchC/secret_santa",
      alt: "JavaScript logo",
    },
  ];
  
  export const WORKS: WorkProps[] = [
    {
      url: "https://www.wildcodeschool.com/fr-fr/",
      picture: wcs.src,
      alt: "Wild Code School logo",
      title: "Wild Code School",
      role: "Teaching Assistant (work-study)",
      date: "09/23 to 09/24",
    },
    {
      url: "https://www.wildcodeschool.com/fr-fr/",
      picture: wcs.src,
      alt: "Wild Code School logo",
      title: "Wild Code School",
      role: "DWWM Training Student",
      date: "02/23 to 07/23",
      training: true,
    },
    {
      url: "https://www.kreno-consulting.fr/",
      picture: kreno.src,
      alt: "Kreno Consulting logo",
      title: "Kreno Consulting",
      role: "Executive Assistant",
      date: "10/07 to 07/22",
    },
  ];