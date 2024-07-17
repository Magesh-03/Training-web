import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Courses from './components/Courses.jsx';
import CourseDetail from './components/CourseDetail.jsx';
import './App.css';
import Cyber from './components/Cyber.jsx';
import Devops from './components/Devops.jsx';
import Software from './components/Software.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
        <Route path="/cyber" element={<Cyber />} />
        <Route path="/devops" element={< Devops/>} />
        <Route path="/software" element={< Software/>} />
      </Routes>
    </>
  );
};

export default App;





