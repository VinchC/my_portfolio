/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Work } from "./Work";
import {
  SIDE_PROJECTS,
  SIDE_PROJECTSFR,
  WORKS,
  EDUCATION,
  EDUCATIONFR,
  WORKSFR,
} from "../data/data";
import { Project } from "./Project";
import { Education } from "./Education";
import LanguageContext from "../contexts/LanguageContext";
import { useContext } from "react";

export const Core = () => {
  const language = useContext(LanguageContext);

  return (
    <>
      <Section className="flex max-md:flex-col items-start gap-4 mt-4">
        <div className="flex-[2] w-full">
          <Card className="w-full p-4 flex flex-col gap-2">
            {language === "English" ? (
              <>
                <p className="text-lg">Projects</p>
                <div className="flex flex-col gap-3">
                  {SIDE_PROJECTS.map((project, index) => (
                    <Project key={index} {...project} />
                  ))}
                </div>
              </>
            ) : (
              <>
                <p className="text-lg">Projets</p>
                <div className="flex flex-col gap-3">
                  {SIDE_PROJECTSFR.map((project, index) => (
                    <Project key={index} {...project} />
                  ))}
                </div>
              </>
            )}
          </Card>
        </div>
        <div className="flex-[2] w-full flex flex-col gap-4">
          <Card className="w-full p-4 flex flex-col gap-4">
            {language === "English" ? (
              <>
                <p className="text-lg">Work experience</p>
                <div className="flex flex-col">
                  {WORKS.map((work, index) => (
                    <Work key={index} {...work} />
                  ))}
                </div>
              </>
            ) : (
              <>
                <p className="text-lg">
                  Expérience professionnelle
                </p>
                <div className="flex flex-col">
                  {WORKSFR.map((work, index) => (
                    <Work key={index} {...work} />
                  ))}
                </div>
              </>
            )}
          </Card>
          <Card className="w-full p-4 flex flex-col gap-2">
            {language === "English" ? (
              <>
                <p className="text-lg p-1">Certificate</p>
                <div className="flex flex-col">
                  {EDUCATION.map((education, index) => (
                    <Education key={index} {...education} />
                  ))}
                </div>
              </>
            ) : (
              <>
                <p className="text-lg p-1">
                  Titre professionnel
                </p>
                <div className="flex flex-col">
                  {EDUCATIONFR.map((education, index) => (
                    <Education key={index} {...education} />
                  ))}
                </div>
              </>
            )}
          </Card>
        </div>
      </Section>
    </>
  );
};
