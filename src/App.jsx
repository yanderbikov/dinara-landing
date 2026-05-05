import LandingPage from './pages/LandingPage.jsx';
import FoundationCoursePage from './pages/FoundationCoursePage.jsx';

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  if (path === '/foundation-course') {
    return <FoundationCoursePage />;
  }

  return <LandingPage />;
}
