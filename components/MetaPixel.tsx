"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// ID do Meta Pixel (público — fica visível no navegador de qualquer forma).
export const FB_PIXEL_ID = "1786509182494959";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Carrega o Meta Pixel apenas APÓS o consentimento de cookies (GDPR).
 * Fica invisível até o visitante clicar "Aceitar" (ou se já aceitou antes).
 * Renderize em app/layout.tsx, dentro do <body>.
 */
export function MetaPixel() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("dp_consent") === "granted") setEnabled(true);
    } catch {}
    const onGrant = () => setEnabled(true);
    window.addEventListener("dp-consent-granted", onGrant);
    return () => window.removeEventListener("dp-consent-granted", onGrant);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}

/**
 * Dispara um PageView a cada navegação interna (SPA), além do inicial.
 * Deve ficar dentro de um <Suspense> por causa do useSearchParams.
 */
export function MetaPixelEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const firstRun = useRef(true);

  useEffect(() => {
    // O script base já dispara o PageView no primeiro carregamento.
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    window.fbq?.("track", "PageView");
  }, [pathname, searchParams]);

  return null;
}
