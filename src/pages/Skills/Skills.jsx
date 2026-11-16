import { Link } from 'react-router-dom';
import {
  MessageCircle, Users, Handshake, Lightbulb, Scale,
  Clock, Heart, Monitor, ChevronRight
} from 'lucide-react';
import './Skills.css';

const skills = [
  {
    num: '01',
    icon: <MessageCircle size={28} />,
    title: 'Communication Skills',
    color: '#123B70',
    desc: 'Effective communication is the foundation of successful HRM. HR professionals must be able to convey information clearly and persuasively — both verbally and in writing — across all organizational levels.',
    details: [
      'Written communication: drafting policies, job descriptions, memos, and HR reports',
      'Verbal communication: conducting interviews, delivering presentations, facilitating meetings',
      'Active listening: understanding employee concerns and responding empathetically',
      'Non-verbal communication: body language awareness and professional demeanor',
      'Cross-cultural communication: working effectively with diverse employees and stakeholders',
    ],
  },
  {
    num: '02',
    icon: <Users size={28} />,
    title: 'Leadership Skills',
    color: '#1a5276',
    desc: 'HR professionals are organizational leaders who guide people, champion change, and shape workplace culture. Strong leadership skills enable HR practitioners to influence outcomes and inspire others.',
    details: [
      'Visionary thinking: aligning HR initiatives with long-term organizational goals',
      'Decision-making: making sound judgments under uncertainty and time pressure',
      'Influencing without authority: gaining buy-in from managers and executives',
      'Mentoring and coaching: developing the potential of employees and colleagues',
      'Leading change: managing organizational transitions effectively and sensitively',
    ],
  },
  {
    num: '03',
    icon: <Handshake size={28} />,
    title: 'Teamwork',
    color: '#0e4f8a',
    desc: 'HR work is fundamentally collaborative. Whether co-designing programs with department heads, working with legal teams on compliance, or partnering with finance on compensation, teamwork is essential.',
    details: [
      'Collaboration: working productively with cross-functional teams and departments',
      'Conflict resolution: mediating team disputes and facilitating constructive dialogue',
      'Shared goal achievement: contributing to team objectives beyond individual responsibilities',
      'Peer support: offering assistance and expertise to colleagues across the organization',
      'Building trust: creating reliable, respectful working relationships at all levels',
    ],
  },
  {
    num: '04',
    icon: <Lightbulb size={28} />,
    title: 'Problem-Solving',
    color: '#1a4971',
    desc: 'HR professionals encounter complex workplace challenges daily — from employee misconduct to talent shortages. The ability to analyze problems systematically and develop practical solutions is critical.',
    details: [
      'Root cause analysis: identifying the underlying cause of HR issues and workplace problems',
      'Creative thinking: generating innovative solutions to talent and organizational challenges',
      'Data-driven approach: using HR metrics and analytics to inform problem-solving',
      'Policy development: creating procedures that prevent recurring problems',
      'Stakeholder engagement: involving the right people in finding sustainable solutions',
    ],
  },
  {
    num: '05',
    icon: <Scale size={28} />,
    title: 'Decision-Making',
    color: '#08264A',
    desc: 'From hiring decisions to disciplinary actions, HR professionals make consequential choices every day. Sound decision-making requires balancing data, ethics, legal requirements, and human considerations.',
    details: [
      'Analytical reasoning: evaluating options based on available evidence and HR best practices',
      'Ethical judgment: ensuring decisions comply with laws and reflect organizational values',
      'Risk assessment: identifying potential consequences and mitigating negative outcomes',
      'Timeliness: making necessary decisions promptly while avoiding hasty conclusions',
      'Accountability: owning decisions and learning from both successes and mistakes',
    ],
  },
  {
    num: '06',
    icon: <Clock size={28} />,
    title: 'Time Management',
    color: '#123B70',
    desc: 'HR departments handle multiple responsibilities simultaneously — recruitment cycles, training programs, payroll deadlines, and compliance requirements. Effective time management ensures all priorities are met.',
    details: [
      'Prioritization: distinguishing between urgent and important HR tasks effectively',
      'Planning: creating realistic timelines for HR projects, programs, and processes',
      'Organization: maintaining orderly records, files, and HR documentation systems',
      'Delegation: assigning appropriate tasks to team members for optimal efficiency',
      'Deadline management: consistently meeting compliance, payroll, and reporting deadlines',
    ],
  },
  {
    num: '07',
    icon: <Heart size={28} />,
    title: 'Interpersonal Skills',
    color: '#1a5276',
    desc: 'HR is a people-centered function. Building genuine relationships, demonstrating empathy, and maintaining professional boundaries are interpersonal competencies that define effective HR practice.',
    details: [
      'Empathy: understanding and acknowledging the emotions and perspectives of employees',
      'Relationship building: cultivating trust with employees, managers, and executives',
      'Emotional intelligence: recognizing and managing emotions in professional interactions',
      'Confidentiality: handling sensitive employee information with discretion and integrity',
      'Networking: building professional relationships with HR peers, vendors, and industry partners',
    ],
  },
  {
    num: '08',
    icon: <Monitor size={28} />,
    title: 'Computer and Technical Skills',
    color: '#08264A',
    desc: 'Modern HR relies heavily on technology. From HRIS platforms to data analytics tools, HR professionals must be proficient in digital systems to manage people processes efficiently and accurately.',
    details: [
      'HRIS proficiency: using HR information systems for employee data management and reporting',
      'Microsoft Office Suite: Excel for data analysis, Word for documentation, PowerPoint for presentations',
      'HR analytics: interpreting workforce data to support strategic HR decisions',
      'ATS systems: applicant tracking software for managing recruitment pipelines',
      'Payroll systems: processing payroll, benefits administration, and statutory contributions',
    ],
  },
];

export default function Skills() {
  return (
    <div className="skills-page">
      <div className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span>Skills &amp; Competencies</span>
          </nav>
          <h1>Skills &amp; Competencies</h1>
          <p>Eight core professional competencies developed in every BSBA-HRM graduate</p>
        </div>
      </div>

      {/* Skills overview */}
      <section className="section-padding-sm bg-gray">
        <div className="container">
          <div className="skills-overview-strip">
            {skills.map((s) => (
              <div className="skill-pill" key={s.num} style={{ '--sp-color': s.color }}>
                <span className="sp-icon" style={{ color: s.color }}>{s.icon}</span>
                <span className="sp-label">{s.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Detail */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Core HRM Skills Explained</h2>
          <p className="section-subtitle">Detailed breakdown of each competency and its application in HR practice</p>
          <div className="skills-detail-grid">
            {skills.map((skill, i) => (
              <div className="skill-detail-card" key={i} style={{ '--sk-color': skill.color }}>
                <div className="sdk-header" style={{ background: skill.color }}>
                  <div className="sdk-icon-wrap">{skill.icon}</div>
                  <div className="sdk-title-wrap">
                    <div className="sdk-num">{skill.num}</div>
                    <h3 className="sdk-title">{skill.title}</h3>
                  </div>
                </div>
                <div className="sdk-body">
                  <p className="sdk-desc">{skill.desc}</p>
                  <div className="sdk-details-title">Key Applications:</div>
                  <ul className="sdk-list">
                    {skill.details.map((d, j) => (
                      <li key={j}><span className="sdk-bullet">▸</span>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-primary">
        <div className="container text-center">
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-main)', fontSize: '1.5rem', marginBottom: '0.75rem' }}>
            Ready to Apply These Skills?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem' }}>
            Explore career opportunities where these HRM competencies are put to work.
          </p>
          <Link to="/careers" className="btn btn-primary">
            View Career Opportunities <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
