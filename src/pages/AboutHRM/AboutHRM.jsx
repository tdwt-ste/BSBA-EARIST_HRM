import { Link } from 'react-router-dom';
import { Users, UserPlus, TrendingUp, DollarSign, BarChart2, Handshake, Calendar, Heart, Target, BookOpen, ChevronRight, Award, Briefcase } from 'lucide-react';
import './AboutHRM.css';

const hrmFunctions = [
  { icon: <UserPlus size={22} />, title: 'Recruitment and Selection', desc: 'Finding and choosing qualified individuals for available job positions within an organization.' },
  { icon: <TrendingUp size={22} />, title: 'Training and Development', desc: 'Helping employees improve their knowledge, skills, and abilities through training programs and activities.' },
  { icon: <DollarSign size={22} />, title: 'Compensation and Benefits', desc: 'Managing employees\' salaries, incentives, and other benefits to ensure fair and competitive pay.' },
  { icon: <BarChart2 size={22} />, title: 'Performance Management', desc: 'Evaluating employees\' work performance and identifying areas for improvement through structured appraisal systems.' },
  { icon: <Handshake size={22} />, title: 'Employee Relations', desc: 'Maintaining positive relationships between employees and management through open communication and fair policies.' },
  { icon: <Calendar size={22} />, title: 'Human Resource Planning', desc: 'Identifying the organization\'s current and future workforce needs to ensure the right people are in place.' },
  { icon: <Heart size={22} />, title: 'Health and Safety', desc: 'Promoting a safe and healthy working environment that protects employees from hazards and supports their well-being.' },
];

const programObjectives = [
  'Develop critical thinking skills that permit them to logically approach and solve problems and recognize opportunities.',
  'Enhance their sensitivities to the ethical context of business decisions, handle business relationships with integrity and concern for the quality of life of personnel and the goals of the organization.',
  'Provide students assistance in building their management and communication skills and frequent opportunities to practice and improve skills in writing.',
  'Develop skills necessary to be successful Human Resource personnel, managers and executives.',
];

const officials = [
  { position: 'Institute President', name: 'DR. ROGELIO T. MAMARADLO' },
  { position: 'Executive Vice President', name: 'DR. JESUS S. PAGUIGAN' },
  { position: 'Vice President for Academic Affairs', name: 'DR. ALLAN Q. QUISMUNDO' },
  { position: 'Vice President for Finance and Administration', name: 'DR. YOLANDA LARA' },
  { position: 'College Dean', name: 'DR. WILLY O. GAPASIN' },
  { position: 'College Associate Dean', name: 'DR. CHANDA R. TINGGA' },
  { position: 'Program Chair – Marketing Management', name: 'DR. JANE ISLA' },
  { position: 'Program Chair – Human Resource Management', name: 'DR. CHARLENE U. ESCARIO' },
  { position: 'Program Chair – Entrepreneurship', name: 'DR. JHON VEN SAINT PASAHOL' },
  { position: 'Program Chair – Public Administration', name: 'DR. MARLENE M. MONTERONA' },
  { position: 'Program Chair – Office Administration', name: 'DR. CHANDA R. TINGGA' },
];

const cbpaGoals = [
  'Promote highest standards of academic excellence by developing students\' knowledge, attitudes, and skills essential for life-long learning.',
  'Promote high professional standards for students to enhance their awareness and international skills.',
  'Promote the total concept of education for and about business.',
];

const importancePoints = [
  'Employees play a major role in the success of every organization — a business cannot operate effectively without people who have the right knowledge, skills, and abilities.',
  'Through HRM, students learn how organizations recruit qualified employees, improve their performance, provide fair compensation, and create a positive working environment.',
  'HRM develops professional skills used in future careers: communication, leadership, teamwork, decision-making, and conflict resolution.',
  'Studying HRM teaches students the value of treating employees fairly, respecting their rights, and understanding their workplace responsibilities.',
];

export default function AboutHRM() {
  return (
    <div className="about-hrm-page">
      <div className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span>About BSBA-HRM</span>
          </nav>
          <h1>About BSBA-HRM</h1>
          <p>Bachelor of Science in Business Administration – Major in Human Resource Management</p>
        </div>
      </div>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container">
          <div className="intro-grid">
            <div>
              <h2 className="section-title">Introduction to BSBA-HRM</h2>
              <p style={{ color: 'var(--text-mid)', lineHeight: '1.75', marginBottom: '1rem', fontSize: '0.95rem' }}>
                The <strong style={{ color: 'var(--primary)' }}>Bachelor of Science in Business Administration Major in Human Resource Management (BSBA-HRM)</strong> is an undergraduate business program offered by the College of Business Administration of Eulogio "Amang" Rodriguez Institute of Science and Technology (EARIST).
              </p>
              <p style={{ color: 'var(--text-mid)', lineHeight: '1.75', marginBottom: '1rem', fontSize: '0.95rem' }}>
                The program focuses on developing students' knowledge and skills in managing people within an organization. It prepares students to understand different human resource functions, including recruitment, selection, training and development, employee relations, compensation, and performance management.
              </p>
              <p style={{ color: 'var(--text-mid)', lineHeight: '1.75', fontSize: '0.95rem' }}>
                Through this program, students learn how to handle workplace responsibilities, communicate effectively, solve organizational problems, and contribute to the success of a business.
              </p>
            </div>
            <div className="hrm-overview-card">
              <div className="hoc-header">Program Overview</div>
              <div className="hoc-row"><span className="hoc-label">Degree</span><span>Bachelor of Science in Business Administration</span></div>
              <div className="hoc-row"><span className="hoc-label">Major</span><span>Human Resource Management</span></div>
              <div className="hoc-row"><span className="hoc-label">College</span><span>College of Business and Public Administration (CBPA)</span></div>
              <div className="hoc-row"><span className="hoc-label">Duration</span><span>4 Years / 8 Semesters</span></div>
              <div className="hoc-row"><span className="hoc-label">Type</span><span>Public State University Program</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Description */}
      <section className="section-padding bg-gray">
        <div className="container">
          <h2 className="section-title">Program Description</h2>
          <p className="section-subtitle">What the BSBA-HRM program provides to students</p>
          <div className="background-card" style={{ borderLeftColor: '#1a5276' }}>
            <div className="background-icon" style={{ background: 'linear-gradient(135deg,#1a5276,#0e3d6b)' }}><BookOpen size={36} /></div>
            <div className="background-content">
              <p>The BSBA-HRM program provides students with knowledge and practical skills related to business administration and Human Resource Management. It focuses on preparing students to become competent professionals who can manage employees, support organizational development, and maintain positive relationships in the workplace.</p>
              <p>The program also develops students' <strong>leadership, decision-making, critical thinking, communication, and management abilities</strong>.</p>
              <p>At EARIST, the program aims to prepare students to become trustworthy, productive, and competent business professionals, managers, executives, and Human Resource personnel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is HRM */}
      <section className="section-padding">
        <div className="container">
          <div className="what-is-hrm">
            <div className="what-icon"><Users size={40} /></div>
            <div className="what-content">
              <h2 className="section-title">What is Human Resource Management?</h2>
              <p>Human Resource Management is the process of managing people within an organization. It involves finding the right employees, providing training, evaluating performance, managing compensation, and maintaining good relationships between employees and employers.</p>
              <p>Human Resource Management plays an important role in making sure that employees are properly supported, guided, and developed so they can perform their responsibilities effectively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Functions */}
      <section className="section-padding bg-gray">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title centered">Major Functions of Human Resource Management</h2>
            <p className="section-subtitle centered">The seven core functional areas that define HR practice</p>
          </div>
          <div className="functions-grid">
            {hrmFunctions.map((fn, i) => (
              <div className="function-card" key={i}>
                <div className="function-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="function-icon">{fn.icon}</div>
                <h3 className="function-title">{fn.title}</h3>
                <p className="function-desc">{fn.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="section-padding bg-primary">
        <div className="container">
          <div className="purpose-hrm-wrap">
            <div>
              <h2 className="section-title" style={{ color: '#fff' }}>Purpose of the Program</h2>
              <div style={{ width: '60px', height: '4px', background: 'var(--yellow)', borderRadius: '2px', margin: '0.5rem 0 1.5rem' }} />
              <p style={{ color: 'rgba(255,255,255,0.88)', lineHeight: '1.75', marginBottom: '1rem', fontSize: '0.95rem' }}>
                The purpose of the BSBA-HRM program is to prepare students for professional careers in Human Resource Management and Business Administration. It aims to develop individuals who understand the importance of employees in achieving organizational goals.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  'Develop students\' knowledge of Human Resource Management principles and practices.',
                  'Prepare students to handle recruitment, employee training, and performance evaluation.',
                  'Improve students\' leadership and communication skills.',
                  'Develop ethical decision-making and problem-solving abilities.',
                  'Teach students how to manage workplace relationships and employee concerns.',
                  'Prepare graduates for different positions in the business and human resource industries.',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                    <span style={{ color: 'var(--yellow)', fontWeight: '800', flexShrink: 0 }}>▸</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="purpose-hrm-card">
              <Award size={32} />
              <h3>Program Objectives</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left', marginTop: '0.5rem' }}>
                {programObjectives.map((obj, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>
                    <span style={{ color: 'var(--yellow)', fontWeight: '800', flexShrink: 0 }}>{i + 1}.</span>{obj}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Importance */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Importance of Studying Human Resource Management</h2>
          <p className="section-subtitle">Why HRM is a critical and rewarding field of study</p>
          <div className="importance-grid">
            {importancePoints.map((point, i) => (
              <div className="importance-card" key={i}>
                <div className="importance-check">✓</div>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CBPA */}
      <section className="section-padding bg-gray">
        <div className="container">
          <div className="cbpa-section">
            <div className="cbpa-header">
              <BookOpen size={28} />
              <h2>College of Business and Public Administration (CBPA)</h2>
            </div>
            <div className="cbpa-body">
              <div className="cbpa-goals">
                <h3>CBPA Goals</h3>
                <ul>
                  {cbpaGoals.map((g, i) => (
                    <li key={i}>{g}</li>
                  ))}
                </ul>
              </div>
              <div className="cbpa-officials">
                <h3>Under the College of Business and Public Administration</h3>
                <div className="officials-grid">
                  {officials.map((o, i) => (
                    <div className="official-card" key={i}>
                      <div className="official-avatar"><Briefcase size={18} /></div>
                      <div>
                        <div className="official-name">{o.name}</div>
                        <div className="official-position">{o.position}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-sm">
        <div className="container text-center">
          <h3 style={{ fontFamily: 'var(--font-main)', fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.75rem' }}>
            Explore the Full BSBA-HRM Curriculum
          </h3>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem' }}>
            See all subjects and academic requirements across all four years of the program.
          </p>
          <Link to="/curriculum" className="btn btn-blue">View Curriculum <ChevronRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}
