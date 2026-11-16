import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import cbaLogo from '../../assets/images/logos/cba-logo.png';
import scienceTechLogo from '../../assets/images/logos/science-tech-logo.png';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Yellow accent band */}
      <div className="footer-band" />

      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={cbaLogo} alt="CBA-FARIS Human Resource Development Management Society seal" className="footer-seal-img" />
              <img src={scienceTechLogo} alt="Eulogio Amang Rodriguez Institute of Science and Technology seal" className="footer-hrms-img" />
              <div>
                <div className="footer-logo-title">HRM One-Click Hub</div>
                <div className="footer-logo-sub">EARIST Manila</div>
              </div>
            </div>
            <p className="footer-desc">
              An All-in-One Digital Platform for BSBA-HRM Students of Eulogio "Amang" Rodriguez Institute of Science and Technology, Manila.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/share/1HwJP62XwE/" target="_blank" rel="noopener noreferrer" aria-label="EARIST Official Facebook" className="social-btn">
                <ExternalLink size={16} />
              </a>
              <a href="https://www.facebook.com/share/1bmoKnGEdZ/" target="_blank" rel="noopener noreferrer" aria-label="CBPA Facebook" className="social-btn">
                <ExternalLink size={16} />
              </a>
              <a href="https://www.facebook.com/share/19ndKYN539/" target="_blank" rel="noopener noreferrer" aria-label="HRMS Facebook" className="social-btn">
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-earist">About EARIST</Link></li>
              <li><Link to="/about-hrm">About BSBA-HRM</Link></li>
              <li><Link to="/curriculum">Curriculum</Link></li>
              <li><Link to="/learning-outcomes">Learning Outcomes</Link></li>
              <li><Link to="/resources">Learning Resources</Link></li>
              <li><Link to="/skills">Skills & Competencies</Link></li>
              <li><Link to="/careers">Career Opportunities</Link></li>
            </ul>
          </div>

          {/* More links */}
          <div className="footer-links">
            <h4 className="footer-heading">More</h4>
            <ul>
              <li><Link to="/jobs">Job & Internship</Link></li>
              <li><Link to="/activities">Activities & Achievements</Link></li>
              <li><Link to="/social-media">Social Media Pages</Link></li>
              <li><Link to="/contact">Contact Information</Link></li>
              <li><Link to="/feedback">Feedback & Suggestions</Link></li>
              <li><Link to="/references">References</Link></li>
              <li>
                <a href="https://earist.edu.ph" target="_blank" rel="noopener noreferrer" className="ext-link">
                  EARIST Official Website <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4 className="footer-heading">Contact Us</h4>
            <ul>
              <li>
                <MapPin size={15} />
                <span>Nagtahan St., Sampaloc, Manila, 1008 Metro Manila</span>
              </li>
              <li>
                <Phone size={15} />
                <span>(02) 8243-9437</span>
              </li>
              <li>
                <Mail size={15} />
                <a href="mailto:earist.cbpa.sg@gmail.com">earist.cbpa.sg@gmail.com</a>
              </li>
              <li>
                <Mail size={15} />
                <a href="mailto:hrsearist@gmail.com">hrsearist@gmail.com</a>
              </li>
              <li>
                <Clock size={15} />
                <span>Mon–Fri: 8:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} HRM One-Click Information Hub · EARIST Manila. All rights reserved.</p>
          <p className="footer-cbpa">Bachelor of Science in Business Administration – Major in HRM | College of Business and Public Administration</p>
        </div>
      </div>
    </footer>
  );
}
