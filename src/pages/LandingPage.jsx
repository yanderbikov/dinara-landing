import Hero from '../components/Hero.jsx';
import QuizSection from '../components/QuizSection.jsx';
import { QuizCompletionProvider } from '../context/QuizCompletionContext.jsx';

export default function LandingPage() {
  return (
    <QuizCompletionProvider>
      <Hero />
      <QuizSection />
      <footer id="contact" className="site-footer" aria-label="Контакты" />
    </QuizCompletionProvider>
  );
}
