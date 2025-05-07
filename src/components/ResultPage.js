import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// 导入神明图片
import zeusImage from '../assets/images/Zeus.png';
import heraImage from '../assets/images/Hera.png';
import poseidonImage from '../assets/images/Poseidon.png';
import demeterImage from '../assets/images/Demeter.png';
import athenaImage from '../assets/images/Athena.png';
import apolloImage from '../assets/images/Apollo.png';
import artemisImage from '../assets/images/Artemis.png';
import aresImage from '../assets/images/Ares.png';
import aphroditeImage from '../assets/images/Aphrodite.png';
import hephaestusImage from '../assets/images/Hephaestus.png';
import hermesImage from '../assets/images/Hermes.png';
import hestiaImage from '../assets/images/Hestia.png';
import hadesImage from '../assets/images/Hades.png';
import dionysusImage from '../assets/images/Dionysus.png';

// 神明图片映射
const godImages = {
  Zeus: zeusImage,
  Hera: heraImage,
  Poseidon: poseidonImage,
  Demeter: demeterImage,
  Athena: athenaImage,
  Apollo: apolloImage,
  Artemis: artemisImage,
  Ares: aresImage,
  Aphrodite: aphroditeImage,
  Hephaestus: hephaestusImage,
  Hermes: hermesImage,
  Hestia: hestiaImage,
  Hades: hadesImage,
  Dionysus: dionysusImage
};

// 神明描述数据
const godDescriptions = {
  Zeus: "You are a natural leader, born to take charge. Your presence commands attention, and your sense of justice shapes the world around you.",
  Hera: "You are loyal, proud, and protective. Your power lies in devotion — to love, to family, and to the balance of relationships.",
  Poseidon: "You have deep emotions and tidal moods. People may not always understand your storms, but you carry oceans of intensity and power.",
  Demeter: "You're a nurturer at heart. Growth, care, and patience define your way of life — you bring warmth to those around you.",
  Athena: "You lead with wisdom and clarity. Strategic and calm, your decisions shape the long game. People trust your insight.",
  Apollo: "You are radiant — creative, balanced, and driven by truth. You inspire others, whether through art, music, or a glowing inner compass.",
  Artemis: "Independent and fierce, you walk your own path. You protect what you love and fearlessly explore your inner wilderness.",
  Ares: "Passionate and intense, you don't back down. Conflict doesn't scare you — it drives you. You're raw, real, and powerful.",
  Aphrodite: "You see beauty in everything — including yourself. Charming, loving, and magnetic, you remind the world that love is a force of nature.",
  Hephaestus: "You build. You create. You turn ideas into reality with patience and skill. Your quiet strength speaks louder than words.",
  Hermes: "Witty, curious, and always on the move — you're a free spirit. You connect people, ideas, and places like no one else.",
  Dionysus: "You feel deeply and live fully. Art, pleasure, chaos — it's all part of your dance. You turn life into a celebration.",
  Hades: "Mysterious and powerful, you understand life's depths. Your quiet strength and wisdom come from embracing both light and shadow.",
  Hestia: "You are the heart of harmony. Your presence brings peace, and your wisdom creates spaces where others feel at home."
};

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const god = location.state?.god || 'Athena'; // 默认值以防数据丢失

  const handleRetakeQuiz = () => {
    navigate('/');
  };

  const handleShare = () => {
    // 在这里可以添加分享功能
    alert('Share feature coming soon!');
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Your Mythological Persona</h1>
        
        <div style={styles.resultCard}>
          <div style={styles.imageContainer}>
            <img 
              src={godImages[god]} 
              alt={god}
              style={styles.godImage}
            />
          </div>

          <h2 style={styles.godName}>{god}</h2>
          
          <p style={styles.description}>
            {godDescriptions[god]}
          </p>

          <div style={styles.buttonContainer}>
            <button 
              style={{...styles.button, ...styles.retakeButton}} 
              onClick={handleRetakeQuiz}
            >
              Retake Quiz
            </button>
            <button 
              style={{...styles.button, ...styles.shareButton}} 
              onClick={handleShare}
            >
              Share Result
            </button>
          </div>
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
    padding: '40px 20px',
  },
  title: {
    fontSize: '2.5em',
    color: '#1B1B3A', // 黛蓝色
    marginBottom: '30px',
    fontFamily: 'Cormorant Garamond, serif',
    textAlign: 'center',
    fontWeight: '600',
  },
  resultCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '10px',
    padding: '40px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  imageContainer: {
    width: '200px',
    height: '200px',
    margin: '0 auto 30px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '3px solid #D4AF37', // 金黄色边框
  },
  godImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  godName: {
    fontSize: '2.2em',
    color: '#D4AF37', // 金黄色
    marginBottom: '20px',
    fontFamily: 'Cormorant Garamond, serif',
    textAlign: 'center',
    fontWeight: '700',
  },
  description: {
    fontSize: '1.3em',
    color: '#2C3E50', // 灰黑色
    marginBottom: '40px',
    fontFamily: 'Cormorant Garamond, serif',
    textAlign: 'center',
    lineHeight: '1.6',
    padding: '0 20px',
    fontStyle: 'italic',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  button: {
    padding: '15px 30px',
    fontSize: '1.1em',
    cursor: 'pointer',
    borderRadius: '5px',
    fontFamily: 'Cormorant Garamond, serif',
    fontWeight: '600',
    letterSpacing: '1px',
    transition: 'all 0.3s ease',
    WebkitTapHighlightColor: 'transparent',
  },
  retakeButton: {
    backgroundColor: '#1B1B3A', // 黛蓝色
    color: '#F5F5F0', // 米白色
    border: 'none',
  },
  shareButton: {
    backgroundColor: '#D4AF37', // 金黄色
    color: '#1B1B3A', // 黛蓝色
    border: 'none',
  },
};

export default ResultPage;
