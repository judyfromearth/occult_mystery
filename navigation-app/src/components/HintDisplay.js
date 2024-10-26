// HintDisplay.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';

const HintDisplay = () => {
  const { hintCode } = useParams(); // URL 파라미터로 받은 hintCode
  const navigate = useNavigate();

  // 힌트 코드별 이미지 경로 설정
  const hintImages = {
    'P1': '/images/P1.png',
    'H1': '/images/H1.png',
    'P2': '/images/P2.png',
    'H2': '/images/H2.png',
    'H3': '/images/H3.png',
    'H4': '/images/H4.png',
    'H5': '/images/H5.png',
    'P3': '/images/P3.png',
    'P4': '/images/P4.png',
    'P5': '/images/P5.png',
    'L-AB': '/images/L-AB.png',
    // ... 필요에 따라 추가
  };

  // 표시할 이미지 경로 찾기
  const imageSrc = hintImages[hintCode] || '/images/back.png';

  return (
    <div className="room-container" style={{ backgroundImage: "url('/images/back.png')" }}>
      <h2>힌트 {hintCode}</h2>
      <img src={imageSrc} alt={`Hint ${hintCode}`} className="clue-image" />
      <button onClick={() => navigate('/')}>돌아가기</button>
    </div>
  );
};

export default HintDisplay;
