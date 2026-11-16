import { Link } from 'react-router-dom';
import { MessageSquare, ExternalLink, Heart, Star, ThumbsUp, AlertCircle } from 'lucide-react';
import './Feedback.css';

export default function Feedback() {
  return (
    <div className="feedback-page">
      <div className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span>Feedback &amp; Suggestions</span>
          </nav>
          <h1>Feedback &amp; Suggestions</h1>
          <p>Your voice matters — help us improve the HRM One-Click Information Hub</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="feedback-layout">

            {/* Left: Description */}
            <div className="feedback-info">
              <h2 className="section-title">Share Your Feedback</h2>
              <p>
                The HRM One-Click Information Hub is built for you — the students and stakeholders of the BSBA-HRM program at EARIST Manila. Your feedback, suggestions, and comments help us continuously improve this platform and ensure it serves your academic needs effectively.
              </p>
              <p>
                Whether you have ideas for new content, notice information that needs updating, or simply want to share how the platform has helped you, we welcome all forms of constructive feedback.
              </p>

              <div className="feedback-reasons">
                <h3>What You Can Share</h3>
                <div className="reason-items">
                  <div className="reason-item">
                    <Star size={18} />
                    <span>Suggestions for improving the platform's content or design</span>
                  </div>
                  <div className="reason-item">
                    <AlertCircle size={18} />
                    <span>Reports of outdated, incorrect, or missing information</span>
                  </div>
                  <div className="reason-item">
                    <ThumbsUp size={18} />
                    <span>Positive feedback about content that has been helpful to your studies</span>
                  </div>
                  <div className="reason-item">
                    <Heart size={18} />
                    <span>Ideas for new sections, resources, or features you would like to see</span>
                  </div>
                  <div className="reason-item">
                    <MessageSquare size={18} />
                    <span>General comments about your experience using the HRM One-Click Hub</span>
                  </div>
                </div>
              </div>

              <div className="feedback-note">
                <AlertCircle size={16} />
                <p>
                  <strong>Important:</strong> This feedback form is powered by Google Forms. Your responses are collected through the Google Form linked below. Submissions are not stored on this website — they go directly to the form responses managed by the platform administrators.
                </p>
              </div>
            </div>

            {/* Right: CTA card */}
            <div className="feedback-cta-side">
              <div className="feedback-cta-card">
                <div className="fcc-icon">
                  <MessageSquare size={36} />
                </div>
                <h3 className="fcc-title">Give Your Feedback</h3>
                <p className="fcc-desc">
                  Click the button below to open the official feedback form. The form opens in Google Forms — please answer honestly and completely. Your responses help us make this platform better for every BSBA-HRM student.
                </p>

                <div className="fcc-features">
                  <div className="fcc-feature">
                    <span className="fcc-check">✓</span>
                    <span>Quick and easy to complete</span>
                  </div>
                  <div className="fcc-feature">
                    <span className="fcc-check">✓</span>
                    <span>Responses are anonymous (unless you provide your name)</span>
                  </div>
                  <div className="fcc-feature">
                    <span className="fcc-check">✓</span>
                    <span>Takes only a few minutes to fill out</span>
                  </div>
                  <div className="fcc-feature">
                    <span className="fcc-check">✓</span>
                    <span>Directly helps improve this platform for all students</span>
                  </div>
                </div>

                <a
                  href="https://forms.gle/RzdzNJ4UefzTzRrr9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="feedback-btn"
                >
                  <MessageSquare size={20} />
                  Open Feedback Form
                  <ExternalLink size={16} />
                </a>

                <p className="fcc-external-note">
                  Opens in a new tab via Google Forms
                </p>
              </div>

              <div className="feedback-thanks-card">
                <Heart size={28} style={{ color: 'var(--red)' }} />
                <h4>Thank You for Your Support</h4>
                <p>Every piece of feedback, no matter how small, contributes to making the HRM One-Click Information Hub a more valuable resource for all BSBA-HRM students at EARIST Manila.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
