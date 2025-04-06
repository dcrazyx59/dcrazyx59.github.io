'use client'

// layout => display => spacing => border => colors => text
import NavBar from "./components/common/navbar";
import ThemeToggle from './components/common/themeToggle';
import Introduction from './components/sections/introduction';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Home() {
  const { theme } = useTheme()

  return (
    <>
      <NavBar />
      <ThemeToggle />
      <Introduction />

      <section className="h-[80vh] bg-primary">
        Hello
      </section>

      <section className="h-[130vh] bg-secondary">
        <div className="flex justify-center align-center m-auto w-[218px] h-[123px]">
          <Image src="/bottom1.gif" width={218} height={123} alt="" className={`transition-filter duration-300 ease-in-out filter dark:${theme === 'dark' ? "invert" : ""}`}/>
        </div>
      </section>

      <section className="h-[80vh] bg-primary">
      </section>

      <section className="h-[120vh] bg-secondary">
      </section>
    </>
  );
}
