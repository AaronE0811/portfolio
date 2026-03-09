import { Traslate } from "../data/traslate";
interface LangProps {
  lang: "es" | "en";
  changeLang: () => void;
}
function Title({ Lang }: { Lang: LangProps }) {
  const { lang, changeLang } = Lang;
  const t = Traslate[lang];
  return (
    <div className="mt-10 w-full ">
      <div>
        <h1 className="text-[28px] flex gap-2 lg:text-[40px] font-bold leading-[140%] tracking-tighter">
          {t.title}
          <span className="italic text-[#3B82F6]">Aaron Elizondo Vargas</span>
        </h1>
        <h2 className="mt-4 flex flex-col text-[50px] text-[#3B82F6]  font-extrabold lg:text-[60px] -tracking-wide leading-12 lg:leading-15">
          {t.title3}
        </h2>
        <h2 className="mt-4 flex flex-col text-[50px] text-[#3B82F6]  font-extrabold lg:text-[60px] -tracking-wide leading-12 lg:leading-15">
          {t.title4}
        </h2>
        <h2 className="mt-4 flex flex-col text-[50px] text-[#3B82F6]  font-extrabold lg:text-[60px] -tracking-wide leading-12 lg:leading-15">
          {t.title5}
        </h2>
      </div>
      <div className="mt-10 w-full (--font-montserrat) font-extralight text-[28px] leading-10 ">
        <p>{t.text}</p>
      </div>
      <div>
        <h3 className="text-[48px] text-[#3B82F6] mt-4 font-extrabold">
          {t.aboutmeNavBar}
        </h3>
        <p className="mt-4 w-full (--font-montserrat) font-extralight text-[28px] leading-10 ">
          {t.text2}
        </p>
      </div>
    </div>
  );
}
export default Title;
