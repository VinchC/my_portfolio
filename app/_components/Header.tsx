/* eslint-disable @next/next/no-img-element */
"use client";

import { cn, buttonVariants } from "@/components/ui/button";
import { Section } from "./utils/Section";
import Link from "next/link";
import CV from "./CV";
import ThemeSwitch from "./utils/ThemeSwitch";
import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { useState } from "react";

export const Header = ({
  language,
  toggleLanguage,
}: {
  language: string;
  toggleLanguage: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky w-full top-0 py-4 h-16 bg-card border-b-[2px] border-background">
      <Section className="flex">
        <h1 className="text-lg font-bold text-card-foreground">
          Vincent Cantonnet
        </h1>
        <div className="flex-1" />

        <div className="flex-col">
          <div className="md:hidden flex justify-end items-center">
            <button
              onClick={() => {
                isOpen ? setIsOpen(false) : setIsOpen(true);
              }}
              type="button"
              className="text-tertiary"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  v-if={isOpen}
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
                <path
                  v-if={!isOpen}
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
          <ul
            className={`flex items-center gap-2 max-md:flex-col max-md:${
              isOpen ? "" : "hidden"
            }`}
          >
            <Link
              href="#projects"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "buttonLarge"
              )}
            >
              {language === "English" ? "Projects" : "Projets"}
            </Link>
            <Link
              href="#work"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "buttonLarge"
              )}
            >
              {language === "English" ? "Work exp." : "Parcours pro."}
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
                "buttonSmall max-md:buttonLarge"
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
                "buttonSmall max-md:buttonLarge"
              )}
            >
              <ThemeSwitch />
            </button>
          </ul>
        </div>
      </Section>
    </header>
  );
};
