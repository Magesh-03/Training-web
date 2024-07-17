import React from 'react'
import image2 from '../assets/img/Devops.jpg';
import './Cyber.css';
function Devops() {
  return (
    <div className="cyber-container">
        <h1>Devops</h1>
      <p>DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the system development life cycle and provide continuous delivery with high software quality. DevOps is complementary with Agile software development; several DevOps aspects came from Agile methodology. Key practices in DevOps include:</p>
      <ul>
        <li><strong>Continuous Integration:</strong> Frequently integrating code changes into a shared repository, followed by automated builds and tests.</li>
        <li><strong>Continuous Delivery:</strong> Ensuring the software can be reliably released at any time.</li>
        <li><strong>Infrastructure as Code:</strong> Managing and provisioning computing infrastructure through machine-readable definition files.</li>
        <li><strong>Monitoring and Logging:</strong> Continuously measuring application and infrastructure performance.</li>
      </ul>
    <img src={image2} alt="Devops" className="cyber-image" />
    <h2>Payments in Devops</h2>
      <p>Payments in Devops projects can be structured in various ways. Common models include:</p>
      <ul>
        <li><strong>Fixed Price:</strong> A single lump sum is agreed upon before the project starts.</li>
        <li><strong>Time and Materials:</strong> The client pays for the actual time spent and materials used during development.</li>
        <li><strong>Milestone Payments:</strong> Payments are made at predetermined stages of the project.</li>
        <li><strong>Subscription Model:</strong> Regular payments are made, usually monthly, for ongoing services or access to software.</li>
      </ul>
    </div>
  );
}

export default Devops
  