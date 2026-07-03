import { useLanguage } from '../context/LanguageContext';
import { profile } from '../data/profile';
import Reveal from './Reveal';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <Reveal as="section" id="contacto" className="contact">
      <div className="contact__cmd">{t.contactCmd}</div>

      <a href={`mailto:${profile.email}`} className="contact__email">
        {profile.email}
        <span className="cursor cursor--lg" />
      </a>

      <div className="contact__socials">
        {profile.socials.map((social) => (
          <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer">
            {social.label}
          </a>
        ))}
        <span>{profile.phone}</span>
      </div>
    </Reveal>
  );
}
