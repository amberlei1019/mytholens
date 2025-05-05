import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/quiz');
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>MythoLens</h1>
        <div style={styles.divider}>✧</div>
        <p style={styles.description}>Discover Your Mythological Self</p>
        <button 
          style={styles.button} 
          onClick={handleStart}
        >
          Begin Your Journey
        </button>
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
    background: '#F5F5F0', // 米白色背景
    padding: '20px',
  },
  content: {
    textAlign: 'center',
    maxWidth: '600px',
    padding: '60px 40px',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '3.5em',
    color: '#1B1B3A', // 黛蓝色
    marginBottom: '20px',
    fontFamily: 'Cormorant Garamond, serif',
    letterSpacing: '4px',
    fontWeight: '700',
  },
  divider: {
    color: '#D4AF37', // 金黄色
    fontSize: '1.5em',
    margin: '20px 0',
  },
  description: {
    fontSize: '1.4em',
    color: '#2C3E50', // 灰黑色
    marginBottom: '40px',
    fontFamily: 'Playfair Display, serif', // 保持标语使用 Playfair Display
    fontStyle: 'italic',
  },
  button: {
    padding: '15px 40px',
    fontSize: '1.2em',
    cursor: 'pointer',
    backgroundColor: '#D4AF37', // 金黄色背景
    color: '#1B1B3A', // 黛蓝色文字
    border: '2px solid #D4AF37',
    borderRadius: '5px',
    fontFamily: 'Cormorant Garamond, serif',
    letterSpacing: '2px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    WebkitTapHighlightColor: 'transparent', // 移除移动端点击高亮
  },
};

// Add hover effect using JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');
  if (button) {
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#1B1B3A';
      button.style.color = '#D4AF37';
      button.style.borderColor = '#1B1B3A';
      button.style.transform = 'translateY(-2px)';
      button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = '#D4AF37';
      button.style.color = '#1B1B3A';
      button.style.borderColor = '#D4AF37';
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    });
  }
});

export default WelcomePage;
