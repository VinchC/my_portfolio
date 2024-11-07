/* eslint-disable @next/next/no-img-element */
"use client";

import { cn, buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { Mail } from "lucide-react";
import { Code } from "./Code";
import CV from "./CV";
import ThemeSwitch from "./ThemeSwitch";
import { AccessibleIcon } from '@radix-ui/react-accessible-icon';

export const Header = ({
  language,
  toggleLanguage,
}: {
  language: string;
  toggleLanguage: any;
}) => {
  return (
    <header className="fixed w-full top-0 py-4 bg-card border-b-[2px] border-background">
      <Section className="flex items-baseline ">
        <h1 className="text-lg font-bold text-card-foreground">
          Vincent Cantonnet
        </h1>
        <div className="flex-1" />

        <ul className="flex items-center gap-2">
        <AccessibleIcon label="download CV">
          <CV />
        </AccessibleIcon>
          <Link
            target="_blank"
            href="mailto:vinch.cm@gmail.com"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-8 p-0 border-border bg-black"
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
              "size-8 p-0 border-border bg-black"
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
              "size-8 p-0 border-border bg-black"
            )}
          >
            <AccessibleIcon label="link to LinkedIn profile">
              <LinkedInIcon size={16} className="text-foreground" />
            </AccessibleIcon>
          </Link>
          <button
            aria-label="switch the language between English and French"
            onClick={toggleLanguage}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-8 p-0 border-border bg-black"
            )}
          >
            {language === "English" ? (
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ensign_of_France.svg/langfr-225px-Ensign_of_France.svg.png"
                  style={{ width: 16, height: "auto" }}
                  alt="France flag"
                />
            ) : (
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                  style={{ width: 16, height: "auto" }}
                  alt="United Kingdom flag"
                />
            )}
          </button>
          <button
            aria-label="switch the mode from dark to light (os prefrences by default)"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-8 p-0 border-border bg-black"
            )}
          >
            <ThemeSwitch />
          </button>
        </ul>
      </Section>
    </header>
  );
};
