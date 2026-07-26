"use client";

import { useEffect, useState } from "react";

import { siteConfig } from "@/data/site";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
};

function getTimeLeft(target: number): TimeLeft {
  const diff = target - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  }
  const seconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
    done: false,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export function Countdown({ className = "" }: { className?: string }) {
  const target = new Date(siteConfig.eventDateISO).getTime();
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(getTimeLeft(target));
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  // Evita mismatch de hidratação: só renderiza depois de montar no cliente.
  if (!time) {
    return <div className={`countdown ${className}`.trim()} aria-hidden="true" />;
  }

  if (time.done) {
    return (
      <div className={`countdown countdown-done ${className}`.trim()}>
        <span>O grande dia chegou. Nos vemos em Paris.</span>
      </div>
    );
  }

  const units: Array<{ label: string; value: string }> = [
    { label: "dias", value: String(time.days) },
    { label: "horas", value: pad(time.hours) },
    { label: "min", value: pad(time.minutes) },
    { label: "seg", value: pad(time.seconds) },
  ];

  return (
    <div
      className={`countdown ${className}`.trim()}
      role="timer"
      aria-label="Contagem regressiva para o evento"
    >
      <span className="countdown-caption">Faltam</span>
      <div className="countdown-units">
        {units.map((unit) => (
          <div className="countdown-unit" key={unit.label}>
            <strong>{unit.value}</strong>
            <span>{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
