"use client";

import { Header } from "./_components/Header";
import { About } from "./_components/About";
import { Aboutfr } from "./_components/Aboutfr";
import { Spacing } from "./_components/Spacing";
import { Core } from "./_components/Core";
import { Skill } from "./_components/Skill";
import { Footer } from "./_components/Footer";
import SkipLink from "./_components/SkipLink";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState("English");

  const toggleLanguage = () => {
    return setLanguage(language === "English" ? "French" : "English");
  };

  return (
    <>
      <SkipLink />
      <Header language={language} toggleLanguage={toggleLanguage} />
      <main id="maincontent">
        <Spacing size="sm" />
        {language === "English" ? <About /> : <Aboutfr />}
        <Spacing size="sm" />
        <Core />
        <Spacing size="sm" />
        <Skill />
        <Spacing size="sm" />
        <Footer />
      </main>
    </>
  );
}
