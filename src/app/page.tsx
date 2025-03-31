'use client'

// layout => display => spacing => border => colors => text
import NavBar from "./components/common/navbar";
import ThemeToggle from './components/common/themeToggle';
import Introduction from './components/sections/introduction';


export default function Home() {

  return (
    <>
      <NavBar />
      <ThemeToggle />
      <Introduction />

      <section className="h-[80vh] bg-primary">
        Hello
      </section>

      <section className="h-[130vh] bg-secondary">
      </section>

      <section className="h-[80vh] bg-primary">
      </section>

      <section className="h-[120vh] bg-secondary">
      </section>
    </>
  );
}
