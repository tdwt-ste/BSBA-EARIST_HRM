import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';

import Home from './pages/Home/Home';
import AboutEARIST from './pages/AboutEARIST/AboutEARIST';
import AboutHRM from './pages/AboutHRM/AboutHRM';
import Curriculum from './pages/Curriculum/Curriculum';
import LearningOutcomes from './pages/LearningOutcomes/LearningOutcomes';
import Resources from './pages/Resources/Resources';
import Skills from './pages/Skills/Skills';
import Careers from './pages/Careers/Careers';
import Jobs from './pages/Jobs/Jobs';
import Activities from './pages/Activities/Activities';
import SocialMedia from './pages/SocialMedia/SocialMedia';
import Contact from './pages/Contact/Contact';
import Feedback from './pages/Feedback/Feedback';
import References from './pages/References/References';
import NotFound from './pages/NotFound/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-earist" element={<AboutEARIST />} />
          <Route path="/about-hrm" element={<AboutHRM />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/learning-outcomes" element={<LearningOutcomes />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/references" element={<References />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  );
}
