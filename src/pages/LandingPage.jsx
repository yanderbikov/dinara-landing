import Hero from '../components/Hero.jsx';
import QuizSection from '../components/QuizSection.jsx';
import { QuizCompletionProvider } from '../context/QuizCompletionContext.jsx';

export default function LandingPage() {
  return (
    <QuizCompletionProvider>
      <Hero />
      <QuizSection />
      <footer id="contact" className="site-footer" aria-label="Контакты">
        <div className="site-footer__content">
          <div className="site-footer__grid">
            <div className="site-footer__column">
              <p className="site-footer__title">О компании</p>
              <p className="site-footer__line">ОсОО &quot;АКД Консалтинг&quot;</p>
              <p className="site-footer__line">ИНН 00502202410171</p>
              <p className="site-footer__line">
                Юр. адрес: пр. Ч. Айтматова 71-20, г. Бишкек, Кыргызстан, 720044
              </p>
            </div>
            <div className="site-footer__column">
              <p className="site-footer__title">Контакты</p>
              <p className="site-footer__line">
                <a href="tel:+996770979760" className="site-footer__link">
                  +996770979760
                </a>
              </p>
              <p className="site-footer__line">
                <a href="mailto:akd.consulting.kg@gmail.com" className="site-footer__link">
                  akd.consulting.kg@gmail.com
                </a>
              </p>
            </div>
          </div>
          <p className="site-footer__copyright">@dinara.pro — все права защищены.</p>
        </div>
      </footer>
    </QuizCompletionProvider>
  );
}
