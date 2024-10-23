import { cn, buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { Mail } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 bg-card">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-card-foreground">Vincent Cantonnet</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link target="_blank" href="mailto:vinch.cm@gmail.com" 
          className={cn(buttonVariants({ variant: "outline"}), "size-8 p-0 border-border bg-black")}>
              <Mail size={16} className="text-white" />
          </Link>
          <Link target="_blank" href="https://github.com/VinchC" 
          className={cn(buttonVariants({ variant: "outline"}), "size-8 p-0 border-border bg-black")}>
              <GithubIcon size={16} className="text-foreground" />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/vincent-cantonnet/" 
          className={cn(buttonVariants({ variant: "outline"}), "size-8 p-0 border-border bg-black")}>
              <LinkedInIcon size={16} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
