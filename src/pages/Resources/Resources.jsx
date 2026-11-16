import { Link } from 'react-router-dom';
import { Share2, Globe, BookOpen, Video, ExternalLink, Monitor, FileText } from 'lucide-react';
import './Resources.css';

const youtubeChannels = [
  {
    name: 'AIHR – Academy to Innovate HR',
    handle: '@aihracademytoinnovatehr',
    url: 'https://youtube.com/@aihracademytoinnovatehr?si=8i2Cy9Jb2Gl4INge',
    desc: 'Explains recruitment, employee engagement, HR analytics, talent management, and modern HR practices. A leading resource for data-driven and strategic HRM learning.',
  },
  {
    name: 'SHRM – Society for Human Resource Management',
    handle: '@SHRMofficial',
    url: 'https://www.youtube.com/@SHRMofficial',
    desc: 'Provides discussions about HR careers, employee relations, workplace policies, and professional HR practices. Official channel of the world\'s largest HR membership organization.',
  },
  {
    name: 'GreggU',
    handle: '@GreggU',
    url: 'https://www.youtube.com/@GreggU',
    desc: 'Offers short educational videos about business, management, human resources, and organizational behavior. Clear and concise explanations perfect for reviewing curriculum concepts.',
  },
];

const websites = [
  { name: 'SHRM', url: 'https://www.shrm.org/', purpose: 'HR management, employee relations, recruitment, and workplace policies.' },
  { name: 'AIHR', url: 'https://www.aihr.com', purpose: 'HR analytics, talent management, and professional HR skills.' },
  { name: 'CIPD', url: 'https://www.cipd.org/asia/about/', purpose: 'HR fundamentals, people management, and leadership.' },
  { name: 'DOLE e-Campus', url: 'https://lees.dole.gov.ph/', purpose: 'Philippine labor education, employment information, and labor-related learning.' },
  { name: 'SAGE Edge', url: 'https://edge.sagepub.com', purpose: 'HRM learning videos and supplementary educational materials.' },
];

const tutorials = [
  { subject: 'Human Resource Management', topics: 'Functions and responsibilities of HR managers' },
  { subject: 'Recruitment and Selection', topics: 'Job posting, screening, interviewing, and hiring' },
  { subject: 'Training and Development', topics: 'Employee training and performance improvement' },
  { subject: 'Compensation and Benefits', topics: 'Salary, incentives, and employee benefits' },
  { subject: 'Labor Relations', topics: 'Employee rights and employer responsibilities' },
  { subject: 'Organizational Behavior', topics: 'Motivation, teamwork, and workplace behavior' },
  { subject: 'Performance Management', topics: 'Employee evaluation and performance appraisal' },
  { subject: 'HR Analytics', topics: 'Using data to understand employee performance' },
];

const freeMaterials = [
  { name: 'CIPD – Free HR Courses', url: 'https://www.cipd.org/asia/', desc: 'Offers introductory courses about HR fundamentals, people management, and inclusive leadership.' },
  { name: 'DOLE e-Campus', url: 'https://lees.dole.gov.ph/?utm', desc: 'Provides Philippine labor education resources and employment-related learning materials.' },
  { name: 'UP Diliman HRDO', url: 'https://training.hrdo.upd.edu.ph/lndmaterials?', desc: 'Provides HR-related documents, guidebooks, competency materials, and learning resources.' },
  { name: 'Class Central', url: 'https://www.classcentral.com/subject/human-resources?', desc: 'Helps students discover online HR courses, including free learning opportunities.' },
  { name: 'Sikhami – NPTEL HRM Course', url: 'https://sikhami.com/course/EVpF2CEEDydGwfYUz7L2', desc: 'Provides access to a free collection of 22 video lectures covering recruitment, performance evaluation, training, and employee welfare.' },
];

const helpfulVideos = [
  { topic: 'Introduction to Human Resource Management', learn: 'Basic meaning, importance, and functions of HRM' },
  { topic: 'Recruitment and Selection Process', learn: 'How companies find and hire qualified employees' },
  { topic: 'Training and Development', learn: 'How organizations improve employee skills' },
  { topic: 'Employee Motivation and Engagement', learn: 'How to encourage employees to perform better' },
  { topic: 'Performance Appraisal', learn: 'How managers evaluate employee performance' },
  { topic: 'Compensation and Benefits', learn: 'How salaries, incentives, and benefits work' },
  { topic: 'Leadership and Management Skills', learn: 'How to lead and manage a team' },
  { topic: 'Philippine Labor Code Explained', learn: 'Basic rights and responsibilities of workers and employers' },
];

const videoResources = [
  { label: 'SHRM', url: 'https://www.shrm.org/' },
  { label: 'AIHR', url: 'https://www.aihr.com' },
  { label: 'TED Talks', url: 'https://youtube.com/@ted?si=bIDlpqjNK_37QA8Q' },
  { label: 'SAGE Edge', url: 'https://edge.sagepub.com' },
];

export default function Resources() {
  return (
    <div className="resources-page">
      <div className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span>Study &amp; Learning Resources</span>
          </nav>
          <h1>Study &amp; Learning Resources</h1>
          <p>Curated educational resources, online platforms, and study materials for BSBA-HRM students</p>
        </div>
      </div>

      {/* YouTube Channels */}
      <section className="section-padding">
        <div className="container">
          <div className="res-section-header">
            <div className="res-icon youtube-icon"><Share2 size={26} /></div>
            <div>
              <h2 className="section-title">HRM-Related YouTube Channels</h2>
              <p className="section-subtitle">These channels offer educational discussions and videos related to human resource management, employee development, and workplace practices.</p>
            </div>
          </div>
          <div className="channels-grid">
            {youtubeChannels.map((ch, i) => (
              <div className="channel-card" key={i}>
                <div className="channel-top">
                  <div className="channel-yt-icon"><Share2 size={22} /></div>
                  <div>
                    <h3 className="channel-name">{ch.name}</h3>
                    <span className="channel-handle">{ch.handle}</span>
                  </div>
                </div>
                <p className="channel-desc">{ch.desc}</p>
                <a href={ch.url} target="_blank" rel="noopener noreferrer" className="res-link-btn">
                  Visit Channel <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Websites */}
      <section className="section-padding bg-gray">
        <div className="container">
          <div className="res-section-header">
            <div className="res-icon web-icon"><Globe size={26} /></div>
            <div>
              <h2 className="section-title">Educational Websites</h2>
              <p className="section-subtitle">These websites provide additional information about HRM, labor laws, recruitment, training, compensation, and workplace practices.</p>
            </div>
          </div>
          <div className="websites-list">
            {websites.map((site, i) => (
              <div className="website-item" key={i}>
                <div className="website-name-wrap">
                  <div className="website-dot" />
                  <a href={site.url} target="_blank" rel="noopener noreferrer" className="website-name">
                    {site.name} <ExternalLink size={13} />
                  </a>
                </div>
                <p className="website-purpose">{site.purpose}</p>
                <p className="website-url-label">{site.url}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Tutorials */}
      <section className="section-padding">
        <div className="container">
          <div className="res-section-header">
            <div className="res-icon tut-icon"><BookOpen size={26} /></div>
            <div>
              <h2 className="section-title">Subject Tutorials</h2>
              <p className="section-subtitle">Useful subjects that HRM students can study through online tutorials</p>
            </div>
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th style={{ width: '220px' }}>Subject / Course Area</th>
                  <th>Topics to Study</th>
                </tr>
              </thead>
              <tbody>
                {tutorials.map((t, i) => (
                  <tr key={i}>
                    <td><strong style={{ color: 'var(--primary)', fontFamily: 'var(--font-main)' }}>{t.subject}</strong></td>
                    <td style={{ color: 'var(--text-mid)', fontSize: '0.9rem' }}>{t.topics}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Free Materials */}
      <section className="section-padding bg-gray">
        <div className="container">
          <div className="res-section-header">
            <div className="res-icon free-icon"><FileText size={26} /></div>
            <div>
              <h2 className="section-title">Free Online Learning Materials</h2>
              <p className="section-subtitle">Platforms where students can access learning materials and courses</p>
            </div>
          </div>
          <div className="free-materials-grid">
            {freeMaterials.map((m, i) => (
              <div className="free-mat-card" key={i}>
                <div className="fmc-icon"><Monitor size={20} /></div>
                <div>
                  <a href={m.url} target="_blank" rel="noopener noreferrer" className="fmc-name">
                    {m.name} <ExternalLink size={12} />
                  </a>
                  <p className="fmc-url">{m.url}</p>
                  <p className="fmc-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Helpful Videos */}
      <section className="section-padding">
        <div className="container">
          <div className="res-section-header">
            <div className="res-icon video-icon"><Video size={26} /></div>
            <div>
              <h2 className="section-title">Helpful Videos for HRM Students</h2>
              <p className="section-subtitle">Suggested video lessons and topics to search on YouTube</p>
            </div>
          </div>
          <div className="videos-grid">
            {helpfulVideos.map((v, i) => (
              <div className="video-item" key={i}>
                <div className="video-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="video-content">
                  <h3 className="video-topic">{v.topic}</h3>
                  <p className="video-learn"><span>What students can learn:</span> {v.learn}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="video-resources-strip">
            <strong>Suggested video resources:</strong>
            <div className="vrs-links">
              {videoResources.map((vr, i) => (
                <a key={i} href={vr.url} target="_blank" rel="noopener noreferrer" className="vrs-link">
                  {vr.label} <ExternalLink size={12} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
