import { useLanguage } from '../context/LanguageContext';
import { stack } from '../data/stack';
import Reveal from './Reveal';

const formatValues = (values) => `[ ${values.map((v) => `"${v}"`).join(', ')} ]`;

export default function Stack() {
  const { t } = useLanguage();

  return (
    <Reveal as="section" id="stack" className="term-block">
      <div className="section-cmd">{t.stackCmd}</div>

      <pre className="stack__json">
        {'{\n'}
        {stack.map((entry, i) => (
          <span key={entry.key}>
            {'  '}
            <span className="stack__key">"{entry.key}"</span>
            {`: ${formatValues(entry.values)}${i < stack.length - 1 ? ',' : ''}\n`}
          </span>
        ))}
        {'}'}
      </pre>
    </Reveal>
  );
}
