import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ExternalLink, Building, Users } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span>Location &amp; Contact</span>
          </nav>
          <h1>Location &amp; Contact Information</h1>
          <p>Find and reach the BSBA-HRM program at EARIST Manila</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="contact-grid">

            {/* Left: Info cards */}
            <div className="contact-info">
              {/* Campus Address */}
              <div className="contact-card address-card">
                <div className="cc-icon-wrap"><MapPin size={24} /></div>
                <div>
                  <h3 className="cc-title">Campus Address</h3>
                  <p className="cc-main">Eulogio "Amang" Rodriguez Institute of Science and Technology (EARIST)</p>
                  <p className="cc-detail">Nagtahan St., Sampaloc, Manila, 1008 Metro Manila</p>
                  <a
                    href="https://www.google.com/maps/search/Eulogio+Amang+Rodriguez+Institute+Science+Technology+Nagtahan+Sampaloc+Manila"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cc-map-link"
                  >
                    <MapPin size={14} /> View on Google Maps <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Department */}
              <div className="contact-card dept-card">
                <div className="cc-icon-wrap dept-icon"><Building size={24} /></div>
                <div>
                  <h3 className="cc-title">Academic Department</h3>
                  <p className="cc-main">Bachelor of Science in Business Administration – Major in Human Resource Management (BSBA-HRM)</p>
                  <p className="cc-detail">College of Business and Public Administration (CBPA), EARIST Manila</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="contact-card hours-card">
                <div className="cc-icon-wrap hours-icon"><Clock size={24} /></div>
                <div>
                  <h3 className="cc-title">Office Hours</h3>
                  <div className="hours-list">
                    <div className="hours-item open">
                      <span className="hours-day">Monday – Friday</span>
                      <span className="hours-time">8:00 AM – 5:00 PM</span>
                    </div>
                    <div className="hours-item closed">
                      <span className="hours-day">Saturday</span>
                      <span className="hours-time closed-label">Closed</span>
                    </div>
                    <div className="hours-item closed">
                      <span className="hours-day">Sunday</span>
                      <span className="hours-time closed-label">Closed</span>
                    </div>
                    <div className="hours-holiday">
                      <span>⚠</span>
                      <span>Closed on official Philippine public holidays</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-card phone-card">
                <div className="cc-icon-wrap phone-icon"><Phone size={24} /></div>
                <div>
                  <h3 className="cc-title">Telephone</h3>
                  <a href="tel:+63282439437" className="cc-link-lg">(02) 8243-9437</a>
                  <p className="cc-detail">Available during office hours, Monday to Friday</p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-card email-card">
                <div className="cc-icon-wrap email-icon"><Mail size={24} /></div>
                <div>
                  <h3 className="cc-title">Official Email Addresses</h3>
                  <div className="email-list">
                    <div className="email-item">
                      <span className="email-label">CBPA Office:</span>
                      <a href="mailto:earist.cbpa.sg@gmail.com" className="email-addr">earist.cbpa.sg@gmail.com</a>
                    </div>
                    <div className="email-item">
                      <span className="email-label">HRS Office:</span>
                      <a href="mailto:hrsearist@gmail.com" className="email-addr">hrsearist@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Map + Quick contact */}
            <div className="contact-side">
              {/* Map embed placeholder */}
              <div className="map-container">
                <div className="map-header">
                  <MapPin size={18} />
                  <span>EARIST Campus Location</span>
                </div>
                <div className="map-embed-wrap">
                  <iframe
                    title="EARIST Manila Campus Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.0!2d120.9975!3d14.5995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca0ee2b0a04d%3A0x9b23b7e4ef71c2a0!2sEulogio%20%22Amang%22%20Rodriguez%20Institute%20of%20Science%20%26%20Technology!5e0!3m2!1sen!2sph!4v1699000000000!5m2!1sen!2sph"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href="https://www.google.com/maps/search/EARIST+Nagtahan+Sampaloc+Manila"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-btn"
                >
                  Open in Google Maps <ExternalLink size={14} />
                </a>
              </div>

              {/* Quick contact strip */}
              <div className="quick-contact-card">
                <h3 className="qcc-title">Get in Touch</h3>
                <p className="qcc-sub">For academic inquiries about the BSBA-HRM program, contact the CBPA office during office hours.</p>
                <div className="qcc-items">
                  <a href="tel:+63282439437" className="qcc-item">
                    <Phone size={18} />
                    <span>(02) 8243-9437</span>
                  </a>
                  <a href="mailto:earist.cbpa.sg@gmail.com" className="qcc-item">
                    <Mail size={18} />
                    <span>earist.cbpa.sg@gmail.com</span>
                  </a>
                  <a href="https://earist.edu.ph" target="_blank" rel="noopener noreferrer" className="qcc-item">
                    <ExternalLink size={18} />
                    <span>earist.edu.ph</span>
                  </a>
                </div>
                <Link to="/feedback" className="btn btn-blue" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                  Submit Feedback
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
