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
  const [ isOpen, setIsOpen] = useState(false);

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
    // <>
    //   <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
    //     <div className="flex items-center justify-between px-4 py-3 sm:p-0">
    //       <div>
    //         <img
    //           className="h-8"
    //           src="/img/logo-inverted.svg"
    //           alt="Workcation"
    //         />
    //       </div>
    //       <div className="sm:hidden">
    //         <button
    //           onClick={() => {isOpen ? setIsOpen(false) : setIsOpen(true)}}
    //           type="button"
    //           className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
    //         >
    //           <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
    //             <path
    //               v-if={isOpen}
    //               fill-rule="evenodd"
    //               d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
    //             />
    //             <path
    //               v-if={!isOpen}
    //               fill-rule="evenodd"
    //               d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //     <nav className={isOpen ? 'block' : 'hidden'}>
    //       <a
    //         href="#"
    //         className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
    //       >
    //         List your property
    //       </a>
    //       <a
    //         href="#"
    //         className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
    //       >
    //         Trips
    //       </a>
    //       <a
    //         href="#"
    //         className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
    //       >
    //         Messages
    //       </a>
    //     </nav>
    //   </header>
    // </>
  );
};
