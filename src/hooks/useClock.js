import { useEffect, useState } from 'react';

/**
 * Reloj en vivo (formato 24h) que se actualiza cada segundo.
 * @param {string} locale - ej. 'en-US' | 'es-DO'
 * @returns {string} hora formateada, o '--:--:--' antes del primer tick.
 */
export function useClock(locale) {
  const [time, setTime] = useState('--:--:--');

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString(locale, { hour12: false }));

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [locale]);

  return time;
}
