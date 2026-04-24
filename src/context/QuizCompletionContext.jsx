import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { QUESTIONS } from '../data/quizQuestions.js';

const STORAGE_KEY = 'dinara_quiz_completed_answers_v1';

function readStoredAnswers() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length !== QUESTIONS.length) {
      return null;
    }
    if (
      !parsed.every(
        (x, i) =>
          typeof x === 'number' &&
          Number.isInteger(x) &&
          x >= 0 &&
          x < QUESTIONS[i].options.length
      )
    ) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

const QuizCompletionContext = createContext(null);

export function QuizCompletionProvider({ children }) {
  const [completedAnswers, setCompletedAnswersState] = useState(() =>
    readStoredAnswers()
  );

  const setCompletedAnswers = useCallback((answers) => {
    setCompletedAnswersState(answers);
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    } catch {
      /* ignore quota / private mode */
    }
  }, []);

  const clearCompletedAnswers = useCallback(() => {
    setCompletedAnswersState(null);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(
    () => ({
      completedAnswers,
      setCompletedAnswers,
      clearCompletedAnswers,
    }),
    [completedAnswers, setCompletedAnswers, clearCompletedAnswers]
  );

  return (
    <QuizCompletionContext.Provider value={value}>
      {children}
    </QuizCompletionContext.Provider>
  );
}

export function useQuizCompletion() {
  const ctx = useContext(QuizCompletionContext);
  if (!ctx) {
    throw new Error('useQuizCompletion must be used within QuizCompletionProvider');
  }
  return ctx;
}
