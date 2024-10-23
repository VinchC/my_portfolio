/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { SKILLS, SKILLSFR } from "../data/data";
import { SkillCard } from "./SkillCard";
import LanguageContext from "../contexts/LanguageContext";
import { useContext } from "react";

export const Skill = () => {
  const language = useContext(LanguageContext);

  return (
    <>
      <Section className="flex min-md:flex-col items-start gap-4 mt-4">
        <div className="w-full">
          <Card className="p-4 gap-2">
            <p className="text-lg">Soft skills</p>
            <div className="flex max-md:flex-col min-md:flex-row gap-2">
              {language === "English" ? (
                <>
                  {SKILLS.map((skill, index) => (
                    <SkillCard key={index} {...skill} />
                  ))}
                </>
              ) : (
                <>
                  {SKILLSFR.map((skill, index) => (
                    <SkillCard key={index} {...skill} />
                  ))}
                </>
              )}
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
};
