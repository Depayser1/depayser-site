"use client";

import { useEffect, useState } from "react";

import { useT } from "@/components/LanguageProvider";

export const CONSENT_KEY = "dp_consent";

export function CookieConsent() {
  const t = useT();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(CONSENT_KEY);
      if (v !== "granted" && v !== "denied") setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (granted: boolean) => {
    try {
      localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
    } catch {}
    if (granted) window.dispatchEvent(new Event("dp-consent-granted"));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookies">
      <p className="cookie-text">{t.cookies.text}</p>
      <div className="cookie-actions">
        <button type="button" className="cookie-btn ghost" onClick={() => choose(false)}>
          {t.cookies.reject}
        </button>
        <button type="button" className="cookie-btn" onClick={() => choose(true)}>
          {t.cookies.accept}
        </button>
      </div>
    </div>
  );
}
