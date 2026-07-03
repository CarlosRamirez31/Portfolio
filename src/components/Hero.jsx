import { useLanguage } from '../context/LanguageContext';
import { profile } from '../data/profile';
import Reveal from './Reveal';

// Arte ASCII "Carlos". Se usa un arreglo de lineas para evitar problemas
// con las comillas invertidas y las barras invertidas del dibujo.
const ASCII_LINES = [
  '   ___          _',
  '  / __|__ _ _ _| |___ ___',
  " | (__/ _` | '_| / _ (_-<",
  '  \\___\\__,_|_| |_\\___/__/',
];

export default function Hero() {
  const { t } = useLanguage();

  const art = ASCII_LINES.map((line, i) =>
    i === ASCII_LINES.length - 1 ? `${line}   ${profile.asciiName}` : line,
  ).join('\n');

  return (
    <Reveal className="hero">
      <div className="hero__prompt">$ whoami</div>

      <pre className="hero-ascii">{art}</pre>

      <div className="hero__intro">
        <span className="hero__caret">&gt;</span> {t.heroL1}
        <br />
        <span className="hero__caret">&gt;</span> {t.heroL2}
        <span className="cursor cursor--sm" />
      </div>

      <div className="hero__actions">
        <a href="#proyectos" className="btn btn--primary">
          {t.btnProjects}
        </a>
        <a
          href={profile.cvUrl}
          download="Carlos Manuel Ramirez Nova CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--ghost"
        >
          {t.btnCv}
        </a>
      </div>
    </Reveal>
  );
}
