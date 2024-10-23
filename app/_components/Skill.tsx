/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { SKILLS } from "./data";
import { SkillCard } from "./SkillCard";

export const Skill = () => {
  return (
    <Section className="flex min-md:flex-col items-start gap-4 mt-4">
      <div className="w-full">
        <Card className="p-4 gap-2">
          <p className="text-lg">Soft skills</p>
          <div className="flex max-md:flex-col min-md:flex-row gap-2">
            {SKILLS.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
};
