import React from 'react';
import image1 from '../assets/img/Cyber.jpg'; // Ensure the path is correct
import './Cyber.css'; // Import the CSS file

function Cyber() {
  return (
    <div className="cyber-container">
      <h1>CYBER SECURITY</h1>
      <p>Cyber security involves protecting computer systems, networks, and data from theft, damage, and unauthorized access. It encompasses a range of practices, technologies, and processes designed to safeguard digital assets. Key areas of cyber security include:</p>
      <ul>
        <li><strong>Network Security:</strong> Protecting the integrity and usability of network and data.</li>
        <li><strong>Information Security:</strong> Protecting the confidentiality, integrity, and availability of data.</li>
        <li><strong>Application Security:</strong> Protecting applications from threats throughout their lifecycle.</li>
        <li><strong>Operational Security:</strong> Protecting operational processes and systems.</li>
      </ul>
      <img src={image1} alt="Cyber Security" className="cyber-image" />
      <h2>Payments in cyber security</h2>
      <p>Payments in cyber security projects can be structured in various ways. Common models include:</p>
      <ul>
        <li><strong>Fixed Price:</strong> A single lump sum is agreed upon before the project starts.</li>
        <li><strong>Time and Materials:</strong> The client pays for the actual time spent and materials used during development.</li>
        <li><strong>Milestone Payments:</strong> Payments are made at predetermined stages of the project.</li>
        <li><strong>Subscription Model:</strong> Regular payments are made, usually monthly, for ongoing services or access to software.</li>
      </ul>
    </div>
  );
}

export default Cyber;