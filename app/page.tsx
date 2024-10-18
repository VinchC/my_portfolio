import { Header } from "./_components/Header";
import { About } from "./_components/About";
import { Spacing } from "./_components/Spacing";
import { Core } from "./_components/Core";
import { Skill } from "./_components/Skill";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="sm" />
      <About />
      <Spacing size="sm" />
      <Core />
      <Spacing size="sm" />
      <Skill />
    </main>
  );
}
