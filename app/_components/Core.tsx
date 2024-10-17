import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import Link from "next/link";
import php from "../../public/images/php_logo.png";
import javascript from "../../public/images/javascript_logo.png";
import graphql from "../../public/images/graphql_logo.png";
import wcag from "../../public/images/wcag_logo.jpg";

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
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">Work</Card>
        <Card className="p-4 flex-1">Contact me</Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS = [
  {
    Logo: php.src,
    title: "Wild Series",
    description: "A website about series, developped with Symfony",
    url: "https://github.com/VinchC/wild_series",
  },
  {
    Logo: wcag.src,
    title: "Access4All",
    description:
      "A website which aims to be accessible by anybody, developped with Next, React, Typescript - work in progress",
    url: "https://github.com/VinchC/access",
  },
  {
    Logo: graphql.src,
    title: "Whatsnext",
    description:
      "A website about hip hop Lps, aiming to improve mys skills acquired during my training, developped with Node, Next, React, Typescript and GraphQL - work in progress",
    url: "https://github.com/VinchC/whatsnext",
  },
  {
    Logo: javascript.src,
    title: "Secret Santa",
    description:
      "A little joke developped in HTML, CSS and JavaScript - hidden bonus inside !",
    url: "https://github.com/VinchC/secret_santa",
  },
];

type SideProjectProps = {
  //   Logo: LucideIcon;
  Logo: string;
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <Link target="_blank" href={props.url} className="inline-flex items-center">
      {/* <span className="bg-accent text-accent-foreground p-4 rounded-sm"> */}
      {/* <props.Logo /> */}
      <img src={props.Logo} style={{ width: 64, height: "auto" }} />
      {/* </span> */}
      <div className="p-4">
        <p className="text-lg font-semibold">{props.title}</p>

        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
