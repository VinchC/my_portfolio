/* eslint-disable @next/next/no-img-element */

import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import portrait from "../../public/images/portrait.jpeg";
import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { GithubIcon } from "./icons/GithubIcon";
import { Section } from "./Section";

export const Contact = () => {
  return (
    <Section className="section">
      <div className="w-full" id="soft">
        <p className="text-lg">Contact</p>
        <Card className="p-3 h-24 hover:bg-accent/50 transition-colors flex items-center gap-4">
          <div className="relative">
            <img
              src={portrait.src}
              alt="Portrait of Vincent Cantonnet"
              className="w-10 h-10 rounded-full object-contain"
            />
          </div>
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
        </Card>
      </div>
    </Section>
  );
};
