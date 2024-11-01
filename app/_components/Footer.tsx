import Link from "next/link";
import { Section } from "./Section";

export const Footer = () => {
  return (
    <footer className="bg-card hover:bg-accent/40 mt-4">
      <Section className="py-8">
        <p className="text-sm text-card-foreground text-center">
          Copyrights 2024 Vincent Cantonnet - <Link href="mailto:vinch.cm@gmail.com">vinch.cm@gmail.com</Link>
        </p>
      </Section>
    </footer>
  );
};
