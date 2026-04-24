import { useCallback, useEffect, useState } from 'react';
import { useQuizCompletion } from '../context/QuizCompletionContext.jsx';
import { QUESTIONS } from '../data/quizQuestions.js';
import { buildTelegramConsultUrl } from '../utils/telegramConsultLink.js';
import './QuizSection.css';

export default function QuizSection() {
  const { setCompletedAnswers, clearCompletedAnswers } = useQuizCompletion();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(() => QUESTIONS.map(() => null));
  const finished = step >= QUESTIONS.length;

  useEffect(() => {
    if (finished && answers.every((a) => a !== null)) {
      setCompletedAnswers(answers);
    }
  }, [finished, answers, setCompletedAnswers]);

  const selectOption = useCallback((optionIndex) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = optionIndex;
      return next;
    });
    setStep((s) =>
      s === QUESTIONS.length - 1 ? QUESTIONS.length : s + 1
    );
  }, [step]);

  const restart = useCallback(() => {
    clearCompletedAnswers();
    setStep(0);
    setAnswers(QUESTIONS.map(() => null));
  }, [clearCompletedAnswers]);

  const telegramConsultHref =
    finished && answers.every((a) => a !== null)
      ? buildTelegramConsultUrl(answers)
      : '#quiz';

  return (
    <section
      id="quiz"
      className="quiz"
      aria-labelledby={finished ? 'final-title' : 'quiz-title'}
    >
      <div className="quiz__inner">
        {!finished ? (
          <>
            <header className="quiz__header">
              <h2 id="quiz-title" className="quiz__title">
                Пройди опрос и получи первую сессию бесплатно
              </h2>
            </header>

            <div className="quiz__progress" aria-hidden>
              {QUESTIONS.map((_, i) => (
                <span
                  key={i}
                  className={
                    'quiz__dot' +
                    (i < step ? ' quiz__dot--done' : '') +
                    (i === step ? ' quiz__dot--active' : '')
                  }
                />
              ))}
            </div>

            <div className="quiz__card" role="group" aria-labelledby="q-label">
              <p id="q-label" className="quiz__q-index">
                Вопрос {step + 1} из {QUESTIONS.length}
              </p>
              <h3 className="quiz__q-title">{QUESTIONS[step].title}</h3>
              <ul className="quiz__options">
                {QUESTIONS[step].options.map((label, i) => {
                  const selected = answers[step] === i;
                  return (
                    <li key={label}>
                      <button
                        type="button"
                        className={
                          'quiz__option' + (selected ? ' quiz__option--active' : '')
                        }
                        onClick={() => selectOption(i)}
                        aria-pressed={selected}
                      >
                        {label}
                      </button>
                    </li>
                  );
                })}
              </ul>
              {step > 0 && (
                <div className="quiz__actions">
                  <button
                    type="button"
                    className="quiz__back"
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                  >
                    Назад
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="quiz__final">
            <div className="quiz__final-icon" aria-hidden="true">
              <svg
                className="quiz__final-check"
                viewBox="0 0 72 72"
                width="72"
                height="72"
              >
                <circle className="quiz__final-check-ring" cx="36" cy="36" r="36" />
                <path
                  className="quiz__final-check-mark"
                  d="M22 37.5 L32 47.5 L50 26"
                  fill="none"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 id="final-title" className="quiz__final-title">
              Поздравляем — вам доступна бесплатная диагностическая сессия
            </h2>
            <p className="quiz__final-text">
              Динара разберёт ваши ответы, определит главную точку торможения и
              подскажет первый шаг к стабильному росту.
            </p>
            <div className="quiz__final-actions">
              <a
                className="quiz__final-cta"
                href={telegramConsultHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Забрать бесплатную сессию
              </a>
              <button type="button" className="quiz__again" onClick={restart}>
                Пройти квиз заново
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
