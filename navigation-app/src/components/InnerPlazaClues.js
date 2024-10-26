import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const InnerPlazaClues = () => {
  const navigate = useNavigate();

  return (
    <div className="room-container" style={{ backgroundImage: "url('/images/광장.png')" }}>
      <h2>내부 광장 단서</h2>
      <img src="/images/clue10.png" alt="Clue 10" className="clue-image" />
      <img src="/images/clue11.png" alt="Clue 11" className="clue-image" />
      <button onClick={() => navigate('/')}>뒤로 가기</button>
    </div>
  );
};

export default InnerPlazaClues;
