import { useLanguage } from '../context/LanguageContext';
import { experienceHashes } from '../data/profile';
import Reveal from './Reveal';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <Reveal as="section" id="experiencia" className="term-block">
      <div className="section-cmd">{t.expCmd}</div>

      <div className="exp-list">
        {t.experience.map((job, i) => (
          <div key={job.role} className="exp-item">
            <div className="exp-item__head">
              <span className="exp-hash">{experienceHashes[i]}</span>
              <span className="exp-role">{job.role}</span>
              <span className="exp-date">{job.date}</span>
            </div>
            <div className="exp-detail">
              {job.bullets.map((bullet) => (
                <div key={bullet}>
                  <span className="plus">+</span> {bullet}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
