import { useState } from 'react';
import SiteFooter from '../components/SiteFooter.jsx';
import { TELEGRAM_CONSULT_USERNAME } from '../utils/telegramConsultLink.js';
import './FoundationCoursePage.css';

const SCREEN_IMAGE =
  'https://storage.yandexcloud.net/dinara.pro/landing/sit.jpg';

const screens = [
  {
    title: 'Фундамент личности',
    subtitle: '4-месячная программа, где вы собираете:',
    checklist: ['фокус', 'дисциплину', 'внутреннюю опору', 'устойчивость'],
    goal: 'Цель — двигаться к своим задачам спокойно, системно и без откатов.',
    isCta: true,
    ctaLabel: 'записаться',
  },
  {
    title: 'Как устроена программа',
    subtitle:
      '4 месяца — 4 опоры. Каждый месяц закрывает одну ключевую зону: ясность, действие, уверенность и выдержку.',
  },
  {
    title: 'Что внутри',
    subtitle:
      'Видеоуроки, живые эфиры, практики, шаблоны, разборы и доступ к материалам на 1 год. Не просто теория, а система для ежедневных действий.',
  },
  {
    title: 'Результат',
    subtitle:
      'Больше ясности, устойчивости и внутренней собранности. Меньше хаоса, сомнений, откатов и движения через напряжение.',
  },
  {
    title: 'Хотите понять, подходит ли вам программа?',
    subtitle:
      'Запишитесь на диагностику. За 20-30 минут разберем ваш запрос и точку торможения.',
    isCta: true,
  },
];

const months = [
  {
    number: 1,
    title: 'Фокус и энергия',
    subtitle: 'Понимаете, куда уходит внимание, и выбираете главную цель.',
    icon: 'target',
    color: '#cf9a63',
    bgColor: '#f8efe7',
    details: {
      learn: [
        'Убираем утечки внимания и энергии.',
        'Фиксируем главную цель и стратегию на 1-12 месяцев.',
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
    color: '#cc9760',
    bgColor: '#f7eee5',
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
    color: '#c7925b',
    bgColor: '#f8efe8',
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
      'Учитесь держать курс в давлении, стрессе и неопределенности.',
    icon: 'spark',
    color: '#c28c56',
    bgColor: '#f8efe5',
    details: {
      learn: [
        'Разделяем роли и управляем нагрузкой без хаоса.',
        'Тренируем устойчивость к критике и стрессу.',
        'Внедряем управление эмоциями как навык.',
      ],
      result:
        'В конце месяца — эмоциональная стабильность и выдержка в неопределенности.',
    },
  },
];

const diagnosticsHref = `https://t.me/${TELEGRAM_CONSULT_USERNAME}?text=${encodeURIComponent('Здравствуйте, Динара! Хочу записаться на диагностику по программе "Фундамент личности".')}`;
const diagnosticsLabel = 'записаться на диагностику';

function MonthIcon({ type, color }) {
  if (type === 'trend') {
    return (
      <svg viewBox="0 0 24 24" className="month-card__icon-svg" aria-hidden>
        <path
          d="M4.5 15.5L10 10l3.5 3.5 6-6"
          fill="none"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 7.5h3.5V11"
          fill="none"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === 'shield') {
    return (
      <svg viewBox="0 0 24 24" className="month-card__icon-svg" aria-hidden>
        <path
          d="M12 3.8l7 2.7v5.1c0 4.6-3.1 7.6-7 8.8-3.9-1.2-7-4.2-7-8.8V6.5L12 3.8z"
          fill="none"
          stroke={color}
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === 'spark') {
    return (
      <svg viewBox="0 0 24 24" className="month-card__icon-svg" aria-hidden>
        <path
          d="M12 3.5l1.8 4.8 4.7 1.7-4.7 1.7L12 16.5l-1.8-4.8-4.7-1.7 4.7-1.7L12 3.5z"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 3.8l.8 2.1 2 .8-2 .8-.8 2.1-.8-2.1-2-.8 2-.8.8-2.1z"
          fill="none"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="month-card__icon-svg" aria-hidden>
      <circle
        cx="12"
        cy="12"
        r="7.2"
        fill="none"
        stroke={color}
        strokeWidth="2.1"
      />
      <circle
        cx="12"
        cy="12"
        r="3.9"
        fill="none"
        stroke={color}
        strokeWidth="2.1"
      />
      <circle cx="12" cy="12" r="1.4" fill={color} />
    </svg>
  );
}

export default function FoundationCoursePage() {
  const [expandedMonth, setExpandedMonth] = useState(null);

  return (
    <>
      <main className="course-page">
        {screens.slice(0, 2).map((screen, index) => (
          <section
            key={screen.title}
            className={`course-screen ${index % 2 === 1 ? 'course-screen--reverse' : ''}`}
          >
            <div className="course-screen__inner">
              <div className="course-screen__content">
                <h2 className="course-screen__title">{screen.title}</h2>
                <p className="course-screen__subtitle">{screen.subtitle}</p>
                {screen.checklist && (
                  <ul className="course-screen__checks" aria-label="Что включает программа">
                    {screen.checklist.map((item) => (
                      <li key={item} className="course-screen__check-item">
                        <span className="course-screen__check-icon" aria-hidden>
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {screen.goal && <p className="course-screen__goal">{screen.goal}</p>}
                {screen.isCta && (
                  <a
                    className="course-screen__button"
                    href={diagnosticsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {screen.ctaLabel || diagnosticsLabel}
                  </a>
                )}
              </div>
              <div className="course-screen__media">
                <img
                  src={SCREEN_IMAGE}
                  alt="Динара"
                  width={560}
                  height={560}
                  decoding="async"
                  className="course-screen__photo"
                />
              </div>
            </div>
          </section>
        ))}

        <section className="course-months" aria-labelledby="course-months-title">
          <div className="course-months__inner">
            <h2 id="course-months-title" className="course-months__title">
              Программа по месяцам
            </h2>
            <div className="course-months__grid">
              {months.map((month) => (
                <article key={month.number} className="month-card" style={{ backgroundColor: month.bgColor }}>
                  <div className="month-card__head">
                    <div
                      className="month-card__number"
                      style={{ backgroundColor: month.color }}
                    >
                      {month.number}
                    </div>
                    <div className="month-card__icon-wrap">
                      <MonthIcon type={month.icon} color={month.color} />
                    </div>
                  </div>
                  <h3 className="month-card__title">{month.title}</h3>
                  <p className="month-card__subtitle">{month.subtitle}</p>
                  <button
                    type="button"
                    className="month-card__more"
                    aria-expanded={expandedMonth === month.number}
                    aria-controls={`month-details-${month.number}`}
                    onClick={() =>
                      setExpandedMonth((prev) => (prev === month.number ? null : month.number))
                    }
                  >
                    подробнее
                    <span
                      className={`month-card__arrow ${expandedMonth === month.number ? 'month-card__arrow--open' : ''}`}
                      aria-hidden
                    >
                      ↓
                    </span>
                  </button>
                  {expandedMonth === month.number && (
                    <div id={`month-details-${month.number}`} className="month-card__details">
                      <p className="month-card__details-title">Коротко о модуле:</p>
                      <ul className="month-card__details-list">
                        {month.details.learn.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <p className="month-card__details-result">{month.details.result}</p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {screens.slice(2).map((screen, index) => (
          <section
            key={screen.title}
            className={`course-screen ${index % 2 === 0 ? 'course-screen--reverse' : ''}`}
          >
            <div className="course-screen__inner">
              <div className="course-screen__content">
                <h2 className="course-screen__title">{screen.title}</h2>
                <p className="course-screen__subtitle">{screen.subtitle}</p>
                {screen.isCta && (
                  <a
                    className="course-screen__button"
                    href={diagnosticsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {diagnosticsLabel}
                  </a>
                )}
              </div>
              <div className="course-screen__media">
                <img
                  src={SCREEN_IMAGE}
                  alt="Динара"
                  width={560}
                  height={560}
                  decoding="async"
                  className="course-screen__photo"
                />
              </div>
            </div>
          </section>
        ))}
      </main>
      <SiteFooter />
    </>
  );
}
