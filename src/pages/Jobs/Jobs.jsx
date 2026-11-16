import { Link } from 'react-router-dom';
import { Search, FileText, MessageSquare, ExternalLink, AlertCircle, Video } from 'lucide-react';
import './Jobs.css';

const jobSites = [
  {
    name: 'JobStreet Philippines',
    url: 'https://ph.jobstreet.com/',
    desc: 'A website where you can search and apply for different job openings in the Philippines. Search for HR-related positions by keyword, location, and company.',
    tip: 'Search keywords: "HR Assistant", "Recruitment Specialist", "Human Resources"',
  },
  {
    name: 'Indeed Philippines',
    url: 'https://ph.indeed.com/m/',
    desc: 'A job search website where you can find available positions based on your skills and interests. Aggregates listings from company websites and other job boards.',
    tip: 'Filter by experience level to find entry-level and fresh graduate HR positions.',
  },
  {
    name: 'LinkedIn',
    url: 'https://ph.linkedin.com/',
    desc: 'A platform where you can connect with employers, build your professional profile, and look for job opportunities. Useful for networking and internship hunting.',
    tip: 'Complete your LinkedIn profile to 100% and connect with EARIST alumni in HR.',
  },
];

const resumeVideos = [
  {
    title: 'Resume and Application Tips – Video 1',
    purpose: 'Learn how to structure your resume for HR positions, what to include, and how to highlight your BSBA-HRM education and OJT experience effectively.',
    url: 'https://youtu.be/aAV-qa2aL3M?si=KxWjEneNg-FZdk6x',
  },
  {
    title: 'Resume and Application Tips – Video 2',
    purpose: 'Practical tips on creating a standout resume as a new graduate with limited work experience, including how to highlight academic achievements and internship contributions.',
    url: 'https://youtu.be/mGimjjMIRCA?si=G5zQpyM04pyk7Cz2',
  },
];

const interviewVideos = [
  {
    title: 'Interview Preparation – Video 1',
    purpose: 'Prepare for frequently asked interview questions in HR roles, including behavioral, situational, and HR-specific technical questions.',
    url: 'https://youtu.be/c-m8xj__P9c?si=d9XXTYk_4O5nRXwq',
  },
  {
    title: 'Interview Preparation – Video 2',
    purpose: 'General interview preparation strategies including research techniques, professional attire, body language, and follow-up etiquette.',
    url: 'https://youtu.be/pPDVH4ddUwo?si=SoWNuHnVufMqEBl-',
  },
  {
    title: 'Interview Preparation – Video 3',
    purpose: 'Watch mock interview demonstrations to understand what interviewers look for and how to answer confidently during HR job interviews.',
    url: 'https://youtu.be/V3Sy2UcjYGk?si=8Rp-CRX82HjO2Z4t',
  },
];

const appTips = [
  'Review the full job description carefully before applying and tailor your application to match the specific requirements.',
  'Prepare your required documents: resume/CV, application letter, transcript of records, diploma, and government-issued ID.',
  'Research the company before the interview — understand their industry, size, and HR practices.',
  'Dress professionally and arrive (or log in) on time for all interviews.',
  'Follow up with a thank-you email within 24 hours after an interview.',
  'Keep track of all job applications, interview schedules, and responses in an organized spreadsheet.',
  'Ask your EARIST faculty or career services office for letters of recommendation when needed.',
];

export default function Jobs() {
  return (
    <div className="jobs-page">
      <div className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span>Job &amp; Internship Opportunities</span>
          </nav>
          <h1>Job &amp; Internship Opportunities</h1>
          <p>Resources to help BSBA-HRM students find employment and internship placements</p>
        </div>
      </div>

      {/* Job Sites */}
      <section className="section-padding">
        <div className="container">
          <div className="jobs-section-header">
            <div className="jobs-icon search-icon"><Search size={26} /></div>
            <div>
              <h2 className="section-title">Job Search Websites</h2>
              <p className="section-subtitle">Recommended platforms for finding HR jobs and internships in the Philippines</p>
            </div>
          </div>
          <div className="job-sites-grid">
            {jobSites.map((site, i) => (
              <div className="job-site-card" key={i}>
                <div className="jsc-header">
                  <Search size={18} />
                  <h3 className="jsc-name">{site.name}</h3>
                </div>
                <p className="jsc-desc">{site.desc}</p>
                <div className="jsc-tip">
                  <AlertCircle size={14} />
                  <span>{site.tip}</span>
                </div>
                <a href={site.url} target="_blank" rel="noopener noreferrer" className="jsc-btn">
                  Visit {site.name} <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Tips */}
      <section className="section-padding bg-gray">
        <div className="container">
          <div className="jobs-section-header">
            <div className="jobs-icon resume-icon"><FileText size={26} /></div>
            <div>
              <h2 className="section-title">Resume and Application Tips</h2>
              <p className="section-subtitle">Video resources to help you create a strong HR resume and application</p>
            </div>
          </div>
          <div className="video-tips-list">
            {resumeVideos.map((v, i) => (
              <div className="video-tip-card" key={i}>
                <div className="vtc-icon"><Video size={20} /></div>
                <div>
                  <h3 className="vtc-title">{v.title}</h3>
                  <p className="vtc-purpose">{v.purpose}</p>
                  <a href={v.url} target="_blank" rel="noopener noreferrer" className="vtc-link">
                    Watch Video <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Tips */}
      <section className="section-padding">
        <div className="container">
          <div className="jobs-section-header">
            <div className="jobs-icon tips-icon"><AlertCircle size={26} /></div>
            <div>
              <h2 className="section-title">Application Preparation Tips</h2>
              <p className="section-subtitle">Important reminders before submitting job or internship applications</p>
            </div>
          </div>
          <div className="app-tips-reminder">
            <div className="reminder-icon"><AlertCircle size={20} /></div>
            <p>
              <strong>Reminder:</strong> Always check the job requirements before applying and prepare your resume and other needed documents in advance.
            </p>
          </div>
          <div className="app-tips-grid">
            {appTips.map((tip, i) => (
              <div className="app-tip-item" key={i}>
                <div className="at-num">{String(i + 1).padStart(2, '0')}</div>
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Tips */}
      <section className="section-padding bg-gray">
        <div className="container">
          <div className="jobs-section-header">
            <div className="jobs-icon interview-icon"><MessageSquare size={26} /></div>
            <div>
              <h2 className="section-title">Interview Preparation Tips</h2>
              <p className="section-subtitle">Watch these videos to learn how to answer interview questions and prepare before meeting an employer</p>
            </div>
          </div>
          <div className="video-tips-list">
            {interviewVideos.map((v, i) => (
              <div className="video-tip-card" key={i}>
                <div className="vtc-icon"><Video size={20} /></div>
                <div>
                  <h3 className="vtc-title">{v.title}</h3>
                  <p className="vtc-purpose">{v.purpose}</p>
                  <a href={v.url} target="_blank" rel="noopener noreferrer" className="vtc-link">
                    Watch Video <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
