/* eslint-disable @next/next/no-img-element */
"use client";

import { cn, buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { Mail } from "lucide-react";
import { Code } from "./Code";

export const Header = ({
  language,
  toggleLanguage,
}: {
  language: string;
  toggleLanguage: any;
}) => {
  
  return (
    <header className="sticky top-0 py-4 bg-card">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-card-foreground">
          Vincent Cantonnet
        </h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            target="_blank"
            href="mailto:vinch.cm@gmail.com"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-8 p-0 border-border bg-black"
            )}
          >
            <Mail size={16} className="text-white" />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/VinchC"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-8 p-0 border-border bg-black"
            )}
          >
            <GithubIcon size={16} className="text-foreground" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/vincent-cantonnet/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-8 p-0 border-border bg-black"
            )}
          >
            <LinkedInIcon size={16} className="text-foreground" />
          </Link>
          <button
            onClick={toggleLanguage}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-8 p-0 border-border bg-black"
            )}
          >
            {language === "English" ? (
              <Code className="inline-flex items-center gap-1 border-none">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ensign_of_France.svg/langfr-225px-Ensign_of_France.svg.png"
                  style={{ width: 16, height: "auto" }}
                  alt="France flag"
                />
              </Code>
            ) : (
              <Code className="inline-flex items-center gap-1 border-none">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                  style={{ width: 16, height: "auto" }}
                  alt="United Kingdom flag"
                />
              </Code>
            )}
          </button>
        </ul>
      </Section>
    </header>
  );
};
