/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { SKILLS } from "./data";
import { SkillCard } from "./SkillCard";

export const Skill = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4 mt-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Soft skills</p>
          <div className="flex flex-col gap-3">
            {SKILLS.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
};
