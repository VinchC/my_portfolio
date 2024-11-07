import {
  ContactProps,
  EducationProps,
  ProjectProps,
  SkillProps,
  WorkProps,
} from "../types";
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
    title: "Jaimepaslesmaths",
    descriptionEn:
    "A website which aim is to supply a few courses in mathematics (8th grade) while implementing the good practices regarding accessibility, developped with Next.js 15, Typescript, Sanity and GROQ - work in progress.",
    descriptionFr:
    "Un site dont le but est de proposer quelques cours de maths niveau 4ème tout en implémentant les bonnes pratiques d'accessibilité, développé avec Next.js 15, Typescript, Sanity et GROQ - travail en cours.",
    url: "https://github.com/VinchC/next_type_tail",
    alt: "Mathematics logo",
  },
  {
    Logo: graphql.src,
    title: "Eco City Guide",
    descriptionEn:
    "Developped with my fellow students during my training, this is a map allowing to find eco-related places, developped with GraphQL and Tailwind.",
    descriptionFr:
      "Développé avec mes collègues pendant ma formation, ce site est une carte permettant de trouver des lieux éco-responsables, développé avec GraphQL et Tailwind.",
    url: "https://github.com/Eco-Map/eco-city-guide",
    alt: "GraphQL logo",
  },
  {
    Logo: php.src,
    title: "Wild Series",
    descriptionEn: "A website about series, developped with PHP and Symfony.",
    descriptionFr: "Un site de séries TV développé avec PHP et Symfony.",
    url: "https://github.com/VinchC/wild_series",
    alt: "PHP logo",
  },
  {
    Logo: javascript.src,
    title: "Secret Santa",
    descriptionEn:
      "A little joke developped in HTML, CSS and JavaScript - hidden bonus inside!",
      descriptionFr:
        "Un site humoristique developpé en HTML, CSS et JavaScript - avec un bonus caché!",
    url: "https://vinchc-secret-santa.vercel.app/",
    alt: "JavaScript logo",
  },
];

export const CONTACT: ContactProps = {
  image: portrait.src,
  title: "vinch.cm@gmail.com",
  descriptionEn: "Contact me",
  descriptionFr: "Me contacter",
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

export const WORKSFR: WorkProps[] = [
  {
    url: "https://www.wildcodeschool.com/fr-fr/",
    picture: wcs.src,
    alt: "Wild Code School logo",
    title: "Wild Code School",
    role: "Teaching Assistant (alternance)",
    date: "09/23 à 09/24",
  },
  {
    url: "https://www.wildcodeschool.com/fr-fr/",
    picture: wcs.src,
    alt: "Wild Code School logo",
    title: "Wild Code School",
    role: "Stagiaire en formation DWWM",
    date: "02/23 à 07/23",
    training: true,
  },
  {
    url: "https://www.kreno-consulting.fr/",
    picture: kreno.src,
    alt: "Kreno Consulting logo",
    title: "Kreno Consulting",
    role: "Assistant de Direction",
    date: "10/07 à 07/22",
  },
];

export const SKILLS: SkillProps[] = [
  {
    picture: pedagogy.src,
    alt: "A lit lightbulb between two people symbolizing the exchange of ideas.",
    title: "Pedagogy",
    description:
      "The most satisfying aspect of which is to see other people develop their skills, especially after having searched the solution together doing peer programming.",
  },
  {
    picture: empathy.src,
    alt: "A human head which contains a hand which carry hearts, symbolizing empathy.",
    title: "Empathy",
    description:
      "I had the opportunity to improve on that skill during my training as a student, and as Teacher Assistant as well. Who could achieve collective goals without it?",
  },
  {
    picture: project_management.src,
    alt: "A person managing a project including tasks, delays and communication.",
    title: "Project Management",
    description:
      "From the understanding of the real customers' needs to the delivery of the minimum viable product, all the while considering the different actors involved - so many possibilities (some better than others) may occur.",
  },
  {
    picture: communication.src,
    alt: "Two speech bubbles symbolizing communication.",
    title: "Communication",
    description:
      "A key to achieve one's goals and reduce (a lot) the errors, while keeping people at the center of the project.",
  },
];

export const SKILLSFR: SkillProps[] = [
  {
    picture: pedagogy.src,
    alt: "Une ampoule allumée entre deux visages symbolisant l'échange d'idées.",
    title: "Pédagogie",
    description:
      "L'aspect le plus satisfaisant est de voir les autres développer leurs compétences, surtout après avoir cherché la solution ensemble en faisant du peer programming.",
  },
  {
    picture: empathy.src,
    alt: "Une tête qui contient une main qui porte des coeurs, symbolisant l'empathie.",
    title: "Empathie",
    description:
      "J'ai eu l'opportunité de la développer à la fois en tant qu'apprenant et en tant que Teaching Assistant. Qui peut prétendre atteindre des objectifs collectifs sans ?",
  },
  {
    picture: project_management.src,
    alt: "Une personne manageant un projet ce qui inclut des tâches, délais et la communication.",
    title: "Conduite de projet",
    description:
      "De la compréhension des besoins réels des clients jusqu'à la livraison du MVP, tout en considérant tous les acteurs impliqués, de nombreuses possibilités (certaines meilleures) peuvent se présenter.",
  },
  {
    picture: communication.src,
    alt: "Deux phylactères symbolisant la communication.",
    title: "Communication",
    description:
      "Une des clés pour atteindre ses objectifs et diminuer (beaucoup) les erreurs, tout en gardant l'humain au centre du projet.",
  },
];

export const EDUCATION: EducationProps[] = [
  {
    url: "https://www.francecompetences.fr/recherche/rncp/37873/",
    picture: wcs.src,
    alt: "Wild Code School logo",
    title: "Concepteur développeur d'applications",
    dateEn: "Received 04/10/2024",
    dateFr: "Délivré le 04/10/2024",
    school: "Wild Code School",
  },
];
