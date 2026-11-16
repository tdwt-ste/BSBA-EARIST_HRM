import { Link } from 'react-router-dom';
import { ExternalLink, Users, Globe } from 'lucide-react';
import './SocialMedia.css';

const pages = [
  {
    name: 'EARIST Official',
    handle: 'EARIST Official Facebook Page',
    url: 'https://www.facebook.com/share/1HwJP62XwE/',
    desc: 'The official Facebook page of Eulogio "Amang" Rodriguez Institute of Science and Technology. Follow for the latest university announcements, news, events, academic updates, and institutional achievements.',
    type: 'Official University Page',
    color: '#1877F2',
    icon: <ExternalLink size={28} />,
    tags: ['Announcements', 'Events', 'University News', 'Academic Updates'],
  },
  {
    name: 'EARIST CBPA',
    handle: 'College of Business and Public Administration',
    url: 'https://www.facebook.com/share/1bmoKnGEdZ/',
    desc: 'The Facebook page of the College of Business and Public Administration (CBPA) at EARIST Manila. Stay updated on college-specific events, program announcements, faculty highlights, and student news relevant to business and public administration students.',
    type: 'College Page',
    color: '#123B70',
    icon: <ExternalLink size={28} />,
    tags: ['CBPA Events', 'Business Programs', 'College News', 'Faculty Updates'],
  },
  {
    name: 'EARIST HRMS',
    handle: 'EARIST Human Resource Management Society',
    url: 'https://www.facebook.com/share/19ndKYN539/',
    desc: 'The official Facebook page of the EARIST Human Resource Management Society (HRMS) — the student organization for BSBA-HRM students. Follow for student activities, HR-related content, organizational updates, and community announcements.',
    type: 'Student Organization',
    color: '#F4C430',
    icon: <Users size={28} />,
    tags: ['Student Activities', 'HRM Society', 'Organization News', 'Student Events'],
  },
];

export default function SocialMedia() {
  return (
    <div className="social-media-page">
      <div className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span>Official Social Media Pages</span>
          </nav>
          <h1>Official Social Media Pages</h1>
          <p>Stay connected with EARIST and the BSBA-HRM community through official social media channels</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="section-title centered">Official EARIST Social Media Channels</h2>
            <p className="section-subtitle centered">
              Follow these verified official pages to stay informed about university announcements, program updates, and student activities.
            </p>
          </div>

          <div className="social-cards-grid">
            {pages.map((page, i) => (
              <div className="social-card" key={i}>
                <div className="sc-header" style={{ background: page.type === 'Student Organization' ? 'var(--primary)' : page.color }}>
                  <div className="sc-icon" style={{ background: 'rgba(255,255,255,0.15)' }}>
                    {page.icon}
                  </div>
                  <div>
                    <div className="sc-type">{page.type}</div>
                    <h3 className="sc-name">{page.name}</h3>
                  </div>
                </div>
                <div className="sc-body">
                  <div className="sc-handle">{page.handle}</div>
                  <p className="sc-desc">{page.desc}</p>
                  <div className="sc-tags">
                    {page.tags.map((tag, j) => (
                      <span className="sc-tag" key={j}>{tag}</span>
                    ))}
                  </div>
                  <a href={page.url} target="_blank" rel="noopener noreferrer" className="sc-btn">
                    <ExternalLink size={16} />
                    Visit Facebook Page
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="social-note">
            <Globe size={18} />
            <div>
              <strong>Social Media Reminder:</strong> These are the only official EARIST and BSBA-HRM social media pages listed on this platform. When seeking official information, always verify that you are on these official pages to avoid misinformation. For the most current updates, follow and bookmark all three pages.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
