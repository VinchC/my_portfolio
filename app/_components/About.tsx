/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import portrait from "../../public/images/portrait.jpeg";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono border hover:bg-accent/50 transition-colors border-accent px-1 py-0.5 text-primary rounded-lg",
        className
      )}
      {...props}
    />
  );
};

export const About = () => {
  return (
    <>
      <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[2] flex flex-col gap-2">
          <h2 className="font-caption font-bold text-5xl text-primary">
            Vincent Cantonnet
          </h2>
          <h3 className="text-3xl font-caption">Full Stack Developper</h3>
          <p>
            Having held the position of Teaching Assistant as part of my
            work-study training as an Application Developer Designer, an
            unforgettable experience that was rich in many ways, I want to use
            my skills as a Full Stack Developer in the context of ambitious and
            varied projects.
          </p>
          <p>
            I also have a particular appetite for the topics of accessibility
            and security, being keen to place people at the center of a
            responsible digital approach.
          </p>
          <p className="text-base">
            I am currently focusing on learning the good practices regarding the
            former, content is available on{" "}
            <Link target="_blank" href="https://github.com/VinchC">
              <Code className="inline-flex items-center gap-1">
                <GithubIcon size={16} className="inline " />
                GitHub
              </Code>
            </Link>
            .
          </p>
          <p>
            Being particularly sensitive to productivity and optimization
            issues, especially when they revolve around in-depth reflection
            regarding the user journey, I would be pleased to discuss a future
            collaboration.
          </p>
          <p className="text-base">
            Living in
            <Code className="inline-flex items-center gap-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ensign_of_France.svg/langfr-225px-Ensign_of_France.svg.png"
                style={{ width: 16, height: "auto" }}
                alt="France flag"
              />
              France
            </Code>
            .
          </p>
        </div>
        <div className="flex-1 max-md:m-auto ml-auto">
          <img
            src={portrait.src}
            className="w-full h-auto max-w-xs max-md:w-56  rounded-full"
            alt="Vincent Cantonnet's portrait"
          />
        </div>
      </Section>
    </>
  );
};
