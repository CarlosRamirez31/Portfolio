import Terminal from './components/Terminal';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <Terminal />
    </LanguageProvider>
  );
}
