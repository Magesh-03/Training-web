import React from 'react';
import image3 from '../assets/img/web-development.jpg';
import './Cyber.css';
function Courses() {
  return (
    <div className="cyber-container">
      <h1>Full stack Development</h1>
      
      
    

      <h2>Key Technologies in Web Development</h2>
      <p>Web development relies on a variety of technologies, each serving a specific purpose in the creation and maintenance of websites:</p>
      <ul>
        <li><strong>HTML:</strong> The standard markup language used to create the structure of web pages.</li>
        <li><strong>CSS:</strong> A stylesheet language used to describe the presentation of a document written in HTML or XML.</li>
        <li><strong>JavaScript:</strong> A programming language that enables interactive web pages and is an essential part of web applications.</li>
        <li><strong>Frameworks:</strong> Libraries and frameworks like React, Angular, and Vue.js help streamline the development process by providing pre-written code and tools.</li>
        <li><strong>Backend Technologies:</strong> Languages and frameworks such as Node.js, Django, Ruby on Rails, and PHP that handle server-side logic and database interactions.</li>
        <li><strong>Databases:</strong> Systems like MySQL, PostgreSQL, and MongoDB store and manage data for web applications.</li>
      </ul>

      <h2>Best Practices in Web Development</h2>
      <p>Following best practices in web development ensures that websites are efficient, maintainable, and user-friendly. Some key best practices include:</p>
      <ul>
        <li><strong>Responsive Design:</strong> Ensuring that websites work well on a variety of devices and screen sizes.</li>
        <li><strong>Performance Optimization:</strong> Minimizing load times and improving the overall speed of the website.</li>
        <li><strong>Accessibility:</strong> Making websites usable for people with disabilities.</li>
        <li><strong>SEO:</strong> Optimizing web pages to rank higher in search engine results.</li>
        <li><strong>Security:</strong> Implementing measures to protect against cyber threats and ensure data privacy.</li>
        <li><strong>Version Control:</strong> Using systems like Git to manage changes to the codebase and collaborate with others.</li>
      </ul>
      <img src={image3} alt="Cyber Security" className="cyber-image" />
      <h2>Payment Models in Web development</h2>
      <p>Payments in web development projects can be structured in various ways. Common models include:</p>
      <ul>
        <li><strong>Fixed Price:</strong> A single lump sum is agreed upon before the project starts.</li>
        <li><strong>Time and Materials:</strong> The client pays for the actual time spent and materials used during development.</li>
        <li><strong>Milestone Payments:</strong> Payments are made at predetermined stages of the project.</li>
        <li><strong>Subscription Model:</strong> Regular payments are made, usually monthly, for ongoing services or access to software.</li>
      </ul>
    </div>
  );
}

export default Courses;