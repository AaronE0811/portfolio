"use client";
import Image from "next/image";
import NavBar from "./components/navBar";
import Title from "./components/title";
import Project from "./components/project";
import Contact from "./components/contact";
import Lang from "./hook/botonLang";

export default function Home() {
  const lang = Lang();
  return (
    <div
      className="flex text-white justify-center w-full min-h-screen bg-linear-to-b from-[#080a0a] to-[#131414]
  font-sans"
    >
      <main className="w-full lg:w-[70%]   p-4 flex flex-col items-center ">
        <NavBar Lang={lang} />
        <Title Lang={lang} />
        <Project Lang={lang} />
        <Contact Lang={lang} />
      </main>
    </div>
  );
}
