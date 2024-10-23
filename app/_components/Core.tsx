/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Work } from "./Work";
import { SIDE_PROJECTS, WORKS, EDUCATION } from "./data";
import { Project } from "./Project";
import { Education } from "./Education";

export const Core = () => {
  return (
    <>
      <Section className="flex max-md:flex-col items-start gap-4 mt-4">
        <div className="flex-[3] w-full">
          <Card className="w-full p-4 flex flex-col gap-2">
            <p className="text-lg text-muted-foreground">Projects</p>
            <div className="flex flex-col gap-3">
              {SIDE_PROJECTS.map((project, index) => (
                <Project key={index} {...project} />
              ))}
            </div>
          </Card>
        </div>
        <div className="flex-[2] w-full flex flex-col gap-4">
          <Card className="w-full p-4 flex flex-col gap-4">
            <p className="text-lg text-muted-foreground">Work</p>
            <div className="flex flex-col">
              {WORKS.map((work, index) => (
                <Work key={index} {...work} />
              ))}
            </div>
          </Card>
          <Card className="w-full p-4 flex flex-col gap-2">
            <p className="text-lg text-muted-foreground p-1">Education</p>
            <div className="flex flex-col">
              {EDUCATION.map((education, index) => (
                <Education key={index} {...education} />
              ))}
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
};
