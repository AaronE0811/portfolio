import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { PiReadCvLogoFill } from "react-icons/pi";
import { Traslate } from "../data/traslate";
interface LangProps {
  lang: "es" | "en";
  changeLang: () => void;
}
function Contact({ Lang }: { Lang: LangProps }) {
  const { lang, changeLang } = Lang;

  const t = Traslate[lang];
  return (
    <div className="w-full flex flex-col ">
      <h1 className="text-[48px] border-b mb-2 border-[#3b82f6] text-[#3B82F6] mt-4 font-extrabold">
        {t.contactNavBar}
      </h1>
      <div className="flex items-center justify-center w-full gap-2">
        <a
          className="bg-[#3B82F6] p-2 h-16 gap-2  flex items-center justify-center rounded"
          href="https://github.com/AaronE0811"
        >
          <FaGithub /> GitHub
        </a>
        <a
          className="bg-[#3B82F6] p-2 rounded h-16 gap-2 flex items-center justify-center"
          href="https://www.linkedin.com/in/aaron-elizondo-vargas-00645b387/"
        >
          <FaLinkedin /> Linkedin
        </a>
        <a
          className="bg-[#3B82F6] p-2 gap-2 rounded h-16 flex items-center justify-center"
          href={t.cvUrl}
        >
          <PiReadCvLogoFill /> cv
        </a>
      </div>
    </div>
  );
}

export default Contact;
