import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Award, X, Users, Trophy, Star, ChevronRight } from 'lucide-react';
import battleBrainImg from '../../assets/images/activities/battle-of-brain.jpg';
import ponsImg from '../../assets/images/activities/pons-activity.jpg';
import mercyImg from '../../assets/images/activities/mercy-beyond-bars.jpg';
import teachingImg from '../../assets/images/activities/teaching-with-cases.jpg';
import ojtImg from '../../assets/images/activities/ojt-orientation.jpg';
import nerpsImg from '../../assets/images/achievements/nerps-conference.jpg';
import volleyImg from '../../assets/images/achievements/volleyball-champion.jpg';
import cheerImg from '../../assets/images/achievements/cheerdance-champion.jpg';
import basketballImg from '../../assets/images/achievements/basketball-champion.jpg';
import './Activities.css';

const activities = [
  {
    id: 1,
    title: 'Battle of the Brain: An Intellectual Gauntlet Showdown',
    date: 'May 07, 2026',
    category: 'Academic Competition',
    color: '#123B70',
    img: battleBrainImg,
    desc: 'An exciting academic competition that challenged BSBA-HRM students to demonstrate their knowledge, critical thinking, and quick decision-making skills across various HRM and business administration disciplines. The event promoted intellectual excellence and healthy academic rivalry.',
    highlights: [
      'Multi-round academic quiz competition covering HRM and business administration topics',
      'Students competed showcasing individual knowledge and collaborative strategy',
      'Organized by the Human Resource Society – EARIST',
    ],
  },
  {
    id: 2,
    title: 'PONS: A Bridge of Hope for Out of School Youth through Education',
    date: 'June 02, 2026',
    category: 'Community Outreach',
    color: '#1a5276',
    img: ponsImg,
    desc: 'A meaningful community outreach program organized by BSBA-HRM students to reach out to out-of-school youth and provide them with educational guidance, motivational support, and awareness of learning opportunities. The activity embodied the EARIST spirit of service and social responsibility.',
    highlights: [
      'Reached out to out-of-school youth in communities surrounding EARIST Manila',
      'Provided educational counseling, motivational talks, and resource referrals',
      'Demonstrated HRM students\' commitment to service and community engagement',
    ],
  },
  {
    id: 3,
    title: "Mercy Beyond Bars & Sin: Bringing God's Charity to Every Cell",
    date: 'April 29, 2026',
    category: 'Community Outreach',
    color: '#0e4f8a',
    img: mercyImg,
    desc: 'A compassionate outreach activity where BSBA-HRM students extended kindness, spiritual support, and humanitarian assistance. The program reflected the students\' values of mercy, charity, and human dignity in action.',
    highlights: [
      'Organized spiritual and motivational activities for the community outreach',
      'Distributed goods and essentials as part of the charitable effort',
      'Demonstrated empathy and social responsibility beyond the academic environment',
    ],
  },
  {
    id: 4,
    title: 'Teaching with Cases: Principles, Practice, and Responsible AI Integration',
    date: 'April 24, 2026',
    category: 'Academic Seminar',
    color: '#1a4971',
    img: teachingImg,
    desc: 'EARIST CBPA delegates joined the seminar-workshop "Teaching with Cases: Principles, Practice, and Responsible AI Integration," held on April 24, 2026, and hosted by De La Salle-College of Saint Benilde. The event explored case-based teaching and responsible AI integration in business education.',
    highlights: [
      'Seminar-workshop hosted by De La Salle-College of Saint Benilde',
      'Explored case-based learning as an effective method for teaching HRM and business concepts',
      'Discussed principles and ethical considerations for responsible AI integration in education',
    ],
  },
  {
    id: 5,
    title: "OJT Orientation 2026 — Bloom Where You're Planted",
    date: 'February 20, 2026',
    category: 'Academic Program',
    color: '#08264A',
    img: ojtImg,
    desc: "The official On-the-Job Training orientation for BSBA-HRM fourth-year students preparing for their 600-hour OJT requirement. Under the inspiring theme \"Bloom Where You're Planted,\" the event guided students on making the most of their training placements and growing professionally wherever they are assigned.",
    highlights: [
      'Orientation on OJT requirements, documentation, and expectations for BSBA-HRM students',
      'Guidance on professional conduct, workplace etiquette, and OJT journal keeping',
      'Motivational discussions encouraging students to maximize every training opportunity',
    ],
  },
];

const achievements = [
  {
    icon: <Star size={24} />,
    type: 'Student / Faculty Achievement',
    title: 'Research Presenter at NERPS Conference 2026',
    person: 'Dr. Michael F. Gibaga',
    location: 'United Nations University, Tokyo, Japan',
    date: 'April 09, 2026',
    color: '#123B70',
    img: nerpsImg,
    desc: 'The Human Resource Society, together with the Human Resource Program and the College of Business and Public Administration, proudly congratulates Dr. Michael F. Gibaga for being a research presenter at the NERPS Conference 2026, held at the United Nations University in Tokyo, Japan!',
  },
  {
    icon: <Trophy size={24} />,
    type: 'Competition',
    title: "Men's Volleyball Championship",
    person: 'John Carlo Perucho, Joemhel Monteclaro, and Edrianne Gavino',
    location: 'SIKLAB 2026',
    date: 'May 27, 2026',
    color: '#1a5276',
    img: volleyImg,
    desc: "READY, SET, SPIKE! Congratulations to all the players of College of Business and Public Administration (CBPA) Men's Volleyball Team for their outstanding performance and dedication during SIKLAB 2026. Special recognition goes to John Carlo Perucho, Joemhel Monteclaro, and Edrianne Gavino, who proudly represented CBPA and played a vital role in earning the Championship title.",
  },
  {
    icon: <Award size={24} />,
    type: 'Competition',
    title: 'First Place — Cheer Dance Competition',
    person: 'CBPA Cheer Dance Team',
    location: 'SIKLAB 2026',
    date: 'May 25, 2026',
    color: '#0e4f8a',
    img: cheerImg,
    desc: "LETS GO EAGLES, LET'S GO! Huge congratulations to all College of Business and Public Administration (CBPA) participants for their outstanding performance and for earning the 1st place in Cheerdance competition at Siklab 2026. Your energy, teamwork, and determination truly shined on the stage, making the whole college proud.",
  },
  {
    icon: <Trophy size={24} />,
    type: 'Competition',
    title: 'Basketball Competition',
    person: 'Jose Cailan, John Kenneth Cuare, and Michael Arsenio',
    location: 'SIKLAB 2026',
    date: 'May 23, 2026',
    color: '#1a4971',
    img: basketballImg,
    desc: "CHAMPIONS ON THE COURT! Congratulations to all the basketball players who proudly represented and gave their best during SIKLAB 2026! Special recognition to Jose Cailan, John Kenneth Cuare, and Michael Arsenio who represented the Human Resources Management. Your outstanding performance, teamwork, and perseverance throughout the tournament played a huge role in this remarkable achievement.",
  },
];

function ActivityModal({ activity, onClose }) {
  if (!activity) return null;
  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={activity.title}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close"><X size={20} /></button>
        <div className="modal-header" style={{ background: activity.color }}>
          <span className="modal-category">{activity.category}</span>
          <h3 className="modal-title">{activity.title}</h3>
          <div className="modal-date"><Calendar size={15} /><span>{activity.date}</span></div>
        </div>
        {activity.img && (
          <div className="modal-img-wrap">
            <img src={activity.img} alt={activity.title} className="modal-img" />
          </div>
        )}
        <div className="modal-body">
          <p className="modal-desc">{activity.desc}</p>
          <div className="modal-highlights-title">Activity Highlights</div>
          <ul className="modal-highlights">
            {activity.highlights.map((h, i) => (
              <li key={i}><span className="mh-bullet">▸</span>{h}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Activities() {
  const [selectedActivity, setSelectedActivity] = useState(null);

  return (
    <div className="activities-page">
      <div className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span>Activities &amp; Achievements</span>
          </nav>
          <h1>Student Activities &amp; Achievements</h1>
          <p>Celebrating the academic, professional, and personal accomplishments of EARIST BSBA-HRM students</p>
        </div>
      </div>

      {/* Activities */}
      <section className="section-padding">
        <div className="container">
          <div className="acts-section-header">
            <div className="acts-icon"><Users size={28} /></div>
            <div>
              <h2 className="section-title">Human Resource Management Activities</h2>
              <p className="section-subtitle">Recent programs, events, and activities organized by or for BSBA-HRM students</p>
            </div>
          </div>
          <div className="activities-grid">
            {activities.map((act) => (
              <div className="activity-card" key={act.id}>
                <div className="ac-color-bar" style={{ background: act.color }} />
                {act.img && (
                  <div className="ac-img-wrap">
                    <img src={act.img} alt={act.title} className="ac-img" loading="lazy" />
                  </div>
                )}
                <div className="ac-body">
                  <div className="ac-top">
                    <span className="ac-category" style={{ color: act.color, background: `${act.color}18` }}>{act.category}</span>
                    <span className="ac-date"><Calendar size={13} />{act.date}</span>
                  </div>
                  <h3 className="ac-title">{act.title}</h3>
                  <p className="ac-desc">{act.desc.slice(0, 150)}...</p>
                  <button className="ac-btn" onClick={() => setSelectedActivity(act)} style={{ color: act.color }}>
                    Read More <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding-sm bg-gray">
        <div className="container">
          <div className="gallery-header">
            <h3 className="gallery-title">Activity Gallery</h3>
            <p className="gallery-sub">Photo documentation of BSBA-HRM activities</p>
          </div>
          <div className="gallery-grid">
            {activities.map((act) => (
              <div
                className="gallery-item"
                key={act.id}
                onClick={() => setSelectedActivity(act)}
                role="button"
                tabIndex={0}
                aria-label={`View: ${act.title}`}
                onKeyDown={e => e.key === 'Enter' && setSelectedActivity(act)}
              >
                {act.img ? (
                  <img src={act.img} alt={act.title} className="gallery-real-img" loading="lazy" />
                ) : (
                  <div className="gallery-placeholder" style={{ background: act.color }}>
                    <Calendar size={24} style={{ color: 'rgba(255,255,255,0.4)' }} />
                    <span className="gp-label">Activity Photo</span>
                  </div>
                )}
                <div className="gallery-caption">
                  <div className="gc-title">{act.title}</div>
                  <div className="gc-date">{act.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding">
        <div className="container">
          <div className="acts-section-header">
            <div className="acts-icon achieve-icon"><Trophy size={28} /></div>
            <div>
              <h2 className="section-title">Human Resource Achievements</h2>
              <p className="section-subtitle">
                Celebrating Excellence, Leadership, Teamwork, and Student Success — The Human Resource Management Program proudly recognizes the accomplishments, talents, and contributions of its students, faculty members, and the entire department.
              </p>
            </div>
          </div>
          <div className="achievements-grid">
            {achievements.map((ach, i) => (
              <div className="achievement-card" key={i}>
                <div className="ach-header" style={{ background: ach.color }}>
                  <div className="ach-icon-wrap">{ach.icon}</div>
                  <div>
                    <div className="ach-type">{ach.type}</div>
                    <h3 className="ach-title">{ach.title}</h3>
                  </div>
                </div>
                {ach.img && (
                  <div className="ach-img-wrap">
                    <img src={ach.img} alt={ach.title} className="ach-img" loading="lazy" />
                  </div>
                )}
                <div className="ach-body">
                  <div className="ach-meta">
                    <div className="ach-meta-item"><span className="ach-meta-label">Who</span><span>{ach.person}</span></div>
                    <div className="ach-meta-item"><span className="ach-meta-label">Where</span><span>{ach.location}</span></div>
                    <div className="ach-meta-item"><span className="ach-meta-label">Date</span><span>{ach.date}</span></div>
                  </div>
                  <p className="ach-desc">{ach.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="achievements-closing">
            The achievements of the Human Resource Management Program reflect the dedication, hard work, and commitment of its students and faculty members. From academic excellence to extracurricular success, every accomplishment represents the department's continuous pursuit of growth and excellence.
            <br /><br />
            <strong>Together, we celebrate achievements, inspire leadership, and build a stronger Human Resource community!</strong>
          </div>
        </div>
      </section>

      <ActivityModal activity={selectedActivity} onClose={() => setSelectedActivity(null)} />
    </div>
  );
}
