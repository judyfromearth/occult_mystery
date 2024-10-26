import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const DiningRoomClues = () => {
  const navigate = useNavigate();

  return (
    <div className="room-container" style={{ backgroundImage: "url('/images/식당.png')" }}>
      <h2>식당 단서</h2>
      <img src="/images/clue14.png" alt="Clue 15" className="clue-image" />
      <img src="/images/clue15.png" alt="Clue 16" className="clue-image" />
      <button onClick={() => navigate('/')}>뒤로 가기</button>
    </div>
  );
};

export default DiningRoomClues;
