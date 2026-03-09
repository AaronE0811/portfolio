import { MdOutlineLanguage } from "react-icons/md";
import { Traslate } from "../data/traslate";

interface LangProps {
  lang: "es" | "en";
  changeLang: () => void;
}
function NavBar({ Lang }: { Lang: LangProps }) {
  const { lang, changeLang } = Lang;

  const t = Traslate[lang];
  return (
    <div className="w-full mt-10 border border-[#3B82F6] rounded p-2 flex flex-col lg:flex-row items-center justify-between">
      <div>
        <h1 className="font-bold text-[28px]">{t.titleNavBar}</h1>
      </div>
      <div className="flex cursor-pointer items-center font-extralight text-[20px] lg:gap-6 gap-2">
        <button
          onClick={changeLang}
          className="flex gap-2 items-center mr-4 justify-center"
        >
          <MdOutlineLanguage />
          <span>{lang}</span>
        </button>
      </div>
    </div>
  );
}
export default NavBar;
