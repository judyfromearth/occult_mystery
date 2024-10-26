import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const ExternalRoomClues = () => {
  const navigate = useNavigate();

  return (
    <div className="room-container" style={{ backgroundImage: "url('/images/back.png')" }}>
      <h2>A 사물함 속</h2>
      <img src="/images/doll1.png" alt="Clue 1" className="clue-image" />
      {/* <img src="/images/clue2.png" alt="Clue 2" className="clue-image" />
      <img src="/images/clue3.png" alt="Clue 2" className="clue-image" /> */}
      <button onClick={() => navigate('/')}>쥰과 주디에게 갖다주자</button>
    </div>
  );
};

export default ExternalRoomClues;
