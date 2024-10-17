/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Work } from "./Work";
import { SIDE_PROJECTS, WORKS } from "./data";
import { PersonalProject } from "./PersonalProject";

export const Core = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Personal projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <PersonalProject
                key={index}
                {...project}
                // Logo={project.Logo}
                // title={project.title}
                // description={project.description}
                // url={project.url}
                // alt={project.alt}
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
                // url={work.url}
                // picture={work.picture}
                // alt={work.alt}
                // title={work.title}
                // role={work.role}
                // date={work.date}
                // training={work?.training}
                {...work}
              />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1">Contact me</Card>
      </div>
    </Section>
  );
};
