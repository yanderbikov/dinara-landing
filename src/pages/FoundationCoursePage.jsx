import { useState } from 'react';
import QuizSection from '../components/QuizSection.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import { QuizCompletionProvider } from '../context/QuizCompletionContext.jsx';
import './FoundationCoursePage.css';

const HERO_IMAGE =
  'https://storage.yandexcloud.net/dinara.pro/landing/sit.jpg';

const months = [
  {
    number: 1,
    title: 'Фокус и энергия',
    subtitle: 'Понимаете, куда уходит внимание, и выбираете главную цель.',
    icon: 'target',
    details: {
      learn: [
        'Убираем утечки внимания и энергии.',
        'Фиксируем главную цель и стратегию на 1–12 месяцев.',
        'Собираем рабочий ритм дня и ресурсное состояние.',
      ],
      result:
        'В конце месяца — ясный вектор, приоритеты и ощущение собранности без распыления.',
    },
  },
  {
    number: 2,
    title: 'Дисциплина и рост',
    subtitle: 'Учитесь действовать не по настроению, а по понятному алгоритму.',
    icon: 'trend',
    details: {
      learn: [
        'Разбираем сценарий «знаю, но не делаю».',
        'Внедряем комфортную дисциплину и трекинг прогресса.',
        'Снижаем прокрастинацию и эмоциональные качели.',
      ],
      result:
        'В конце месяца — стабильные действия по алгоритму и рост без откатов.',
    },
  },
  {
    number: 3,
    title: 'Смелость и опора',
    subtitle:
      'Работаете со страхами, сомнениями и зависимостью от чужого мнения.',
    icon: 'shield',
    details: {
      learn: [
        'Работаем со страхом, тревогой и сомнениями.',
        'Укрепляем внутреннюю опору и личные границы.',
        'Тренируем проявленность и уверенную позицию.',
      ],
      result:
        'В конце месяца — больше уверенности, меньше зависимости от внешней оценки.',
    },
  },
  {
    number: 4,
    title: 'Выдержка и устойчивость',
    subtitle:
      'Учитесь держать курс в давлении, стрессе и неопределённости.',
    icon: 'spark',
    details: {
      learn: [
        'Разделяем роли и управляем нагрузкой без хаоса.',
        'Тренируем устойчивость к критике и стрессу.',
        'Внедряем управление эмоциями как навык.',
      ],
      result:
        'В конце месяца — эмоциональная стабильность и выдержка в неопределённости.',
    },
  },
];

const includes = [
  { icon: 'video', text: 'Видеоуроки с чёткой структурой' },
  { icon: 'live', text: 'Живые эфиры и разборы' },
  { icon: 'practice', text: 'Практики и шаблоны на каждый день' },
  { icon: 'access', text: 'Доступ к материалам на 1 год' },
];

const results = [
  'Больше ясности и понимания себя',
  'Устойчивость без напряжения',
  'Внутренняя собранность',
  'Меньше хаоса и сомнений',
  'Движение к целям без откатов',
  'Спокойная уверенность в решениях',
];

function MonthIcon({ type }) {
  const cls = 'month-card__icon-svg';
  if (type === 'trend') {
    return (
      <svg viewBox="0 0 24 24" className={cls} aria-hidden>
        <path
          d="M4.5 15.5L10 10l3.5 3.5 6-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 7.5h3.5V11"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === 'shield') {
    return (
      <svg viewBox="0 0 24 24" className={cls} aria-hidden>
        <path
          d="M12 3.8l7 2.7v5.1c0 4.6-3.1 7.6-7 8.8-3.9-1.2-7-4.2-7-8.8V6.5L12 3.8z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === 'spark') {
    return (
      <svg viewBox="0 0 24 24" className={cls} aria-hidden>
        <path
          d="M12 3.5l1.8 4.8 4.7 1.7-4.7 1.7L12 16.5l-1.8-4.8-4.7-1.7 4.7-1.7L12 3.5z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={cls} aria-hidden>
      <circle cx="12" cy="12" r="7.2" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.9" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

function IncludeIcon({ type }) {
  const cls = 'includes__icon-svg';
  if (type === 'video') {
    return (
      <svg viewBox="0 0 24 24" className={cls} aria-hidden>
        <rect x="3" y="5" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M17 9.5l4-2v9l-4-2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === 'live') {
    return (
      <svg viewBox="0 0 24 24" className={cls} aria-hidden>
        <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16.24 7.76a6 6 0 010 8.49M7.76 16.24a6 6 0 010-8.49" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M19.07 4.93a10 10 0 010 14.14M4.93 19.07a10 10 0 010-14.14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === 'practice') {
    return (
      <svg viewBox="0 0 24 24" className={cls} aria-hidden>
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="9" y="3" width="6" height="4" rx="1" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={cls} aria-hidden>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v5l3 3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FoundationCoursePage() {
  const [expandedMonth, setExpandedMonth] = useState(null);

  return (
    <QuizCompletionProvider>
      <main className="fp">
        {/* Hero */}
        <section className="fp-hero">
          <div className="fp-hero__inner">
            <div className="fp-hero__content">
              <span className="fp-hero__tag">4-месячная программа</span>
              <h1 className="fp-hero__title">
                Фундамент<br />личности
              </h1>
              <p className="fp-hero__subtitle">
                Соберите фокус, дисциплину, внутреннюю опору и устойчивость — чтобы двигаться к своим целям спокойно, системно и без откатов.
              </p>
              <ul className="fp-hero__checks">
                <li className="fp-hero__check-item">
                  <span className="fp-hero__check-icon" aria-hidden>✓</span>
                  <span>фокус</span>
                </li>
                <li className="fp-hero__check-item">
                  <span className="fp-hero__check-icon" aria-hidden>✓</span>
                  <span>дисциплина</span>
                </li>
                <li className="fp-hero__check-item">
                  <span className="fp-hero__check-icon" aria-hidden>✓</span>
                  <span>внутренняя опора</span>
                </li>
                <li className="fp-hero__check-item">
                  <span className="fp-hero__check-icon" aria-hidden>✓</span>
                  <span>устойчивость</span>
                </li>
              </ul>
              <a className="fp-btn fp-btn--primary" href="#quiz">
                Записаться
              </a>
            </div>
            <div className="fp-hero__media">
              <div className="fp-hero__photo-frame">
                <img
                  src={HERO_IMAGE}
                  alt="Динара"
                  width={560}
                  height={560}
                  decoding="async"
                  className="fp-hero__photo"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About program */}
        <section className="fp-about">
          <div className="fp-about__inner">
            <h2 className="fp-section-title">Как устроена программа</h2>
            <p className="fp-about__lead">
              4 месяца — 4 опоры. Каждый месяц закрывает одну ключевую зону: ясность, действие, уверенность и выдержку.
            </p>
            <p className="fp-about__text">
              Не просто теория — а система для ежедневных действий. Вы получаете видеоуроки, живые эфиры, практики, шаблоны, разборы и доступ к материалам на 1 год.
            </p>
          </div>
        </section>

        {/* Months */}
        <section className="fp-months" aria-labelledby="fp-months-heading">
          <div className="fp-months__inner">
            <h2 id="fp-months-heading" className="fp-section-title">
              Программа по месяцам
            </h2>
            <div className="fp-months__grid">
              {months.map((month) => (
                <article
                  key={month.number}
                  className={`fp-month ${expandedMonth === month.number ? 'fp-month--expanded' : ''}`}
                >
                  <div className="fp-month__header">
                    <div className="fp-month__num">{month.number}</div>
                    <div className="fp-month__icon">
                      <MonthIcon type={month.icon} />
                    </div>
                  </div>
                  <h3 className="fp-month__title">{month.title}</h3>
                  <p className="fp-month__subtitle">{month.subtitle}</p>
                  <button
                    type="button"
                    className="fp-month__toggle"
                    aria-expanded={expandedMonth === month.number}
                    aria-controls={`fp-month-details-${month.number}`}
                    onClick={() =>
                      setExpandedMonth((prev) =>
                        prev === month.number ? null : month.number
                      )
                    }
                  >
                    {expandedMonth === month.number ? 'свернуть' : 'подробнее'}
                    <span
                      className={`fp-month__chevron ${expandedMonth === month.number ? 'fp-month__chevron--open' : ''}`}
                      aria-hidden
                    />
                  </button>
                  {expandedMonth === month.number && (
                    <div
                      id={`fp-month-details-${month.number}`}
                      className="fp-month__details"
                    >
                      <p className="fp-month__details-heading">Коротко о модуле:</p>
                      <ul className="fp-month__details-list">
                        {month.details.learn.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <p className="fp-month__details-result">
                        {month.details.result}
                      </p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Includes */}
        <section className="fp-includes">
          <div className="fp-includes__inner">
            <h2 className="fp-section-title">Что внутри</h2>
            <div className="fp-includes__grid">
              {includes.map((item) => (
                <div key={item.icon} className="fp-includes__card">
                  <div className="fp-includes__icon-wrap">
                    <IncludeIcon type={item.icon} />
                  </div>
                  <p className="fp-includes__text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="fp-results">
          <div className="fp-results__inner">
            <h2 className="fp-section-title fp-section-title--light">Результат</h2>
            <p className="fp-results__lead">
              Больше ясности, устойчивости и внутренней собранности. Меньше хаоса, сомнений и движения через напряжение.
            </p>
            <ul className="fp-results__list">
              {results.map((item) => (
                <li key={item} className="fp-results__item">
                  <span className="fp-results__check" aria-hidden>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA → quiz */}
        <section className="fp-cta">
          <div className="fp-cta__inner">
            <h2 className="fp-section-title">
              Хотите понять, подходит ли вам программа?
            </h2>
            <p className="fp-cta__text">
              Пройдите короткий опрос — и получите бесплатную диагностическую сессию с Динарой.
            </p>
            <a className="fp-btn fp-btn--primary fp-btn--lg" href="#quiz">
              Пройти опрос
            </a>
          </div>
        </section>

        {/* Quiz */}
        <QuizSection />
      </main>
      <SiteFooter />
    </QuizCompletionProvider>
  );
}
