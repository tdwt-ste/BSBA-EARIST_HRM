import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronDown, ChevronUp, Calendar, Hash, Award } from 'lucide-react';
import { curriculum, getTotalUnits } from '../../data/curriculum';
import './Curriculum.css';

const years = [
  { key: 'year1', label: 'First Year', color: '#123B70' },
  { key: 'year2', label: 'Second Year', color: '#0e4f8a' },
  { key: 'year3', label: 'Third Year', color: '#1a5276' },
  { key: 'year4', label: 'Fourth Year', color: '#08264A' },
];

function SemTable({ semData }) {
  const total = getTotalUnits(semData);
  return (
    <div className="sem-block">
      <div className="sem-header">
        <Calendar size={16} />
        <span>{semData.title}</span>
        <span className="sem-total-badge">{total} Units</span>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th style={{ width: '130px' }}>Subject Code</th>
              <th>Subject Name / Description</th>
              <th style={{ width: '80px', textAlign: 'center' }}>Units</th>
            </tr>
          </thead>
          <tbody>
            {semData.subjects.map((s, i) => (
              <tr key={i}>
                <td><code className="subj-code">{s.code}</code></td>
                <td>{s.name}</td>
                <td style={{ textAlign: 'center', fontWeight: '600' }}>{s.units}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}><strong>Total Units for the Semester</strong></td>
              <td style={{ textAlign: 'center' }}><strong>{total}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

function YearAccordion({ yearKey, label, color, data }) {
  const [open, setOpen] = useState(false);
  const sem1Total = getTotalUnits(data.sem1);
  const sem2Total = getTotalUnits(data.sem2);
  const yearTotal = sem1Total + sem2Total;

  return (
    <div className="year-accordion">
      <button
        className="year-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{ '--year-color': color }}
      >
        <div className="year-toggle-left">
          <div className="year-num-badge" style={{ background: color }}>
            {label.split(' ')[0][0]}{label.split(' ')[1][0]}
          </div>
          <div>
            <div className="year-toggle-label">{label}</div>
            <div className="year-toggle-sub">2 Semesters · {yearTotal} Total Units</div>
          </div>
        </div>
        <div className="year-toggle-right">
          <span className="year-units-label">{yearTotal} units</span>
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      {open && (
        <div className="year-content">
          <SemTable semData={data.sem1} />
          <SemTable semData={data.sem2} />
        </div>
      )}
    </div>
  );
}

export default function Curriculum() {
  const [activeYear, setActiveYear] = useState('all');

  const grandTotal = years.reduce((sum, y) => {
    const d = curriculum[y.key];
    return sum + getTotalUnits(d.sem1) + getTotalUnits(d.sem2);
  }, 0);

  return (
    <div className="curriculum-page">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <Link to="/about-hrm">About BSBA-HRM</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Curriculum</span>
          </nav>
          <h1>Curriculum and Academic Information</h1>
          <p>Complete BSBA-HRM course listing organized by year and semester</p>
        </div>
      </div>

      {/* Overview */}
      <section className="section-padding-sm bg-gray">
        <div className="container">
          <div className="curriculum-overview">
            <div className="curr-stat">
              <BookOpen size={24} />
              <div>
                <div className="curr-stat-num">4</div>
                <div className="curr-stat-label">Academic Years</div>
              </div>
            </div>
            <div className="curr-divider" />
            <div className="curr-stat">
              <Calendar size={24} />
              <div>
                <div className="curr-stat-num">8</div>
                <div className="curr-stat-label">Semesters</div>
              </div>
            </div>
            <div className="curr-divider" />
            <div className="curr-stat">
              <Hash size={24} />
              <div>
                <div className="curr-stat-num">{grandTotal}</div>
                <div className="curr-stat-label">Total Units</div>
              </div>
            </div>
            <div className="curr-divider" />
            <div className="curr-stat">
              <Award size={24} />
              <div>
                <div className="curr-stat-num">600</div>
                <div className="curr-stat-label">OJT Hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Description */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Program Overview</h2>
          <p className="section-subtitle">Structure and organization of the BSBA-HRM curriculum</p>
          <div className="curr-desc-grid">
            <div className="curr-desc-text">
              <p>
                The BSBA-HRM curriculum at EARIST Manila is designed to provide a balanced combination of general education courses, core business administration subjects, and specialized HRM courses. The program spans four academic years, with each year building progressively on the previous one.
              </p>
              <p>
                The first two years focus on general education, foundational business courses, and introductory HRM subjects. The third and fourth years concentrate on advanced HR specialization, including strategic HRM, HR analytics, organizational development, and the required on-the-job training component.
              </p>
              <p>
                Students are required to complete <strong>600 hours of on-the-job training (OJT)</strong> during the fourth year to gain practical, real-world experience in HR settings.
              </p>
            </div>
            <div className="year-summary-cards">
              {years.map((y) => {
                const d = curriculum[y.key];
                const total = getTotalUnits(d.sem1) + getTotalUnits(d.sem2);
                return (
                  <div className="year-summary-card" key={y.key} style={{ borderTopColor: y.color }}>
                    <div className="ysc-label" style={{ color: y.color }}>{y.label}</div>
                    <div className="ysc-num">{total}</div>
                    <div className="ysc-sub">units</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Tables */}
      <section className="section-padding bg-gray">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title centered">Full Curriculum by Year and Semester</h2>
            <p className="section-subtitle centered">Click each year to expand and view the complete subject list</p>
          </div>

          <div className="curriculum-accordions">
            {years.map((y) => (
              <YearAccordion
                key={y.key}
                yearKey={y.key}
                label={y.label}
                color={y.color}
                data={curriculum[y.key]}
              />
            ))}
          </div>

          {/* Grand total */}
          <div className="grand-total-bar">
            <span className="gt-label">Total Program Units</span>
            <span className="gt-num">{grandTotal} Units</span>
          </div>
        </div>
      </section>

      {/* Curriculum Revision */}
      <section className="section-padding">
        <div className="container">
          <div className="revision-box">
            <div className="revision-icon">
              <BookOpen size={24} />
            </div>
            <div className="revision-content">
              <h3>Curriculum Revision and Updates</h3>
              <p className="revision-date">Last Revised: August 8, 2025</p>
              <p>
                The BSBA-HRM curriculum underwent its most recent revision on <strong>August 8, 2025</strong>, as part of EARIST's commitment to maintaining a current, relevant, and industry-aligned academic program. The revision incorporated feedback from industry stakeholders, faculty, and alumni to ensure graduates are prepared for the evolving demands of the HR profession.
              </p>
              <p>
                Students are advised to consult with their academic adviser or the College of Business and Public Administration (CBPA) office for the most current and officially endorsed curriculum checklist applicable to their batch year.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
