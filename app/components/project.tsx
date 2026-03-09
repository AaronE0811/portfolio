"use client";
import { Traslate } from "../data/traslate";
interface LangProps {
  lang: "es" | "en";
  changeLang: () => void;
}
function Project({ Lang }: { Lang: LangProps }) {
  const { lang, changeLang } = Lang;
  const t = Traslate[lang];
  const projects = [
    {
      id: 1,
      name: t.moodName,
      description: t.moodDesc,
      image: "/capturas/AppMood.jpg",
      URLGitHub: "https://github.com/AaronE0811/moodapp",
      URLLive: "https://moodapp-4ynb.vercel.app/",
      Tools: [
        "React",
        "Tailwind",
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "Vercel",
      ],
    },
    {
      id: 2,
      name: t.countriesName,
      description: t.countriesDesc,
      image: "/capturas/countriesDesktop.jpg",
      URLGitHub: "https://github.com/AaronE0811/Api_paises",
      URLLive: "https://apicountryrest.netlify.app/",
      Tools: ["React", "Tailwind", "Next.js"],
    },
  ];
  return (
    <div className="w-full mt-4">
      <div className="w-full">
        <h1 className="text-[48px] text-[#3B82F6] mt-4 font-extrabold">
          {t.projectTitle}
        </h1>
      </div>
      <div className="w-full ">
        {projects.map((project) => (
          <div
            className="border-t  p-6 gap-4 border-[#3B82F6] flex flex-wrap"
            key={project.id}
          >
            <div className="w-full lg:w-1/2">
              <img className="rounded" src={project.image} alt="" />
            </div>
            <div className="w-full flex flex-col items-start lg:w-[40%]">
              <h1 className="lg:text-[60px] text-[32px] mb-4 leading-[100%] tracking-tighter text-[#3B82F6] mt-4 font-extrabold">
                {project.name}
              </h1>
              <p className="(--font-montserrat) mb-2 font-extralight lg:text-[28px] text-[20px] leading-8">
                {project.description}
              </p>
              <div className="w-full flex flex-wrap justify-evenly">
                <h1 className="text-[20px] w-full pb-2  border-b border-[#3B82F6] text-[#3B82F6] mb-4 font-extrabold">
                  Tech Stack
                </h1>
                {project.Tools.map((tool, index) => (
                  <p
                    key={index}
                    className="border border-[#3b82f6] p-1 mb-4 rounded"
                  >
                    {tool}
                  </p>
                ))}
              </div>
            </div>
            <div className="w-full flex gap-4 justify-between">
              <button className="bg-[#3b82f6] w-1/2 p-2 rounded-sm cursor-pointer">
                <a href={project.URLGitHub}>{t.viewCode}</a>
              </button>
              <button className="bg-[#3b82f6] w-1/2 p-2 rounded-sm cursor-pointer">
                <a href={project.URLLive}>{t.viewLive}</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Project;
