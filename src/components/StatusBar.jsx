import { useLanguage } from '../context/LanguageContext';
import { profile } from '../data/profile';
import { useClock } from '../hooks/useClock';

export default function StatusBar() {
  const { t } = useLanguage();
  const clock = useClock(t.clockLocale);

  return (
    <div className="status-bar">
      <div className="status-bar__group">
        <span>
          <span className="dot">●</span> {t.stOnline}
        </span>
        <span>{profile.branch}</span>
        <span>{t.stAvail}</span>
      </div>
      <div className="status-bar__group">
        <span>{profile.runtime}</span>
        <span>{profile.location}</span>
        <span className="status-bar__clock">{clock}</span>
      </div>
    </div>
  );
}
