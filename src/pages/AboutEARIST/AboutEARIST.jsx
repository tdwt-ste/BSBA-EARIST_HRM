import { Link } from 'react-router-dom';
import { BookOpen, Target, Eye, Heart, Shield, Award, Users, Zap, Star, ChevronRight } from 'lucide-react';
import earistLogo from '../../assets/images/logos/science-tech-logo.png';
import './AboutEARIST.css';

const coreValues = [
  { letter: 'E', word: 'Excellence', icon: <Star size={22} />, desc: 'Striving for quality education and producing competent and globally competitive graduates.' },
  { letter: 'A', word: 'Accountability', icon: <Shield size={22} />, desc: 'Being responsible for one\'s actions and duties, especially in serving the community.' },
  { letter: 'R', word: 'Resourcefulness', icon: <Zap size={22} />, desc: 'Making good use of available resources and finding effective solutions to challenges.' },
  { letter: 'I', word: 'Integrity', icon: <Heart size={22} />, desc: 'Practicing honesty, fairness, and ethical behavior in all responsibilities.' },
  { letter: 'S', word: 'Service', icon: <Users size={22} />, desc: 'Showing willingness to help others and respond to the needs of the community.' },
  { letter: 'T', word: 'Teamwork', icon: <Award size={22} />, desc: 'Working together with cooperation, unity, and shared commitment.' },
];

const timeline = [
  { year: '1945', event: 'Established after the liberation of Manila as Eulogio Rodriguez Vocational High School (ERVHS), initially operating at the second floor of Mapa High School with one classroom, nine teachers, one clerk, and 147 students under first principal Mr. Pantaleon Regala.' },
  { year: 'Jul 1, 1946', event: 'Acquired its present location in Nagtahan, Sampaloc, Manila. The institution continued to develop and expand its educational programs.' },
  { year: '1967', event: 'Renamed Eulogio "Amang" Rodriguez Memorial School of Arts and Trades (EARMSAT).' },
  { year: '1972', event: 'Republic Act No. 6595 converted it into the Eulogio "Amang" Rodriguez Institute of Science and Technology (EARIST).' },
  { year: 'Jun 11, 1978', event: 'Presidential Decree No. 1524 converted EARIST into a chartered state college.' },
  { year: 'Present', event: 'EARIST continues to provide quality education in business, technology, science, and the arts, developing students into responsible, skilled, and productive individuals.' },
];

export default function AboutEARIST() {
  return (
    <div className="about-earist-page">
      <div className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span>About EARIST</span>
          </nav>
          <h1>About EARIST</h1>
          <p>Eulogio "Amang" Rodriguez Institute of Science and Technology — Serving the Nation Since 1945</p>
        </div>
      </div>

      {/* Brief History */}
      <section className="section-padding">
        <div className="container">
          <div className="earist-logo-banner">
            <img src={earistLogo} alt="EARIST Official Seal" className="earist-page-seal" />
            <div>
              <h2 className="section-title">Brief History of EARIST</h2>
              <p className="section-subtitle">From a post-war vocational school to a chartered state institution</p>
            </div>
          </div>
          <div className="history-grid">
            <div className="history-text">
              <p>
                The Eulogio "Amang" Rodriguez Institute of Science and Technology (EARIST) was established in <strong>1945</strong>, after the liberation of Manila. It originally started as a vocational high school known as <strong>Eulogio Rodriguez Vocational High School (ERVHS)</strong>.
              </p>
              <p>
                During its early years, the institution operated with only one classroom at the second floor of Mapa High School, nine teachers, one clerk, and <strong>147 students</strong> under its first principal, <strong>Mr. Pantaleon Regala</strong>.
              </p>
              <p>
                On <strong>July 1, 1946</strong>, EARIST acquired its present location in <strong>Nagtahan, Sampaloc, Manila</strong>. Through the years, the institution continued to develop and expand its educational programs.
              </p>
              <p>
                In <strong>1967</strong>, it was renamed <strong>Eulogio "Amang" Rodriguez Memorial School of Arts and Trades (EARMSAT)</strong>. In <strong>1972</strong>, Republic Act No. 6595 converted it into the <strong>Eulogio "Amang" Rodriguez Institute of Science and Technology (EARIST)</strong>. Later, on <strong>June 11, 1978</strong>, Presidential Decree No. 1524 converted EARIST into a chartered state college.
              </p>
              <p>
                Today, EARIST continues to provide quality education in different fields, including business, technology, science, and the arts. It aims to develop students into responsible, skilled, and productive individuals who can contribute to society.
              </p>
            </div>
            <div className="timeline">
              {timeline.map((item, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-line">
                    <div className="timeline-dot" />
                    {i < timeline.length - 1 && <div className="timeline-connector" />}
                  </div>
                  <div className="timeline-event">{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* School Background */}
      <section className="section-padding bg-gray">
        <div className="container">
          <h2 className="section-title">School Background</h2>
          <p className="section-subtitle">A public institution dedicated to accessible quality education</p>
          <div className="background-card">
            <div className="background-icon"><BookOpen size={36} /></div>
            <div className="background-content">
              <p>
                The Eulogio "Amang" Rodriguez Institute of Science and Technology is a <strong>public higher education institution</strong> located in Manila, Philippines. It is committed to providing accessible and quality education to students from different backgrounds.
              </p>
              <p>
                EARIST offers various academic programs designed to develop students' knowledge, practical skills, professional abilities, and values. As a state college, it focuses on preparing graduates to become productive members of society and competent professionals in their chosen careers.
              </p>
              <p>
                The institution also encourages <strong>academic excellence, research, innovation, teamwork, and community involvement</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Philosophy, Quality Policy */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="section-title centered">Vision, Mission, Philosophy &amp; Quality Policy</h2>
            <p className="section-subtitle centered">The guiding principles that define EARIST's institutional direction</p>
          </div>
          <div className="vmq-grid">
            <div className="vmq-card vision">
              <div className="vmq-icon"><Eye size={28} /></div>
              <h3 className="vmq-title">Vision</h3>
              <div className="vmq-divider" />
              <p className="vmq-text">
                "EARIST is envisioned to be a center of excellence in trades, business, arts, science and technology education."
              </p>
            </div>
            <div className="vmq-card mission">
              <div className="vmq-icon"><Target size={28} /></div>
              <h3 className="vmq-title">Mission</h3>
              <div className="vmq-divider" />
              <p className="vmq-text">
                "Turn out vocationally, technically, technologically, and scientifically trained graduates who will be economically productive, self-sufficient, effective, responsible and discipline citizen of the Philippines."
              </p>
            </div>
            <div className="vmq-card philosophy">
              <div className="vmq-icon"><Heart size={28} /></div>
              <h3 className="vmq-title">Philosophy</h3>
              <div className="vmq-divider" />
              <p className="vmq-text">
                "As a state college, Eulogio "Amang" Rodriguez Institute of Science and Technology (EARIST) believes that education is not an area of knowledge that can be arrogated unto itself by one profession, nor it is a division separate and distinct from the society and the times in which it flourishes. It is a plexus of knowledge and skills applied to the economic, social and moral development of self-actualized and productive citizenry."
              </p>
            </div>
            <div className="vmq-card quality">
              <div className="vmq-icon"><Shield size={28} /></div>
              <h3 className="vmq-title">Quality Policy</h3>
              <div className="vmq-divider" />
              <p className="vmq-text">
                "EARIST is committed to provide quality education and Services through continual improvement of its quality management system with compliance to statutory requirements that meet the highest level of customer satisfaction."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-primary">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="section-title centered" style={{ color: '#fff' }}>EARIST Core Values</h2>
            <p className="section-subtitle centered" style={{ color: 'rgba(255,255,255,0.75)' }}>
              The E-A-R-I-S-T values that guide every member of the EARIST community
            </p>
          </div>
          <div className="values-grid">
            {coreValues.map((v, i) => (
              <div className="value-card" key={i}>
                <div className="value-letter">{v.letter}</div>
                <div className="value-icon">{v.icon}</div>
                <h3 className="value-word">{v.word}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-sm">
        <div className="container text-center">
          <h3 style={{ fontFamily: 'var(--font-main)', fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.75rem' }}>
            Interested in Learning About the BSBA-HRM Program?
          </h3>
          <p style={{ color: 'var(--text-mid)', marginBottom: '1.5rem' }}>
            Explore the academic program, curriculum, and career paths available to BSBA-HRM students at EARIST.
          </p>
          <Link to="/about-hrm" className="btn btn-blue">About BSBA-HRM <ChevronRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}
