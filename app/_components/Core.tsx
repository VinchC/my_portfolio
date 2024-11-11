/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "./utils/Section";
import { Work } from "./Work";
import { SIDE_PROJECTS, WORKS, EDUCATION, WORKSFR } from "../data/data";
import { Project } from "./Project";
import { Education } from "./Education";
import LanguageContext from "../contexts/LanguageContext";
import { useContext } from "react";

export const Core = () => {
  const language = useContext(LanguageContext);

  return (
    <>
      <Section className="section items-start">
          <div className="flex-[2] w-full" id="projects">
            <Card className="card">
              <>
                <p className="text-lg">Projects</p>
                <div className="flex flex-col gap-3">
                  {SIDE_PROJECTS.map((project, index) => (
                    <Project key={index} {...project} />
                  ))}
                </div>
              </>
            </Card>
          </div>
        <div id="work" className="flex-[2] w-full flex flex-col gap-6">
          <Card className="card">
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
                <p className="text-lg">Expérience professionnelle</p>
                <div className="flex flex-col">
                  {WORKSFR.map((work, index) => (
                    <Work key={index} {...work} />
                  ))}
                </div>
              </>
            )}
          </Card>
          <Card className="card">
            <>
              <p className="text-lg p-1">Certificate</p>
              <div className="flex flex-col">
                {EDUCATION.map((education, index) => (
                  <Education key={index} {...education} />
                ))}
              </div>
            </>
          </Card>
        </div>
      </Section>
    </>
  );
};
