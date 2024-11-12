/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Section } from "./utils/Section";
import portrait from "../../public/images/portrait.jpeg";
import { buttonVariants, cn } from "@/components/ui/button";
import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { Mail } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";

export const Footer = () => {
  return (
    <footer className="bg-card mt-4">
      <Section className="py-8 ">
        <div className="hover:bg-accent/50 transition-colors flex justify-center items-center gap-8">
          <div className="relative">
            <img
              src={portrait.src}
              alt="Portrait of Vincent Cantonnet"
              className="w-8 h-8 styledBorder border-border rounded-full object-contain"
            />
          </div>
          <Link
            target="_blank"
            href="mailto:vinch.cm@gmail.com"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "buttonSmall"
            )}
          >
            <AccessibleIcon label="send mail">
              <Mail size={16} className="text-white" />
            </AccessibleIcon>
          </Link>
          <Link
            target="_blank"
            href="https://github.com/VinchC"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "buttonSmall"
            )}
          >
            <AccessibleIcon label="link to GitHub page">
              <GithubIcon size={16} className="text-foreground" />
            </AccessibleIcon>
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/vincent-cantonnet/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "buttonSmall"
            )}
          >
            <AccessibleIcon label="link to LinkedIn profile">
              <LinkedInIcon size={16} className="text-foreground" />
            </AccessibleIcon>
          </Link>
        </div>
        <p className="text-sm text-card-foreground text-center py-4">
          Copyrights 2024 Vincent Cantonnet -{" "}
          <Link href="mailto:vinch.cm@gmail.com">vinch.cm@gmail.com</Link>
        </p>
      </Section>
    </footer>
  );
};
