import { Header } from "./_components/Header";
import { About } from "./_components/About";
import { Spacing } from "./_components/Spacing";
import { Core } from "./_components/Core";
import { Skill } from "./_components/Skill";
import { Footer } from "./_components/Footer";
import SkipLink from "./_components/SkipLink";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="maincontent">
        <Spacing size="sm" />
        <About />
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
