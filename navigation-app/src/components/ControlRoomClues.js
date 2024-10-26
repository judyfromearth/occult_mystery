import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const ControlRoomClues = () => {
  const navigate = useNavigate();

  return (
    <div className="room-container" style={{ backgroundImage: "url('/images/통제실.png')" }}>
      <h2>통제실 단서</h2>
      <img src="/images/clue12.png" alt="Clue 1" className="clue-image" />
      <img src="/images/clue13.png" alt="Clue 2" className="clue-image" />
      <button onClick={() => navigate('/')}>뒤로 가기</button>
    </div>
  );
};

export default ControlRoomClues;
