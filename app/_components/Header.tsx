/* eslint-disable @next/next/no-img-element */
"use client";

import { cn, buttonVariants } from "@/components/ui/button";
import { Section } from "./utils/Section";
import Link from "next/link";
import CV from "./CV";
import ThemeSwitch from "./utils/ThemeSwitch";
import { AccessibleIcon } from "@radix-ui/react-accessible-icon";

export const Header = ({
  language,
  toggleLanguage,
}: {
  language: string;
  toggleLanguage: any;
}) => {
  return (
    <header className="sticky w-full top-0 py-4 bg-card border-b-[2px] border-background">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-card-foreground">
          Vincent Cantonnet
        </h1>
        <div className="flex-1" />

        <ul className="flex items-center gap-2">
          <Link
            href="#projects"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "buttonLarge"
            )}
          >
            Projects
          </Link>
          <Link
            href="#work"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "buttonLarge"
            )}
          >
            Work
          </Link>
          <Link
            href="#soft"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "buttonLarge"
            )}
          >
            Soft skills
          </Link>
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "buttonLarge"
            )}
          >
            Contact
          </Link>
          <AccessibleIcon label="download CV">
            <CV />
          </AccessibleIcon>
          <button
            aria-label="switch the language between English and French"
            onClick={toggleLanguage}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "buttonSmall"
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
              "buttonSmall"
            )}
          >
            <ThemeSwitch />
          </button>
        </ul>
      </Section>
    </header>
  );
};
