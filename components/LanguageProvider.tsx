"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

import { translations, type Dict, type Lang } from "@/data/i18n";

type Ctx = { lang: Lang; setLang: (l: Lang) => void };

const LangContext = createContext<Ctx>({ lang: "pt", setLang: () => {} });

const htmlLang = (l: Lang) => (l === "fr" ? "fr" : l === "en" ? "en" : "pt-BR");

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("dp_lang");
      if (saved === "pt" || saved === "fr" || saved === "en") {
        setLangState(saved);
        document.documentElement.lang = htmlLang(saved);
      }
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("dp_lang", l);
    } catch {}
    document.documentElement.lang = htmlLang(l);
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

export function useT(): Dict {
  const { lang } = useContext(LangContext);
  return translations[lang];
}
