"use client";
import { useState } from "react";

export type Language = "es" | "en";

export default function useLang() {
  const [lang, setLang] = useState<Language>("en");

  const changeLang = () => {
    setLang((prev) => (prev === "en" ? "es" : "en"));
  };

  return { lang, changeLang };
}
