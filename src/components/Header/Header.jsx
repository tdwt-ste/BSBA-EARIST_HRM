import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import cbaLogo from '../../assets/images/logos/cba-logo.png';
import scienceTechLogo from '../../assets/images/logos/science-tech-logo.png';
import './Header.css';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About EARIST', path: '/about-earist' },
  {
    label: 'BSBA-HRM',
    children: [
      { label: 'About BSBA-HRM', path: '/about-hrm' },
      { label: 'Curriculum', path: '/curriculum' },
      { label: 'Learning Outcomes', path: '/learning-outcomes' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Study & Learning Resources', path: '/resources' },
      { label: 'Skills & Competencies', path: '/skills' },
      { label: 'Career Opportunities', path: '/careers' },
      { label: 'Job & Internship', path: '/jobs' },
    ],
  },
  {
    label: 'Campus Life',
    children: [
      { label: 'Activities & Achievements', path: '/activities' },
      { label: 'Social Media Pages', path: '/social-media' },
    ],
  },
  {
    label: 'Connect',
    children: [
      { label: 'Contact Information', path: '/contact' },
      { label: 'Feedback & Suggestions', path: '/feedback' },
      { label: 'References', path: '/references' },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const location = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} ref={headerRef}>
      {/* Top bar */}
      <div className="header-topbar">
        <div className="container topbar-inner">
          <span>Eulogio "Amang" Rodriguez Institute of Science and Technology</span>
          <span>BSBA-HRM | College of Business and Public Administration</span>
        </div>
      </div>

      {/* Main header */}
      <div className="header-main">
        <div className="container header-inner">
          {/* Logo */}
          <Link to="/" className="header-logo" aria-label="HRM One-Click Hub Home">
            <img src={cbaLogo} alt="CBA-FARIS Human Resource Development Management Society seal" className="logo-earist" />
            <div className="logo-text">
              <span className="logo-title">HRM One-Click Information Hub</span>
              <span className="logo-sub">BSBA-HRM · EARIST Manila</span>
            </div>
            <img src={scienceTechLogo} alt="Eulogio Amang Rodriguez Institute of Science and Technology seal" className="logo-hrms" />
          </Link>

          {/* Desktop nav */}
          <nav className="header-nav" aria-label="Main navigation">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className={`nav-item${item.children ? ' has-dropdown' : ''}`}
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.children ? (
                    <>
                      <button
                        className={`nav-link nav-btn${openDropdown === item.label ? ' active' : ''}`}
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        aria-haspopup="true"
                        aria-expanded={openDropdown === item.label}
                      >
                        {item.label}
                        <ChevronDown size={14} className={`chevron${openDropdown === item.label ? ' open' : ''}`} />
                      </button>
                      <ul className={`dropdown${openDropdown === item.label ? ' visible' : ''}`} role="menu">
                        {item.children.map((child) => (
                          <li key={child.path} role="none">
                            <NavLink
                              to={child.path}
                              className={({ isActive }) => `dropdown-link${isActive ? ' active' : ''}`}
                              role="menuitem"
                            >
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                      end={item.path === '/'}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        <ul className="mobile-nav-list">
          {navItems.map((item) => (
            <li key={item.label} className="mobile-nav-item">
              {item.children ? (
                <>
                  <button
                    className={`mobile-nav-link mobile-dropdown-toggle${mobileOpenDropdown === item.label ? ' open' : ''}`}
                    onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.label ? null : item.label)}
                    aria-expanded={mobileOpenDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown size={16} className={`chevron${mobileOpenDropdown === item.label ? ' open' : ''}`} />
                  </button>
                  {mobileOpenDropdown === item.label && (
                    <ul className="mobile-dropdown">
                      {item.children.map((child) => (
                        <li key={child.path}>
                          <NavLink
                            to={child.path}
                            className={({ isActive }) => `mobile-dropdown-link${isActive ? ' active' : ''}`}
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}
                  end={item.path === '/'}
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
