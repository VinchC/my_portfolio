/* eslint-disable @next/next/no-img-element */

import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const ContactCard = (props: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <Card className="p-3 h-24 hover:bg-accent/50 transition-colors flex items-center gap-4">
      <div className="relative">
        <img
          src={props.image}
          alt={props.title}
          className="w-10 h-10 rounded-full object-contain"
        />
      </div>
      <div className="mr-auto">
        <div className="flex items-center gap-2">
        </div>
        <Link href={`mailto:${props.title}`}>{props.description}</Link>
      </div>
      <Link href={`mailto:${props.title}`}>
        <Mail size={16} />
      </Link>
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/vincent-cantonnet/"
        className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}
      >
        <LinkedInIcon size={16} className="text-foreground" />
      </Link>
    </Card>
  );
};
