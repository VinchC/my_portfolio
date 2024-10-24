/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { Section } from "./Section";
import portrait from "../../public/images/portrait.jpeg";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { Code } from "./Code";
import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

export const About = () => {

  const language = useContext(LanguageContext);
  
  return (
    <>
    { language === "English" ? (
      <Section className="flex max-md:flex-col items-center gap-4 mt-4">
        <div className="flex-[3] flex flex-col gap-2 w-full">
          <h3 className="text-5xl font-caption">Full Stack Developper</h3>
          <p className="text-foreground">
            Having held the position of Teaching Assistant as part of my
            work-study training as an Application Developer Designer, an
            unforgettable experience that was rich in many ways, I want to use
            my skills as a Full Stack Developer in the context of ambitious and
            varied projects.
          </p>
          <p className="text-foreground">
            I also have a particular appetite for the topics of accessibility
            and security, being keen to place people at the center of a
            responsible digital approach.
          </p>
          <p className="text-foreground">
            I am currently focusing on learning the good practices regarding the
            former, content is available on{" "}
            <Link target="_blank" href="https://github.com/VinchC">
              <Code className="inline-flex items-center gap-1">
                <GithubIcon size={16} className="inline" />
                GitHub
              </Code>
            </Link>
            .
          </p>
          <p className="text-foreground">
            Being particularly sensitive to productivity and optimization
            issues, especially when they revolve around in-depth reflection
            regarding the user journey, I would be pleased to discuss a future
            collaboration.
          </p>
        </div>
        <div className="flex-[2] flex justify-around max-md:m-auto ml-auto">
          <img
            src={portrait.src}
            className="flex w-56 h-auto max-w-xs max-md:w-40 rounded-full border border-border"
            alt="Vincent Cantonnet's portrait"
          />
        </div>
      </Section>
    ) : (
      <Section className="flex max-md:flex-col items-center gap-4 mt-4">
        <div className="flex-[3] flex flex-col gap-2 w-full">
          <h3 className="text-5xl font-caption">Full Stack Developper</h3>
          <p className="text-foreground">Ayant occupé la fonction de Teaching Assistant dans le cadre de ma formation de Concepteur développeur d'applications en alternance, expérience qui a été riche d'enseignements, je souhaite à présent mettre à profit mes compétences en tant que Développeur Full Stack dans le cadre de projets ambitieux et variés.</p>
          <p className="text-foreground">
          Les domaines de l'accessibilité et de la sécurité m'intéressent en particulier, étant soucieux de placer l'humain au centre d'une démarche numérique responsable.
          </p>
          <p className="text-foreground">
            Je me concentre actuellement sur l'acquisition de connaissances et de bonnes pratiques dans ces domaines, le contenu est disponible sur{" "}
            <Link target="_blank" href="https://github.com/VinchC">
              <Code className="inline-flex items-center gap-1">
                <GithubIcon size={16} className="inline" />
                GitHub
              </Code>
            </Link>
            .
          </p>
          <p className="text-foreground">
          Étant sensible aux problématiques de productivité et d'optimisation, surtout quand elles s'inscrivent dans une réflexion approfondie en matière de parcours utilisateur, j'aurais plaisir à échanger avec vous à propos d'une future collaboration.
          </p>
        </div>
        <div className="flex-[2] flex justify-around max-md:m-auto ml-auto">
          <img
            src={portrait.src}
            className="flex w-56 h-auto max-w-xs max-md:w-40 rounded-full border border-border"
            alt="Vincent Cantonnet's portrait"
          />
        </div>
      </Section>
    )}
    </>
  );
};
