/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import Link from "next/link";
import php from "../../public/images/php_logo.png";
import javascript from "../../public/images/javascript_logo.png";
import graphql from "../../public/images/graphql_logo.png";
import wcag from "../../public/images/wcag_logo.jpg";
import wcs from "../../public/images/wcs_logo.png";
import kreno from "../../public/images/kreno_logo.svg";

export const Core = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Personal projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
                alt={project.alt}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work
                key={index}
                url={work.url}
                picture={work.picture}
                alt={work.alt}
                title={work.title}
                role={work.role}
                date={work.date}
              />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1">Contact me</Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
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

const WORKS: WorkProps[] = [
  {
    url: "https://www.wildcodeschool.com/fr-fr/",
    picture: wcs.src,
    alt: "Wild Code School logo",
    title: "Wild Code School",
    role: "Teaching Assistant",
    date: "09/23 to 09/24",
  },
  {
    url: "https://www.wildcodeschool.com/fr-fr/",
    picture: wcs.src,
    alt: "Wild Code School logo",
    title: "Wild Code School",
    role: "DWWM Training Student",
    date: "02/23 to 07/23",
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

type SideProjectProps = {
  //   Logo: LucideIcon;
  Logo: string;
  title: string;
  description: string;
  url: string;
  alt: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      target="_blank"
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors h-20 p-1 rounded-lg"
    >
      {/* <span className="bg-accent text-accent-foreground p-4 rounded-sm"> */}
      {/* <props.Logo /> */}
      <img
        src={props.Logo}
        style={{ width: 48, height: "auto" }}
        alt={props.alt}
      />
      {/* </span> */}
      <div>
        <p className="text-lg font-semibold">{props.title}</p>

        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

type WorkProps = {
  url: string;
  picture: string;
  alt: string;
  title: string;
  role: string;
  date: string;
};

const Work = (props: WorkProps) => {
  return (
    <Link
      target="_blank"
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors h-20 p-1 rounded-lg"
    >
      <img
        src={props.picture}
        style={{ width: 48, height: "auto", background: "white" }}
        alt={props.alt}
      />
      <div>
        <p className="text-lg font-semibold">{props.title}</p>

        <p className="text-sm text-muted-foreground">
          {props.role} - {props.date}
        </p>
      </div>
    </Link>
  );
};
