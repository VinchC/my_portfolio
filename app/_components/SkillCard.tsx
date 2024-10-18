/* eslint-disable @next/next/no-img-element */

import { Card } from "@/components/ui/card";

export const SkillCard = (props: {
  picture: string;
  alt: string;
  title: string;
  description: string;
}) => {
  return (
    <Card className="p-3 border-0 h-24 hover:bg-accent/50 transition-colors flex items-center gap-4">
      <div >
        <img
          src={props.picture}
          alt={props.alt}
          className="max-w-16 h-auto object-contain rounded-sm animate-pulse bg-white"
        />
      </div>
      <div className="mr-auto">
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Card>
  );
};
