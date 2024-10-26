import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const BreakRoomClues = () => {
  const navigate = useNavigate();

  return (
    <div className="room-container" style={{ backgroundImage: "url('/images/휴게실.png')" }}>
      <h2>휴게실 단서</h2>
      <img src="/images/clue8.png" alt="Clue 9" className="clue-image" />
      <img src="/images/clue9.png" alt="Clue 10" className="clue-image" />
      <button onClick={() => navigate('/')}>뒤로 가기</button>
    </div>
  );
};

export default BreakRoomClues;
