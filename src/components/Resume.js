import React, { useState } from 'react';
import './Resume.css';
import resumefile from '../../src/Resume.pdf'

const Resume = () => {
  const [showEducation, setShowEducation] = useState(true);
  const [showExperience, setShowExperience] = useState(true);

  const toggleSection = (section) => {
    if (section === 'education') {
      setShowEducation(!showEducation);
    } else if (section === 'experience') {
      setShowExperience(!showExperience);
    }
  };

  return (
    <div className="resume-container">
      <div className="main-content">
        <h1>Kevin Tsai</h1>
        <div className="contact-info">
          <p>Email: <a href="mailto:ktsai99@bu.edu">ktsai99@bu.edu</a></p>
          <p>Phone: +1 301-828-8230</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/kevin-tsai99/" target="_blank">kevin-tsai99</a></p>
        </div>
        <div className="section">
          <h2 onClick={() => toggleSection('education')} className="toggle-header">Education</h2>
          {showEducation && (
            <>
              <h3>B.A. Information Science</h3>
              <p>University of Maryland, College Park (Graduation May 2022)</p>
              <ul>
                <li>Dean's List: Spring '18, Spring '20, Fall '20</li>
                <li>Academic Honors: Fall '18, Fall '20, Spring '20, Fall '21</li>
              </ul>
            </>
          )}
        </div>
        <div className="section">
          <h2 onClick={() => toggleSection('experience')} className="toggle-header">Experience</h2>
          {showExperience && (
            <>
              <div className="experience-subsection">
                <h3>Data/Cloud Engineer - MassMutual</h3>
                <p>Dec 2023 - Current, Manhattan, NY</p>
              </div>
              <div className="experience-subsection">
                <h3>Junior Software Engineer w/ Rotations in Cloud Platform Engineering and Site Reliability Engineering - MassMutual</h3>
                <p>June 2022 - December 2023, Boston, MA</p>
              </div>
              <div className="experience-subsection">
                <h3>Campaign Registry DevOps/Cloud Engineer Intern - Kaleyra</h3>
                <p>June 2021 - Oct 2021, Remote</p>
                <ul>
                  <li>Built Production Environment AWS infrastructure various resources, EC2, S3, CDN, in Terraform/Terragrunt Template</li>
                  <li>Automated RDS Read Replica Promotion process through Lambda (Python 3.8) and EventBridge</li>
                  <li>Privatized Static Asset S3 Buckets Access and restricted only Cloudfront Access with added Lambda security headers</li>
                  <li>Created Jenkins Pipelines for Base Images to AWS ECR with Docker</li>
                  <li>Deployed Terragrunt templates to Bitbucket</li>
                </ul>
              </div>
              <div className="experience-subsection">
                <h3>Campaign Registry Software Engineer Intern - Kaleyra</h3>
                <p>June 2020 - June 2021, Remote</p>
                <ul>
                  <li>Created streamlined incident response management with escalation, on-call scheduling, and audit trailing to overcome scalability, escalation, scheduling, and meeting service level agreement (SLA) challenges.</li>
                  <li>Consolidated Campaign Registry workflow environment through product assessment of Software as a Service (SaaS) management platforms OpsGenie and Pagerduty.</li>
                  <li>Setup external ticketing service Freshdesk and cloud monitor service DataDog to be integrated into OpsGenie workflow.</li>
                  <li>Utilized Klipfolio BI tools to assemble multiple dashboards visualizing TCR data and key performance indicators (KPIs).</li>
                  <li>Investigated and produced high-level analysis presentations for upper-level management teams; Successfully fielded questions from presentation participants.</li>
                </ul>
              </div>
            </>
          )}
        </div>
        <div className="download-button">
          <a href={resumefile} download>
            <button>Download Resume</button>
          </a>
        </div>
      </div>
      <div className="sidebar">
        <h2>Skills</h2>
        <h3>Programming Languages</h3>
        <p>Java, Python, SQL, JavaScript, HTML5, CSS, YAML, Groovy, Bash</p>
        <h3>Services</h3>
        <p>AWS, DataDog, Freshdesk, Klipfolio, Pagerduty, Bitbucket, JIRA, OpsGenie, Kubernetes</p>
        <h3>Technologies</h3>
        <p>iOS, Linux, Jenkins, Ansible, Terraform/Terragrunt</p>
        <h2>Certifications</h2>
        <p>Certified AWS Solutions Architect Associates - Amazon Web Services (Exam date pending)</p>
        <p>Certified AWS Cloud Practitioner - Amazon Web Services (Certified until Jan 22, 2024)</p>
        <h2>Projects</h2>
        <h3>Dynamic Web Application Greenbox</h3>
        <ul>
          <li>Front-end Development through Vanilla JS, Bulma CSS, HTML5</li>
          <li>Back-end DB with MySQL</li>
          <li>Rest Server API routes and queries Sequelize + Express JS</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;