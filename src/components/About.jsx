import { useLanguage } from '../context/LanguageContext';
import Reveal from './Reveal';

export default function About() {
  const { t } = useLanguage();

  return (
    <Reveal as="section" id="sobre" className="term-block">
      <div className="section-cmd">{t.aboutCmd}</div>
      <p className="about__text">{t.about}</p>

      <div className="chips">
        {t.chips.map((chip) => (
          <span key={chip} className="chip">
            {chip}
          </span>
        ))}
      </div>

      <div className="about__meta">
        <div>
          <span className="comment">// fun_fact:</span> {t.funFact}
        </div>
        <div>
          <span className="comment">// challenge:</span> {t.challenge}
        </div>
      </div>
    </Reveal>
  );
}
