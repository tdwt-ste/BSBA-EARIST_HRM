import { Link } from 'react-router-dom';
import { BookOpen, ExternalLink, Globe, FileText } from 'lucide-react';
import './References.css';

const references = [
  { num: 1, citation: 'Eulogio "Amang" Rodriguez Institute of Science and Technology. (n.d.). CBA – Program Offerings.', url: 'https://earist.edu.ph/college-of-business-administration/program-offerings/', type: 'web' },
  { num: 2, citation: 'EARIST SDG Management System. (2025, August 8). BSBA Human Resource Management Curriculum Revision.', url: 'https://sdg.earist.edu.ph/event_details.php?id=246', type: 'web' },
  { num: 3, citation: 'Eulogio "Amang" Rodriguez Institute of Science and Technology. (2021). Citizen\'s Charter.', url: 'https://earist.edu.ph/wp-content/uploads/arta-2021.pdf', type: 'web' },
  { num: 4, citation: 'Eulogio "Amang" Rodriguez Institute of Science and Technology. (n.d.). President\'s corner.', url: 'https://earist.edu.ph/presidents-corner/', type: 'web' },
  { num: 5, citation: 'Academy to Innovate HR. (n.d.). AIHR.', url: 'https://www.aihr.com', type: 'web' },
  { num: 6, citation: 'Chartered Institute of Personnel and Development. (n.d.). Massive open online courses.', url: 'https://www.cipd.org/en/learning/mooc/', type: 'web' },
  { num: 7, citation: 'Department of Labor and Employment. (n.d.). DOLE e-Campus.', url: 'https://lees.dole.gov.ph/?utm', type: 'web' },
  { num: 8, citation: 'Eulogio "Amang" Rodriguez Institute of Science and Technology. (n.d.). EARIST official website.', url: 'https://share.google/U49DT1LJLvSG0CmYj', type: 'web' },
  { num: 9, citation: 'Eulogio "Amang" Rodriguez Institute of Science and Technology. (n.d.). College of Business and Public Administration.', url: 'https://earist.edu.ph/college-of-business-administration/college-based-organization', type: 'web' },
  { num: 10, citation: 'Class Central. (n.d.). Human resources courses and certifications.', url: 'https://www.classcentral.com/subject/human-resources?', type: 'web' },
  { num: 11, citation: 'Texas Wesleyan University Library. (n.d.). Human resource management: Videos.', url: 'https://westlibrary.txwes.edu/hr_mgmt/videos', type: 'web' },
  { num: 12, citation: 'University of the Philippines Diliman Human Resource Development Office. (n.d.). Resources vault.', url: 'https://training.hrdo.upd.edu.ph/lndmaterials?', type: 'web' },
  { num: 13, citation: 'SAGE Publications. (n.d.). Fundamentals of human resource management: Video and multimedia.', url: 'https://edge.sagepub.com/fundamentalsofhrm/student-resources/chapter-1/video-and-multimedia', type: 'web' },
  { num: 14, citation: 'NPTEL. (n.d.). Human Resource Management I.', url: 'https://sikhami.com/course/EVpF2CEEDydGwfYUz7L2', type: 'web' },
  { num: 15, citation: 'Bogdány, E., Cserháti, G., & Csizmadia, T. (2025). Employer insights into key competencies for human resource management graduates: A Q-methodology study. Cogent Education, 12(1), 2448885.', url: 'https://doi.org/10.1080/2331186X.2024.2448885', type: 'journal' },
  { num: 16, citation: 'Fitong Ketchiwou, G., & Lessing, K. F. (2024). A framework for future human resource management individual competencies: An integrative review. Athens Journal of Business & Economics, 10(2), 125–146.', url: 'https://www.athensjournals.gr/business/2024-6249-AJBE-Ketchiwou-05.pdf', type: 'journal' },
  { num: 17, citation: 'Mtshelwane, D. N., Graupner, L., & Rossouw, L. (2026). Critical competencies for emerging human resource practitioners navigating the changing world of work. SA Journal of Human Resource Management, 24, a3492.', url: 'https://doi.org/10.4102/sajhrm.v24i0.3492', type: 'journal' },
  { num: 18, citation: "O*NET OnLine. (2026). Summary report for: 13-1071.00 – Human resources specialists. U.S. Department of Labor, Employment and Training Administration.", url: 'https://www.onetonline.org/link/summary/13-1071.00', type: 'web' },
  { num: 19, citation: 'Ulrich, D. (1996). Human resource champions: The next agenda for adding value and delivering results. Harvard Business School Press.', url: null, type: 'book' },
  { num: 20, citation: 'U.S. Bureau of Labor Statistics. (2025). Occupational outlook handbook: Human resources specialists – Important qualities. U.S. Department of Labor.', url: 'https://www.bls.gov/ooh/business-and-financial/human-resources-specialists.htm', type: 'web' },
  { num: 21, citation: 'Siocon, G. (2025, January 17). Human Resources Assistant job description: What does an HR assistant do? AIHR.', url: 'https://www.aihr.com/blog/human-resources-assistant/', type: 'web' },
  { num: 22, citation: 'Kenton, W. (2024, August 7). Human resources (HR): Meaning and responsibilities. Investopedia.', url: 'https://www.investopedia.com/terms/h/humanresources.asp', type: 'web' },
  { num: 23, citation: 'TalentHR. (n.d.). What is a Recruitment Specialist? – HR Glossary.', url: 'https://www.talenthr.io/resources/hr-glossary/recruitment-specialist/', type: 'web' },
  { num: 24, citation: 'Goh, M. H. (2024, March 12). [CM] Roles and responsibilities of Training and Development Officer. BCM Institute.', url: 'https://blog.bcm-institute.org/en/crisis-management/roles-and-responsibilities-of-training-and-development-officer', type: 'web' },
  { num: 25, citation: 'Dignity in Work for All. (2026, May 31). Compensation and Benefits Assistant.', url: 'https://dignityinwork.org/compensation-and-benefits-assistant/', type: 'web' },
  { num: 26, citation: 'CIPD. (n.d.). Employee relations roles.', url: 'https://www.cipd.org/en/the-people-profession/careers/roles/employee-relations/', type: 'web' },
  { num: 27, citation: 'Simplicant. (n.d.). Human Resources (HR) Supervisor position.', url: 'https://simplicant.com/job-descriptions/human-resources-hr-supervisor-position', type: 'web' },
  { num: 28, citation: 'Darwinbox. (n.d.). Human Resources Manager (HR).', url: 'https://darwinbox.com/hr-glossary/human-resource-manager', type: 'web' },
];

const typeLabel = { web: 'Web', journal: 'Journal', book: 'Book' };
const typeColor = { web: '#123B70', journal: '#1a5276', book: '#1e8449' };

export default function References() {
  return (
    <div className="references-page">
      <div className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span>References</span>
          </nav>
          <h1>References</h1>
          <p>Academic sources, websites, and resources used in the development of this information hub</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="ref-stats">
            <div className="ref-stat"><BookOpen size={22} /><div><div className="ref-stat-num">{references.length}</div><div className="ref-stat-label">Total References</div></div></div>
            <div className="ref-stat-divider" />
            <div className="ref-stat"><FileText size={22} /><div><div className="ref-stat-num">{references.filter(r=>r.type==='journal').length}</div><div className="ref-stat-label">Journal Articles</div></div></div>
            <div className="ref-stat-divider" />
            <div className="ref-stat"><Globe size={22} /><div><div className="ref-stat-num">{references.filter(r=>r.type==='web').length}</div><div className="ref-stat-label">Web Sources</div></div></div>
            <div className="ref-stat-divider" />
            <div className="ref-stat"><BookOpen size={22} /><div><div className="ref-stat-num">{references.filter(r=>r.type==='book').length}</div><div className="ref-stat-label">Books</div></div></div>
          </div>

          <p className="ref-intro">
            The following references were consulted in the preparation of the content presented in the HRM One-Click Information Hub. All web sources were accessed during the development period of this platform. URLs are clickable where available.
          </p>

          <div className="ref-list">
            {references.map((ref) => (
              <div className="ref-item" key={ref.num}>
                <span className="ref-num">[{ref.num}]</span>
                <div className="ref-content">
                  <span
                    className="ref-type-badge"
                    style={{ background: `${typeColor[ref.type]}18`, color: typeColor[ref.type] }}
                  >
                    {typeLabel[ref.type]}
                  </span>
                  <p className="ref-citation">{ref.citation}</p>
                  {ref.url && (
                    <a href={ref.url} target="_blank" rel="noopener noreferrer" className="ref-url">
                      <ExternalLink size={12} /> {ref.url}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="ref-note">
            <strong>Note:</strong> This website is an academic project created for BSBA-HRM students at EARIST Manila and is not affiliated with or endorsed by the publishers or organizations cited above.
          </div>
        </div>
      </section>
    </div>
  );
}
