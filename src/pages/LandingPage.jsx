import Hero from '../components/Hero.jsx';
import QuizSection from '../components/QuizSection.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import { QuizCompletionProvider } from '../context/QuizCompletionContext.jsx';

export default function LandingPage() {
  return (
    <QuizCompletionProvider>
      <Hero />
      <QuizSection />
      <SiteFooter />
    </QuizCompletionProvider>
  );
}
