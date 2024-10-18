import { ContactProps, ProjectProps, SkillProps, WorkProps } from "../types";
import php from "../../public/images/php_logo.png";
import javascript from "../../public/images/javascript_logo.png";
import graphql from "../../public/images/graphql_logo.png";
import wcag from "../../public/images/wcag_logo.jpg";
import wcs from "../../public/images/wcs_logo.png";
import kreno from "../../public/images/kreno_logo.svg";
import portrait from "../../public/images/portrait.jpeg";
import empathy from "../../public/images/empathy.png";
import pedagogy from "../../public/images/pedagogy.webp";
import project_management from "../../public/images/project_management.png";
import communication from "../../public/images/communication.png";


export const SIDE_PROJECTS: ProjectProps[] = [
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
    title: "Eco City Guide",
    description:
      "A website representing a map allowing to find eco-related places, developped with my fellow students during my training, with Node, Next, React, Typescript and GraphQL",
    url: "https://github.com/Eco-Map/eco-city-guide",
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
      "A little joke developped in HTML, CSS and JavaScript - hidden bonus inside!",
    url: "https://github.com/VinchC/secret_santa",
    alt: "JavaScript logo",
  },
];

export const CONTACT: ContactProps = {
  image: portrait.src,
  title: "vinch.cm@gmail.com",
  description: "Contact me",
};

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

export const SKILLS: SkillProps[] = [
  {
    picture: pedagogy.src,
    alt: "A lit lightbulb between two people symbolizing pedagogy.",
    title: "Pedagogy",
    description: "The most satisfying aspect of which is to see other people develop their skills, especially after having searched the solution together doing pair programming.",
  },
  {
    picture: empathy.src,
    alt: "A human head which contains a hand which carry hearts, symbolizing empathy.",
    title: "Empathy",
    description: "I had the opportunity to improve on that skill during my training as a student, and as Teacher Assistant as well. Who could achieve collective goals without it?",
  },
  {
    picture: project_management.src,
    alt: "A person managing a project including tasks, delays and communication.",
    title: "Project Management",
    description: "From the understanding of the real customers' needs to the delivery of the minimum viable product, all the while considering the different actors involved - so many possibilities (some better than others) may occur.",
  },
  {
    picture: communication.src,
    alt: "Two speech bubbles symbolizing communication.",
    title: "Communication",
    description: "A key to achieve one's goals or to avoid (a lot of) mistakes, while keeping people at the center of the project.",
  },
];
