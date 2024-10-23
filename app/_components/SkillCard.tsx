/* eslint-disable @next/next/no-img-element */

import { Card } from "@/components/ui/card";

export const SkillCard = (props: {
  picture: string;
  alt: string;
  title: string;
  description: string;
}) => {
  return (
    <Card className="flex-[4] p-3 border-0 h-auto hover:bg-accent/50 transition-colors">
      <div className="flex flex-col items-center justify-center max-h-160 gap-3">
        <div className="flex items-center h-16">
          <img
            src={props.picture}
            alt={props.alt}
            className="flex items-center max-w-16 max-h-16 rounded-sm animate-pulse bg-white"
          />
        </div>
          <p className="text-lg font-semibold">{props.title}</p>
          <p className="text-sm">{props.description}</p>
      </div>
    </Card>
  );
};
