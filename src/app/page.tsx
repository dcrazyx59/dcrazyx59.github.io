'use client'

// layout => display => spacing => border => colors => text

import { useState } from "react";
import NavBar from "./components/common/navbar";
import { Counter } from "./components/common/counter";

export default function Home() {
  const [namePerson, setNamePerson] = useState<string>("Adrian")

  const handleNamePerson = (person: string) => {
    if (person === "Adrian") return setNamePerson("Javier") 
    return setNamePerson("Adrian") 
  }

  return (
    <div className="h-screen">
      <NavBar/>
      <div className="flex flex-col justify-center align-middle m-auto text-center">
        <Counter/>
        <span className="align-middle hover:text-primary-light">Hello my name is {namePerson}</span>
        <div>
          <button type="button" onClick={() =>handleNamePerson(namePerson)} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 m-3">Click me!</button>
        </div>
        <span></span>
      </div>
      
    </div>
    );
}
