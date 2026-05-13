import { QUESTIONS } from '../data/quizQuestions.js';

export const TELEGRAM_CONSULT_USERNAME = 'dinara_psy_coach';

/** Цифры без «+», формат wa.me */
export const WHATSAPP_CONSULT_PHONE = '6285190279190';

/**
 * @param {number[]} answers — индексы выбранных вариантов по порядку вопросов
 */
export function buildQuizTelegramMessage(answers) {
  const lines = [
    'Здравствуйте, Динара!',
    '',
    'Прошёл(а) квиз на сайте и хочу забрать бесплатную диагностическую сессию.',
    '',
    'Мои ответы:',
  ];

  QUESTIONS.forEach((q, i) => {
    const idx = answers[i];
    const choice = typeof idx === 'number' ? q.options[idx] : '—';
    lines.push(`${i + 1}. ${q.title} — ${choice}`);
  });

  return lines.join('\n');
}

/**
 * @param {number[]} answers
 * @returns {string}
 */
export function buildTelegramConsultUrl(answers) {
  const text = buildQuizTelegramMessage(answers);
  return `https://t.me/${TELEGRAM_CONSULT_USERNAME}?text=${encodeURIComponent(text)}`;
}

/**
 * @param {number[]} answers
 * @returns {string}
 */
export function buildWhatsAppConsultUrl(answers) {
  const text = buildQuizTelegramMessage(answers);
  return `https://wa.me/${WHATSAPP_CONSULT_PHONE}?text=${encodeURIComponent(text)}`;
}
