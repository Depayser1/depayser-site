"use client";

import { useLang } from "./LanguageProvider";

export function LangSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang-switcher" role="group" aria-label="Idioma / Langue">
      <button
        type="button"
        className={`lang-flag${lang === "pt" ? " is-active" : ""}`}
        onClick={() => setLang("pt")}
        aria-pressed={lang === "pt"}
        aria-label="Português"
        title="Português"
      >
        🇧🇷
      </button>
      <button
        type="button"
        className={`lang-flag${lang === "fr" ? " is-active" : ""}`}
        onClick={() => setLang("fr")}
        aria-pressed={lang === "fr"}
        aria-label="Français"
        title="Français"
      >
        🇫🇷
      </button>
    </div>
  );
}
