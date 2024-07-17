import React from 'react';
import image4 from '../assets/img/software-development.jpg';
import './Cyber.css';

function Software() {
  return (
    <div className="cyber-container">
      <h1>Software Development</h1>
      <p>Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. It involves a variety of disciplines and practices, from initial requirements gathering to final deployment and maintenance.</p>
      <img src={image4} alt="Software development" className="cyber-image" />
      <h2>Payments in Software Development</h2>
      <p>Payments in software development projects can be structured in various ways. Common models include:</p>
      <ul>
        <li><strong>Fixed Price:</strong> A single lump sum is agreed upon before the project starts.</li>
        <li><strong>Time and Materials:</strong> The client pays for the actual time spent and materials used during development.</li>
        <li><strong>Milestone Payments:</strong> Payments are made at predetermined stages of the project.</li>
        <li><strong>Subscription Model:</strong> Regular payments are made, usually monthly, for ongoing services or access to software.</li>
      </ul>
      
    </div>
  );
}

export default Software;
