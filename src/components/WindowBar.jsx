import { useLanguage } from '../context/LanguageContext';
import { profile } from '../data/profile';

const NAV_ITEMS = [
  { id: 'sobre', key: 'sobre' },
  { id: 'proyectos', key: 'proyectos' },
  { id: 'stack', key: 'stack' },
  { id: 'experiencia', key: 'experiencia' },
  { id: 'contacto', key: 'contacto' },
];

export default function WindowBar() {
  const { t, toggleLang } = useLanguage();

  return (
    <div className="term-bar">
      <div className="term-dots">
        <span />
        <span />
        <span />
      </div>
      <div className="term-bar__path">
        {profile.handle} — {profile.path}
      </div>
      <div className="term-bar__right">
        <nav className="term-nav">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {t.nav[item.key]}
            </a>
          ))}
        </nav>
        <button type="button" className="term-lang" onClick={toggleLang}>
          [ {t.langBtn} ]
        </button>
      </div>
    </div>
  );
}
