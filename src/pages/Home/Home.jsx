import { Link } from 'react-router-dom';
import {
  BookOpen, Users, Briefcase, Award, MapPin, MessageSquare,
  ChevronRight, Star, Target, Lightbulb, Globe, Heart, Shield,
  GraduationCap, ArrowRight, ExternalLink
} from 'lucide-react';
import cbaLogo from '../../assets/images/logos/cba-logo.png';
import scienceTechLogo from '../../assets/images/logos/science-tech-logo.png';
import './Home.css';

const purposes = [
  { icon: <BookOpen size={28} />, title: 'Introduce the School and Program', desc: 'Introduce EARIST and the BSBA-HRM academic program to students, applicants, and the public.' },
  { icon: <Lightbulb size={28} />, title: 'HRM Knowledge', desc: 'Provide information about Human Resource Management — its principles, functions, and importance in organizations.' },
  { icon: <Star size={28} />, title: 'Showcase Knowledge and Skills', desc: 'Showcase the knowledge and skills developed by BSBA-HRM students throughout their academic journey.' },
  { icon: <Target size={28} />, title: 'Academic Activities', desc: 'Present academic activities, projects, and learning experiences of BSBA-HRM students.' },
  { icon: <Heart size={28} />, title: 'Importance of HRM', desc: 'Help students understand the importance of Human Resource Management in organizations and their future careers.' },
  { icon: <Globe size={28} />, title: 'Useful Reference', desc: 'Serve as a useful reference for individuals interested in pursuing the BSBA-HRM program at EARIST Manila.' },
];

const quickLinks = [
  { label: 'About the Program', path: '/about-hrm', icon: <GraduationCap size={22} />, color: '#123B70' },
  { label: 'Curriculum', path: '/curriculum', icon: <BookOpen size={22} />, color: '#08264A' },
  { label: 'Learning Resources', path: '/resources', icon: <Lightbulb size={22} />, color: '#123B70' },
  { label: 'Career Opportunities', path: '/careers', icon: <Briefcase size={22} />, color: '#08264A' },
  { label: 'Student Activities', path: '/activities', icon: <Award size={22} />, color: '#123B70' },
  { label: 'Contact Information', path: '/contact', icon: <MapPin size={22} />, color: '#08264A' },
];

const featured = [
  {
    badge: 'Program Highlight',
    title: 'BSBA-HRM Program',
    desc: 'The Bachelor of Science in Business Administration Major in Human Resource Management prepares students to understand HR functions including recruitment, training and development, employee relations, compensation, and performance management.',
    link: '/about-hrm',
    linkLabel: 'Explore the Program',
    color: 'var(--primary)',
  },
  {
    badge: 'Core Competencies',
    title: 'HRM Skills & Competencies',
    desc: 'From communication and leadership to problem-solving and technical proficiency, the BSBA-HRM program develops eight essential competencies that prepare students for the modern HR workplace.',
    link: '/skills',
    linkLabel: 'View Skills',
    color: '#1a5276',
  },
  {
    badge: 'Campus Life',
    title: 'Student Activities',
    desc: 'EARIST BSBA-HRM students actively engage in academic competitions, community outreach programs, seminars, and professional development activities that build character alongside classroom learning.',
    link: '/activities',
    linkLabel: 'See Activities',
    color: '#1a4971',
  },
];

export default function Home() {
  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero" aria-label="Welcome hero section">
        <div className="hero-bg">
          <div className="hero-overlay" />
          <div className="hero-pattern" />
        </div>
        <div className="container hero-content">
          <div className="hero-logos">
            <img src={cbaLogo} alt="CBA-FARIS Human Resource Development Management Society seal" className="hero-logo-img" />
            <img src={scienceTechLogo} alt="Eulogio Amang Rodriguez Institute of Science and Technology seal" className="hero-logo-img" />
          </div>
          <div className="hero-badge">
            <Shield size={14} />
            <span>HRM One-Click Information Hub</span>
          </div>
          <h1 className="hero-title">
            Welcome to the<br />
            <span className="hero-title-accent">BSBA-HRM!</span>
          </h1>
          <p className="hero-subtitle">
            Bachelor of Science in Business Administration – Major in Human Resource Management (BSBA-HRM)
          </p>
          <p className="hero-tagline">
            Eulogio "Amang" Rodriguez Institute of Science and Technology | Everything About BSBA-HRM in One Click
          </p>
          <div className="hero-actions">
            <Link to="/about-hrm" className="btn btn-primary hero-btn">
              Explore BSBA-HRM <ArrowRight size={16} />
            </Link>
            <Link to="/about-earist" className="btn btn-outline hero-btn">
              Learn About EARIST
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><span className="stat-num">14</span><span className="stat-label">Info Sections</span></div>
            <div className="hero-stat-divider" />
            <div className="hero-stat"><span className="stat-num">8</span><span className="stat-label">Career Paths</span></div>
            <div className="hero-stat-divider" />
            <div className="hero-stat"><span className="stat-num">4</span><span className="stat-label">Year Program</span></div>
          </div>
        </div>
      </section>

      {/* ===== WELCOME MESSAGE ===== */}
      <section className="welcome-section section-padding">
        <div className="container">
          <div className="welcome-grid">
            <div className="welcome-text">
              <div className="welcome-label">Welcome Message</div>
              <h2 className="section-title">Welcome to the BSBA-HRM!</h2>
              <p>
                Welcome to the Bachelor of Science in Business Administration Major in Human Resource Management (BSBA-HRM) at Eulogio "Amang" Rodriguez Institute of Science and Technology (EARIST).
              </p>
              <p>
                This website serves as a platform to showcase the program, introduce the institution, and provide useful information about Human Resource Management. It also includes the knowledge, skills, activities, and learning experiences of students throughout their academic journey.
              </p>
              <Link to="/about-hrm" className="btn btn-blue mt-btn">
                Learn More About BSBA-HRM <ChevronRight size={16} />
              </Link>
            </div>
            <div className="welcome-card-wrap">
              <div className="welcome-info-card">
                <div className="wic-header">
                  <GraduationCap size={32} />
                  <span>BSBA-HRM at EARIST</span>
                </div>
                <div className="wic-item"><span className="wic-label">Institution</span><span>Eulogio "Amang" Rodriguez Institute of Science and Technology</span></div>
                <div className="wic-item"><span className="wic-label">Program</span><span>BS Business Administration – Human Resource Management</span></div>
                <div className="wic-item"><span className="wic-label">College</span><span>College of Business and Public Administration (CBPA)</span></div>
                <div className="wic-item"><span className="wic-label">Location</span><span>Nagtahan St., Sampaloc, Manila</span></div>
                <div className="wic-item"><span className="wic-label">Duration</span><span>4 Years (8 Semesters)</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="intro-section bg-primary section-padding-sm">
        <div className="container text-center">
          <h2 className="section-title centered text-white" style={{ color: '#fff' }}>About This Platform</h2>
          <p style={{ color: 'rgba(255,255,255,0.88)', maxWidth: '800px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.8' }}>
            This portal provides an overview of EARIST and its BSBA-HRM program. It contains important information about the school's history, vision, mission, core values, and the different aspects of Human Resource Management.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '800px', margin: '1rem auto 0', fontSize: '0.95rem', lineHeight: '1.75' }}>
            It also serves as an online source of information for students, future applicants, and other individuals who want to learn more about the program.
          </p>
        </div>
      </section>

      {/* ===== PURPOSES ===== */}
      <section className="purposes-section section-padding bg-gray">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="section-title centered">Purpose of This Platform</h2>
            <p className="section-subtitle centered">
              The purpose of this platform is to present organized and accessible information about EARIST and the BSBA-HRM program.
            </p>
          </div>
          <div className="purposes-grid">
            {purposes.map((p, i) => (
              <div className="purpose-card" key={i}>
                <div className="purpose-icon">{p.icon}</div>
                <h3 className="purpose-title">{p.title}</h3>
                <p className="purpose-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUICK NAV ===== */}
      <section className="quick-nav-section section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title centered">Quick Navigation</h2>
            <p className="section-subtitle centered">Jump directly to the information you need</p>
          </div>
          <div className="quick-grid">
            {quickLinks.map((ql, i) => (
              <Link to={ql.path} key={i} className="quick-card">
                <div className="quick-icon" style={{ background: ql.color }}>{ql.icon}</div>
                <span className="quick-label">{ql.label}</span>
                <ChevronRight size={16} className="quick-arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED ===== */}
      <section className="featured-section section-padding bg-gray">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title centered">Featured Content</h2>
            <p className="section-subtitle centered">Explore key areas of the BSBA-HRM program</p>
          </div>
          <div className="featured-grid">
            {featured.map((f, i) => (
              <div className="featured-card" key={i}>
                <div className="featured-card-top" style={{ background: f.color }} />
                <div className="featured-card-body">
                  <span className="featured-badge">{f.badge}</span>
                  <h3 className="featured-title">{f.title}</h3>
                  <p className="featured-desc">{f.desc}</p>
                  <Link to={f.link} className="featured-link">{f.linkLabel} <ArrowRight size={15} /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div className="cta-text">
            <h2>Ready to Explore the Full Hub?</h2>
            <p>Access all 14 sections covering everything about the BSBA-HRM program at EARIST Manila.</p>
          </div>
          <div className="cta-actions">
            <Link to="/curriculum" className="btn btn-primary">View Curriculum <ArrowRight size={16} /></Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* ===== INFO STRIP ===== */}
      <section className="info-strip">
        <div className="container info-strip-inner">
          <div className="info-strip-item"><MapPin size={18} /><span>Nagtahan St., Sampaloc, Manila</span></div>
          <div className="info-strip-sep" />
          <div className="info-strip-item"><Users size={18} /><span>College of Business and Public Administration</span></div>
          <div className="info-strip-sep" />
          <div className="info-strip-item"><ExternalLink size={18} /><a href="https://earist.edu.ph" target="_blank" rel="noopener noreferrer">earist.edu.ph</a></div>
        </div>
      </section>
    </div>
  );
}
