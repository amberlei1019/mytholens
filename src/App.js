import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';
import './App.css';

function App() {
  const [result, setResult] = useState({ name: '', description: '' });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage result={result} />} />
      </Routes>
    </Router>
  );
}

export default App;
