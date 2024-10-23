/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import portrait from "../../public/images/portrait.jpeg";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { Code } from "./Code";

export const Aboutfr = () => {
  return (
    <>
      <Section className="flex max-md:flex-col items-center gap-4 mt-4">
        <div className="flex-[3] flex flex-col gap-2 w-full">
          <h3 className="text-5xl font-caption">Full Stack Developper</h3>
          <p className="text-foreground">Ayant occupé la fonction de Teaching Assistant dans le cadre de ma formation de Concepteur développeur d'applications en alternance, expérience qui a été riche d'enseignements, je souhaite à présent mettre à profit mes compétences en tant que Développeur Full Stack dans le cadre de projets ambitieux et variés.</p>
          <p className="text-foreground">
          J'ai une appétence particulière pour les domaines de l'accessibilité et de la sécurité, étant soucieux de placer l'humain au centre d'une démarche numérique responsable.
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
          Étant particulièrement sensible aux problématiques de productivité et d'optimisation, a fortiori quand elles s'articulent autour d'une réflexion approfondie en matière de parcours utilisateur, j'aurais plaisir à échanger avec vous à propos d'une future collaboration.
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
    </>
  );
};
