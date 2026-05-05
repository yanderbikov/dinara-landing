import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__content">
          <h1 id="hero-title" className="hero__title">
            От перегруза и расфокуса — к стабильному росту
          </h1>
          <p className="hero__lead">
            Поймёте, что делать, и начнёте делать это регулярно — без срывов и
            откатов
          </p>
          <ul className="hero__facts" aria-label="Опыт">
            <li className="hero__fact">
              <span className="hero__fact-icon" aria-hidden>
                <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M16.667 5L7.5 14.167 3.333 10"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>15+ лет в бизнесе и управлении</span>
            </li>
            <li className="hero__fact">
              <span className="hero__fact-icon" aria-hidden>
                <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M16.667 5L7.5 14.167 3.333 10"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>3000+ часов работы с клиентами</span>
            </li>
            <li className="hero__fact">
              <span className="hero__fact-icon" aria-hidden>
                <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M16.667 5L7.5 14.167 3.333 10"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Международная сертификация ICU</span>
            </li>
          </ul>
          <a className="hero__cta" href="#quiz">
            Записаться на диагностическую сессию
          </a>
        </div>
        <div className="hero__visual">
          <div className="hero__frame">
            <img
              src="https://storage.yandexcloud.net/dinara.pro/landing/sit.jpg"
              alt="Динара"
              className="hero__photo"
              width={560}
              height={560}
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
