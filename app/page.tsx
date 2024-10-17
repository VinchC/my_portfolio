import { Header } from "./_components/Header";
import { About } from "./_components/About";
import { Spacing } from "./_components/Spacing";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="md" />
      <About />
    </main>
  );
}
