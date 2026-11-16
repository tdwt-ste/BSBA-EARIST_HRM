import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';
import './NotFound.css';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About EARIST', path: '/about-earist' },
  { label: 'About BSBA-HRM', path: '/about-hrm' },
  { label: 'Curriculum', path: '/curriculum' },
  { label: 'Career Opportunities', path: '/careers' },
  { label: 'Contact', path: '/contact' },
];

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="nf-container">
        <div className="nf-code">404</div>
        <div className="nf-icon"><Search size={48} /></div>
        <h1 className="nf-title">Page Not Found</h1>
        <p className="nf-desc">
          The page you are looking for doesn't exist or may have been moved. Try navigating to one of the sections below.
        </p>
        <div className="nf-actions">
          <Link to="/" className="btn btn-primary">
            <Home size={16} /> Go to Homepage
          </Link>
          <button onClick={() => window.history.back()} className="btn btn-blue">
            <ArrowLeft size={16} /> Go Back
          </button>
        </div>
        <div className="nf-links">
          <p className="nf-links-label">Quick Navigation</p>
          <div className="nf-links-grid">
            {quickLinks.map((l) => (
              <Link key={l.path} to={l.path} className="nf-link">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
