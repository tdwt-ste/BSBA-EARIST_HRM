import { Link } from 'react-router-dom';
import { Briefcase, TrendingUp, ChevronRight } from 'lucide-react';
import './Careers.css';

const careers = [
  {
    num: '01',
    title: 'Human Resource Assistant',
    level: 'Entry Level',
    color: '#123B70',
    desc: 'The Human Resource Assistant is an entry-level position that supports the daily operational functions of the HR department. Responsibilities include maintaining employee records, processing HR documents, assisting in recruitment activities, coordinating interviews, and providing administrative support to senior HR personnel.',
    responsibilities: [
      'Maintaining accurate and updated employee records and HR files',
      'Assisting in posting job advertisements and scheduling interviews',
      'Processing new hire documentation and onboarding materials',
      'Supporting payroll preparation and benefits enrollment',
      'Responding to basic employee inquiries about HR policies',
    ],
    qualifications: 'Bachelor\'s degree in BSBA-HRM or related field. Fresh graduates are welcome.',
  },
  {
    num: '02',
    title: 'HR Staff',
    level: 'Entry to Junior Level',
    color: '#1a5276',
    desc: 'HR Staff members perform a range of human resource functions covering recruitment, employee engagement, training coordination, and HR documentation. This role provides broad exposure to multiple HR functions and serves as a foundation for career advancement within the HR department.',
    responsibilities: [
      'Assisting in executing recruitment and selection processes',
      'Coordinating employee training and development programs',
      'Maintaining HR information systems and personnel databases',
      'Supporting the implementation of HR policies and procedures',
      'Contributing to employee engagement and retention initiatives',
    ],
    qualifications: 'BSBA-HRM graduate. 0–2 years of HR experience preferred.',
  },
  {
    num: '03',
    title: 'Recruitment Specialist',
    level: 'Junior to Mid Level',
    color: '#0e4f8a',
    desc: 'The Recruitment Specialist focuses specifically on talent acquisition — sourcing, attracting, screening, and selecting qualified candidates to fill organizational positions. This role requires strong interpersonal skills, knowledge of recruitment platforms, and the ability to assess candidate fit efficiently.',
    responsibilities: [
      'Developing and posting job advertisements on various platforms',
      'Conducting resume screening and initial candidate assessments',
      'Coordinating and conducting preliminary interviews',
      'Managing the applicant tracking system and recruitment data',
      'Coordinating with hiring managers on selection decisions and job offers',
    ],
    qualifications: 'BSBA-HRM or related degree. Experience with ATS and recruitment platforms is an advantage.',
  },
  {
    num: '04',
    title: 'Training and Development Officer',
    level: 'Mid Level',
    color: '#1a4971',
    desc: 'The Training and Development Officer designs, implements, and evaluates programs that enhance employee skills and organizational capabilities. This role requires expertise in adult learning principles, training needs assessment, curriculum design, and program evaluation methodologies.',
    responsibilities: [
      'Conducting training needs analysis across departments',
      'Designing and developing training programs and learning materials',
      'Facilitating in-house training sessions and workshops',
      'Coordinating with external training providers and institutions',
      'Evaluating training effectiveness and ROI using established frameworks',
    ],
    qualifications: 'BSBA-HRM graduate with 2–3 years of experience in training functions.',
  },
  {
    num: '05',
    title: 'Compensation and Benefits Assistant',
    level: 'Entry to Mid Level',
    color: '#08264A',
    desc: 'The Compensation and Benefits Assistant supports the administration of employee pay structures, benefits programs, and statutory contributions. This role requires attention to detail, numerical proficiency, and familiarity with Philippine labor standards on compensation and mandatory benefits.',
    responsibilities: [
      'Assisting in payroll processing and salary computation',
      'Administering employee benefits enrollment and updates',
      'Processing SSS, PhilHealth, and Pag-IBIG contributions and filings',
      'Maintaining compensation records and benefits documentation',
      'Supporting the annual salary review and benefits assessment process',
    ],
    qualifications: 'BSBA-HRM or Business Administration graduate. Knowledge of DOLE regulations is an advantage.',
  },
  {
    num: '06',
    title: 'Employee Relations Officer',
    level: 'Mid Level',
    color: '#123B70',
    desc: 'The Employee Relations Officer promotes positive working relationships between management and employees. This role handles grievance management, disciplinary proceedings, compliance with labor laws, and employee engagement initiatives aimed at maintaining a productive and harmonious workplace.',
    responsibilities: [
      'Managing employee grievances and complaints through proper channels',
      'Facilitating disciplinary investigations and administrative hearings',
      'Ensuring compliance with the Philippine Labor Code and company policies',
      'Developing and implementing employee engagement programs',
      'Advising management on employee relations matters and best practices',
    ],
    qualifications: 'BSBA-HRM graduate with knowledge of Philippine labor law. 2–4 years of ER experience preferred.',
  },
  {
    num: '07',
    title: 'HR Supervisor',
    level: 'Supervisory Level',
    color: '#1a5276',
    desc: 'The HR Supervisor oversees a team of HR staff and manages day-to-day HR operations across multiple functional areas. This role bridges frontline HR execution and strategic HR management, requiring both operational expertise and emerging leadership capabilities.',
    responsibilities: [
      'Supervising and mentoring junior HR staff and coordinators',
      'Overseeing recruitment, onboarding, and training operations',
      'Ensuring HR policies and procedures are consistently applied',
      'Generating HR reports and analytics for management review',
      'Contributing to the development and improvement of HR systems and processes',
    ],
    qualifications: 'BSBA-HRM or related degree with 3–5 years of progressive HR experience.',
  },
  {
    num: '08',
    title: 'Human Resource Manager',
    level: 'Managerial Level',
    color: '#08264A',
    desc: 'The Human Resource Manager leads the entire HR function of an organization, developing and implementing HR strategies aligned with business goals. This senior role requires comprehensive HR expertise, strategic thinking, leadership capability, and deep understanding of Philippine employment law and global HR best practices.',
    responsibilities: [
      'Developing and implementing organizational HR strategy and policies',
      'Leading all HR functions including talent management and succession planning',
      'Managing labor relations and ensuring regulatory compliance',
      'Advising executive leadership on people management and organizational development',
      'Driving HR transformation initiatives and continuous improvement programs',
    ],
    qualifications: 'BSBA-HRM or Master\'s degree in HRM/MBA. 5+ years of HR experience with management background.',
  },
];

export default function Careers() {
  return (
    <div className="careers-page">
      <div className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span>Career Opportunities</span>
          </nav>
          <h1>Career Opportunities</h1>
          <p>Eight career pathways available to BSBA-HRM graduates in the Philippines and beyond</p>
        </div>
      </div>

      {/* Career Ladder */}
      <section className="section-padding-sm bg-gray">
        <div className="container">
          <div className="career-ladder">
            {careers.map((c, i) => (
              <div className="career-ladder-item" key={i} style={{ background: c.color }}>
                <span className="cli-num">{c.num}</span>
                <span className="cli-title">{c.title}</span>
                <span className="cli-level">{c.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Cards */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Career Paths in Detail</h2>
          <p className="section-subtitle">Responsibilities, qualifications, and growth potential for each HRM career</p>
          <div className="career-cards-grid">
            {careers.map((career, i) => (
              <div className="career-card" key={i}>
                <div className="cc-header" style={{ background: career.color }}>
                  <div className="cc-icon"><Briefcase size={22} /></div>
                  <div>
                    <div className="cc-num">{career.num}</div>
                    <h3 className="cc-title">{career.title}</h3>
                    <span className="cc-level-badge">{career.level}</span>
                  </div>
                </div>
                <div className="cc-body">
                  <p className="cc-desc">{career.desc}</p>
                  <div className="cc-section">
                    <div className="cc-section-title">Key Responsibilities</div>
                    <ul className="cc-list">
                      {career.responsibilities.map((r, j) => (
                        <li key={j}><span className="cc-bullet">•</span>{r}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="cc-qualifications">
                    <span className="cc-qual-label">Typical Qualifications:</span>
                    <span>{career.qualifications}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-primary">
        <div className="container text-center">
          <TrendingUp size={36} style={{ color: 'var(--yellow)', marginBottom: '1rem' }} />
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-main)', fontSize: '1.5rem', marginBottom: '0.75rem' }}>
            Looking for Job &amp; Internship Opportunities?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem' }}>
            Find job search platforms, resume tips, and interview preparation resources.
          </p>
          <Link to="/jobs" className="btn btn-primary">
            Job &amp; Internship Resources <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
