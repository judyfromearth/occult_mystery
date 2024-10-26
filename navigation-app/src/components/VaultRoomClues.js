import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const VaultRoomClues = () => {
  const navigate = useNavigate();

  return (
    <div className="room-container" style={{ backgroundImage: "url('/images/back.png')" }}>
      <h2>B 사물함</h2>
      <img src="/images/doll2.png" alt="Clue 3" className="clue-image" />
      {/* <img src="/images/clue5.png" alt="Clue 4" className="clue-image" /> */}
      <button onClick={() => navigate('/')}>쥰과 주디에게 갖다주자</button>
    </div>
  );
};

export default VaultRoomClues;
