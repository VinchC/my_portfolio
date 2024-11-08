"use client";

import { Header } from "./_components/Header";
import { About } from "./_components/About";
import { Spacing } from "./_components/utils/Spacing";
import { Core } from "./_components/Core";
import { Skill } from "./_components/Skill";
import { Footer } from "./_components/Footer";
import SkipLink from "./_components/utils/SkipLink";
import { useState } from "react";
import LanguageContext from "./contexts/LanguageContext";
import BackToTopButton from "./_components/utils/BackToTopButton";

export default function Home() {
  const [language, setLanguage] = useState("English");

  const toggleLanguage = () => {
    return setLanguage(language === "English" ? "French" : "English");
  };

  return (
    <>
      <SkipLink />

      <Header language={language} toggleLanguage={toggleLanguage} />

      <LanguageContext.Provider value={language}>
        <main id="maincontent">
          <BackToTopButton />
          <Spacing size="sm" />
          <About />
          <Spacing size="sm" />
          <Core />
          <Spacing size="sm" />
          <Skill />
          <Spacing size="sm" />
          <Footer />
        </main>
      </LanguageContext.Provider>
    </>
  );
}
