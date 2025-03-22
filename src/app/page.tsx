'use client'

// layout => display => spacing => border => colors => text

import NavBar from "./components/common/navbar";

export default function Home() {


  return (
    <>
      <NavBar />
      <section className="h-screen bg-primary-dark justify-center align">
      </section>

      <section className="h-[80vh] bg-primary-light">
      </section>

      <section className="h-[130vh] bg-primary-dark">
      </section>

      <section className="h-[80vh] bg-primary-light">
      </section>

      <section className="h-[120vh] bg-primary-dark-">
      </section>
    </>
  );
}
