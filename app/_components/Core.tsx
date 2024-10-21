/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Work } from "./Work";
import { SIDE_PROJECTS, WORKS, CONTACT } from "./data";
import { Project } from "./Project";
import { ContactCard } from "./ContactCard";

export const Core = () => {
  return (
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
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card>
          <div>
            {CONTACT && (
              <ContactCard
                image={CONTACT.image}
                title={CONTACT.title}
                description={CONTACT.description}
              />
            )}
          </div>
        </Card>
      </div>
    </Section>
  );
};
