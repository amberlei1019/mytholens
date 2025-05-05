import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 题目数据
const questions = [
  {
    id: 1,
    question: "What motivates your decisions most?",
    options: [
      { text: "Logic and strategy", god: "Athena" },
      { text: "Passion and desire", god: "Ares" },
      { text: "Love and connection", god: "Aphrodite" },
      { text: "A sense of freedom", god: "Hermes" }
    ]
  },
  {
    id: 2,
    question: "In your ideal weekend, you'd be…",
    options: [
      { text: "Composing music or poetry", god: "Apollo" },
      { text: "Exploring the wild outdoors", god: "Artemis" },
      { text: "Hosting a party everyone talks about", god: "Dionysus" },
      { text: "Building or fixing something", god: "Hephaestus" }
    ]
  },
  {
    id: 3,
    question: "How do you deal with conflict?",
    options: [
      { text: "Calm authority — I set the rules", god: "Zeus" },
      { text: "With quiet power and mystery", god: "Hades" },
      { text: "I charm my way around it", god: "Aphrodite" },
      { text: "I face it head-on, no hesitation", god: "Ares" }
    ]
  },
  {
    id: 4,
    question: "What would your friends say is your best trait?",
    options: [
      { text: "Wise and thoughtful", god: "Athena" },
      { text: "Loyal and nurturing", god: "Hestia" },
      { text: "Bold and fearless", god: "Artemis" },
      { text: "Mysterious and deep", god: "Hades" }
    ]
  },
  {
    id: 5,
    question: "If you had a divine power, what would it be?",
    options: [
      { text: "Control over nature and harvest", god: "Demeter" },
      { text: "Traveling instantly anywhere", god: "Hermes" },
      { text: "Inspiring art and light", god: "Apollo" },
      { text: "Shaping fire and metal", god: "Hephaestus" }
    ]
  },
  {
    id: 6,
    question: "What kind of world do you dream of building?",
    options: [
      { text: "Just and fair", god: "Zeus" },
      { text: "Beautiful and full of love", god: "Aphrodite" },
      { text: "Joyful and uninhibited", god: "Dionysus" },
      { text: "Quiet, balanced, and safe", god: "Hestia" }
    ]
  },
  {
    id: 7,
    question: "Which motto speaks to your soul?",
    options: [
      { text: "Knowledge is power.", god: "Athena" },
      { text: "Feel everything, regret nothing.", god: "Dionysus" },
      { text: "Protect what you love.", god: "Demeter" },
      { text: "Live fast, fly far.", god: "Hermes" }
    ]
  }
];

const QuizPage = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({});

  const handleAnswer = (selectedGod) => {
    // 更新得分
    const newScores = {
      ...scores,
      [selectedGod]: (scores[selectedGod] || 0) + 1
    };
    setScores(newScores);

    // 如果还有下一题，继续答题
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // 答题完成，计算结果并导航到结果页
      const finalResult = Object.entries(newScores).reduce((a, b) => 
        (a[1] > b[1] ? a : b))[0];
      navigate('/result', { state: { god: finalResult } });
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* 进度条 */}
        <div style={styles.progressBar}>
          <div style={{...styles.progressFill, width: `${progress}%`}} />
        </div>
        
        {/* 题目 */}
        <h2 style={styles.question}>
          {questions[currentQuestion].question}
        </h2>

        {/* 选项 */}
        <div style={styles.options}>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              style={styles.option}
              onClick={() => handleAnswer(option.god)}
            >
              {option.text}
            </button>
          ))}
        </div>

        {/* 题目计数 */}
        <div style={styles.counter}>
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F0', // 米白色背景
    padding: '20px',
  },
  content: {
    width: '100%',
    maxWidth: '800px',
    padding: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  progressBar: {
    width: '100%',
    height: '8px',
    backgroundColor: '#E0E0E0',
    borderRadius: '4px',
    marginBottom: '40px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#D4AF37', // 金黄色
    borderRadius: '4px',
    transition: 'width 0.3s ease-in-out',
  },
  question: {
    fontSize: '2em',
    color: '#1B1B3A', // 黛蓝色
    marginBottom: '40px',
    fontFamily: 'Cormorant Garamond, serif',
    textAlign: 'center',
    lineHeight: '1.4',
    fontWeight: '600',
  },
  options: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '30px',
  },
  option: {
    padding: '20px',
    fontSize: '1.2em',
    cursor: 'pointer',
    backgroundColor: 'white',
    border: '2px solid #D4AF37', // 金黄色边框
    borderRadius: '5px',
    color: '#1B1B3A', // 黛蓝色文字
    fontFamily: 'Cormorant Garamond, serif',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    WebkitTapHighlightColor: 'transparent', // 移除移动端点击高亮
    textAlign: 'center',
    lineHeight: '1.4',
  },
  counter: {
    textAlign: 'center',
    fontSize: '1.1em',
    color: '#2C3E50', // 灰黑色
    fontFamily: 'Cormorant Garamond, serif',
    marginTop: '30px',
    fontWeight: '500',
  },
};

export default QuizPage;
