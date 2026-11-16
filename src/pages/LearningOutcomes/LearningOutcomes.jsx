import { Link } from 'react-router-dom';
import { BookOpen, Wrench, Award, Target, CheckCircle } from 'lucide-react';
import './LearningOutcomes.css';

const knowledge = [
  'Comprehensive understanding of HRM theories, concepts, and principles applicable to organizational settings.',
  'Knowledge of Philippine labor laws, employment regulations, and workplace legal frameworks.',
  'Understanding of organizational behavior, management theories, and business administration foundations.',
  'Knowledge of compensation systems, benefits administration, and reward management practices.',
  'Understanding of training and development methodologies, learning design, and adult education principles.',
  'Knowledge of performance management systems, appraisal methods, and feedback mechanisms.',
  'Understanding of HR planning, workforce forecasting, and succession planning processes.',
  'Knowledge of health, safety, and environmental management standards and workplace well-being programs.',
];

const skills = [
  'Conduct effective recruitment processes including job posting, screening, interviewing, and candidate evaluation.',
  'Design and implement training and development programs aligned with organizational needs and learning objectives.',
  'Develop and administer compensation and benefits packages that attract, motivate, and retain employees.',
  'Apply performance management tools to evaluate employee performance and provide constructive feedback.',
  'Manage employee relations, handle grievances, and facilitate conflict resolution in the workplace.',
  'Use HR information systems and technology platforms to manage employee data and HR processes.',
  'Conduct job analysis, develop job descriptions, and design organizational structures effectively.',
  'Apply research methods and HR analytics to gather data, identify trends, and support HR decision-making.',
];

const competencies = [
  { title: 'Professional HR Practitioner', desc: 'Graduates demonstrate professional competence in managing human resources across all functional areas, from recruitment to retirement.' },
  { title: 'Strategic Business Partner', desc: 'Graduates can align HR strategies with organizational goals and contribute meaningfully to executive-level business decisions.' },
  { title: 'Change Agent', desc: 'Graduates are equipped to lead organizational change initiatives, facilitate transformation, and manage resistance effectively.' },
  { title: 'Employee Advocate', desc: 'Graduates champion employee well-being, workplace fairness, and organizational justice in all HR activities and policies.' },
  { title: 'Ethical Leader', desc: 'Graduates demonstrate strong ethical standards, integrity, and social responsibility in professional conduct and decision-making.' },
  { title: 'Lifelong Learner', desc: 'Graduates possess the mindset and skills for continuous professional development and adaptation in a changing business environment.' },
];

const learningGoals = [
  { num: '01', title: 'Academic Excellence', desc: 'Achieve academic performance that reflects mastery of HRM knowledge, theories, and best practices as defined by CHED and industry standards.' },
  { num: '02', title: 'Professional Readiness', desc: 'Develop the technical skills, work ethic, and professional demeanor required for immediate employment in HR-related positions after graduation.' },
  { num: '03', title: 'Industry Relevance', desc: 'Produce graduates whose competencies are aligned with current HR industry needs, emerging trends, and global best practices.' },
  { num: '04', title: 'Community Responsibility', desc: 'Cultivate graduates who contribute positively to their organizations, communities, and the broader Philippine workforce ecosystem.' },
  { num: '05', title: 'Research and Innovation', desc: 'Encourage evidence-based thinking, HR research capabilities, and innovative problem-solving approaches among students and graduates.' },
  { num: '06', title: 'Values Formation', desc: 'Instill core values of integrity, service, teamwork, and excellence that guide graduates throughout their personal and professional lives.' },
];

export default function LearningOutcomes() {
  return (
    <div className="learning-outcomes-page">
      <div className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span className="breadcrumb-sep">›</span>
            <Link to="/about-hrm">About BSBA-HRM</Link><span className="breadcrumb-sep">›</span>
            <span>Learning Outcomes</span>
          </nav>
          <h1>Learning Outcomes</h1>
          <p>What BSBA-HRM students are expected to know, do, and become upon completing the program</p>
        </div>
      </div>

      {/* Knowledge */}
      <section className="section-padding">
        <div className="container">
          <div className="lo-section-header knowledge">
            <div className="lo-section-icon"><BookOpen size={28} /></div>
            <div>
              <h2 className="section-title">Knowledge Students Should Develop</h2>
              <p className="section-subtitle">The body of knowledge acquired through the BSBA-HRM curriculum</p>
            </div>
          </div>
          <div className="lo-list knowledge-list">
            {knowledge.map((item, i) => (
              <div className="lo-item" key={i}>
                <div className="lo-num knowledge-num">{String(i + 1).padStart(2, '0')}</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding bg-gray">
        <div className="container">
          <div className="lo-section-header skills">
            <div className="lo-section-icon skills-icon"><Wrench size={28} /></div>
            <div>
              <h2 className="section-title">Skills Students Should Learn</h2>
              <p className="section-subtitle">Practical and technical abilities developed throughout the program</p>
            </div>
          </div>
          <div className="skills-grid">
            {skills.map((item, i) => (
              <div className="skill-item" key={i}>
                <CheckCircle size={18} className="skill-check" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competencies */}
      <section className="section-padding">
        <div className="container">
          <div className="lo-section-header competencies">
            <div className="lo-section-icon competencies-icon"><Award size={28} /></div>
            <div>
              <h2 className="section-title">Competencies After Graduation</h2>
              <p className="section-subtitle">The professional roles and capacities graduates are prepared to fulfil</p>
            </div>
          </div>
          <div className="competencies-grid">
            {competencies.map((item, i) => (
              <div className="competency-card" key={i}>
                <div className="comp-num">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="comp-title">{item.title}</h3>
                <p className="comp-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Goals */}
      <section className="section-padding bg-primary">
        <div className="container">
          <div className="lo-section-header" style={{ marginBottom: '2.5rem' }}>
            <div className="lo-section-icon goals-icon"><Target size={28} /></div>
            <div>
              <h2 className="section-title" style={{ color: '#fff' }}>Learning Goals of the BSBA-HRM Program</h2>
              <div style={{ width: '60px', height: '4px', background: 'var(--yellow)', borderRadius: '2px', margin: '0.5rem 0 0' }} />
              <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: '0.5rem', fontSize: '1rem' }}>Institutional aims that guide the program's design and delivery</p>
            </div>
          </div>
          <div className="goals-grid">
            {learningGoals.map((g, i) => (
              <div className="goal-card" key={i}>
                <div className="goal-num">{g.num}</div>
                <h3 className="goal-title">{g.title}</h3>
                <p className="goal-desc">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
